$(function(){
    $('.text-link').click(function() {
        // this removes the underline class from all other ".navigation" links.
        $('.text-link').removeClass('currentlyActive');
    
        // this makes the one that was clicked underlined
        $(this).addClass('currentlyActive');
      });
    
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}