//Loan Options acordion logic
$(function() {
  
  $("#loan-options .option").each(function(){
    var content = $(this).children('.content').html();
    var arr = content.split('<br>');
    var body = $("<p>").addClass('fun')
    body.append(arr[0])
      $(this).children("div:gt(0)").hide();
      
     $(this).children('div').children('.sub-title').append(body)
    })
  
    $("#loan-options .expand").on('click', (function(){
      $(this).siblings('div').find('.fun').hide()
      $(this).siblings("div:gt(1)").slideToggle()
      if($(this).hasClass('0')){
        $(this).siblings('div').find('.fun').hide()
        $(this).addClass('1').removeClass('0')
      } else{
        $(this).siblings('div').find('.fun').show()
        $(this).addClass('0').removeClass('1')
      }
    console.log($(this).text())
    $(this).children('span').text($(this).children('span').text() === "Read more" ? "Read less" : "Read more");
    var src = $(this).children('img').attr('src') === '/img/options/more.png' ? '/img/options/less.png' : '/img/options/more.png';
    $(this).children('img').attr('src', src)
    console.log($(this).children('img').attr('src'))
    
  }));
  
  });
  