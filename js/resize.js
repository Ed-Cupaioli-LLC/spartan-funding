$(function(){

      function switchCSS(windowsize) {
        if (windowsize > 1920) {
            $('.spartan').attr("style", "overflow: unset;")
        } else {
            $('.spartan').attr("style", "overflow: hidden");
        }
      }
  
      $(document).ready(function() {
        switchCSS($(this).width());
        
        $(window).resize(function() {
          switchCSS($(this).width());
        });
      });

    
});
