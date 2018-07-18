import dataManagement from "./datamgmt";
import stats from "./stats/app";
import network from "./network/app";
import contrast from "./contrast/app";
import Dexie from 'dexie';
import defaultSpecs from './network/projections';
import defaultDatasets from '../codes-data/datasets.js';

import loadData from './loadData';
import loadDataCustom from './loadDflyCustom';



export default function App() {
    var pageHeaderHeight = $('#page-header').height() + 20;
   
    $("#page-network, #page-contrast")
    .css({
        height: $("body").height() - pageHeaderHeight,
        'margin-top': pageHeaderHeight + 'px'
    });

    $('.ui.large.modal')
        .modal('observeChanges', true).modal('hide');

    // $('#page-network').transition('fade down');
    $('#page-contrast').transition('fade down');
    // $('#page-tseries').transition('fade down');

    $('.ui.sidebar')
        .sidebar({
            transition: 'overlay',
            dimPage: false,
            closable: true
        });

    $('.data-button').click(function(){
        $('.ui.large.modal').modal('show');
    })

    $(".page-menu > a.item").click(function(){
        $(".page-menu > a.item.active").each(function(menuID,i){
            $(this).removeClass('active');
            $(this.getAttribute('href')).transition('fade down');
        })
        var mode = this.getAttribute('href').slice(1);

        $(this).addClass('active');
        $(this.getAttribute('href')).transition('fade down');
        
    });

    $('.ui.large.modal').modal('toggle');

    var boards = {};
    var specifications;


    var db = new Dexie("codes-netvis");
    db.version(1).stores({
        datasets: 'name,topology,groups,data',
        specs: 'name,spec'
    });

    function initApp(datasets, specifications) {
        // boards.stats = stats({
        //     container: 'page-stats',
        // });

        boards.contrast = contrast({
            container: 'page-contrast',
            datasets: datasets,
            specs: specifications
        })


        boards.network = network({
            container: 'page-network',
            specs: specifications,
            onsave: function(spec) {
                db.specs.put(spec);
            }
        });

        boards.ready = function(specifications) {

        }
        // boards.tseries = timeseries({
        //     container: 'page-tseries'
        // })

        // $.getJSON('data/datasets.json', function(data){
        //     console.log(data);
        // });
    
        var dataMgmt = dataManagement({
            container: 'data-list',
            datasets: datasets,
            onDataAdd: function(newDataset) {
                db.datasets.add(newDataset).then(function(){ console.log('Added new dataset ', newDataset.label); });
            },
            onDataDelete: function(datasetName) {
                db.datasets.where("name").equals(datasetName).delete().then(function(){ window.location.reload(); });               
            }
        });

        dataMgmt.onselect = function(data) {
            // console.log(data)
            // boards.stats.update(data);
            boards.network.update(data);
            var visSpec = boards.network.getSpec();
            // boards.network.onUpdate = function(d) {
            //     console.log(d);
            //     boards.tseries.update(d, data, metadata);
            // }
            // boards.tseries.update(visSpec, data, metadata);
            $('.ui.large.modal').modal('toggle');
        };

        // dataMgmt.ready = function(datasets) {
        //     boards.contrast.updateDatasets(datasets);
        // }

    }


    db.specs.count().then(function(specCount) {
        console.log(specCount);
        if(specCount == 0) {
            specifications = defaultSpecs;
            var datasetCount = 0;
            db.specs.bulkPut(defaultSpecs).then(function(spec) {
                defaultDatasets.forEach(function(ds, dsi){
                    var loadDataset = (ds.topology == 'Dragonfly') ? loadData : loadDataCustom;
                    loadDataset(ds).then(function(data){
                        return db.datasets.add({name: ds.name, topology: ds.topology, groups: ds.groups, data: data});
                    }).then(function(){
                        return db.datasets.toArray();
                    }).then(function(ds){
                        datasetCount++;
                        if(datasetCount == defaultDatasets.length) window.location.reload();
                    });
                });
            })
        } else {
            db.specs.toArray().then(function(specs){
                specifications = specs;
                console.log(specs)
                return db.datasets.toArray();
            })
            .then(function(datasets){
                initApp(datasets, specifications)
            })
        }
    })

    // $('.ui.dropdown').dropdown();
    // $('.ui.checkbox').checkbox();
}
