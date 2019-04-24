$(function() {
  // imageの幅,数を取得
  var imageWidth = $(".image").outerWidth();
  var imageHeight = $(".image").outerHeight();
  var imageNum = $(".image").length;
  var carouselWidth = imageWidth * imageNum;
  $(".carousel").css("width", carouselWidth);
  $(".main").css("width", imageWidth);
  $(".main").css("height", imageHeight);



  var imageCurrent = 0;
  // 移動する関数の作成
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
  // 前へボタンを押したときの動作
  $(".before").click(function() {
    imageCurrent--;
    sliding();
  });
  // 後ろボタンを押したときの動作
  $(".back").click(function() {
    imageCurrent++;
    sliding();
  });
})
