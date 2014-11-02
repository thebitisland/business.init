var mapStyles = [{featureType:'water',elementType:'all',stylers:[{hue:'#d7ebef'},{saturation:-5},{lightness:54},{visibility:'on'}]},{featureType:'landscape',elementType:'all',stylers:[{hue:'#eceae6'},{saturation:-49},{lightness:22},{visibility:'on'}]},{featureType:'poi.park',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-81},{lightness:34},{visibility:'on'}]},{featureType:'poi.medical',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-80},{lightness:-2},{visibility:'on'}]},{featureType:'poi.school',elementType:'all',stylers:[{hue:'#c8c6c3'},{saturation:-91},{lightness:-7},{visibility:'on'}]},{featureType:'landscape.natural',elementType:'all',stylers:[{hue:'#c8c6c3'},{saturation:-71},{lightness:-18},{visibility:'on'}]},{featureType:'road.highway',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-92},{lightness:60},{visibility:'on'}]},{featureType:'poi',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-81},{lightness:34},{visibility:'on'}]},{featureType:'road.arterial',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-92},{lightness:37},{visibility:'on'}]},{featureType:'transit',elementType:'geometry',stylers:[{hue:'#c8c6c3'},{saturation:4},{lightness:10},{visibility:'on'}]}];

$.ajaxSetup({
    cache: true
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenStreetMap - Homepage
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var self = {};
self.layers = [];

function createHomepageOSM(_latitude,_longitude){
    setMapHeight();
    if( document.getElementById('map') != null ){
        
        self.map = L.map('map', {
            center: [_latitude,_longitude],
            zoom: 15,
            scrollWheelZoom: true
        });
        //L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
            //L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            //subdomains: '0123',
        //    attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        //})
        // replace "toner" here with "terrain" or "watercolor"
        new L.StamenTileLayer("toner-lite").addTo(self.map)


        var opts = {
          lines: 9, // The number of lines to draw
          length: 30, // The length of each line
          width: 7, // The line thickness
          radius: 21, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: '#000', // #rgb or #rrggbb or array of colors
          speed: 1, // Rounds per second
          trail: 50, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: '50%', // Top position relative to parent
          left: '50%' // Left position relative to parent
        };
        var target = document.getElementById('map');
        self.spinner = new Spinner(opts).spin(target);


        //-------------------------------------------------------------------------------------
        // ----------
        // MARKERS

        var addMarkers = function(file, cluster, color){
            var markers;
            $.getScript(file, function(){
            
                if (cluster == false)
                    var zoomLevelCluster = 1;
                else 
                    var zoomLevelCluster = 33;

                var iconCreateFunction = function (cluster) {
                    var childCount = cluster.getChildCount();
            
                    var c = ' marker-cluster-';
                    if (childCount < 10) {
                        c += 'small';
                    } else if (childCount < 100) {
                        c += 'medium';
                    } else {
                        c += 'large';
                    }
            
                    return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster ' + color + c, iconSize: new L.Point(40, 40) });
                }

                markers = L.markerClusterGroup({
                    showCoverageOnHover: false,
                    disableClusteringAtZoom: zoomLevelCluster,
                    iconCreateFunction: iconCreateFunction

                });

                for (var i = 0; i < locations.length; i++) {

                    if (cluster == true)
                        mHtml = '<i style="font-size:13px; padding-top:7px; padding-left:6px;" class="fa ' + locations[i][3] + '"></i>'
                    else
                        mHtml = '<i style="color:red; font-size:13px; padding-top:7px; padding-left:7px;" class="fa ' + locations[i][3] + '"></i>'

                    var _icon = L.divIcon({
                        html: mHtml, //'<img src="' + locations[i][7] +'">',
                        iconSize:     [40*0.65, 48*0.65],
                        iconAnchor:   [20*0.65, 48*0.65],
                        popupAnchor:  [0, -48*0.65],
                        className: "leaflet-div-icon "+color
                    });
                    var title = locations[i][0];
                    var marker = L.marker(new L.LatLng(locations[i][2],locations[i][1]), {
                        title: title,
                        icon: _icon
                    });
                    marker.bindPopup(
                        '<div class="property" style="padding-top:50px">' +
                            //'<a href="' + locations[i][5] + '">' +
                                //'<div class="property-image">' +
                                //    '<img src="' + locations[i][6] + '">' +
                                //'</div>' +
                                '<div class="overlay">' +
                                    '<div class="info">' +
                                //        '<div class="tag price"> ' + locations[i][2] + '</div>' +
                                        '<h3>' + locations[i][0] + '</h3>' +
                                //        '<figure>' + locations[i][1] + '</figure>' +
                                    '</div>' +
                                '</div>' +
                            //'</a>' +
                        '</div>'
                    );
                    markers.addLayer(marker);
                }

                self.map.addLayer(markers);
                self.layers.push(markers);
            });
            return markers;
        }

        $('#bus_type').change(function() {
            if ($(this).val() == 1){
                addMarkers("assets/js/data/locations_libreria.js", true, "red");
                addMarkers("assets/js/data/locations_bibliotecas.js", true, "green");
            }

        });

        addMarkers("assets/js/data/locations_renfe.js", false, "blue");
        addMarkers("assets/js/data/locations_metro.js", false, "blue");
        var metro = 1;

        self.map.on('zoomend', function(e) {
            if (self.map.getZoom() >= 15) {
                if (metro == 0) {
                    self.map.addLayer(self.layers[0]);
                    self.map.addLayer(self.layers[1]);
                    metro = 1
                }
            } else {
                self.map.removeLayer(self.layers[0]);
                self.map.removeLayer(self.layers[1]);
                metro = 0;
            }
        });

        // MARKERS
        // ----------
        //-------------------------------------------------------------------------------------


        //-------------------------------------------------------------------------------------
        // ----------
        // LOCATE MYSELF

        self.map.on('locationfound', function(event){
            $('#map').removeClass('fade-map');
            self.myposition = L.marker(event.latlng);
            self.map.removeLayer(self.myposition);
            self.myposition.addTo(self.map);
        });

        $('.geo-location').on("click", function(event) {
            $('#map').addClass('fade-map');
            self.map.locate({setView : true})
        });

        $('body').addClass('loaded');
        setTimeout(function() {
            $('body').removeClass('has-fullscreen-map');
        }, 1000);
        $('#map').removeClass('fade-map');

        // LOCATE MYSELF
        // ----------
        //-------------------------------------------------------------------------------------
        

        //-------------------------------------------------------------------------------------
        // ----------
        // CHOROPLETH

        self.geojson;

        self.genreSelectors = ["mujer_ES","hombre_ES","mujer_EX","hombre_EX"]
        self.getSelector = function(){

            self.spinner = new Spinner(opts).spin(target);

            var country = $(".checkbox_country:checked").map(function(){
                return $(this).val();
            }).get();

            var genre = $(".checkbox_genre:checked").map(function(){
                return $(this).val();
            }).get();

            self.genreSelectors = [];

            country.forEach(function(origin){
                genre.forEach(function(sex){
                    self.genreSelectors.push(sex + "_" + origin);
                })
            })

            self.map.removeLayer(self.geojson)
            self.legend.removeFrom(self.map)

            d3.json("assets/js/data/madrid_barrios.json", function(json) {
                setColorScales(json);
                self.geojson = L.geoJson(json, {
                    style: styleCloropleth,
                    onEachFeature: onEachFeature
                })
                self.map.addLayer(self.geojson)
                self.legend.addTo(self.map);

                self.spinner.stop();
            });
        }

        self.minAge = "0"
        self.maxAge = "120"
        self.onSliderChanged = function(){

            var val = self.ageSlider.val().split(";");
            if((val[0] != self.minAge) || (val[1] != self.maxAge)) {
                self.minAge = val[0];
                self.maxAge = val[1];
                self.getSelector()   
            }
        }

        function getValue(feature){
            if (self.heatmap == 0){
                var population = 0;
                
                for (var key in feature.properties.population) {
                    if ($.inArray(key, self.genreSelectors) != -1) {
                        for (var key2 in feature.properties.population[key]){
                            if ((parseInt(key2) >= parseInt(self.minAge)) && (parseInt(key2) <= parseInt(self.maxAge))) {
                                population += feature.properties.population[key][key2];
                            }
                        }
                    }
                }
                return population;
            } else{
                return feature.properties.renta;
            }
        }

        function setColorScales(json){
            var value, minRange, maxRange;
                self.min = 999999,
                self.max = 0; 
            json.features.forEach(function(feature){
                value = getValue(feature);
                if(value < self.min) self.min = value;
                if(value > self.max) self.max = value;
            });

            if (self.heatmap==0){
                minRange = '#ff0';
                maxRange = '#F00';
            } else {
                minRange = '#21F600';
                maxRange = '#1B1BF0';
            }
            self.color_scale = d3.scale.linear().domain([self.min,self.max]).range([minRange, maxRange]).clamp(true);
        }

        function styleCloropleth(feature) {
            return {
                fillColor: self.color_scale(getValue(feature)),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.3
            };
        }

        function styleCloropleth(feature) {
            return {
                fillColor: self.color_scale(getValue(feature)),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.3
            };
        }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.5
            });

            if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
            }

            self.infoUpdate(layer.feature);
        }

        function resetHighlight(e) {
            self.geojson.resetStyle(e.target);
            self.infoUpdate();
        }

        function clickOnDistrit(e) {
            console.log(e.target.feature.properties.DESBDT + " : " + getValue(e.target.feature) + " : " + e.latlng.lat + "|" + e.latlng.lng)
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: clickOnDistrit
            });
        }

        var loadCloropleth = function(file, style){

            if (self.heatmap == 1) {
                d3.select('.populationSelector').style("display", "none")
            }
            if (self.heatmap == 0){
                d3.select('.populationSelector').style("display", "")
            }

            d3.json(file, function(json) {

                setColorScales(json);

                self.geojson = L.geoJson(json, {
                    style: style,
                    onEachFeature: onEachFeature
                })//.addTo(map);

                self.map.addLayer(self.geojson)
                self.legend.addTo(self.map);

                self.spinner.stop();
            });
        }

        self.cloro_control = L.control();
        self.cloro_control.onAdd = function (map) {
            self.cloroplethControl = L.DomUtil.create('div', 'cloroplethControl'); // create a div with a class "info"
            var myhtml = ''
            myhtml += '<h5>Map controls</h5>'
            myhtml += '<div class="form-group control-form"><b>Show:</b> ' 
            myhtml += '  <select name="district" id="cloro_type">'
            myhtml += '    <option value="1">Population</option>'
            myhtml += '    <option value="2">Income</option>'
            myhtml += '  </select>'
            myhtml += '</div>'

            self.htmlPop = '<div class="populationSelector">'
            self.htmlPop += '<form action="" onchange="self.getSelector()">'
            self.htmlPop += '<input type="checkbox" class="checkbox_genre" checked name="women" value="mujer"> Women <i style="color:#ff69b4;" class="fa fa-female"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            self.htmlPop += '<input type="checkbox" class="checkbox_genre" checked name="men" value="hombre"> Men <i style="color:#1e90ff;" class="fa fa-male"></i><br>'
            self.htmlPop += '<input type="checkbox" class="checkbox_country" checked name="nationals" value="ES"> Nationals <i style="color:#f00;" class="fa fa-flag-o"></i>&nbsp;&nbsp;&nbsp;'
            self.htmlPop += '<input type="checkbox" class="checkbox_country" checked name="Foreigners" value="EX"> Foreigners <i style="color:#000;" class="fa fa-compass"></i><br>'
            self.htmlPop += '</form>'
            self.htmlPop += '<div class="form-group">'
            self.htmlPop += '<h4><b>Age range:</b></h4>'
            self.htmlPop += '    <div class="price-range" onmouseup="self.onSliderChanged()">'
            self.htmlPop += '        <input id="age-input" type="text" name="price" value="0;120">'
            self.htmlPop += '    </div>'
            self.htmlPop += '</div>'
            self.htmlPop +='</div>'

            self.htmlInfo = '<div class="info">'
            self.htmlInfo += '  <h4>Population per distrit</h4>'
            self.htmlInfo += '  Hover over a region to <br>see more info'
            self.htmlInfo += '</div>';

            self.cloroplethControl.innerHTML = myhtml + self.htmlInfo + self.htmlPop;
            return self.cloroplethControl;
        };
        self.cloro_control.addTo(self.map);

        self.ageSlider = $("#age-input");
        if(self.ageSlider.length > 0) {
            self.ageSlider.slider({
                from: 0,
                to: 120,
                step: 1,
                round: 1
            });
        }

        // method that we will use to update the control based on feature properties passed
        self.infoUpdate = function (props) {
            var info1, info2;
            if (self.heatmap == 0){
                info1 = "Population"
                info2 = "people"
            } else {
                info1 = "Mean income"
                info2 = "€/year"
            }

            self.htmlInfo = '<h4>' + info1 + ' per distrit</h4>' +  (props ?
                'Distrit: <b>' + props.properties.DESBDT.split(" ").slice(1).join(' ') + '</b><br />' + getValue(props) + ' ' + info2
                : 'Hover over a region to <br>see more info');

            d3.select('.info').html(self.htmlInfo);
        };

        self.legend = L.control({position: 'bottomright'});

        self.legend.onAdd = function (map) {

            var step = (self.max-self.min)/6
            var grade = [self.min,self.min+step,self.min+2*step,self.min+3*step,self.min+4*step,self.min+5*step,self.max]

            var div = L.DomUtil.create('div', 'info legend'),
                grades = grade,
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            div.innerHTML += grades[0] + ' - ' + grades[6]
            div.innerHTML += '<br>'
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + self.color_scale(grades[i] + 1) + '"></i>'// + grades[i] + '+';
            }

            return div;
        };

        
        self.heatmap = 0
        loadCloropleth("assets/js/data/madrid_barrios.json", styleCloropleth);

        $('#cloro_type').change(function() {

            self.map.removeLayer(self.geojson)
            self.legend.removeFrom(self.map)

            self.heatmap = $(this).val()-1
            loadCloropleth("assets/js/data/madrid_barrios.json", styleCloropleth);
        });

        // CHOROPLETH
        // ----------


        // ----------
        // LEAFLET - DRAW

        // Initialize the FeatureGroup to store editable layers
        var drawnItems = new L.FeatureGroup();
        self.map.addLayer(drawnItems);

        // Initialize the draw control and pass it the FeatureGroup of editable layers
        var drawControl = new L.Control.Draw({
            draw: {
                polyline: false,
                polygon: false,
                rectangle: false,
                marker: false
            },edit: {
                featureGroup: drawnItems
            }
        });
        self.map.addControl(drawControl);

        self.map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            if (type === 'circle') {

                console.log(layer._latlng.lat + ":" + layer._latlng.lng)
                //updateIdealista(40.415914, -3.696148, 0.001);
                updateIdealista(layer._latlng.lat, layer._latlng.lng, 0.001);

            }
            drawnItems.addLayer(layer);
        });

        //LEAFLET - DRAW
        // ---------


    }
}

