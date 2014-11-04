@extends('layouts.master')

@section('content')
<section id="statSection">
<div class="container">
        <header class="section-title"><h2>District statistics</h2></header>
</div><!-- /.container-->
<div class="container" id="noStats">
        <h3>Choose a location</h3>
        <p>Using the circle feature select a range in the map.</p>
</div><!-- /.container-->
<div class="container" id="stats">

    <div class="row">
        <div class="col-md-5 col-sm-5" id="chartPOPAGE">
                <svg id="chartSVG"></svg>
        </div>
        <div class="chart col-md-5 col-sm-5">
                <div id="sexRatio"></div>
        </div>
    </div>

</div><!-- /.container -->
</section><!-- /#stats -->

<section id="featured-properties" class="featured-properties block background-color-grey-light carousel-full-width">
    <div class="container">
    <header class="section-title"><h2>Idealista</h2></header>
    </div><!-- /.container -->

    <div class="container" id="noIdealista">

    <h3>Choose a location</h3>
    <p>Using the circle feature select a range in the map.</p>

    </div><!-- /.container-->

    <div class="owl-carousel featured-properties-carousel" id="Idealista">
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-01.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 11,000</div>
                        <h3>3398 Lodgeville Road</h3>
                        <figure>Golden Valley, MN 55427</figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>240m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>2</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>2</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>0</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-02.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 16,000</div>
                        <h3>987 Cantebury Drive</h3>
                        <figure>Chicago, IL 60610 </figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>120m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>1</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-03.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 28,500</div>
                        <h3>1866 Clement Street</h3>
                        <figure>Atlanta, GA 30303 </figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>120m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>1</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-04.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 268,800</div>
                        <h3>2186 Rinehart Road</h3>
                        <figure>Doral, FL 33178 </figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>620m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>3</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>2</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>2</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-05.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 28,500</div>
                        <h3>1866 Clement Street</h3>
                        <figure>Atlanta, GA 30303 </figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>120m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>1</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
        <div class="property big">
            <a href="property-detail.html">
                <div class="property-image">
                    <img alt="" src="assets/img/properties/property-03.jpg">
                </div>
                <div class="overlay">
                    <div class="info">
                        <div class="tag price">$ 28,500</div>
                        <h3>1866 Clement Street</h3>
                        <figure>Atlanta, GA 30303 </figure>
                    </div>
                    <ul class="additional-info">
                        <li>
                            <header>Area:</header>
                            <figure>120m<sup>2</sup></figure>
                        </li>
                        <li>
                            <header>Beds:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Baths:</header>
                            <figure>1</figure>
                        </li>
                        <li>
                            <header>Garages:</header>
                            <figure>1</figure>
                        </li>
                    </ul>
                </div>
            </a>
        </div><!-- /.property -->
    </div>
</section><!-- /#featured-properties -->

<section id="new-properties" class="block">
    <div class="container">
        <header class="section-title">
            <h2>Related Business</h2>
        </header>
    </div><!-- /.container-->
    <div class="container" id="noBusiness">
        <div class="our-process br-white black">
            <div class="row">
                <div class="col-md-4 col-md-offset-2 col-sm-6">
                    <!-- About Four Item -->
                    <div class="our-process-item">
                        <a href="#"><span class="br-lblue">1</span></a>
                        <!-- Header -->
                        <h3>Select your business</h3>
                        <!-- Paragraph -->
                        <p>Choose from a range of business types in the selector.</p>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6">
                    <!-- About Four Item -->
                    <img src="./assets/img/business.png"/>
                </div>

                </div>
                <div class="row">
                <div class="col-md-4 col-md-offset-2 col-sm-6">
                    <div class="our-process-item">
                        <a href="#"> <span class="br-lblue ">2</span></a>
                        <h3>Choose a location</h3>
                        <p>Using the circle feature select a range in the map.</p>
                    </div>
                </div>
                  <div class="col-md-6 col-sm-6">
                    <!-- About Four Item -->
                    <img src="./assets/img/position.png"/>
                </div>
                </div>
                   <div class="row">
                <div class="col-md-4 col-md-offset-2 col-sm-6">
                    <div class="our-process-item">
                        <a href="#"> <span class="br-lblue ">3</span></a>
                        <h3>Get the info</h3>
                        <p>Get info about related business in the area selected.</p>
                    </div>
                </div>
                  <div class="col-md-6 col-sm-6">
                    <!-- About Four Item -->
                   <img src="./assets/img/related.png"/>
                </div>
            </div>
        </div>
    </div><!-- /.container-->
    <div class="container" id="foursquare">

    </div><!-- /.container-->
</section><!-- /#new-properties-->

<section id="our-services" class="block">
    <div class="container">
        <header class="section-title"><h2>Related Tweets nearby</h2></header>
        <div class="row" id="tweets">
            <div class="col-md-3 col-sm-3">
                <div class="feature-box">
                    <figure class="icon"><i class="fa fa-users"></i></figure>
                    <aside class="description">
                        <header><h3>Juan Luis Sanz</h3></header>
                        <p>OMG these shoes are #GORGEOUS</p>
                        <a href="properties-listing.html" class="link-arrow">@kadaki01</a>
                    </aside>
                </div><!-- /.feature-box -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-3 col-sm-3">
                <div class="feature-box">
                    <figure class="icon"><i class="fa fa-users"></i></figure>
                    <aside class="description">
                        <header><h3>Jorge Lavin</h3></header>
                        <p>I love the Hollister shop here, I basically live here!</p>
                        <a href="agents-listing.html" class="link-arrow">@koke0117</a>
                    </aside>
                </div><!-- /.feature-box -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-3 col-sm-3">
                <div class="feature-box">
                    <figure class="icon"><i class="fa fa-users"></i></figure>
                    <aside class="description">
                        <header><h3>Alvaro Sanchez</h3></header>
                        <p>What a delightful afternoon having a relaxing cup of coffe in the Plaza Mayor</p>
                        <a href="#" class="link-arrow">@alvarosata</a>
                    </aside>
                </div><!-- /.feature-box -->
            </div><!-- /.col-md-4 -->
            <div id="wordcloud_twitter" class="col-md-3 col-sm-3"></div>

        </div><!-- /.row -->
    </div><!-- /.container -->
