var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    this.ul = this.main.querySelector(".fisrstnav ul:first-child");
    this.fsection = this.main.querySelector(".tabscon");
    this.init();
  };

  init() {
    this.updateNode();
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
    }
  };
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
  };
  toggleTab() {
    that.clearClass();
    console.log("tab" + this.index);
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  };
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  };
}
var tab = new Tab("#tab");
