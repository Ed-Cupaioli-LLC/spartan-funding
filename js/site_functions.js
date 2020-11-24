$(function(){

  //getting current heiht and width of user screen size 
  $(window).ready(function() {
    switchCSS($(this).width());
    
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
        $(" #nav .dropdown-mobile").attr("style", "display: flex")
        $(this).removeClass('0').addClass('1')
      } else {
        $(" #nav .dropdown-mobile").attr("style", "display: none")
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
  
      //open close for small window navigation
      $('#nav .hamburger-menu').click(function(){
          $('#nav .show').attr('style', 'display: flex');
          console.log('im clicked')
      })
      
      $('#nav .exit').click(function(){
          $('#nav .show').attr('style', 'display: none');
          $(" #nav .dropdown-mobile").attr("style", "display: none")
          $('#nav .arrow').removeClass('1').addClass('0')
      })
//Loan Options acordion logic
 
      $("#loan-options .option").each(function(){
        $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden; text-overflow: ellipsis;')
        // $(this).children("div:gt(1)").hide();
        $(this).children("div").slice(2).hide();
       
      })

      $("#loan-options .expand").click(function(){
        // $(this).siblings("div:gt(1)").slideToggle()
        $(this).siblings("div").slice(2).slideToggle()
        // $(this).slideToggle()
      if($(this).hasClass('0')){
        $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
        $(this).removeClass('0').addClass('1')
      } else {
        $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden; text-overflow: ellipsis;')
        $(this).removeClass('1').addClass('0')
      }
      console.log($(this).text())
      $(this).text($(this).text() === "Read more" ? "Read less" : "Read more")
    
      
});



});


