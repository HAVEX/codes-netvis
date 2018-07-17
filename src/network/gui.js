import {colorLegend} from 'hc5';
import colorbrewer from 'colorbrewer';
import * as d3ColorChromatic from 'd3-scale-chromatic';

var template = '' +
'<div id="specUI" class="ui form" style=" padding: 20px;">' +
  '<div style="width: 100%; background: #EEE; padding: 20px;">' +
    '<div id="transform-attributes">' +
      '<label>Aggregate by</label>' +
    '</div>' +
    '<div id="network-filter-slider" style="margin: 10px 0;"></div>' +
    '<div>' + 
     '<label id="network-filter-attribute"></label>' + 
     '<span id="network-filter-range" style="border:0; color:#f6931f; font-weight:bold;"> </span>'+
    '</div>' +
   '</div>' +
    // '<div class="four wide field">' +
    //   '<label>BinMax</label>' +
    //   '<input type="number" value="7" disable="" id="aggregation-binMax">' +
    // '</div>' +
  '<table class="ui very basic celled table">' +
    '<thead>' +
      '<tr>' +
        '<th width="120">Entity</th>' +
        '<th>Metrics</th>' +
        '<th>Color Schemes</th>' +
      '</tr>' +
    '</thead>' +
    '<tbody id="specTable">' +
    '</tbody>' +
  '</table>' +

  '<div class="fields">' +
    '<div class="eight wide field" style="text-align: right;">' +
      '<button id="add-layer" class="ui button primary xs">Add Layer</button>' +
      '<button id="remove-layer" class="ui button red xs">Remove Layer</button>' +
    '</div>' +
    '<div class="six wide field ui action input">' +
      '<input type="text" id="spec-name" placeholder="Name this config...">' +
      '<button id="save-spec" class="ui button primary xs">Save</button>' +
    '</div>' +
  '</div>' +
'</div>';

const AGGR_METRICS = [
    'group_id',
    'router_rank',
    'job_id',
    'global_traffic',
    'local_traffic',
    'terminal_traffic',
    'global_saturation',
    'local_saturation'
];

var colorSchemes = [
    ["#eee", 'steelblue'],
    ["#eee", 'purple'],
    ["#eee", 'teal'],
    ["steelblue", 'red']
].concat(
    Object.keys(d3ColorChromatic).filter(function(f){
        return f.match('interpolate');
    }).map(function(scheme){
        return scheme.replace('interpolate', '');
    })
)

// console.log(colorSchemes);

var entities = [
    'global_links',
    'local_links',
    'terminals'
];

const METRICS_NULL = ' --- ';

var linkMetrics = [
    'traffic',
    'sat_time',
    'traffic + sat_time'
];

var terminalMetrics = [
    'avg_packet_latency',
    'avg_hops',
    'data_size',
    'sat_time',
    'router_port',
    'router_rank',
    'job_id'
];

var metrics = {
    local_links: linkMetrics,
    global_links: linkMetrics,
    terminals: terminalMetrics
};

