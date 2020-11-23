let that;   //声明全局变量
class Tab {
  constructor(id) {  //获取元素
    that = this;
    this.main = document.querySelector(id);    //获取了tab大盒子
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.init();  //调用init
  };

  init() {   //初始化操作让相关的元素绑定事件
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;  //为每一个li添加属性
      this.lis[i].onclick = this.toggleTab;   //调用切换功能函数
    }
  };
  toggleTab() {         //toggleTab 里的this指向的都是li
    that.clearClass();        //调用clearClass
    this.className = "liactive";       //为当前的li添加样式
    that.sections[this.index].className = "conactive";     //that指向constructor里的this
  };
  clearClass() {//清除样式
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  };
}
let tab = new Tab("#tab");//创建实例
