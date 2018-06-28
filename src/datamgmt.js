import loadData from './loadData';
import loadDataCustom from './loadDflyCustom';
import {Layout, Panel, Button, Table, List} from 'dashi';

let selectedDatasetId = 2;

export default function dataManagement(arg) {
    var dataManager = {},
        options = arg || {},
        container = options.container,
        datasets = options.datasets || [],
        oncancel = options.oncancel || function(){},
        onselect = options.onselect || function(){};

    console.log(datasets);
    dataManager.onselect = onselect;
    dataManager.data = datasets[Object.keys(datasets)[0]];

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
        cols: ['Dataset ID', 'Topology Model', '#Groups', '#Routers', "#Terminals", 'Description', 'Action']
    });

    datasets.forEach(function(ds, di){
        dataList.addRow([
            di, 
            ds.topology, 
            ds.groups, 
            ds.routers, 
            ds.terminals, 
            ds.tag || ds.title,
            new Button({
                label: 'Select',
                types: ['primary'],
                onclick: updateDataset.bind(null, di)
            })
        ]);
    });

    function updateDataset(dsID) {
        var datasetID = dsID || 0;
        var dataset = datasets[datasetID];
        console.log('selected dataset: ', dataset);
        if(dataset.topology == 'Dragonfly') {
            loadData(datasets[datasetID])
            .then(function(data) {
                dataManager.data = data;
                dataManager.onselect(data, datasets[datasetID]);
            });
        } else {
            loadDataCustom(datasets[datasetID])
            .then(function(data) {
                dataManager.data = data;
                dataManager.onselect(data, datasets[datasetID]);
            });
        }

    }

    var actionDiv = document.createElement('div');
    actionDiv.className = "actions";

    var fileUploadButton = new Button({
        label: ' Open Files ',
        types: ['primary', 'center'],
        icon: 'folder open',
        fileInput: {id: 'testFileUpload', onchange:function() {}}
    });

    actionDiv.append(fileUploadButton);

    actionDiv.append(new Button({
        label: 'Cancel',
        types: ['orange'],
        onclick: oncancel
    }))
    dataPanel.append(actionDiv);

    updateDataset();

    return dataManager;
}
