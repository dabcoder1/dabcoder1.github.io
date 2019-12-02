; (function($){

	$(document).ready(function(){
        
        // Sticky Menu
        $('#menu2').slicknav({
              label: '',
              duration: 1000
            });
        
        
        //Sticky Header
		window.onscroll = function() {myFunction()};
    
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
		
		

        
	});



})(jQuery);