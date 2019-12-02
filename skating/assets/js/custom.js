; (function($){

	$(document).ready(function(){
        
        /*=========== Hero Slider ===========*/
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
        
        /*=========== Hero Slider ===========*/
        $(".hero_slider").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			nav: false,
			dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
		});

		var dot = $(".hero_slider .owl-dot");
		dot.each(function(){
			var index =$(this).index();
			$(this).text(index + 1);
		});
        
        //Google Map
		  var map = new GMaps({
			el: '#map',
			lat: 23.404551,
			lng: 89.024811,
			scrollwheel: false
		  });

		  GMaps.geolocate({
			success: function(position){
			  map.setCenter(position.coords.latitude, position.coords.longitude);
			},
			error: function(error){
			  
			},
			not_supported: function(){
			  alert("Your browser does not support geolocation");
			},
			always: function(){
			  
			}
		  });
        
	});



})(jQuery);