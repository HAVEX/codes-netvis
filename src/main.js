import dataManagement from "./datamgmt";
import stats from "./stats/app";
import network from "./network/app";
import datasets from '../data/datasets.js';

export default function App() {
    let pageHeaderHeight = $('#page-header').height() + 20;

    $("#page-network, #page-stats, #page-tseries")
    .css({
        height: $("body").height() - pageHeaderHeight,
        'margin-top': pageHeaderHeight + 'px'
    });

    $('.ui.large.modal')
        .modal('observeChanges', true).modal('hide');

    $('#page-network').transition('fade down');
    $('#page-tseries').transition('fade down');

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

    let boards = {};

    boards.stats = stats({
        container: 'page-stats',
    });

    boards.network = network({
        container: 'page-network',
        onupdate: function(spec) {

        }
    });

    // boards.tseries = timeseries({
    //     container: 'page-tseries'
    // })

    // $.getJSON('data/datasets.json', function(data){
    //     console.log(data);
    // });

    dataManagement({
        container: 'data-list',
        datasets: datasets,
        onselect: function(data, metadata) {
            // console.log(data)
            boards.stats.update(data);
            boards.network.update(data);
            var visSpec = boards.network.getSpec();
            boards.network.onUpdate = function(d) {
                console.log(d);
                boards.tseries.update(d, data, metadata);
            }
            // boards.tseries.update(visSpec, data, metadata);
            $('.ui.large.modal').modal('toggle');
        },
        oncancel: function(d) {
            $('.ui.large.modal').modal('toggle');
        }
    });
    // $('.ui.dropdown').dropdown();
    // $('.ui.checkbox').checkbox();
}
