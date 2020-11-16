import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')


Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
  },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  document.title= to.matched[0].meta.title
  next()
})
router.afterEach((to,from) => {
})

export default router