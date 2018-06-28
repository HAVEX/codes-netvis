import p6 from 'p6';
import p6Solo from 'p6-solo';

const ajax = p6.ajax;
const dsv = p6.parse;
const allocate = p6Solo.allocate;

const TERMINAL_SCHEMA = {
    "lp_id"                 : "int", 
    "terminal_id"           : "int", 
    "data_size"             : "int", 
    "avg_packet_latency"    : "float", 
    "packets_finished"      : "float", 
    "avg_hops"              : "float", 
    "sat_time"              : "float", 
    "min_packet_latency"    : "float", 
    "max_packet_latency"    : "float",
};

const LINK_METRICS = [
    "source_id", 
    "source_type", 
    "dest_id", 
    "dest_type", 
    "link_type", 
    "traffic", 
    "sat_time"
];


export default function loadData(args, callback) {
    const URL =  args.path || args.folder;
    const DATASET = '/data/' + URL;
    const TERMINAL_PER_ROUTER = args.terminals / args.routers;
    const ROUTER_PER_GROUP = args.routers / args.groups;
    const LOCAL_LINK_COUNT = args.localLinkPerRouter || ROUTER_PER_GROUP;
    const GLOBAL_LINK_COUNT = args.globalLinkPerRouter || TERMINAL_PER_ROUTER;
    const GROUP_TOTAL = args.groups || (TERMINAL_PER_ROUTER * ROUTER_PER_GROUP + 1);
    const ROUTER_TOTAL = args.routers || (ROUTER_PER_GROUP * GROUP_TOTAL);

    function calcTargetRouter(group_id, router_id, port) {
        var first = router_id % ROUTER_TOTAL;
        var target_grp = first + port * ROUTER_PER_GROUP;
        if(target_grp == group_id) {
            target_grp = GROUP_TOTAL - 1;
        }
        var my_pos = group_id % ROUTER_PER_GROUP;
        if(group_id == GROUP_TOTAL - 1) {
            my_pos = target_grp % ROUTER_PER_GROUP;
        }
        var target_pos =  target_grp * ROUTER_PER_GROUP + my_pos;
        return target_pos;
    }

    var datafiles = [
            {url: DATASET + "/dragonfly-cn-stats", dataType: "text"},
            {url: DATASET + "/dragonfly-link-stats", dataType: "text"}
        ];

    var numJobs = 1;

    if(args.hasOwnProperty('jobAllocation'))
        datafiles.push({url: DATASET + '/' +args.jobAllocation, dataType: "text"});

    return ajax.getAll(datafiles).then(function(text){
        var terminalMetrics = Object.keys(TERMINAL_SCHEMA);
        var terminals = allocate({
            array: dsv(text[0], " "),
            fields: terminalMetrics,
            types: terminalMetrics.map(m=>TERMINAL_SCHEMA[m]),
            skip: 0
        }).objectArray();
        
        terminals.forEach(function(terminal){
            terminal.job_id = -1;
        });


        var networkLinks = allocate({
            array: dsv(text[1], " "),
            fields: LINK_METRICS,
            types: ["int", "string", "int", "string", "string", "int", "float"],
            skip: 1,
        }).objectArray();


        networkLinks.forEach(function(l, li){
            l.router_id = l.source_id;
            l.router_port = 0;
            l.group_id = Math.floor(l.router_id/ROUTER_PER_GROUP);
            l.router_rank = l.router_id % ROUTER_PER_GROUP;
            l.target_router = l.dest_id;
        });

        var globalLinks = networkLinks.filter(d=>d.link_type == 'G');
        var localLinks = networkLinks.filter(d=>d.link_type == 'L');

        terminals.forEach(function(d) {
            d.router_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER);
            d.router_rank = Math.floor(d.router_id/ROUTER_PER_GROUP);
            d.router_port = d.terminal_id % TERMINAL_PER_ROUTER;
            d.group_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER/ROUTER_PER_GROUP);
            
        });

        if(typeof callback == 'function')
            callback({
                globalLinks: globalLinks,
                localLinks: localLinks,
                terminals: terminals
            });

        console.log(globalLinks, localLinks)

        return new Promise(function(resolve, reject) {
            return resolve({
                globalLinks: globalLinks,
                localLinks: localLinks,
                terminals: terminals,
                numJobs: 1
            });
        })
    })
}

