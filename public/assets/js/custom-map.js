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
        L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
            //L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            //subdomains: '0123',
            attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(self.map);


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

        self.map.on('locationfound', onLocationFound);

        function locateUser() {
            $('#map').addClass('fade-map');
            self.map.locate({setView : true})
        }

        function onLocationFound(){
            $('#map').removeClass('fade-map');
        }

        $('.geo-location').on("click", function() {
            locateUser();
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

        var geoJson;
        var cloroLayer;

        self.color_population = d3.scale.linear().domain([0,75000]).range(['#DCD100', '#DC0B00']).clamp(true);
        self.color_renta = d3.scale.linear().domain([18000,27000]).range(['#21F600', '#1B1BF0']).clamp(true);
        function getColor(d) {
            if (self.heatmap == 0) {
                return self.color_population(d)
            } else {
                return self.color_renta(d);
            }
        }

        function getValue(feature){
            if (self.heatmap == 0){
                var population = 0;
                for (var key in feature.properties.population) {
                    for (var key2 in feature.properties.population[key]){
                        population += feature.properties.population[key][key2];
                    }
                }
                return population;
            } else{
                return feature.properties.renta;
            }
        }

        function styleCloropleth(feature) {
            return {
                fillColor: getColor(getValue(feature)),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.3
            };
        }

        function styleCloropleth(feature) {
            return {
                fillColor: getColor(getValue(feature)),
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

            info.update(layer.feature);
        }

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
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
            d3.json(file, function(json) {

                geojson = L.geoJson(json, {
                    style: style,
                    onEachFeature: onEachFeature
                })//.addTo(map);

                self.map.addLayer(geojson)
                cloroLayer = geojson
            });
        }

        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            var info1, info2;
            if (self.heatmap == 0){
                info1 = "Population"
                info2 = "people"
            } else {
                info1 = "Mean income"
                info2 = "€/year"
            }

            this._div.innerHTML = '<h4>' + info1 + ' per postal code</h4>' +  (props ?
                '<b>Distrit: ' + props.properties.DESBDT.split(" ").pop() + '</b><br />' + getValue(props) + ' ' + info2
                : 'Hover over a region to see more info');
        };

        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {

            if (self.heatmap == 0){
                var grade = [5000,10000,30000,45000,60000,70000,85000]
            } else {
                var grade = [18000,19500,20500,22000,23500,25000,27000]
            }

            var div = L.DomUtil.create('div', 'info legend'),
                grades = grade,
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };

        
        self.heatmap = 0
        loadCloropleth("assets/js/data/madrid_barrios.json", styleCloropleth);
        legend.addTo(self.map);
        info.addTo(self.map);

        $('#cloro_type').change(function() {

            self.map.removeLayer(cloroLayer)
            legend.removeFrom(self.map)
            info.removeFrom(self.map)

            self.heatmap = $(this).val()-1
            loadCloropleth("assets/js/data/madrid_barrios.json", styleCloropleth);
            legend.addTo(self.map);
            info.addTo(self.map);
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

