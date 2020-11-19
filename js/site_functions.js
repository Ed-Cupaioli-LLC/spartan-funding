$(function(){

  //getting current heiht and width of user screen size 
  $(document).ready(function() {
    switchCSS($(this).width());
    console.log('hello')
    
    $(window).resize(function() {
      switchCSS($(this).width());
    });
  });

  //function for underlining current links in the nav bar 

    $('#nav .text-link').click(function() {
        // this removes the underline class from all other ".navigation" links.
        $('.text-link').removeClass('currentlyActive');
    
        // this makes the one that was clicked underlined
        $(this).addClass('currentlyActive');
      });


  // Function for arrow display in mobile view 
    $('#nav .arrow').click(function(){
      if($(this).hasClass('0')){
        $(" #nav .dropdown").attr("style", "display: flex")
        $(this).removeClass('0').addClass('1')
      } else {
        $(" #nav .dropdown").attr("style", "display: none")
        $(this).removeClass('1').addClass('0')
      }
      
    })

    // Function for navigation display between web and mobile views
      function switchCSS(windowsize) {
        console.log(windowsize)
        if (windowsize < 1025) {
            $('#nav .menu').attr("style", "display: none")
            $('#nav .hamburger-menu').attr("style", "display: block")

        } 
        else{
          $('#nav .menu').attr("style", "display: flex")
          $('#nav .hamburger-menu').attr("style", "display: none")
        }
      }
  
      $('#nav .hamburger-menu').click(function(){
          $('#nav .mobile-menu').addClass('show').removeClass('mobile-menu')
        
      })
      $('#nav .exit').click(function(){
          $('#nav .show').hide()
      })
//Loan Options acordion logic
 
      $("#loan-options .option").each(function(){
        $(this).children('div:eq(1)').attr('style', 'height: 10rem; max-height:15rem; overflow: hidden')
        $(this).children("div:gt(1)").hide();
       
      })

      $("#loan-options .expand").click(function(){
      $(this).siblings("div:gt(1)").slideToggle()
      if($(this).text()==="Show more"){
        $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
      } else {
        $(this).siblings('div:eq(1)').attr('style', 'height: 15rem; overflow: hidden')
      }
     
      console.log($(this).text())
      $(this).text($(this).text() === "Show more" ? "Show less" : "Show more");
});
    

});