export default function GUI(arg) {

    var layers = [];

    var options = arg || {},
        container = options.container,
        stats = options.stats,
        onSave = options.onsave || options.onSave || function(){};

    var savedSpec;

    $('#'+container).html(template);

    var aggrAttr = 'router_rank';
    var aggrAttrSelection = $('<select/>').addClass('ui fluid dropdown');
    $('#transform-attributes').append(aggrAttrSelection);

    function updateSelection(sel, options, selectedAttr) {
        var index = (options.indexOf(selectedAttr) > -1) ? options.indexOf(selectedAttr) : 0;
        sel.html('');
        sel.dropdown();
        options.forEach(function(opt, ii){
            var item = $('<option/>');
            if(ii == index) {
                item.addClass('active selected');
            } 
            sel.append(item.attr('value', opt).text(opt));
        })
        sel.dropdown('set value', options[index]);
        sel.dropdown('set text', options[index]);
        sel.dropdown('refresh');
    }

    function createLayer(arg) {
        var spec = arg || {},
            vmap = spec.vmap || {},
            projectEntity = spec.project || 'global_links',
            colorAttr = vmap.color || null,
            xAttr = vmap.x || null,
            yAttr = vmap.y || null,
            colorMap = spec.colors || ["steelblue", "red"],
            aggregate = spec.aggregate || false;

        if(arg && !spec.vmap) return;

        if(!spec.aggregate) aggregate = true;

        var tr = $('<tr/>'),
            td1 = $('<td/>'),
            td2 = $('<td/>'),
            td3 = $('<td/>'),
            projection = $('<select/>').addClass('ui fluid dropdown'),
            field1 = $('<div/>').addClass('field');


        var field2 = $('<div/>').addClass('field'),
            encoding = $('<select/>').addClass('ui fluid dropdown');


        field2.append(encoding);

        updateDropDown(projectEntity);
        function updateDropDown(en) {
            updateSelection(encoding, metrics[en], colorAttr);
        }

        field1.append(projection);
        td1.append(field1);
        td2.append(field2);

        var colorMenuDiv = $('<div/>')
            .addClass('ui fluid selection dropdown')
            .css('padding', '10px 4px'),
            colorMenu = $('<div/>').addClass('menu'),
            colorDisplay = $('<div/>').addClass('default text');

        colorMenuDiv.append($('<i/>').addClass('dropdown icon'));
        colorMenuDiv.append(colorDisplay);
        colorMenuDiv.append(colorMenu);

        colorDisplay.append(
            colorLegend({
                width: 120,
                height: 20,
                padding: {left: 0, right: 0, top: 0, bottom: 0},
                colors: colorMap,
                // container: item.get(0),
                nolabel: true
            }).node()
        );

        colorSchemes.forEach(function(cs){
            var item = $('<div/>').addClass('item').attr('data-value', cs);

            var colorGardient = colorLegend({
                width: 160,
                height: 20,
                padding: {left: 0, right: 0, top: 0, bottom: 0},
                colors: cs,
                // container: item.get(0),
                nolabel: true
            })

            if(JSON.stringify(cs) == JSON.stringify(colorMap)) {
                // colorDisplay.append(colorGardient.node());
                item.addClass('active selected');
            }

            item.append(colorGardient.node());
            colorMenu.append(item);

        })
        colorMenuDiv.dropdown();

        td3.append(colorMenuDiv);

        tr.append(td1, td2, td3);
        $('#specTable').append(tr);

        updateSelection(projection, entities, projectEntity);

        projection.change(function() {
            var v = projection.val();
            updateDropDown(v);
        })
        function getLayerSpec(s) {
            var spec = s || {},
                visualEncoding = encoding.val(),
                colorScheme = colorMenuDiv.dropdown('get value').split(','),
                vmap = {};

            if(colorScheme.length == 1) colorScheme = colorScheme[0];
            if( visualEncoding.includes(' + ') ) {
                var encodings = visualEncoding.split(' + ');
                vmap.size = encodings[0];
                vmap.color = encodings[1];
            } else {
                vmap.color = visualEncoding;
            }

            // if(xAttr != METRICS_NULL && xAttr !== null) vmap.x = xAttr;
            // if(yAttr != METRICS_NULL && yAttr !== null) vmap.y = yAttr;

            if(aggregate && !spec.hasOwnProperty('aggregate')) {
                spec.aggregate = (aggrAttr == 'router_rank')
                    ? 'router_port'
                    : 'router_rank';

                // if(id === 0) spec.aggregate = aggrAttr;
            }

            spec.project = projection.val();
            spec.vmap = vmap;
            spec.colors = colorScheme;
            if(spec.hasOwnProperty('data')) delete spec.data;
            return spec;
        }

        return {
            getSpec: getLayerSpec,
            remove: function() {tr.html('')}
        }
    }

    function getSpec(s) {
        savedSpec =  layers.map(function(layer, li){
            var baseSpec = (Array.isArray(s)) ? s[li] || {} : {};
            if(li === 0) {
                baseSpec.aggregate = aggrAttr;
                // if(filterValues[0] != filterRange[0] || filterValues[1] != filterRange[1]){
                    baseSpec.filter = {};
                    baseSpec.filter[aggrAttr] = filterValues;
                // }
            }
            return layer.getSpec(baseSpec);
        });

        return savedSpec;
    }

    var filterRange = [0, 1];
    var filterValues = filterRange;

    var onSliderUpdate = function(event, ui) {
        filterValues = ui.values;
        $( "#network-filter-range" ).text( ui.values[0] + ' - ' + ui.values[1]);
        
    }

    var filterConfig = {
        range: true,
        min: filterRange[0],
        max: filterRange[1],
        values: filterRange,
        slide: onSliderUpdate
    };

    function updateSlider() {
        if(stats.hasOwnProperty(aggrAttr)) filterRange = [stats[aggrAttr].min, stats[aggrAttr].max]; 
        filterConfig.min = filterRange[0];              
        filterConfig.max = filterRange[1]; 
        if(filterValues === null) filterValues = filterRange;     
        filterConfig.values = filterValues;
        $( "#network-filter-attribute" ).text( aggrAttr + ' range: ');
        $( "#network-filter-range" ).text( filterValues[0] + ' - ' + filterValues[1]);
        $( "#network-filter-slider" ).slider(filterConfig);        
    }

    // updateSlider();

    $("#add-layer").click(function(){
        layers.push(createLayer());
        $('.item.active.selected').trigger('click');

    })

    $("#save-spec").click(function(){
        var specName = $('#spec-name').val();
        if(specName) {
            onSave({
                name: specName, 
                spec: savedSpec
            });
        }
    })

    $("#remove-layer").click(function(){
        if(layers.length)
            layers.pop().remove();
    })

    $('.ui.dropdown').dropdown();

    function clearGUI() {
        $('#specTable').html('');
    }

    function createGUI(specs) {
        layers = [];
        $('#transform-attributes').html('<label>Aggregate by</label>');
        var aggrAttrSelection = $('<select/>').addClass('ui fluid dropdown');
        aggrAttrSelection.change(function(){
            aggrAttr = $(this).val();
            updateSlider();
        });
        aggrAttr = specs[0].aggregate;        
        if(specs[0].hasOwnProperty('filter')) {
            filterValues = specs[0].filter[aggrAttr];
        } else {
            filterValues = null; 
        }
        updateSlider();
        $('#transform-attributes').append(aggrAttrSelection);
        updateSelection(
            aggrAttrSelection,
            AGGR_METRICS,
            aggrAttr
        );
        clearGUI();
        specs.forEach(function(spec, si){
            var l = createLayer(spec);
            if(l) layers[si] = l;
        })
        $('.item.active.selected').trigger('click');
    }

    return {
        getSpec: getSpec,
        create: createGUI,
        clear: clearGUI,
        updateStats: function(newStats){ 
            stats = newStats; 
            filterRange = [stats[aggrAttr].min, stats[aggrAttr].max]
            filterConfig.values = filterRange;
            filterValues = filterRange;
            filterConfig.min = filterRange[0];
            filterConfig.max = filterRange[1];
            updateSlider();
        }
    };
}

