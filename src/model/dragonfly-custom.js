import p6Solo from 'p6-solo';

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
const allocate = p6Solo.allocate;
const dsv = p6.parse;


export default function(data, metadata) {
    var terminalMetrics = Object.keys(TERMINAL_SCHEMA);
    var terminals = allocate({
        array: dsv(data[0], " "),
        fields: terminalMetrics,
        types: terminalMetrics.map(m=>TERMINAL_SCHEMA[m]),
        skip: 0
    }).objectArray();
    
    terminals.forEach(function(terminal){
        terminal.job_id = -1;
    });

    var networkLinks = allocate({
        array: dsv(data[1], " "),
        fields: LINK_METRICS,
        types: ["int", "string", "int", "string", "string", "int", "float"],
        skip: 1,
    }).objectArray();

    const GROUP_TOTAL = metadata.groups;
    const TERMINAL_TOTAL = Math.max(...terminals.map(d=>d.terminal_id)) + 1;
    const ROUTER_TOTAL = Math.max(...networkLinks.filter(d=>d.source_type == 'R').map(d=>d.source_id)) + 1;
    const TERMINAL_PER_ROUTER = TERMINAL_TOTAL / ROUTER_TOTAL;
    const ROUTER_PER_GROUP = ROUTER_TOTAL / GROUP_TOTAL;

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

    var dataModel = {
        globalLinks: globalLinks,
        localLinks: localLinks,
        terminals: terminals,
        numJobs: 1
    };

    if(typeof callback == 'function') {
        return callback(dataModel);
    } else {
        return new Promise(function(resolve, reject) {
            return resolve(dataModel);
        })
    }
}