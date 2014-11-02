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

        self.ages = ["0-3","4-12","13-17","18-26","27-35","36-65",">66"]
        self.genreSelectors = ["mujer_ES","hombre_ES","mujer_EX","hombre_EX"]
        self.getSelector = function(){
            self.ages = $(".checkbox_age:checked").map(function(){
                return $(this).val();
            }).get();

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
            });
        }

        function getValue(feature){
            if (self.heatmap == 0){
                var population = 0;
                
                for (var key in feature.properties.population) {
                    if ($.inArray(key, self.genreSelectors) != -1) {
                        for (var key2 in feature.properties.population[key]){
                            if ($.inArray(key2, self.ages) != -1) {
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

            self.info.update(layer.feature);
        }

        function resetHighlight(e) {
            self.geojson.resetStyle(e.target);
            self.info.update();
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

            if (self.heatmap == 1) self.populationSelector.removeFrom(self.map);
            if (self.heatmap == 0) self.populationSelector.addTo(self.map);

            d3.json(file, function(json) {

                setColorScales(json);

                self.geojson = L.geoJson(json, {
                    style: style,
                    onEachFeature: onEachFeature
                })//.addTo(map);

                self.map.addLayer(self.geojson)
                self.legend.addTo(self.map);
                self.info.addTo(self.map);
            });
        }

        self.populationSelector = L.control();

        self.populationSelector.onAdd = function (map) {
            self.popSelector = L.DomUtil.create('div', 'populationSelector'); // create a div with a class "info"
            
            var myhtml = '<form action="" onchange="self.getSelector()">'
            myhtml += '<input type="checkbox" class="checkbox_genre" checked name="women" value="mujer"> Women &nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_genre" checked name="men" value="hombre"> Men<br>'
            myhtml += '<input type="checkbox" class="checkbox_country" checked name="nationals" value="ES"> Nationals &nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_country" checked name="Foreigners" value="EX"> Foreigners<br>'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="0-3" value="0-3"> 0-3&nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="4-12" value="4-12"> 4-12&nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="13-17" value="13-17"> 13-17<br>'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="18-26" value="18-26"> 18-26&nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="27-35" value="27-35"> 27-35&nbsp;&nbsp;&nbsp;'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name="36-65" value="36-65"> 36-65<br>'
            myhtml += '<input type="checkbox" class="checkbox_age" checked name=">66" value=">66"> >66<br>'
            myhtml += '</form>'

            self.popSelector.innerHTML = myhtml
            return self.popSelector;
        };

        self.info = L.control();

        self.info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        self.info.update = function (props) {
            var info1, info2;
            if (self.heatmap == 0){
                info1 = "Population"
                info2 = "people"
            } else {
                info1 = "Mean income"
                info2 = "€/year"
            }

            this._div.innerHTML = '<h4>' + info1 + ' per distrit</h4>' +  (props ?
                '<b>Distrit: ' + props.properties.DESBDT.split(" ").pop() + '</b><br />' + getValue(props) + ' ' + info2
                : 'Hover over a region to see more info');

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
            self.info.removeFrom(self.map)

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
                loadFoursquareData(layer._latlng.lat,layer._latlng.lng,"librerias");

            }
            drawnItems.addLayer(layer);
        });

        //LEAFLET - DRAW
        // ---------


    }


     function loadFoursquareData(lat,lon,query)
    {
        var xmlhttp;
        var txt,x,i;

        //document.getElementById("noBusiness").css([ "opacity:0"]);
        var url="https://api.foursquare.com/v2/venues/explore?client_id=LXYDA3DJQAXS1F35ROQVWJTLGNBOYJHJPJZPNWHQ1DMTLJVM&venuePhotos=1&client_secret=CR30J1LYOGBZDCZQ2KQFXC2X4ADDO22SNXZO2HRDIGOBIURE&v=20120609&ll="+lat+","+lon+"&query="+query;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {

           //var html_intro = "<div class='row'>";
           //var html_final = "</div><!-- /.row-->";
           var body = "";

           var picture_dimension="250x140"

           var stars_5= "<p><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span></p>";         
           var stars_4= "<p><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span></p>";
           var stars_3= "<p><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span><span class='glyphicon glyphicon-star-empty'></span></p>";         
           var stars_2= "<p><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span><span class='glyphicon glyphicon-star-empty'></span><span class='glyphicon glyphicon-star-empty'></span></p>";         
           var stars_1= "<p><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span><span class='glyphicon glyphicon-star-empty></span><span class='glyphicon glyphicon-star-empty'></span><span class='glyphicon glyphicon-star-empty'></span></p>";         
            var jsonObj = JSON.parse(xmlhttp.responseText);
            var items = jsonObj.response.groups[0].items;
            var items_length = jsonObj.response.groups[0].items.length; 
            console.log(jsonObj.response.groups[0].items);
            var total_iterations="";

            if(items_length>16){
                total_iterations=16;
            }else{
                total_iterations=items_length;
            }
            //console.log(jsonObj.response.groups[0].items.length);
            for(var i=0;i<total_iterations;i++){

                var venues = jsonObj.response.groups[0].items[i].venue;
                ///var tips= jsonObj.response.groups[0].items[i].tips;
                //console.log(venues);
                var id = venues.id;
                var location= venues.location;
                var address = location.address;
                var rating = venues.rating;
                var name = venues.name;
                var photo_suffix= venues.photos.groups[0].items[0].suffix;
                var photo_prefix = "https://irs2.4sqi.net/img/general/";
                var photo = photo_prefix+picture_dimension+photo_suffix;

                //console.log(photo);
                //console.log(tips);
                //console.log(location);

                var reference = "http://foursquare.com/v/"+id;

                var stars_rating="";

                if(rating==10){
                stars_rating=stars_5;
                }else if(rating>=8 && rating <10){
                stars_rating=stars_4;
                }else if(rating>=5 && rating<8){
                stars_rating=stars_3;
                }else if(rating>=2 && rating<5){
                stars_rating=stars_2;
                }else{
                stars_rating=stars_1;
                }


                body+= "<div class='col-md-3 col-sm-6'><div class='property'><a href="+reference+" target='blank'><div class='property-image'><img alt=''src="+photo+"></div><div class='overlay'><div class='info'><h3>"+name+"</h3><div class='tag price'>"+stars_rating+"</div><figure>"+address+"</figure></div></div></a></div><!-- /.property --></div><!-- /.col-md-3 -->";


            }

            //var final_html= html_intro + body + html_final;

            //console.log(final_html);

            document.getElementById("foursquare").innerHTML=body;

            }
          }
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
        }
}

