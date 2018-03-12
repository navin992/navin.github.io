/*--------------------- Copyright (c) 2017 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.0
Assigned to: ThemeForest
-------------------------------------------------------------------*/
(function($){
  "use strict";
	
	// Preloader Js
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(200).fadeOut("slow");
	});
	
	// ready function
	jQuery(document).ready(function($){
   		var $this = $(window);
	
	//bg window height Js
	var window_height = window.innerHeight;
		$(".prt_home_wrapper").css("height", window_height);
	
	// for counter 
	$('.timer').appear(function() {
		$(this).countTo();
	});
	
	// About Page Profile Slider Js
	$('.prt_profile_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	//Skills Charts
	var circle1 = Circles.create({
		id: 'circles-1',
		value: 90,
		radius: 100,
		number: 90,
		text: '90%',
		width: 8,
		colors: ["#202020", "#00c8ff"],
        duration: 900
    });
    var circle2 = Circles.create({
        id: 'circles-2',
        value: 80,
        radius: 100,
        number: 80,
        text: '80%',
        width: 8,
        colors: ["#202020", "#ff8511"],
        duration: 900
    });
    var circle3 = Circles.create({
        id: 'circles-3',
        value: 75,
        radius: 100,
        number: 75,
        text: '75%',
        width: 8,
        colors: ["#202020", "#f26525"],
        duration: 900
    });
    var circle4 = Circles.create({
        id: 'circles-4',
        value: 70,
        radius: 100,
        number: 70,
        text: '70%',
        width: 8,
        colors: ["#202020", "#1d8bbe"],
        duration: 900
    });
	
	// Service Page Client Slider Js
	$('.prt_client_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	
	// Portfolio popup Js
	$('.popup-gallery').magnificPopup({
		delegate: 'a.imageopen',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Portfolio video Popup js
	$('a.popup-youtube').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	// Service Page Image Slides Js
	$('div.prt_img_click').on('click' , function(){
		if(!$(this).hasClass('active')){
			$('div.prt_services_slider_imgs img').removeClass('active');
			var target = $('div.prt_services_slider_imgs .img_'+$(this).attr('id'));
			var targetImg = target[0].outerHTML;
			target.remove();
			$('div.prt_services_slider_imgs').prepend(targetImg);
			$('div.prt_services_slider_imgs img:first').addClass('active');
			$('div.prt_services_slider_box .prt_img_click').removeClass('active');
			$(this).addClass('active');	
		}
	});
	
	// Open Close main Section Js
	var AplCss;
	var targetSection;
	var tar;
	var timing = 500;
	$('div.prt_menu_wrapper a').on('click' , function(e){
		e.preventDefault();
		tar = $(this).attr('href').split('#')[1];
		targetSection = $('.prt_'+tar+'_wrapper');
		
		if(tar == 'about'){
			AplCss  = {'top':0};
		}else if(tar == 'contact'){
			AplCss  = {'left':0};
		}else if(tar == 'services'){
			AplCss  = {'bottom':0 , 'top':0};
		}else if(tar == 'portfolio'){
			AplCss  = {'right':0};
		}
		targetSection.css('display', 'block');
		targetSection.animate(AplCss, timing);
	});
	$('img.prt_close').on('click' , function(){
		hide_section();
	});
	
	$('img#prt_close_tab').on('click' , function(){
		hide_section();
	});
	function hide_section(){
		if(tar == 'about'){
			AplCss  = {'display':'none', 'top':'-100%'};
		}else if(tar == 'contact'){
			AplCss  = {'display':'none','left':'100%'};
		}else if(tar == 'services'){
			AplCss  = {'display':'none','bottom':'0' , 'top':'100%'};
		}else if(tar == 'portfolio'){
			AplCss  = {'display':'none','right':'100%'};
		}
		setTimeout(function(){ targetSection.css('display', 'none'); }, timing);
		targetSection.animate(AplCss, timing);
	};	
		
	});
	
})();