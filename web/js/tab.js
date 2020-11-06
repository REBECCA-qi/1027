var that;
class Tab{
  constructor(id) {
    that=this;
    this.main = document.querySelector(id);
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.init();
  }
    init(){
      for(var i=0;i<this.lis.length;i++){
        this.lis[i].index = i;
        this.lis[i].onclick = this.toggleTab;
        }
      }

  toggleTab(){
    console.log(this.index);
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }
}
new Tab('#tab');

