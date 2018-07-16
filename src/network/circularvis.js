import {arrays, pipeline, aggregate} from 'p6-solo';
import hc5 from 'hc5';

const METRICS = {
    global_links: {
        traffic: '$sum',
        sat_time: '$sum'
    },
    local_links: {
        traffic: '$sum',
        sat_time: '$sum'
    },
    terminals: {
        terminal_id: "$addToSet",
        avg_hops: "$avg",
        sat_time: "$sum",
        data_size: "$sum",
        packets_finished: "$sum",
        avg_packet_latency: "$avg",
    }
};

const LABLE_PREFIX = {
    router_rank: 'router ',
    group_id: 'group '
}

const HIST_METRICS = ['group_id',  'global_traffic', 'local_traffic', 'terminal_traffic', 'global_saturation', 'local_saturation', 'terminal_saturation'];

function getConnections(data, spec) {
    var partTotal = data.length || 0,
        entity = Object.keys(spec)[0] || spec,
        metrics = Object.keys(spec[entity]) || spec[entity] || [],
        aggrLinks = new Array(partTotal),
        aggrNodeMap = [];

    data.forEach(function(d, di){
        aggrLinks[di] = new Array(partTotal);

        for(var dj = 0; dj < partTotal; dj++) {
            aggrLinks[di][dj] = {};
            aggrLinks[di][dj][entity] = [];
        }
        d.routers.forEach(function(item){
            aggrNodeMap[item.router_id] = di;
        });
    })
    data.forEach(function(d, di){
        d.routers.forEach(function(item){
            item[entity].forEach(function(e){
                var src = aggrNodeMap[e.router_id],
                    dest = aggrNodeMap[e.target_router];
                if(!isNaN(src) && !isNaN(dest))
                    aggrLinks[src][dest][entity].push(e);
            });
        })
    })
    aggrLinks.forEach(function(links, li){
        links.forEach(function(link, lj) {
            metrics.forEach(function(metric){
                var opt = spec[entity][metric].slice(1) || 'sum';
                if(typeof arrays[opt] === 'function') {
                    var values = aggrLinks[li][lj][entity].map(function(d){return d[metric]});
                    aggrLinks[li][lj][metric] = arrays[opt].call(null, values) || 0;
                    aggrLinks[li][lj].count = values.length;
                }
            })
        })
    })
    return aggrLinks;
}

export default function circularVis(config, specification, data) {
    var spec =  specification.slice();
    // console.log('SPEC((((()))))', spec);
    // console.log(data);
    var entity = spec[0].project || 'global_links',
        aggrAttr = spec[0].aggregate || 'router_rank',
        aggrSpec = {},
        binMax = spec[0].binMax || 11;

    var createHistogram = (HIST_METRICS.indexOf(aggrAttr) != -1);

    if (spec[0].filter && spec[0].filter.group_id && (spec[0].filter.group_id[1] - spec[0].filter.group_id[0] < binMax)) {
        createHistogram = false;
    }

    var proc = pipeline();

    if(spec[0].filter)
        proc.match(spec[0].filter);

    if( createHistogram) {
        aggrSpec = {};
        aggrSpec.$bin = {};
        aggrSpec.$bin[aggrAttr] = binMax;
    } else {
        aggrSpec = {};
        aggrSpec.$group = aggrAttr;
    }
    aggrSpec.$collect = {routers: {$data: '*'}};
    const visType = ['bar', 'bar', 'heatmap', 'scatter'];

    proc.aggregate(aggrSpec);
    var result = proc.execute(data);

    if(createHistogram) {
        result.forEach(function(res){
            var max = arrays.max(res.routers.map(function(d){
                return (aggrAttr != 'group_id') ? d3.format('.3s')(d[aggrAttr]) : d[aggrAttr];
            }));
            var min = arrays.min(res.routers.map(function(d){
                return (aggrAttr != 'group_id') ? d3.format('.3s')(d[aggrAttr]) : d[aggrAttr];
            }));
            res[aggrAttr] = min + "-" + max;
        })
    }

    var connSpec = {};
    connSpec[entity] = METRICS[entity];
    spec[0].data = getConnections(result, connSpec);
    spec[0].type = 'link';
    spec[0].size = Object.keys(spec[0].vmap).length;
    
    spec.slice(1).forEach(function(s){
        if(!s.vmap) return;
        var entity = s.project,
            aggrAttr = s.aggregate,
            metrics = s.metrics || {$collect: METRICS[entity]};
        metrics.$group = s.aggregate;
        s.data = result.map(function(c, ci){
            var cData = []
            c.routers.forEach(function(router, ri){
                cData = cData.concat(router[entity]);
            });
            
            return (cData.length) ? aggregate(cData, metrics) : [];
        });

        // console.log(s.data);
        s.type = visType[Object.keys(s.vmap).length-1];
        s.size = Object.keys(spec[0].vmap).length;
    })

    if(spec[spec.length-1].type !== 'text') {
        var labels = result.map(function(d){return d[aggrAttr]});
        spec.push({
            type: 'text',
            data: labels,
            size: 1,
            prefix: LABLE_PREFIX[aggrAttr] || ''
        });
    }

    return hc5({
        config: config,
        layers: spec
    });
}