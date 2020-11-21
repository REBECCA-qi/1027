let btn = document.getElementById('btn');
btn.onclick = function (){
  alert('欢迎进入迷幻王子的世界');
}
btn.onmouseover = function (){
  this.style.background='#F9D64B';
}
btn.onmouseout = function (){
  this.style.background = '';
}



let button = document.querySelector('button');
let h1 = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。'); //prompt() 方法用于显示可提示用户进行输入的对话框。
  localStorage.setItem('name', myName); //setItem() 接受一个键名和值作为参数，将会把键名添加到存储中.
  h1.textContent =  myName+'打开了林宥嘉的主页';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  h1.textContent = '欢迎进入林宥嘉的主页' ;
}
button.onclick = function() {
  setUserName();
}
