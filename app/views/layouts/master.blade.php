<!DOCTYPE html>

<html lang="en-US">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="The bit Island">

	<link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
	<link href="assets/fonts/font-awesome.css" rel="stylesheet" type="text/css">
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

	<title>{{ $title or 'Business.init()' }}</title>

</head>

<body class="page-homepage navigation-fixed-bottom has-fullscreen-map map-osm" id="page-top" data-spy="scroll" data-target=".navigation" data-offset="90">
	<!-- Wrapper -->
	<div class="wrapper">

		<div class="navigation">
			<div class="secondary-navigation">
				<div class="container">
					<div class="user-area">
						<a href="#" class="promoted"><strong>Register (Coming soon!)</strong></a>
						<a href="#">Sign In (Coming soon!)</a>
						<div class="language-bar">
							<a href="#" class="active"><img src="assets/img/flags/gb.png"></a>
							<a href="#"><img src="assets/img/flags/de.png"></a>
							<a href="#"><img src="assets/img/flags/es.png"></a>
						</div>
					</div>
				</div>
			</div>
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
							<a href="{{action('TwitterApiController@getTweets');}}"><img src="assets/img/logo.png" alt="brand"></a>
						</div>
					</div>
					<nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
						<ul class="nav navbar-nav">
							<li class="active has-child"><a href="#">Projects</a>
								<ul class="child-navigation">
									<li><a href="#">Business.init()</a></li>
									<li><a href="#">eDrive</a></li>

								</ul>
							</li>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
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
		<div id="map" class="has-parallax"></div>
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
										<input type="text" class="form-control" id="search-box-property-id" placeholder="Where?">
									</div>
									<div class="form-group">
										<select name="type">
											<option value="">Status</option>
											<option value="1">Rent</option>
											<option value="2">Sale</option>
										</select>
									</div><!-- /.form-group -->
									<div class="form-group">
										<select name="district">
											<option value="">District</option>
											<option value="1">Manhattan</option>
											<option value="2">The Bronx</option>
											<option value="3">Brooklyn</option>
											<option value="4">Queens</option>
											<option value="5">Staten Island</option>
										</select>
									</div><!-- /.form-group -->
									<div class="form-group">
										<select name="property-type" id="bus_type">
											<option value="">Business type</option>
											<option value="1">Book stores</option>
											<option value="2">Clothes</option>
											<option value="3">Restaurants</option>
											<option value="4">Electronics</option>
											<option value="5">Music stores</option>
										</select>
									</div><!-- /.form-group -->
									<div class="form-group">
										<div class="price-range">
											<input id="price-input" type="text" name="price" value="1000;299000">
										</div>
									</div>
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
							<div class="col-md-6 col-sm-6">
								<article>
									<h3>About Us</h3>
									<p>The bit island was founded by five technology-loving members from Madrid, Spain. Our goal is the use of open data to offer innovative ways to improve and better our society.
									</p>
									<hr>
									<a href="#" class="link-arrow">Read More</a>
								</article>
							</div><!-- /.col-sm-3 -->

							<div class="col-md-3 col-sm-3">
								<article>
									<h3>Contact</h3>
									<address>
										<strong>The bit island</strong><br>
										Madrid<br>
										Spain
									</address>
									<br>
									<a href="#">contact@thebitisland.com</a>
								</article>
							</div><!-- /.col-sm-3 -->
							<div class="col-md-3 col-sm-3">
								<article>
									<h3>Useful Links</h3>
									<ul class="list-unstyled list-links">
										<li><a href="#">Team</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Login and Register Account (Coming!)</a></li>
										<li><a href="#">FAQ</a></li>
										<li><a href="#">Terms and Conditions</a></li>
									</ul>
								</article>
							</div><!-- /.col-sm-3 -->
						</div><!-- /.row -->
					</div><!-- /.container -->
				</section><!-- /#footer-main -->
				<section id="footer-thumbnails" class="footer-thumbnails"></section><!-- /#footer-thumbnails -->
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
	<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
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
	<script type="text/javascript" src="assets/js/custom-map.js"></script>
	<script type="text/javascript" src="assets/js/custom.js"></script>
	<script type="text/javascript" src="assets/js/leaflet-draw/leaflet.draw.js"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="assets/js/ie.js"></script>
<![endif]-->
<script>
//40.4102491,-3.6936405,17z
	window._latitude = 40.4102716;
	window._longitude =-3.6936405;
	createHomepageOSM(window._latitude,window._longitude);
</script>
</body>
</html>
