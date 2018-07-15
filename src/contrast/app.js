import {Layout, Panel, List, Button, Icon} from 'dashi';
import transform from '../network/transform';
import circularVis from '../network/circularvis';
import dragonflyCustom from '../model/dragonfly-custom';
import dragonfly from '../model/dragonfly';


export default function netApp(arg) {

    var app = {};
    var container = arg.container;
    var datasets = arg.datasets || [];
    var specs = arg.specs || [];

    var contrastSpec = specs[0].spec;
    var dataset = {
        left: [],
        right: []
    };

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
                id: 'view-center',
            },
            {
                width: 0.4,
                id: 'view-right'
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
        container: dashboard.cell('view-center'),
        id: "panel-center",
        title: "Specifications",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}},
        style: {
            padding: '10px'
        }
    });

    var specList = new List({
        types: ['relaxed', 'divided', 'selection', 'single'],
        selectedColor: 'steelblue',
        onselect: function(specId) {
            contrastSpec = specs[specId].spec;
            updateView(dataset.left, views.left);
            updateView(dataset.right, views.right);
        }
    });

    specs.forEach(function(spec){
        specList.append({header: spec.name});
    })
    

    centerPanel.append(specList)


    Object.keys(views).forEach(function(view){
        views[view].sel = document.createElement('select');
        views[view].sel.innerHTML = '<option> --- </option>';
        views[view].sel.style.marginRight = '5px';
        datasets.forEach(function(dataset){
            var option = document.createElement('option');
            option.value = dataset.name;
            option.innerHTML = dataset.name;
            views[view].sel.appendChild(option);
        });

        views[view].header.append('<span>Dataset: </span>');
        views[view].header.append(views[view].sel);
        
        views[view].sel.onchange = function() {
            dataset[view] = datasets.filter(d=>d.name == this.value)[0];
            updateView(dataset[view], views[view]);
        }
    });
    
   
    function updateView(dataset, container) {
        if(!dataset.data) return;
        var config = {
            container: '#'+container.id + '-body',
            width: container.innerWidth,
            height: container.innerHeight,
            padding: 0,
        };
        container.clear();
        var networkModel = (dataset.topology == 'Dragonfly') ? dragonfly : dragonflyCustom;
        
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data){
            var dataInput = transform(data);

            circularVis(config, contrastSpec, dataInput);
        })


    }

    return app;
}