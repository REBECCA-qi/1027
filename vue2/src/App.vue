<template>
  <div id="app">    
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-link :to= "'/user/'+userId" tag="button" replace active-class="active">用户</router-link>
    <router-link :to= "{path:'/profile',query:{name:'yoga',age:18,height:171}}" tag="button" replace active-class="active">档案</router-link>
    

    <!-- <button @click="homeClick">首页</button> -->
    <keep-alive exclude="Profile.User">
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
  export default{
    name: 'App',
    data(){
      return{
        // $router:''
        userId:'YogaLin'
      }
    },
    methods:{
      // homeClick(){
      //   this.$router.replace('/home')
      // }
    }
  }
</script>
<style>
  /* .router-link-active{
    color: red
  } */
  .active {
    color: #f00;
  }
</style>