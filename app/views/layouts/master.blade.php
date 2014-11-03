<!DOCTYPE html>

<html lang="en-US">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="The bit Island">

	<link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
	<link href="assets/fonts/font-awesome.css" rel="stylesheet" type="text/css">
	
	<link rel="stylesheet" type="text/css" href="assets/js/stats_graphs/nv.d3.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="assets/css/bootstrap-select.min.css" type="text/css">
	<link rel="stylesheet" href="assets/css/jquery.slider.min.css" type="text/css">
	<link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css">
	<link rel="stylesheet" href="assets/css/osm.css" type="text/css">
	<link rel="stylesheet" href="assets/css/leaflet.css" type="text/css">
	<link rel="stylesheet" href="assets/css/MarkerCluster.css" type="text/css">
	<link rel="stylesheet" href="assets/css/style.css" type="text/css">
	<link rel="stylesheet" href="css/custom.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="assets/js/leaflet-draw/leaflet.draw.css">
	<link rel="stylesheet" type="text/css" href="assets/js/toastr/toastr.css">
	<link rel="stylesheet" type="text/css" href="assets/css/stat_graphs.css">

	<title>{{ $title or 'Business.init()' }}</title>

</head>

<body class="page-homepage navigation-fixed-top  map-osm" id="page-top" data-spy="scroll" data-target=".navigation" data-offset="90">
	<!-- Wrapper -->
	<div class="wrapper">

		<div class="navigation">
			<div class="container">
				<header class="navbar" id="top" role="banner">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<div class="navbar-brand nav" id="brand">
							<h1>Business.init()</h1>
						</div>
					</div>
					<nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
						<ul class="nav navbar-nav">
							<li class="active"><a href="#map">Map</a></li>
							<li><a href="#statSection">District statistics</a></li>
							<li><a href="#featured-properties">Idealista</a></li>
							<li><a href="#new-properties">Related Business</a></li>
						    <li><a href="#tweets">Tweets</a></li>
						    <li><a href="#start">Start a business</a></li>
							<li><a href="#page-footer">Contact</a></li>
							<li><a href="#"><img src="assets/img/flags/gb.png" class="img-nav"></a></li>
							<li><a href="#"><img src="assets/img/flags/es.png" class="img-nav"></a></li>
						</ul>
					</nav><!-- /.navbar collapse-->
					{{-- <div class="add-your-property">
						<a href="submit.html" class="btn btn-default"><i class="fa fa-plus"></i><span class="text">Add Your Property</span></a>
					</div> --}}
				</header><!-- /.navbar -->
			</div><!-- /.container -->
		</div><!-- /.navigation -->

		<div class="container">
			<div class="geo-location-wrapper">
				<span class="btn geo-location"><i class="fa fa-map-marker"></i><span class="text">Find My Position</span></span>
			</div>
		</div>

		<!-- Map -->
		<div id="map" class="has-parallax leaflet-container leaflet-fade-anim" tabindex="0" style=""></div>
		<!-- end Map -->

		<!-- Search Box -->
		<div class="search-box-wrapper">
			<div class="search-box-inner">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-4">
							<div class="search-box map">
								<form role="form" id="form-map" class="form-map form-search">
									<h2>What do <b>you</b> want?</h2>
									<div class="form-group">
										<select name="property-type" id="bus_type">
											<option value="0">Business type</option>
											<option value="1">Book store</option>
											<option value="2">Nursery</option>
											<option value="3">Gymnasium</option>
											<option value="4">Language School</option>
											<option value="5">Shoeshop</option>
											<option value="6">Mercadona</option>
											<option value="7">Burguer King</option>
										</select>
									</div><!-- /.form-group -->
									<div class="form-group">
										<input type="text" class="form-control" id="search-box-property-id" placeholder="Where?">
									</div>
									<!--<div class="form-group">
										<select name="type">
											<option value="">Status</option>
											<option value="1">Rent</option>
											<option value="2">Sale</option>
										</select>
									</div>--><!-- /.form-group -->
									<!--<div class="form-group">
										<div class="price-range">
											<input id="price-input" type="text" name="price" value="1000;299000">
										</div>
									</div>-->
									<div class="form-group">
										<button type="submit" class="btn btn-default">Search Now</button>
									</div><!-- /.form-group -->
								</form><!-- /#form-map -->
							</div><!-- /.search-box.map -->
						</div><!-- /.col-md-3 -->
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- /.search-box-inner -->
		</div>
		<!-- end Search Box -->

		<!-- Page Content -->
		<div id="page-content">
			@yield('content')
		</div>
		<!-- end Page Content -->
		<!-- Page Footer -->
		<footer id="page-footer">
			<div class="inner">
				<section id="footer-main">
					<div class="container">
						<div class="row">
							<div class="col-md-8 col-sm-6">
								<article>
									<h3>About Us</h3>
									<p>The bit island was founded by five technology-loving members from Madrid, Spain. Our goal is the use of open data to offer innovative ways to improve and better our society.
									</p>
								</article>
							</div><!-- /.col-sm-3 -->

							<div class="col-md-4 col-sm-3">
								<article>
									<h3>Contact</h3>
									<address>
										<strong>The bit island</strong><br>
										Madrid<br>
										Spain
									</address>
									<a href="#">contact@thebitisland.com</a>
								</article>
							</div><!-- /.col-sm-3 -->
						</div><!-- /.row -->
					</div><!-- /.container -->
				</section><!-- /#footer-main -->
				<section id="footer-copyright">
					<div class="container">
						<span>Copyright © 2014. All Rights Reserved.</span>
						<span class="pull-right"><a href="#page-top" class="roll">Go to top</a></span>
					</div>
				</section>
			</div><!-- /.inner -->
		</footer>
		<!-- end Page Footer -->
	</div>

	<div id="overlay"></div>
	<!--<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>-->
	<script type="text/javascript" src="assets/js/stats_graphs/d3.v2.js"></script>
	
	<script type="text/javascript" src="assets/js/jquery-2.1.0.min.js"></script>
	<script type="text/javascript" src="assets/js/leaflet.js"></script>
	<script type="text/javascript" src="assets/js/leaflet.markercluster.js"></script>
	<script type="text/javascript" src="assets/js/jquery-migrate-1.2.1.min.js"></script>
	<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/smoothscroll.js"></script>
	<script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap-select.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.placeholder.js"></script>
	<script type="text/javascript" src="assets/js/icheck.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery.vanillabox-0.1.5.min.js"></script>
	<script type="text/javascript" src="assets/js/retina-1.1.0.min.js"></script>
	<script type="text/javascript" src="assets/js/jshashtable-2.1_src.js"></script>
	<script type="text/javascript" src="assets/js/jquery.numberformatter-1.2.3.js"></script>
	<script type="text/javascript" src="assets/js/tmpl.js"></script>
	<script type="text/javascript" src="assets/js/jquery.dependClass-0.1.js"></script>
	<script type="text/javascript" src="assets/js/draggable-0.1.js"></script>
	<script type="text/javascript" src="assets/js/jquery.slider.js"></script>
	<script type="text/javascript" src="http://maps.stamen.com/js/tile.stamen.js?v1.3.0"></script>
	<script type="text/javascript" src="assets/js/spin.min.js"></script>
	<script type="text/javascript" src="assets/js/custom-map.js"></script>
	<script type="text/javascript" src="assets/js/custom.js"></script>
	<script type="text/javascript" src="assets/js/leaflet-draw/leaflet.draw.js"></script>
	<script type="text/javascript" src="assets/js/toastr/toastr.js"></script>
	<script type="text/javascript" src="assets/js/twitterApiHandler.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/nv.d3.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/tooltip.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/utils.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/legend.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/axis.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/multiBar.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/multiBarChart.js"></script>
	<script type="text/javascript" src="assets/js/stats_graphs/stream_layers.js"></script>
	<script type="text/javascript" src="assets/js/stat_graphs.js"></script>
	<script type="text/javascript" src="assets/js/d3.layout.cloud.js"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="assets/js/ie.js"></script>
<![endif]-->
<script>
//40.4102491,-3.6936405,17z
	window._latitude = 40.4000;
	window._longitude = -3.6833;
	createHomepageOSM(window._latitude,window._longitude);
	//searchPlace("Madrid");
	//$("#Idealista").css("display","none");
	//updateIdealista(window._latitude, window._longitude, 0.001);

</script>
</body>
</html>
