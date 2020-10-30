let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../img/今日营业中.jpg') {
    myImage.setAttribute('src', '../img/1.jpg');
  } else {
    myImage.setAttribute('src', '../img/今日营业中.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent =  myName+'打开了林宥嘉的主页';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '林宥嘉' ;
}
myButton.onclick = function() {
  setUserName();
}

