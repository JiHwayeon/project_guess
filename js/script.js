$(".goTop").click(function(){
  event.preventDefault();

  var int = $("#intro").offset().top;
  $("html,body").stop().animate({scrollTop : int});
}); // goTop 클릭 끝
$(window).scroll(function(){
  setH();
});

var gnb = $(".gnb").position().top;
function setH(){
  var top = $("html, body").scrollTop();

  if(top >= gnb){
    $(".gnb").css({position : "fixed", top : 0})
  }else{
    $(".gnb").css({position : "relative"})
  }
};

//countdown

var myDate =new Date();

myDate.setDate(myDate.getDate() + 90);

$("#countdown").countdown(myDate,function (event) {

  $(this).html(

      event.strftime(

          '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'

      )

  );
});

