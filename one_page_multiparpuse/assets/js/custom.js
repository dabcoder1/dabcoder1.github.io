(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".choose_us_slider").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			margin: 50
		});

        $(".team_slider").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			margin: 25
		});

        $(".client_quote_slider").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
		});
		
        $(".blog_slider").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			nav: false,
			dots: true,
			margin: 25
		});

		var dot = $(".blog_slider .owl-dot");
		dot.each(function(){
			var index =$(this).index();
			$(this).text(index + 1);
		});
		
		
		
        $(".brand_slider").owlCarousel({
			items: 5,
			autoplay: false,
			loop: true,
			nav: false,
			dots: false
		});
		
		
		// Sticky Header
		
		$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
       $('.header_bottom_area').addClass('fixed-header');
			}
			else {
			   $('.header_bottom_area').removeClass('fixed-header');
			}
		});
		
		
		
		

    });



}(jQuery));	