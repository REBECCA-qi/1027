let btnLogin = document.getElementById('btnLogin');

btnLogin.onclick=function (){
  let telNum = document.getElementById('telNum');
  let txtUserPassword = document.getElementById('txtUserPassword');
  //检查手机号是否为11位
  if(telNum.value.length!== 11){
    telNum.className = 'bg';
  }else{
    telNum.className = '';
  }
  //检测密码是否是6-8位
  if(txtUserPassword.value.length<6 ||txtUserPassword.value.length >8){
    txtUserPassword.className = 'bg';
  }else{
    txtUserPassword.className = '';
  }
}

//验证码

// window.onload = function (){
  let res= getCode();
  function getCode(){
    let arr= ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let str = '';
    for(let i=0;i<4;i++){
      let num = Math.round(Math.random()*35);
      str+=arr[num];
    }
    return str;
  }

  document.getElementById('checkCode').innerText = res;
  document.getElementById('linkbt').onclick = function (){
    document.getElementById('checkCode').innerText = getCode();

  }

  document.getElementById('btnLogin').onclick=function (){
    let code = document.getElementById('checkCode').innerText;
    let inputCode = document.getElementById('inputCode').value;
    if(code !== inputCode){
      alert('您输入的验证码不正确');
      document.getElementById('inputCode').value='';
      return false;
    }
  // }

}
