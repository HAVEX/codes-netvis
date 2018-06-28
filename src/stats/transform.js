import loadData from "../loadData";
import p6 from "p6";
import {toArray} from "p6-solo";

let cstore = p6.cstore;

const TERMINAL_METRICS = ["lp_id", "terminal_id", "data_size", "avg_packet_latency", "packets_finished", "avg_hops", "sat_time", "job_id", "router_id", "router_rank", "router_port", "group_id"];
const LINK_METRICS = ["group_id", "router_rank", "router_id", "router_port", "sat_time", "traffic", "target_router"];

let selectMetrics = function(data, metrics) {
    return data.map(function(d){
        var result = {};
        metrics.forEach(function(m){
            result[m] = d[m];
        });
        return result;
    });
}

export default function transform(input) {
    var result = {},
        db = {};
    console.log(Object.keys(input.terminals[0]));
    db = cstore({
        size: input.terminals.length,
        keys: TERMINAL_METRICS,
        types: ["int", "int", "int", "float", "float", "float", "float", "int", "int", "int", "int", "int"]
    });
    db.addRows(toArray(selectMetrics(input.terminals, TERMINAL_METRICS)));
    result.terminals = db.data();
    result.terminals.stats = db.stats();
    
    db = cstore({
        size: input.localLinks.length,
        keys: LINK_METRICS,
        types: ["int", "int", "int", "int", "float", "int", "int"],
    });
    
    db.addRows(toArray(selectMetrics(input.localLinks, LINK_METRICS)));
    result.localLinks = db.data();
    result.localLinks.stats = db.stats();

    db = cstore({
        size: input.globalLinks.length,
        keys: LINK_METRICS,
        types: ["int", "int", "int", "int", "float", "int", "int"],
    });

    db.addRows(toArray(selectMetrics(input.globalLinks, LINK_METRICS)));
    result.globalLinks = db.data();
    result.globalLinks.stats = db.stats();
    result.numJobs = input.numJobs;
    return result;
}

