$(function(){
  $(document).ready(function() {
    switchCSS($(this).width());
    console.log('hello')
    
    $(window).resize(function() {
      switchCSS($(this).width());
    });
  });
    $('#nav .text-link').click(function() {
        // this removes the underline class from all other ".navigation" links.
        $('.text-link').removeClass('currentlyActive');
    
        // this makes the one that was clicked underlined
        $(this).addClass('currentlyActive');
      });


      

      function switchCSS(windowsize) {
        console.log(windowsize)
        if (windowsize < 1025) {
            $('#nav .menu').attr("style", "display: none")
            $('#nav .hamburger-menu').attr("style", "display: flex")

        } 
        else{
          $('#nav .menu').attr("style", "display: flex")
          $('#nav .hamburger-menu').attr("style", "display: none")
        }
      }
  
      $('#nav .hamburger-menu').click(function(){
        
      })
    

});


