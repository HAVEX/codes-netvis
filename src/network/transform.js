import {arrays, join, pipeline} from 'p6-solo';

export default function transform(inputData) {
    var terminals = pipeline().aggregate({
        $group: 'router_id',
        $reduce: {
            terminals: {$data: '*'}
        }
    })
    .execute(inputData.terminals);

    var localLinks = pipeline().aggregate({
        $group: 'router_id',
        $reduce: {
            router_rank: {$first: 'router_rank'},
            group_id: {$first: 'group_id'},
            local_links: {$data: '*'}
        }
    })
    .execute(inputData.localLinks);

    var globalLinks = pipeline().aggregate({
        $group: 'router_id',
        $reduce: {
            router_rank: {$first: 'router_rank'},
            group_id: {$first: 'group_id'},
            global_links: {$data: '*'}
        }
    })
    .execute(inputData.globalLinks);
    console.log(terminals, globalLinks);
    var routers = join(terminals, localLinks);

    if(globalLinks.length == routers.length) {
        routers = join(routers, globalLinks);
    }

    routers.forEach(function(router, ri){
        router.local_traffic = arrays.sum(router.local_links.map((d)=>(d.traffic)));
        router.local_saturation = arrays.sum(router.local_links.map((d)=>(d.sat_time)));
        router.terminal_traffic = arrays.sum(router.terminals.map((d)=>(d.data_size)));
        router.terminal_saturation = arrays.sum(router.terminals.map((d)=>(d.busy_time)));
        router.job_id = router.terminals[0].job_id;
        if(!router.hasOwnProperty('global_links')) {
            router.global_links = inputData.globalLinks.filter(d=>d.router_id == ri);
        } 
        router.global_traffic = arrays.sum(router.global_links.map((d)=>(d.traffic))) || 0;
        router.global_saturation = arrays.sum(router.global_links.map((d)=>(d.sat_time))) || 0;
        router.global_links.forEach(function(link, li){
            link.router_port = li;
        });

        router.local_links.forEach(function(link, li){
            link.router_port = li;
        });

    });

    // console.log(routers)
    return routers;
}