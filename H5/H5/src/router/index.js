import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Login from '@/view/Login'
import Search from '@/view/Search'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { checkoutLogin: true }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ],
  mode: 'history'
})
