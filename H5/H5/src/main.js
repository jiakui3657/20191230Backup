// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import './interceptors/interceptors'
// swiper文件
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueCookie)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios

// 全局的导航守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.meta.checkoutLogin) {
    if (VueCookie.get('userToken')) {
      next('/index')
    } else {
      next()
    }
  } else {
    if (VueCookie.get('userToken')) {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
