import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/mobile',
    component:layout,
    children: [{
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
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