$(function() {
  var imageWidth = $(".image").outerWidth();
  var imageHeight = $(".image").outerHeight();
  var imageNum = $(".image").length;
  var carouselWidth = imageWidth * imageNum;
  $(".carousel").css("width", carouselWidth);
  $(".main").css("width", imageWidth);
  $(".main").css("height", imageHeight);

  var imageCurrent = 0;

  var sliding = function(){
    if(imageCurrent < 0){
      imageCurrent = imageNum - 1;
    }else if(imageCurrent > imageNum -1){
      imageCurrent = 0;
    }
    $(".carousel").stop().animate({
      left: imageCurrent * -imageWidth
    },"easing");
  }

  var buttonColor = function(){
    $(".circle").css("background", "#C0C0C0");
    $(`#circle` + imageCurrent).css("background", "black");
  }

  buttonColor();

  var repeat = function() {
    var timer = setInterval(function() {
      buttonColor();
      sliding();
      if (imageCurrent > imageNum - 2) {
        clearInterval(timer);
      }
      imageCurrent++;
    },1000);
  }
  repeat();

  $(".circle").click(function() {
    imageCurrent = $(".circle").index($(this));
    buttonColor();
    sliding();
    repeat();
  });


});
