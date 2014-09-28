var mapStyles = [{featureType:'water',elementType:'all',stylers:[{hue:'#d7ebef'},{saturation:-5},{lightness:54},{visibility:'on'}]},{featureType:'landscape',elementType:'all',stylers:[{hue:'#eceae6'},{saturation:-49},{lightness:22},{visibility:'on'}]},{featureType:'poi.park',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-81},{lightness:34},{visibility:'on'}]},{featureType:'poi.medical',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-80},{lightness:-2},{visibility:'on'}]},{featureType:'poi.school',elementType:'all',stylers:[{hue:'#c8c6c3'},{saturation:-91},{lightness:-7},{visibility:'on'}]},{featureType:'landscape.natural',elementType:'all',stylers:[{hue:'#c8c6c3'},{saturation:-71},{lightness:-18},{visibility:'on'}]},{featureType:'road.highway',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-92},{lightness:60},{visibility:'on'}]},{featureType:'poi',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-81},{lightness:34},{visibility:'on'}]},{featureType:'road.arterial',elementType:'all',stylers:[{hue:'#dddbd7'},{saturation:-92},{lightness:37},{visibility:'on'}]},{featureType:'transit',elementType:'geometry',stylers:[{hue:'#c8c6c3'},{saturation:4},{lightness:10},{visibility:'on'}]}];

$.ajaxSetup({
    cache: true
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Google Map - Homepage
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createHomepageGoogleMap(_latitude,_longitude){
    setMapHeight();
    if( document.getElementById('map') != null ){
        $.getScript("assets/js/locations.js", function(){
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                scrollwheel: false,
                center: new google.maps.LatLng(_latitude, _longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: mapStyles
            });
            var i;
            var newMarkers = [];
            for (i = 0; i < locations.length; i++) {
                var pictureLabel = document.createElement("img");
                pictureLabel.src = locations[i][7];
                var boxText = document.createElement("div");
                infoboxOptions = {
                    content: boxText,
                    disableAutoPan: false,
                    //maxWidth: 150,
                    pixelOffset: new google.maps.Size(-100, 0),
                    zIndex: null,
                    alignBottom: true,
                    boxClass: "infobox-wrapper",
                    enableEventPropagation: true,
                    closeBoxMargin: "0px 0px -8px 0px",
                    closeBoxURL: "assets/img/close-btn.png",
                    infoBoxClearance: new google.maps.Size(1, 1)
                };
                var marker = new MarkerWithLabel({
                    title: locations[i][0],
                    position: new google.maps.LatLng(locations[i][3], locations[i][4]),
                    map: map,
                    icon: 'assets/img/marker.png',
                    labelContent: pictureLabel,
                    labelAnchor: new google.maps.Point(50, 0),
                    labelClass: "marker-style"
                });
                newMarkers.push(marker);
                boxText.innerHTML =
                    '<div class="infobox-inner">' +
                        '<a href="' + locations[i][5] + '">' +
                        '<div class="infobox-image" style="position: relative">' +
                        '<img src="' + locations[i][6] + '">' + '<div><span class="infobox-price">' + locations[i][2] + '</span></div>' +
                        '</div>' +
                        '</a>' +
                        '<div class="infobox-description">' +
                        '<div class="infobox-title"><a href="'+ locations[i][5] +'">' + locations[i][0] + '</a></div>' +
                        '<div class="infobox-location">' + locations[i][1] + '</div>' +
                        '</div>' +
                        '</div>';
                //Define the infobox
                newMarkers[i].infobox = new InfoBox(infoboxOptions);
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        for (h = 0; h < newMarkers.length; h++) {
                            newMarkers[h].infobox.close();
                        }
                        newMarkers[i].infobox.open(map, this);
                    }
                })(marker, i));

            }
            var clusterStyles = [
                {
                    url: 'assets/img/cluster.png',
                    height: 37,
                    width: 37
                }
            ];
            var markerCluster = new MarkerClusterer(map, newMarkers, {styles: clusterStyles, maxZoom: 15});
            $('body').addClass('loaded');
            setTimeout(function() {
                $('body').removeClass('has-fullscreen-map');
            }, 1000);
            $('#map').removeClass('fade-map');

            //  Dynamically show/hide markers --------------------------------------------------------------

            google.maps.event.addListener(map, 'idle', function() {

                for (var i=0; i < locations.length; i++) {
                    if ( map.getBounds().contains(newMarkers[i].getPosition()) ){
                        // newMarkers[i].setVisible(true); // <- Uncomment this line to use dynamic displaying of markers

                        //newMarkers[i].setMap(map);
                        //markerCluster.setMap(map);
                    } else {
                        // newMarkers[i].setVisible(false); // <- Uncomment this line to use dynamic displaying of markers

                        //newMarkers[i].setMap(null);
                        //markerCluster.setMap(null);
                    }
                }
            });

            // Function which set marker to the user position
            function success(position) {
                var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.panTo(center);
                $('#map').removeClass('fade-map');
            }

        });
        // Enable Geo Location on button click
        $('.geo-location').on("click", function() {
            if (navigator.geolocation) {
                $('#map').addClass('fade-map');
                navigator.geolocation.getCurrentPosition(success);
            } else {
                error('Geo Location is not supported');
            }
        });
    }
}

