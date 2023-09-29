$(document).ready(function(){
    // $("#btn1")(function(){
    //   $("p").prepend("<b>Prepended text</b>. ");
    // });

    // $(".btn8").click(function(){
    //   $(".change").css('color','red');
    // });
});
 $(window).scroll(function(){
var scroll = $(window).scrollTop();
 if(scroll > 800){
  $('body').addClass('hederfix');
}
else{
  $('body').removeClass('hederfix');
}
if(scroll > 1000){
  $('body').addClass('hederfix-1');
}
else{
  $('body').removeClass('hederfix-1');
}
});
