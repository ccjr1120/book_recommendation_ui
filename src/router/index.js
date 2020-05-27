import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const AppLayout = () => import('../views/AppLayout')
const Home = () => import('../views/Home')
const Recommend = () => import('../views/Recommend')
const ToLook = () => import('../views/ToLook')
const AlreadyRead = () => import('../views/AlreadyRead')
const Login = ()=>import('../views/Login')
const routes = [
  {
    path:'/login',
    component:Login,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/recommend',
        component: Recommend,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/to-look-list',
        component:ToLook,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/already-read',
        component:AlreadyRead,
        meta:{
          requiresAuth: true
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((route, redirect, next) => {
  if (route.matched.some(r => r.meta.requiresAuth) && !store.state.isLogin) {
    next({
      path: '/login',
      query: {
        redirect: route.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
