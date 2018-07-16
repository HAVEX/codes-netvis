import {Layout, Panel, List, Button, Icon} from 'dashi';
import transform from '../network/transform';
import circularVis from '../network/circularvis';
import dragonflyCustom from '../model/dragonfly-custom';
import dragonfly from '../model/dragonfly';

export default function netApp(arg) {
    var app = {};
    var container = arg.container;
    var datasetList = arg.datasets || [];
    var specs = arg.specs || [];
    var colorDomains = [];

    var contrastSpec = specs[0].spec;
    var datasets = {
        left: [],
        right: []
    };

    var vis = {};
    var domains = {};

    var dashboard = new Layout({
        container: container,
        margin: 10,
        cols: [
            {
                width: 0.4,
                id: 'view-left'
            },
            {
                width: 0.2,
                id: 'view-center'
            },
            {
                width: 0.4,
                id: 'view-right'
            }
        ]
    });

    var midCol = new Layout({
        container: dashboard.cell('view-center'),
        margin: 0,
        rows: [
            {
                height: 0.7,
                id: 'col-top'
            },
            {
                height: 0.3,
                id: 'col-bottom'
            }
        ]
    });

    var views = {};
    views.left = new Panel({
        container: dashboard.cell('view-left'),
        id: "panel-left",
        title: "",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });
    views.right = new Panel({
        container: dashboard.cell('view-right'),
        id: "panel-right",
        title: "",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    var centerPanel = new Panel({
        container: midCol.cell('col-top'),
        id: "panel-specs",
        title: "Specifications",
        header: {height: 0.05 / 0.7, style: {backgroundColor: '#F4F4F4'}},
        style: {
            padding: '10px'
        }
    });

    var legendPanel = new Panel({
        container: midCol.cell('col-bottom'),
        id: "panel-legend",
        style: {
            padding: '10px'
        }
    });

    var specList = new List({
        types: ['relaxed', 'divided', 'selection', 'single'],
        selectedColor: 'steelblue',
        onselect: function(specId) {
            contrastSpec = specs[specId].spec;
            updateView('left');
            updateView('right');
        }
    });

    specs.forEach(function(spec){
        specList.append({header: spec.name});
    });
    
    centerPanel.append(specList);
    Object.keys(views).forEach(function(side){
        views[side].sel = document.createElement('select');
        views[side].sel.innerHTML = '<option> --- </option>';
        views[side].sel.style.marginRight = '5px';
        datasetList.forEach(function(dataset){
            var option = document.createElement('option');
            option.value = dataset.name;
            option.innerHTML = dataset.name;
            views[side].sel.appendChild(option);
        });

        views[side].header.append('<span>Dataset: </span>');
        views[side].header.append(views[side].sel);
        
        views[side].sel.onchange = function() {
            datasets[side] = datasetList.filter(d=>d.name == this.value)[0];
            updateView(side);
        }
    });
    
    function updateView(side) {
        var dataset = datasets[side];
        var view = views[side];
        if(!dataset.data) return;
        var config = {
            container: '#'+ view.id + '-body',
            width: view.innerWidth,
            height: view.innerHeight,
            padding: 0,
            // legend: true
        };
        view.clear();
        var networkModel = (dataset.topology == 'Dragonfly') ? dragonfly : dragonflyCustom;
        
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data){
            var dataInput = transform(data);
            // if(colorDomains.length > 0) {
            //     config.colorDomains = colorDomains;
            // }

            vis[side] = circularVis(config, contrastSpec, dataInput);
            domains[side] = vis[side].map(v=>v.colorDomain);
            var legendConfigs = {
                container: '#panel-legend-body',
                width: legendPanel.innerWidth,
                height: legendPanel.innerHeight,
                padding: {left: 35, right: 35, top: 50, bottom: 0},
            };

            if(vis.left !== undefined && vis.right !== undefined) {
                var leftDomains = domains.left;
                var rightDomains = domains.right;

                for(var i = 0; i < leftDomains.length-1; i++) {
                    colorDomains[i] = [
                        Math.min(leftDomains[i][0], rightDomains[i][0]),
                        Math.max(leftDomains[i][1], rightDomains[i][1])
                    ];
                }
                legendConfigs.colorDomains = colorDomains;

                vis.left.forEach(function(v, vi){
                    if(typeof v.updateColor == 'function')
                        v.updateColor(colorDomains[vi]);
                })
                vis.right.forEach(function(v, vi){
                    if(typeof v.updateColor == 'function')
                        v.updateColor(colorDomains[vi]);
                })


            }

            legendPanel.clear();
            vis[side].createColorLegend(legendConfigs);

        });
    }

    return app;
}