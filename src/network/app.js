import {Layout, Panel, List, Button, Icon} from 'dashi';
import transform from './transform';
import circularVis from './circularvis';
import gui from'./gui';

import p6Solo from 'p6-solo';

const getStats = p6Solo.stats;


export default function netApp(arg) {
    var specifications = arg.specs || [];

    var network = {},
        data = arg.data|| null,
        onUpdate = arg.onupdate || arg.onUpdate || function() {},
        container = arg.container || document.body,
        onSave = arg.onsave || function() {};

    var dataStats = {};

    var layoutMain = new Layout({
        container: container,
        margin: 10,
        cols: [
            {
                width: 0.55,
                id: 'network-view'
            },
            {
                width: 0.45,
                id: 'spec-view'
            },
            // {
            //     width: 0.20,
            //     id: 'data-info',
            // },
        ]
    });

    network.ready = function() {};

    var views = {},
        visSpec = [];

    // if(typeof data !== undefined)
    //     data = transform(data);

    views.network = new Panel({
        container: layoutMain.cell('network-view'),
        id: "panel-network",
        title: "Network Analysis",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    views.editor = new Panel({
        container: layoutMain.cell('spec-view'),
        id: "panel-spec",
        title: "Specification",
        header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    });

    // views.info = new Panel({
    //     container: layoutMain.cell('spec-view'),
    //     id: "panel-info",
    //     title: "Information",
    //     header: {height: 0.05, style: {backgroundColor: '#F4F4F4'}}
    // });

    var editorDiv = document.createElement('div');
    editorDiv.setAttribute('id', 'spec-editor');
    editorDiv.style.width = "100%";
    editorDiv.style.height = "100%";
    views.editor.append(editorDiv);

    var guiDiv = document.createElement('div');
    guiDiv.setAttribute('id', 'spec-gui');
    guiDiv.style.width = "100%";
    guiDiv.style.height = views.editor.innerHeight + 'px';
    guiDiv.style.overflow = "scroll";
    // guiDiv.innerHTML = guiHTML;
    views.editor.append(guiDiv);

    editorDiv.style.display = 'none';
    guiDiv.style.display = 'block';

    var projectionSelection = document.createElement('select');

    var specGUI = gui({
        container: 'spec-gui',
        stats: dataStats,
        onsave: function(spec) { 
            onSave(spec);
            specifications.push(spec);
            projectionSelection.innerHTML += '<option value="' + spec.name + '" selected="selected">' + spec.name + '</option>';
        }
    });

    var showEditor = false;
    // ace.config.set("packaged", true)
    // ace.config.set("basePath", require.toUrl("ace"))
    var editor = ace.edit("spec-editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/json");
    editor.$blockScrolling = Infinity;
    editor.setOptions({
        fontSize: "12pt"
    });

    listSpecs();

    function listSpecs() {
        visSpec = specifications[0].spec;
        specGUI.create(visSpec);
        editor.session.insert({row:0, column: 0}, JSON.stringify(visSpec, null, 2));
    
        projectionSelection.style.marginRight = '5px';
        specifications.forEach(function(spec){
            var option = document.createElement('option');
            option.value = spec.name;
            option.innerHTML = spec.name;
            projectionSelection.appendChild(option);
        })
    
        projectionSelection.onchange = function(){
            var sel = this.value;
            var newSpec = specifications.filter(d=>d.name == sel)[0].spec;

            specGUI.create(newSpec);

            editor.setValue("");
            editor.session.insert({row:0, column: 0}, JSON.stringify(newSpec, null, 2));
        };
    
        views.editor.header.append('<span>Template: </span>');
        views.editor.header.append(projectionSelection);

        views.editor.header.append(new Icon({
            types: ['edit outline', 'large'],
            onclick: function(){
    
                if(showEditor) {
                    visSpec = JSON.parse(editor.getValue());
                    specGUI.create(visSpec);
                    this.className = this.className.replace(' blue', '');
                } else {
                    visSpec = specGUI.getSpec(JSON.parse(editor.getValue()));
                    editor.setValue("");
                    editor.session.insert({row:0, column: 0}, JSON.stringify(visSpec, null, 2));
    
                    this.className += ' blue';
                }
    
                showEditor = !showEditor;
                editorDiv.style.display = (showEditor) ? 'block': 'none';
                guiDiv.style.display = (showEditor) ? 'none': 'block';
            }
        }))

        var updateButton = new Button({
            label: 'Update',
            types: ['green', 'xs', 'icon', 'refresh'],
            size: '0.65em',
            onclick: function() {
            if(showEditor)
                visSpec = JSON.parse(editor.getValue());
            else
                visSpec = specGUI.getSpec(visSpec);

            views.network.clear();
            circularVis(config, visSpec, data);
            network.onUpdate(visSpec);
            }
        });
        views.editor.header.append(updateButton);

        network.ready(specifications);
    }

    var config = {
        container: '#panel-network-body',
        width: views.network.innerWidth,
        height:  views.network.innerHeight,
        padding: 0,
        legend: true
    };
    
    network.update = function(input) {
        data = transform(input);
        dataStats = getStats(data, Object.keys(data[0]).filter(k=>!Array.isArray(data[0][k])));
        specGUI.updateStats(dataStats);
        views.network.clear();
        visSpec = JSON.parse(editor.getValue());
        circularVis(config, visSpec, data);
    };

    network.getSpec = function() {
        return visSpec;
    };

    network.onUpdate = onUpdate;

    network.getSpecifications = function() {
        return specifications;
    };

    return network;
}