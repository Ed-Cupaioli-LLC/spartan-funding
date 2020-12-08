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
      })
      
      $('#nav .exit').click(function(){
          $('#nav .show').attr('style', 'display: none');
          $(" #nav .dropdown-mobile").attr("style", "display: none")
          $('#nav .arrow').removeClass('1').addClass('0')
          $('body,html').css('position','unset');
      })

});


