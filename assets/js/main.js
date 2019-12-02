(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        new WOW().init();
        
        
        //For Sticky Header
        // grab an element
        var myElement = document.querySelector(".stick_menu");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init();
           

    // get the header height
    //	var headerHeight = $(".header").outerHeight();
    //smooth scrolling
    	$(".slide_section").click(function(e){
    		var linkHref = $(this).attr("href");
    		$("html, body").animate({
    			scrollTop: $(linkHref).offset().top /* - headerHeight */
    		}, 1000);
    	e.preventDefault();
    	});     
            
    //Change menu item color
        $(".mainmenu li a").click(function(){
    		$(".mainmenu li a").removeClass("item_color");
    		$(this).addClass("item_color");
    	});
            
            
            
    // Page Hero Slider
            $(".heroslider").owlCarousel({
    			items: 1,
    			autoplay: true,
    			loop: true,
    			nav: true,
    			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    			animateOut: 'fadeOut',
    			animateIn: 'fadeIn',
    			mouseDrag: false
    		});
                
        
//MixItUp
//    var mixer = mixitup('.mixitup');
//    var mixer = mixitup(containerEl);
//    var mixer = mixitup(containerEl, {
//        selectors: {
//            target: '.blog-item'
//        },
//        animation: {
//            duration: 1000
//        }
//
//    });
    
        
// Header Logo Add or Remove
$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
    $('.logo').addClass('addremovelogo');
      
   }
   else {
    $('.logo').removeClass('addremovelogo');
   }
});
        
        
        
        
        
        
        
        
        
        
        
        
        
    });


    $('#menu2').slicknav({
            label: '',
            duration: 1000
        }); 
    
    
    
    jQuery(window).load(function(){});

}(jQuery));	