import loadData from './loadData';
import loadDataCustom from './loadDflyCustom';
import {Layout, Panel, Button, Table, List} from 'dashi';
import Dexie from 'dexie';
import defaultDatasets from '../data/datasets.js';
import dragonflyCustom from './model/dragonfly-custom';
import dragonfly from './model/dragonfly';


const newDatasetForm = `
<h3 style="border-bottom: 1px solid #CCC;">Upload Local Files</h3>
<div class="five fields">
<div class="four wide field">
    <input type="text" id="codes-vis-new-dataset-name" placeholder="label for this new dataset" />
</div>
<div class="four wide field" id="codes-vis-model">
    <select class="ui fluid dropdown" id="codes-vis-data-model">
        <option value="">Select a network model</option>
    </select>
</div>
<div class="two wide field">
    <input type="number" id="codes-vis-new-dataset-groups" placeholder="#groups" />
</div>
<div class="three wide field" id="codes-vis-data-upload"></div>
<div class="three wide field" id="codes-vis-data-add"></div>

</div>
`;

export default function dataManagement(arg) {
    var dataManager = {},
        options = arg || {},
        container = options.container,
        oncancel = options.oncancel || function(){},
        onselect = options.onselect || function(){};
  
    var datasets = [];

    var dataPanel = new Panel({
        container: document.getElementById(container),
        padding: 20,
        margin: 20,
        id: "panel-datalist",
        title: "Dataset",
        style: {
            border: 'none',
            height: 'auto'
        },
        header: {height: 0.075, style: {backgroundColor: '#FFF', border: 'none'}}
    });

    var dataList = new Table({
        container: dataPanel.body,
        width: dataPanel.innerWidth,
        cols: ['', 'Dataset ID', 'Topology Model', '#Groups', 'Description', 'Action']
    });

    dataManager.onselect = onselect;
    // dataManager.data = datasets[Object.keys(datasets)[0]];

    var db = new Dexie("codes-vis-datasets");
    db.version(1).stores({
        datasets: 'name,topology,groups,data'
    });

    // db.datasets.clear();
    db.datasets.count().then(function(datasetCount) {
        console.log('total datasets = ', datasetCount)
        if(datasetCount == 0) {
            // datasets = defaultDatasets;
            defaultDatasets.forEach(function(ds, dsi){
                var loadDataset = (ds.topology == 'Dragonfly') ? loadData : loadDataCustom;
                loadDataset(ds).then(function(data){
                    return db.datasets.add({name: ds.name, topology: ds.topology, groups: ds.groups, data: data});
                }).then(function(){
                    return db.datasets.toArray();
                }).then(function(ds){
                    datasets.push(ds[0]);
                    addDataRow(dsi, ds[0]);
                });
            });
        } else {
            db.datasets.toArray().then(function(ds){
                datasets = ds;
                console.log(datasets);
                datasets.forEach(function(dataset, di){
                    addDataRow(di, dataset)
                });
            });
        }

    });




    function addDataRow(id, dataset) {
        dataList.addRow([
            new Button({
                label: '',
                icon: "minus",
                types: ['red', 'tiny'],
                onclick: function() { db.datasets.where("name").equals(dataset.name).delete().then(function(){ window.location.reload(); }) }
            }),
            id, 
            dataset.topology, 
            dataset.groups, 
            // ds.routers, 
            // ds.terminals, 
            dataset.name,
            new Button({
                label: 'Select',
                types: ['primary'],
                onclick: updateDataset.bind(null, id)
            })
        ]);
    }

    function updateDataset(datasetID) {
        if(typeof(datasetID) !== 'number' || datasetID < 0) return;
        var dataset = datasets[datasetID];
        console.log(datasetID, datasets)
        var networkModel = (dataset.topology == 'Dragonfly') ? dragonfly : dragonflyCustom;
        
        // dataset.data.groups = dataset.groups;
        networkModel(dataset.data, {groups: dataset.groups})
        .then(function(data) {
            console.log(data)
            dataManager.data = data;
            dataManager.onselect(data);
        });
    }

    document.getElementById('codes-vis-new-dataset').innerHTML = newDatasetForm;

    var fileTotal = 0;
    var fileLoaded = 0;
    var fileContent = [];
    var fileUploadButton = new Button({
        label: ' Upload Files ',
        types: [ 'center'],
        icon: 'folder open',
        fileInput: {id: 'testFileUpload', onchange:function(evt) {
            var files = evt.target.files;
            var fileList = Object.keys(files).sort(function(a,b) { return b<a;});

            fileTotal = fileList.length;
            
            console.log(files);
            // $('.ui.large.modal').modal('toggle');
            fileList.forEach(function(f, fi){
                var fileName = files[f].name;
                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = function(e) {
                    fileContent[fi] = e.target.result;
                    fileLoaded += 1;
                    if(fileLoaded == fileTotal) {
                        console.log(fileContent);
                    }
                };

                reader.readAsBinaryString(files[f]);
            })
        }},
        container: document.getElementById('codes-vis-data-upload')
    });

    var dataModelSel =  document.getElementById('codes-vis-data-model');

    ['Dragonfly', 'Dragonfly Custom', 'Dragonfly Plus'].forEach(function(model, ii){
        dataModelSel.innerHTML += '<option value="' + model + '">' + model +'</option>';
    });

    new Button({
        label: 'Add dataset',
        types: ['green', 'center'],
        container: document.getElementById('codes-vis-data-add'), 
        onclick: function() {
            var label = $('#codes-vis-new-dataset-name').val();
            var groups = $('#codes-vis-new-dataset-groups').val();
            var model = $('#codes-vis-data-model').val();
            console.log(label, groups, model, fileContent.length)
            if(model && groups && label && fileContent.length) {
                var newDataset = {
                    name: label, 
                    topology: model,
                    groups: groups,
                    data: fileContent
                }
                datasets.push(newDataset);
                console.log(newDataset);
                db.datasets.add(newDataset).then(function(){ console.log('Added new dataset ', label); });
                addDataRow(datasets.length-1, newDataset);
            } else {
                console.log("missing information to add new dataset");
            }
        }
    });

    $('#codes-vis-data-model').dropdown();


    return dataManager;
}