// Function which set marker to the user position
function success(position) {
    createHomepageGoogleMap(position.coords.latitude, position.coords.longitude);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Google Map - Property Detail
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initMap(propertyId) {
    $.getScript("assets/js/locations.js", function(){
        var subtractPosition = 0;
        var mapWrapper = $('#property-detail-map.float');

        if (document.documentElement.clientWidth > 1200) {
            subtractPosition = 0.013;
        }
        if (document.documentElement.clientWidth < 1199) {
            subtractPosition = 0.006;
        }
        if (document.documentElement.clientWidth < 979) {
            subtractPosition = 0.001;
        }
        if (document.documentElement.clientWidth < 767) {
            subtractPosition = 0;
        }

        var mapCenter = new google.maps.LatLng(locations[propertyId][3],locations[propertyId][4]);

        if ( $("#property-detail-map").hasClass("float") ) {
            mapCenter = new google.maps.LatLng(locations[propertyId][3],locations[propertyId][4] - subtractPosition);
            mapWrapper.css('width', mapWrapper.width() + mapWrapper.offset().left )
        }

        var mapOptions = {
            zoom: 15,
            center: mapCenter,
            disableDefaultUI: false,
            scrollwheel: false,
            styles: mapStyles
        };
        var mapElement = document.getElementById('property-detail-map');
        var map = new google.maps.Map(mapElement, mapOptions);

        var pictureLabel = document.createElement("img");
        pictureLabel.src = locations[propertyId][7];
        var markerPosition = new google.maps.LatLng(locations[propertyId][3],locations[propertyId][4]);
        var marker = new MarkerWithLabel({
            position: markerPosition,
            map: map,
            icon: 'assets/img/marker.png',
            labelContent: pictureLabel,
            labelAnchor: new google.maps.Point(50, 0),
            labelClass: "marker-style"
        });
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Google Map - Contact
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function contactUsMap(){
    var mapCenter = new google.maps.LatLng(_latitude,_longitude);
    var mapOptions = {
        zoom: 15,
        center: mapCenter,
        disableDefaultUI: false,
        scrollwheel: false,
        styles: mapStyles
    };
    var mapElement = document.getElementById('contact-map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new MarkerWithLabel({
        position: mapCenter,
        map: map,
        icon: 'assets/img/marker.png',
        //labelContent: pictureLabel,
        labelAnchor: new google.maps.Point(50, 0),
        labelClass: "marker-style"
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenStreetMap - Homepage
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var map;
var layers = [];
function createHomepageOSM(_latitude,_longitude){
    setMapHeight();
    if( document.getElementById('map') != null ){
        
        map = L.map('map', {
            center: [_latitude,_longitude],
            zoom: 15,
            scrollWheelZoom: true
        });
        L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
            //L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            //subdomains: '0123',
            attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(map);


        var addMarkers = function(file, cluster){
            var markers;
            $.getScript(file, function(){
            
                if (cluster == false)
                    var zoomLevelCluster = 1;
                else 
                    var zoomLevelCluster = 33;

                markers = L.markerClusterGroup({
                    showCoverageOnHover: false,
                    disableClusteringAtZoom: zoomLevelCluster

                });

                for (var i = 0; i < locations.length; i++) {

                    if (cluster == true)
                        mHtml = '<i style="font-size:20px; padding-top:9px; padding-left:9px;" class="fa ' + locations[i][3] + '"></i>'
                    else
                        mHtml = '<i style="color:red; font-size:20px; padding-top:9px; padding-left:9px;" class="fa ' + locations[i][3] + '"></i>'

                    var _icon = L.divIcon({
                        html: mHtml, //'<img src="' + locations[i][7] +'">',
                        iconSize:     [40, 48],
                        iconAnchor:   [20, 48],
                        popupAnchor:  [0, -48]
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

                map.addLayer(markers);
                layers.push(markers);
            });
            return markers;
        }

        $('#bus_type').change(function() {
            if ($(this).val() == 1){
                addMarkers("assets/js/locations_libreria.js", true);
                addMarkers("assets/js/locations_bibliotecas.js", true);
            }

        });

        addMarkers("assets/js/locations_renfe.js", false);
        addMarkers("assets/js/locations_metro.js", false);
        var metro = 1;

        map.on('zoomend', function(e) {
            if (map.getZoom() >= 15) {
                if (metro == 0) {
                    map.addLayer(layers[0]);
                    map.addLayer(layers[1]);
                    metro = 1
                }
            } else {
                map.removeLayer(layers[0]);
                map.removeLayer(layers[1]);
                metro = 0;
            }
        });
        
        

        map.on('locationfound', onLocationFound);

        function locateUser() {
            $('#map').addClass('fade-map');
            map.locate({setView : true})
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



        //-------------------------------------------------------------------------------------
        // ----------
        // CHOROPLETH

        var geoJson;
        function getColorCP(d) {
            return d > 85000 ? '#800026' :
                   d > 70000  ? '#BD0026' :
                   d > 60000  ? '#E31A1C' :
                   d > 45000  ? '#FC4E2A' :
                   d > 30000   ? '#FD8D3C' :
                   d > 10000   ? '#FEB24C' :
                   d > 5000   ? '#FED976' :
                              '#FFEDA0';
        }

        function styleCP(feature) {
            return {
                fillColor: getColorCP(feature.population),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.1
            };
        }

        function highlightFeatureCP(e) {
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

        function resetHighlightCP(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function clickOnCP(e) {
            console.log(e.target.feature.id + " : " + e.target.feature.population)
        }

        function onEachFeatureCP(feature, layer) {
            layer.on({
                mouseover: highlightFeatureCP,
                mouseout: resetHighlightCP,
                click: clickOnCP
            });
        }

        d3.json("assets/js/data/cp.json", function(json) {

            geojson = L.geoJson(json, {
                style: styleCP,
                onEachFeature: onEachFeatureCP
            }).addTo(map);

        });


        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = '<h4>Poblacion por codigo postal</h4>' +  (props ?
                '<b>' + props.id + '</b><br />' + props.population + ' personas'
                : 'Pasa el raton por un CP');
        };

        info.addTo(map);


        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [5000,10000,30000,45000,60000,70000,85000],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColorCP(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };

        legend.addTo(map);

        // CHOROPLETH
        // ----------


        // ----------
        // LEAFLET - DRAW

        // Initialize the FeatureGroup to store editable layers
        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        // Initialize the draw control and pass it the FeatureGroup of editable layers
        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            if (type === 'marker') {}
            drawnItems.addLayer(layer);
        });

        //LEAFLET - DRAW
        // ---------


    }
}

