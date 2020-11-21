//显示/隐藏视频
let videobtn = document.getElementById('videobtn');
let isShow = true;//true显示 false隐藏


videobtn.onclick = function (){
  let video = document.getElementsByTagName('video');
  if (isShow){
    mv.className='hidden';
    this.value = '显示视频';     //click事件属于videobtn，因此在这个事件处理函数中，this指向videobtn
    isShow = false;
  }
  else{
    mv.className='show';
    this.value='隐藏视频';
    isShow=true;
  }
}
