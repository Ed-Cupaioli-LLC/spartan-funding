//Loan Options acordion logic
$(function() {
$("#loan-options .option").each(function(){
       
    // $(this).children("div:gt(1)").hide();
    $(this).children("div").slice(2).hide();
    if( $(window).width()> 1000){
      $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden;')
    }
    if( $(window).width()<= 1000){
      $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*6); overflow: hidden;')
    }
    if( $(window).width()<= 500){
      $(this).children('div:eq(1)').attr('style', 'max-height: calc(3.5rem*7); overflow: hidden; ')
    }
   
    
  })

  $("#loan-options .expand").on('click', (function(){
    // $(this).siblings("div:gt(1)").slideToggle()
    $(this).siblings("div").slice(2).slideToggle()
    if($(this).hasClass('0')){
      $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
      $(this).removeClass('0').addClass('1')
    }if( $(window).width()>1000 && $(this).hasClass('1')){
        $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden;')
        $(this).removeClass('1').addClass('0')
    }if( $(window).width()<= 1000 && $(this).hasClass('1')){
      $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*6); overflow: hidden;')
      $(this).removeClass('1').addClass('0')
    }if( $(window).width()<= 500 && $(this).hasClass('1')){
      $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*9); overflow: hidden;')
      $(this).removeClass('1').addClass('0')
    } 
  //   $(this).siblings("div").slice(2).slideToggle()
  //   // $(this).slideToggle()
  // if($(this).hasClass('0')){
  //   $(this).siblings('div:eq(1)').attr('style', 'height: unset; overflow: unset')
  //   $(this).removeClass('0').addClass('1')
  // } else {
  //   $(this).siblings('div:eq(1)').attr('style', 'max-height: calc(3.5rem*3); overflow: hidden; text-overflow: ellipsis;')
  //   $(this).removeClass('1').addClass('0')
  // }
  console.log($(this).text())
  $(this).text($(this).text() === "Read more" ? "Read less" : "Read more")

  
}));

});