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
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
      if (currentScroll > previousScroll){
        window.setTimeout(hideNav, 500);
      } else {
        window.setTimeout(showNav, 300);
      }
      previousScroll = currentScroll;
    }
  });
  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }

  // function for underlining current links in the nav bar 
  
//     $('#nav .text-link').click(function() {
//         $('.text-link').removeClass('currentlyActive');
//         $(this).addClass('currentlyActive');
//         localStorage.setItem('#nav .text-link', $activeLink.html())
       
//       });
      // let url = window.location.href;
      // $('#nav a').each(function() {
      //   if (this.href === url) {
      //     $(this).closest('p').addClass('currentlyActive');
      //     localStorage.setItem('#nav .text-link', $activeLink.html())
      //   }
      // });
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
      } else {
        $(" #nav .dropdown-mobile").attr("style", "display: none")
        $(this).removeClass('1').addClass('0')
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


      //Navigation Logo resize with scrolling
      $(window).scroll( function(){
        if($(document.body).scrollTop()>100 || $(document.documentElement).scrollTop()>100){
          $('#nav .logo').css({'width':'13.634vw', "min-width":'14.71rem'})
          $('#nav .hamburger-logo').css('width','2.312rem')
          $('#nav').css({'box-shadow':'0px 3px 6px #00000029','padding-top':"1.3rem","padding-bottom":".76rem"})
        } else{
          $('#nav .logo').css({'width': '20.05vw', "min-width":'21.63rem'})
          $('#nav .hamburger-logo').css('width','3.4rem')
          if($(window).width()>1000){
            $('#nav').css({'box-shadow':'unset','padding-top':"3.02rem","padding-bottom":"unset" })

          } 
          else{
            $('#nav').css({'box-shadow':'unset','padding-top':"1.714rem","padding-bottom":"unset" })

          }
          
        }

      })
//Loan Options acordion logic
 
//       $("#loan-options .option").each(function(){
       
//         // $(this).children("div:gt(1)").hide();
//         $(this).children("div").slice(2).hide();
//         if( $(window).width()> 1000){
//           $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden;')
//         }
//         if( $(window).width()<= 1000){
//           $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*6); overflow: hidden;')
//         }
//         if( $(window).width()<= 500){
//           $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*7); overflow: hidden; ')
//         }
       
        
//       })

//       $("#loan-options .expand").on('click', (function(){
//         // $(this).siblings("div:gt(1)").slideToggle()
//         $(this).siblings("div").slice(2).slideToggle()
//         if($(this).hasClass('0')){
//           $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
//           $(this).removeClass('0').addClass('1')
//         }if( $(window).height()<= 1024 && $(this).hasClass('1')){
//           $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*6); overflow: hidden; text-overflow: ellipsis;')
//           $(this).removeClass('1').addClass('0')
//         }if( $(window).height()<= 850 && $(this).hasClass('1')){
//           $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*9); overflow: hidden; text-overflow: ellipsis;')
//           $(this).removeClass('1').addClass('0')
//         } if( $(window).height()>1024 && $(this).hasClass('1')){
//           $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden; text-overflow: ellipsis;')
//           $(this).removeClass('1').addClass('0')
//         }
//       //   $(this).siblings("div").slice(2).slideToggle()
//       //   // $(this).slideToggle()
//       // if($(this).hasClass('0')){
//       //   $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
//       //   $(this).removeClass('0').addClass('1')
//       // } else {
//       //   $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden; text-overflow: ellipsis;')
//       //   $(this).removeClass('1').addClass('0')
//       // }
//       console.log($(this).text())
//       $(this).text($(this).text() === "Read more" ? "Read less" : "Read more")
    
      
// }));



});


