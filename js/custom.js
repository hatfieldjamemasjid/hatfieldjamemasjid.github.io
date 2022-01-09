$(document).ready(function(){
	"use strict";	

		/*
			==============================================
					tabs script
			==============================================
		*/
		
		$('.bxslider').bxSlider({
			autoplay:true,
			autoplayspeed:300,
			pagerCustom: '#bx-pager'
		});
	
		
			
	/* ==================================================================
					Number Count Up(WayPoints) Script
	  =================================================================	*/		
		
		$('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		
		if($(".DateCountdown").length){
			$(".DateCountdown").TimeCircles();
		}
	
		/*
			==============================================================
			   PrettyPhoto Script Start
			============================================================== 
			*/

			if($("a[data-rel^='prettyPhoto']").length){
				$("a[data-rel^='prettyPhoto']").prettyPhoto();
			}
			
			
			
		/*
			==============================================
					banner slider script
			==============================================
		*/
			if($('.kode-team-slide').length){
				$('.kode-team-slide').slick({
					  infinite: true,
					  speed: 200,
					  autoplay:true,
					  slidesToShow: 4,
					responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]
				});
			}
			
			
		/*
			==============================================
					loader slider script
			==============================================
		*/
			if($('.progress-bar').length){
				$(".progress-bar").loading();
			}


		/*
			==============================================
					chosen select
			==============================================
		*/
	
			if($('.chosen-select').length){
				$(".chosen-select").chosen()	
			}	
			
		/*
			==============================================
					countdown script
			==============================================
		*/			
			if($('.countdown').length){
				$('.countdown').downCount({ date: '08/08/2017 12:00:00', offset: +1 });
			}
			 
		
		/*
			==============================================
					banner slider script
			==============================================
		*/
			if($('.kode-product-slide').length){
				$('.kode-product-slide').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  slidesToShow: 1,
				});
			}
			
			
			
			/* ---------------------------------------------------------------------- */
					/*	Click to Top 
			/* ---------------------------------------------------------------------- */
			if($('#child-topbtn').length){
				$('#child-topbtn').on("click",function() {		
					jQuery('html, body').animate({scrollTop : 0},800);
					return false;
				});
			}
			
			
			
			/* ---------------------------------------------------------------------- */
					/*	Click to Top 
			/* ---------------------------------------------------------------------- */
			if($('ul.tabs').length){
				$('ul.tabs').each(function(){

					var $active, $content, $links = $(this).find('a');

					$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
					$active.addClass('active');
					$content = $($active.attr('href'));

					$links.not($active).each(function () {
						$($(this).attr('href')).hide();
					});

					$(this).on('click', 'a', function(e){

						$active.removeClass('active');
						$content.fadeOut("slow");

						$active = $(this);
						$content = $($(this).attr('href'));

						$active.addClass('active');
						$content.fadeIn("slow");

						e.preventDefault();
					});
				});
			}
			/* =======================================================================
					 WOW SLOW Script
			   =======================================================================
			*/	
				
			if($('.bxslider').length){
				var wow = new WOW(
				  {
					animateClass: 'animated',
					offset:       100,
					callback:     function(box) {
					  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
					}
				  }
				);
				wow.init();
			}
			
			/* =======================================================================
					 WOW SLOW Script
			   =======================================================================
			*/	
			if($('.kode_audio_naat').length){
				$(".kode_audio_naat").musicPlayer({
					playlistItemSelector: 'div',
					elements: ['artwork', 'information', 'controls', 'progress', 'time', 'volume'], // ==> This will display in  the order it is inserted
					elements: [ 'controls' , 'information', 'artwork', 'progress', 'time', 'volume' ],
					controlElements: ['backward', 'play', 'forward', 'stop'],
					timeElements: ['current', 'duration'],
				   timeSeparator: " : ", // ==> Only used if two elements in timeElements option
					infoElements: [  'title', 'artist' ],  

					volume: 10,
					autoPlay: true,
					loop: true,
				 
					


				});
			}
			
		/*
			==============================================
					banner2 slider script
			==============================================
		*/
			if($('.kode-banner2-slid').length){
				$('.kode-banner2-slid').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  slidesToShow: 1,
				});
			}
			/* =======================================================================
					 WOW SLOW Script
			   =======================================================================
			*/	
				
			if($('.kode-banner2-slid').length){
				var wow = new WOW(
				  {
					animateClass: 'animated',
					offset:       100,
					callback:     function(box) {
					  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
					}
				  }
				);
				wow.init();
			}
			
		/*
			==============================================
					slick slider start
			==============================================
		*/
			if($('.kode-pholisophy-slide').length){
				$('.kode-pholisophy-slide').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  dots:true,
				  slidesToShow: 4,
				  responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]
				});
			}
		/*
			==============================================
					slick slider start
			==============================================
		*/
			if($('.kode-client-slide').length){
				$('.kode-client-slide').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  slidesToShow: 3,
				  responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]
				});
			}	
			
				
		/*
			==============================================
					MAP  start
			==============================================
		*/
			if($('#map-canvas').length){
				google.maps.event.addDomListener(window, 'load', initialize);
			}

			function initialize() {
			var MY_MAPTYPE_ID = 'custom_style';
			var map;
			var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
			var featureOpts = [
				{
				  stylers: [
					{ hue: '#ebebeb' },			
					{ visibility: 'simplified' },
					{ gamma: 0.7 },
					{ saturation: -200 },
					{ lightness: 15 },
					{ weight: 0.6 }
				  ]
				},
				{
				featureType: "road",
				  elementType: "geometry",
				  stylers: [
					{ lightness: 30 },
					{ visibility: "simplified" }
				  ]
				},
				{
				  elementType: 'labels',
				  stylers: [		  
					{ visibility: 'on' }
				  ]
				},
				{
				  featureType: 'water',
				  stylers: [
					{ color: '#ebebeb' }
				  ]
				}
			];	

			var mapOptions = {
				zoom: 8,
				center: brooklyn,
				mapTypeControlOptions: {
				  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
				},
				mapTypeId: MY_MAPTYPE_ID
			};

			map = new google.maps.Map(document.getElementById('map-canvas'),
				  mapOptions);

			var styledMapOptions = {
				name: 'Custom Style'
			};

			var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

			map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		}
		
		
		/*
			==============================================
					slick slider start
			==============================================
		*/
			if($('.coming-event-slide').length){
				$('.coming-event-slide').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  dots:true,
				  slidesToShow: 1,
				});
			}
			
		/*
			==============================================
					filter script start
			==============================================
		*/

			if($('.filtr-container').length){
				
				$('.filtr-container').filterizr();
			}
			
			
	/*
	  ==============================================================
		   Progress Bar Script Start
	  ============================================================== */  
	  
	  $('.progressbar').each(function(){
			var t = $(this),
				dataperc = t.attr('data-perc'),
				barperc = Math.round(dataperc*5.56);
			t.find('.bar').animate({width:barperc}, dataperc*25);
			t.find('.label').append('<div class="perc"></div>');
			
			function perc() {
				var length = t.find('.bar').css('width'),
					perc = Math.round(parseInt(length)/5.56),
					labelpos = (parseInt(length)-2);
				t.find('.label').css('left', labelpos);
				t.find('.perc').text(perc+'%');
			}
			perc();
			setInterval(perc, 0); 
		});
		
		/*
			==============================================
					slick slider start
			==============================================
		*/
			if($('.gallery-slide').length){
				$('.gallery-slide').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  dots:true,
				  slidesToShow: 1,
				});
			}
			
			/*
			==============================================
					slick slider start
			==============================================
		*/
			if($('.donors-silde').length){
				$('.donors-silde').slick({
				  infinite: true,
				  speed: 200,
				  autoplay:true,
				  slidesToShow: 4,
				   responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]
				});
			}
			
		/*
			==============================================
					slick slider start
			==============================================
		*/
		
		
		/* ---------------------------------------------------------------------- */
		/*	DL Responsive Menu
		/* ---------------------------------------------------------------------- */
			if(typeof($.fn.dlmenu) == 'function'){
				$('#kode-responsive-navigation').each(function(){
					$(this).find('.dl-submenu').each(function(){
						if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
							var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
							parent_nav.append($(this).siblings('a').clone());
							
							$(this).prepend(parent_nav);
						}
					});
					$(this).dlmenu();
				});
			}
		
});

	