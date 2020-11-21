$(function () {
  //获取ul中的所有的li,调用鼠标进入的事件
  $(".tabList>li").click(function () {
    //移除当前的li的所有兄弟元素li的类样式
    $(this).siblings("li").removeClass("active");
    //让当前li添加类样式
    $(this).addClass("active");

    //获取当前的li的索引
    let index = $(this).index();
    //获取div中对应的索引的这个div,让这个div的所有的兄弟元素div全部移除selected类样式,让当前对应的div(索引对应)应用selected类样式
    $(".tabCon>div:eq("+index+")").siblings("div").removeClass("show");
    //当前对应的div添加类样式
    $(".tabCon>div:eq("+index+")").addClass("show");
  });
});
