jQuery(document).ready(function($){
	
	$('.hero_slider').owlCarousel({
		items: 1,
		loop: true,
        dots: false,
		nav: false,
		autoplay: false
});
	
	$('.member_slider').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            autoplay: false
    });
	
	$('.consert_n_video_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            autoplay: false
    });
	
	
	
    
    //Youtube Video PopUp
    $('.popup-youtube').magnificPopup({
		  type: 'iframe',
		  
		  
		  iframe: {
			 markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						'<div class="mfp-title">Some caption</div>'+
					  '</div>'
		  },
		  callbacks: {
			markupParse: function(template, values, item) {
			 values.title = item.el.attr('title');
			}
		  }
		  
		  
		});
    
    
    
    
	

});
