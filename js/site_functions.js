$(function(){

  // getting current width of user screen size 
  $(window).ready(function() {
    switchCSS($(this).width());
    
    $(window).resize(function() {
      switchCSS($(this).width());
    });


  });
  // Function for navigation display between web and mobile views
  function switchCSS(windowsize) {
    if (windowsize < 1025 || $(document).width()<1025 ) {
        $('#nav .menu').addClass('hide').removeClass('display')
        $('#nav .hamburger-menu').addClass('display-mobile').removeClass('hide')
    } 
    else{
      $('#nav .menu').addClass('display').removeClass('hide')
      $('#nav .hamburger-menu').addClass('hide').removeClass('display-mobile')
    }
  }
  // Navigation hide on scroll show on scroll up 
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
    if ($(window).scrollTop() < 100) {
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
  //hamburger menu

      $('.hamburger-menu').click(function(){
        if ($(this).children('div').hasClass('change') !== true){
            $(this).addClass('active')
            $(this).children('div').addClass('change')
            $('.slide').addClass('show').removeClass('hide')
            $('body,html').css('position','fixed');
        }
        else if ($(this).children('div').hasClass('change') === true){
            $(this).children('div').removeClass('change')
            $(this).removeClass('active')
            $('.slide').addClass('hide').removeClass('show')
            $('body,html').css('position','unset');
           
            }
    })

});


