<template>
    <div>
        <h2>首页</h2>
        <p>内容</p>

        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
        <h2>{{message}}</h2>
    </div>
</template>
<script>
    export default{
        name:"Home",
        data() {
            return {
                message: '你好啊',
      }
    },
        created() {
            console.log('created');
        },
        destroyed() {
            console.log('destroyed');
        },
        activated() {
            // this.$router.push(this.path);
            console.log('activated');
        },
        deactivated() {
            console.log('deactivated');
        },
        // beforeRouteLeave (to, from, next) {
        //     this.path=this.$route.path;
        //     next()
        // }
    }
</script>
