import p6Solo from 'p6-solo';

const ajax = p6.ajax;
const dsv = p6.parse;
const allocate = p6Solo.allocate;

const TERMINAL_METRICS = ["lp_id", "terminal_id", "data_size", "avg_packet_latency", "packets_finished", "avg_hops", "sat_time"];
const LINK_METRICS = ["group_id", "router_id", "router_port", "sat_time", "traffic"];



export default function(data, metadata) {
    var numJobs = 1;
   
    var terminals = allocate({
        array: dsv(data[0], " "),
        fields: TERMINAL_METRICS,
        types: ["int", "int", "int", "float", "float", "float", "float"],
        skip: 1
    }).objectArray();
    
    terminals.forEach(function(terminal){
        terminal.job_id = -1;
    });
    

    if(data.length > 3 && data[3].length > 0) {
        var jobs = data[3].split("\n").map(function(j){return j.split(" ")});
        jobs.pop();

        jobs.forEach(function(job, jobId){
            job.forEach(function(nodeId){
                var nid = parseInt(nodeId);
                if(nid >= 0)
                    terminals[nid].job_id = jobId;
            });
        });
        numJobs = jobs.length;
    }

    const GROUP_TOTAL = metadata.groups;
    const TERMINAL_TOTAL = data[0].split('\n').length - 2; 
    const ROUTER_TOTAL = data[1].split('\n').length - 2;
    const TERMINAL_PER_ROUTER = Math.round(TERMINAL_TOTAL / ROUTER_TOTAL);
    const ROUTER_PER_GROUP =Math.round( ROUTER_TOTAL / GROUP_TOTAL);
    const LOCAL_LINK_COUNT =  ROUTER_PER_GROUP;
    const GLOBAL_LINK_COUNT = TERMINAL_PER_ROUTER;
    
    var busytime = allocate({
        array: dsv(data[1], " "),
        fields: ["lp_id", "group_id", "router_id", "local_sat_time", "global_sat_time"],
        types: ["int", "int", "int", "veci"+LOCAL_LINK_COUNT, "veci"+GLOBAL_LINK_COUNT],
        skip: 2,
    }).objectArray();

    var traffic = allocate({
        array: dsv(data[2], " "),
        fields: ["lp_id", "group_id", "router_id", "local_traffic", "global_traffic"],
        types: ["int", "int", "int", "veci"+LOCAL_LINK_COUNT, "veci"+GLOBAL_LINK_COUNT],
        skip: 2,
    }).objectArray();

    var localLinks = [],
        globalLinks = [];

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

    busytime.forEach(function(l, li){
        l.local_sat_time.forEach(function(b, bi){
            var link = {};
            link.group_id = l.group_id;
            link.router_rank = l.router_id;
            link.router_id = l.group_id * ROUTER_PER_GROUP + l.router_id;
            link.router_port = bi;
            link.sat_time = b;
            link.traffic = traffic[li].local_traffic[bi];
            link.target_router = l.group_id * ROUTER_PER_GROUP + bi;
            localLinks.push(link);
        });

        l.global_sat_time.forEach(function(g, gi){
            var link = {};
            link.group_id = l.group_id;
            link.router_rank = l.router_id;
            link.router_id = l.group_id * ROUTER_PER_GROUP + l.router_id;
            link.router_port = gi;
            link.sat_time = g;
            link.traffic = traffic[li].global_traffic[gi];
            link.target_router = calcTargetRouter(link.group_id, link.router_rank, link.router_port);
            globalLinks.push(link);
        });
    });

    terminals.forEach(function(d) {
        d.router_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER);
        d.router_rank = Math.floor(d.router_id/ROUTER_PER_GROUP);
        d.router_port = d.terminal_id % TERMINAL_PER_ROUTER;
        d.group_id = Math.floor(d.terminal_id/TERMINAL_PER_ROUTER/ROUTER_PER_GROUP);
    });

    var dataModel = {
        globalLinks: globalLinks,
        localLinks: localLinks,
        terminals: terminals,
        numJobs: numJobs
    }

    if(typeof callback == 'function') {
        return callback(dataModel);
    } else {
        return new Promise(function(resolve, reject) {
            return resolve(dataModel);
        })
    }

}