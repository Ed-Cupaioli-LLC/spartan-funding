$(function(){

  //getting current width of user screen size 
  $(window).ready(function() {
    switchCSS($(this).width());
    
    $(window).resize(function() {
      switchCSS($(this).width());
    });
  });
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
  //Navigation hide on scroll show on scroll up 
  var previousScroll = 0;
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();

    if (currentScroll > 110 && currentScroll < $(document).height() - $(window).height()){

      if (currentScroll > previousScroll){
        window.setTimeout(hideNav, 300);
      } else {
        window.setTimeout(showNav, 300);
      }
      previousScroll = currentScroll;
    }
    //remove scroll up when window is at the top
    
    console.log($(window).scrollTop());
  });
  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
    $('#nav').removeClass('scroll-up');
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
    $('#nav').addClass('scroll-up');
    console.log($(window).scrollTop())
    if ($(window).scrollTop() === 0) {
      $('#nav').removeClass('scroll-up'); 
    }
  }

  // function for underlining current links in the nav bar 
      $('#nav a').each(function() {
        //console.log($(this).attr('href'));
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).children().addClass('currentlyActive');
        }
    });

  // Function for arrow display in mobile view 
    $('#nav .arrow').click(function(){
      if($(this).hasClass('0')){
        $(" #nav .dropdown-mobile").attr("style", "display: flex")
        $(this).removeClass('0').addClass('1')
        $('.img').addClass('swirl')
      } else {
        $(" #nav .dropdown-mobile").attr("style", "display: none")
        $(this).removeClass('1').addClass('0')
        $('.img').removeClass('swirl')
      } 
    })
  
      //open close navigation for mobile and tablet views
      $('#nav .hamburger-menu').click(function(){
          $('#nav .show').attr('style', 'display: flex');
          $('body,html').css('position','fixed');

          console.log('im clicked')
      })
      
      $('#nav .exit').click(function(){
          $('#nav .show').attr('style', 'display: none');
          $(" #nav .dropdown-mobile").attr("style", "display: none")
          $('#nav .arrow').removeClass('1').addClass('0')
          $('body,html').css('position','unset');
      })


      // Navigation Logo resize with scrolling
      // $(window).scroll( function(){
      //   if($(document.body).scrollTop()>110 || $(document.documentElement).scrollTop()>110){
      //     $('#nav .logo').css({'width':'13.634vw', "min-width":'14.71rem'})
      //     $('#nav .hamburger-logo').css('width','2.312rem')
      //     $('#nav').css({'box-shadow':'0px 3px 6px #00000029','padding-top':"1.3rem","padding-bottom":".76rem"})
              
      //   } else{
      //     $('#nav .logo').css({'width': '20.05vw', "min-width":'21.63rem'})
      //     $('#nav .hamburger-logo').css('width','3.4rem')
      //     if($(window).width()>1000){
      //       $('#nav').css({'box-shadow':'unset','padding-top':"3.02rem","padding-bottom":"unset" })
               
      //     } 
      //     else{
      //       $('#nav').css({'box-shadow':'unset','padding-top':"1.714rem","padding-bottom":"unset" })
               
      //     }
          
      //   }

      // })
});


