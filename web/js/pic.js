$(function (){
$(".screen li").mouseenter(function (){
  $(this).stop().animate({ //li变成224px，小图片淡出，大图片淡入
    width:224
    }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
  $(this).siblings("li").stop().animate({//其他兄弟li变成69px，小图片淡入，大图片淡出
    width:69
  }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
})
});
