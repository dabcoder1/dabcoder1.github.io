(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
    	$(".myslider").owlCarousel({
    		margin: 20,
    		loop: true,
    		dots: true,
    		nav: false,
            autoplay: true,
            mouseDrag: false,
            responsive : {
                0 : {
                    items : 1
                },
                768 : {
                    items : 2
                },
                992 : {
                    items : 4
                }
            }
    	});

    });


}(jQuery));	