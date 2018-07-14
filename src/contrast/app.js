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

    var dashboard = new Layout({
        container: container,
        margin: 10,
        cols: [
            {
                width: 0.5,
                id: 'view-left'
            },
            {
                width: 0.5,
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
        
        var config = {
            container: '#'+views[view].id + '-body',
            width: views[view].innerWidth,
            height: views[view].innerHeight,
            padding: 0,
        };


        views[view].sel.onchange = function() {
            var dataset = datasets.filter(d=>d.name == this.value)[0];
            views[view].clear();
            updateView(dataset, config);
        }
    });
    
   
    function updateView(dataset,  config) {

        var networkModel = (dataset.topology == 'Dragonfly') ? dragonfly : dragonflyCustom;
        
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data){
            var dataInput = transform(data);

            circularVis(config, contrastSpec, dataInput);
        })


    }

    return app;
}