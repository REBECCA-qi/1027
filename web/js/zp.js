//切换图片内容
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let flag1 = 1;
let flag2 = 1;
let flag3 = 1;
let flag4 = 1;

img1.onclick = function () {
  if (flag1 === 1) {
    img1.src = 'img/1.jpg';
    flag1 = 2;
  } else if (flag1 === 2){
    img1.src = 'img/今日营业中.jpg';
    flag1 = 1;
  }
}
img2.onclick = function () {
  if (flag2 === 1) {
    img2.src = 'img/1.jpg';
    flag2 = 2;
  } else if (flag2 === 2){
    img2.src = 'img/口的形状.jpg';
    flag2 = 1;
  }
}
img3.onclick = function () {
  if (flag3 === 1) {
    img3.src = 'img/1.jpg';
    flag3 = 2;
  } else if (flag3 === 2){
    img3.src = 'img/大小说家.jpg';
    flag3 = 1;
  }
}
img4.onclick = function () {
  if (flag4 === 1) {
    img4.src = 'img/1.jpg';
    flag4 = 2;
  } else if (flag4 === 2){
    img4.src = 'img/美妙生活.jpg';
    flag4 = 1;
  }
}
