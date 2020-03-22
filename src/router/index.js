import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const MainLayout = ()=>import('../views/MainLayout')
const Home = ()=>import('../views/Home')

const routes = [
  {
    path:'/',
    component:MainLayout,
    children:[
      {
        path:'/',
        component:Home
      },
      {
        path:'/home',
        component:Home
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
