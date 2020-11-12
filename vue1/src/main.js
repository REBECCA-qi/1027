 import Vue from 'vue'
 
 const app = new Vue({
    el:'#app',//用于挂载要管理的元素
    data:{
        //定义数据
        message:'hello',
        name: 'ww',
        movies:['22','12','43','13'],
        currentIndex: 0,
        counter: 0,
        firstName: "Yoga",
        lastName: "Lin",
        url:'<a href="http://www.baidu.com">百度一下</a>',
        active:'active',
        isActive: true,
        isLine: true,
        finalSize: 100,
        finalColor: 'red',
        isUser: true
     },
     computed:{
         fullName: {
             function(){
             return this.firstName + ' ' + this.lastName
             }
                 // set:function(){

                 // },
                 // get:function(){
                 //     return this.firstName + ' ' + this.lastName
                 // }
         }
     },
     methods:{
        add: function(){
            console.log('add被执行');
            this.counter++;
        },
        sub: function(){
         console.log('sub被执行');
         this.counter--;
        },
        btnClick: function(){
            this.isActive = !this.isActive
        },
        getStyles: function(){
            return{fontSize:this.finalSize + 'px',backgroundColor:this.finalColor}
        },
        liClick(index){
             this.currentIndex=index
        }
    }
})