</section><!-- /#our-services -->

<section id="start" class="block">
	<div class="container">
		<header class="section-title"><h2>Start a business</h2></header>

		<h4>Para darte de alta como autónomo, tienes tres opciones: hacer los trámites acudiendo personalmente a Hacienda y a la Seguridad Social, acudir a un PAE (Puntos de Atención al Emprendedor) o hacerlo directamente a través de internet.</h4>
		<div class="row">
			<div class="col-md-12 col-sm-12">
			<div class="accordion ac" id="accordion2">
		                <div class="accordion-group">
		                    <div class="accordion-heading">
		                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
		                        Trámites fiscales
		                        </a>
		                    </div><!-- /accordion-heading -->
		                    <div id="collapseOne" class="accordion-body collapse in">
		                        <div class="accordion-inner">
								<p>A realizar en tu delegación de Hacienda.Antes de iniciar la actividad tienes que realizar la Declaración Censal, "básicamente, un resumen de la situación tributaria en la que se encuentra la persona", indica Rosario Moreno, asesora jurídica de ATA. Para ello, debes presentar, bien telemática, bien presencialmente, el modelo 036 o 037 (simplificado). Darse de alta en el Impuesto de Actividades Económicas (IAE) durante el primer mes de inicio de la actividad. El modelo que tienes que presentar es el 840. Lo importante en este paso es prestar atención a la hora de elegir el epígrafe que defina la actividad que vas a desarrollar. "Y si se pretenden realizar varias, habrá que marcar tantos epígrafes como actividades".</p>
								</div><!-- /accordion-inner -->
		                    </div><!-- /collapse -->
		                </div><!-- /accordion-group -->
		                <br>
		
		                <div class="accordion-group">
		                    <div class="accordion-heading">
		                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
		                        Trámites laborales
		                        </a>
		                    </div>
		                    <div id="collapseTwo" class="accordion-body collapse">
		                        <div class="accordion-inner">
								<p>A realizar en la Administración de la Tesorería General de la Seguridad Social. Debes darte de alta en el Régimen Especial de Trabajadores Autónomos. Para ello, presenta el modelo TA.521 cumplimentado, junto a la fotocopia del alta en el IAE y fotocopia del DNI.</p>
								</div><!-- /accordion-inner -->
		                    </div><!-- /collapse -->
		                </div><!-- /accordion-group -->
		                <br>
		
		                 <div class="accordion-group">
		                    <div class="accordion-heading">
		                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
		                        Otros tramites
		                        </a>
		                    </div>
		                    <div id="collapseThree" class="accordion-body collapse">
		                        <div class="accordion-inner">
								<p>Formalizar la Licencia de Apertura en el Ayuntamiento, en caso de que haya un centro de trabajo. Dar de alta a tus trabajadores en la Seguridad Social, en caso de que decidas contratar a más gente.</p>
								</div><!-- /accordion-inner -->
		                    </div><!-- /collapse -->
		                </div><!-- /accordion-group -->
		                <br>
				
					</div>
		</div><!-- /.row -->
	</div><!-- /.container -->
</section><!-- /#our-services -->

<section id="partners">
	<div class="container">
		<header class="section-title"><h2>Our Partners</h2></header>
		<div class="logos">
			<div style="margin-left:12px;margin-right:12px" class="logo col-md-2 col-sm-2"><a href=""><img width="175" src="assets/img/partners/madrid_emprende.png" alt=""></a></div>
			<div style="margin-left:12px;margin-right:12px" class="logo col-md-2 col-sm-2"><a href=""><img width="175" src="assets/img/partners/emt_alargado.gif" alt=""></a></div>	
			<div style="margin-left:12px;margin-right:12px" class="logo col-md-2 col-sm-2"><a href="http://www.idealista.com/labs/propertyMap.htm?k=1495facc6beff62d21a0282a6f8ac1f1&action=json&operation=sale&radio=40.416914%2C-3.695148&center=40.415914%2C-3.696148"><img width="175" src="assets/img/foursquare.png" alt=""></a></div>
			<div style="margin-left:12px;margin-right:12px" class="logo col-md-2 col-sm-2"><a href="http://www.idealista.com/"><img width="175" src="assets/img/partners/idealista.png" alt=""></a></div>
			<div style="margin-left:12px;margin-right:12px" class="logo col-md-2 col-sm-2"><a href="http://www.idealista.com/labs/propertyMap.htm?k=1495facc6beff62d21a0282a6f8ac1f1&action=json&operation=sale&radio=40.416914%2C-3.695148&center=40.415914%2C-3.696148"><img width="175" src="assets/img/partners/logo_everis.jpg" alt=""></a></div>
		</div>
	</div><!-- /.container -->
</section><!-- /#partners -->
@stop
