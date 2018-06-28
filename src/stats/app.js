import p6 from 'p6';
import {Layout, Panel} from 'dashi';
import transform from './transform';

var views = {};
var numJobs = 1;

export default function statsApp(arg) {
    var stats = {},
        data = arg.data || null,
        container = arg.container || document.body;

    var board = new Layout({
        container: container,
        margin: 10,
        cols: [
            { id: 'global-links', width: 0.25 },
            { id: 'local-links', width: 0.25 },
            { id: 'terminal-metrics',  width: 0.5},
        ]
    });

    // console.log(data);
    views.terminals = new Panel({
        container: board.cell('terminal-metrics'),
        id: "panel-terminals",
        title: "Terminals",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.localLinks = new Panel({
        container: board.cell('local-links'),
        id: "panel-local-links",
        title: "Local Links",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.globalLinks = new Panel({
        container: board.cell('global-links'),
        id: "panel-global-links",
        title: "Global Links",
        padding: 20,
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    stats.update = function(data) {
        Object.keys(views).forEach(function(vk){
            views[vk].clear();
        })
        var result = transform(data);
        numJobs = result.numJobs;

        visualize(result);
    }

    return stats;
}

function visualize(data) {
    var vis = {};
    vis.localLinks = p6({
        container: views.localLinks.body,
        padding: {left: 70, right: 20, top: 10, bottom: 70},
        viewport: [views.localLinks.innerWidth, views.localLinks.innerHeight],
    })
    .data(data.localLinks)
    .view([
        {
            id: 'plot-stats',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.localLinks.innerWidth,
            height: views.localLinks.innerHeight / 2,
            offset: [0, views.localLinks.innerHeight/2]
        },
        {
            id: "plot-local-links",
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.localLinks.innerWidth,
            height: views.localLinks.innerHeight / 2,
            offset: [0, 0]
        },
    ])
    .visualize({
        id: "plot-local-links",
        mark: "point",
        x: "traffic",
        y: "sat_time",
        color: 'steelblue',
        alpha: 0.5
    })

    vis.localLinks
    .aggregate({
        $bin: {traffic: 8},
        $reduce: {
            total_sat_time : {$sum: "sat_time"},
            link_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'plot-stats',
        mark: "bar",
        x: "traffic",
        // height: "total_sat_time",
        height: "link_count",
        color: 'steelblue'
    });

    vis.globalLinks = p6({
        container: views.globalLinks.body,
        padding: {left: 70, right: 20, top: 10, bottom: 70},
        viewport: [views.globalLinks.innerWidth, views.globalLinks.innerHeight],
    })
    .data(data.globalLinks)
    .view([
        {
            id: 'plot-stats',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.globalLinks.innerWidth,
            height: views.globalLinks.innerHeight / 2,
            offset: [0, views.globalLinks.innerHeight/2]
        },
        {
            id: "plot-global-links",
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.globalLinks.innerWidth,
            height: views.globalLinks.innerHeight / 2,
            offset: [0, 0]
        },
    ])
    .visualize({
        id: "plot-global-links",
        mark: "point",
        x: "traffic",
        y: "sat_time",
        color: 'purple',
        alpha: 0.5
    })
    .aggregate({
        $bin: {traffic: 8},
        // $group: 'traffic',
        $reduce: {
            // total_sat_time : {$sum: "sat_time"},
            total_traffic : {$sum: "traffic"},
            link_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'plot-stats',
        mark: "bar",
        x: "traffic",
        // height: "total_sat_time",
        height: "link_count",
        color: 'purple'
    });

    var terminalColorEncoding = (numJobs == 1) ? 'teal' : 'job_id';

    vis.terminals = p6({
        container: views.terminals.body,
        padding: {left: 70, right: 50, top: 30, bottom: 70},
        viewport: [
            views.terminals.innerWidth,
            views.terminals.innerHeight
        ]
    })
    .data(data.terminals)
    .view([
        {
            id: "terminals",
            padding: {top: 50, bottom: 20, left: 70, right: 50},
            width: views.terminals.innerWidth,
            height: views.terminals.innerHeight / 2,
            offset: [0, 0]
        },
        {
            id: 'avg_packet_latency',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.terminals.innerWidth / 2,
            height: views.terminals.innerHeight / 2 ,
            offset: [0, views.terminals.innerHeight/2]
        },
        {
            id: 'sattime',
            padding: {top: 20, bottom: 70, left: 70, right: 20},
            width: views.terminals.innerWidth / 2,
            height: views.terminals.innerHeight / 2,
            offset: [views.terminals.innerWidth/2, views.terminals.innerHeight/2]
        },
    ])
    .visualize({
        id: "terminals",
        mark: "line",
        y: [ "terminal_id", "avg_packet_latency", "avg_hops", "data_size", "sat_time"],
        brush: {
            unselected: {
                color: "lightgrey"
            }
        },
        color: terminalColorEncoding,
        opacity: 0.2,
    })
    // .visualize({
    //     id: 'avg_packet_latency',
    //     mark: "point",
    //     x: "avg_packet_latency",
    //     y: "avg_hops",
    //     opacity: "auto",
    //     color: 'teal'
    // })
    // .visualize({
    //     id: 'sattime',
    //     mark: "point",
    //     x: "data_size",
    //     y: "sat_time",
    //     color: 'teal',
    //     opacity: "auto",
    // });
    
    vis.terminals
    .aggregate({
        // $group: 'terminal_id',
        $bin: {'avg_packet_latency': 8},
        $reduce: {
            avg_hops: {$avg: "avg_hops"},
            terminal_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'avg_packet_latency',
        mark: "rect",
        x: "avg_packet_latency",
        height: "terminal_count",
        color: 'teal'
    });

    vis.terminals
    .head()
    .aggregate({
        $bin: {'data_size': 8},
        $reduce: {
            Total_sat_time : {$sum: "sat_time"},
            terminal_count: {$count: "*"}
        }
    })
    .visualize({
        id: 'sattime',
        mark: "bar",
        x: "data_size",
        height: "terminal_count",
        color: 'teal'
    });
}
