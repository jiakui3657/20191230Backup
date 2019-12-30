import axios from 'axios'
import VueCookie from 'vue-cookie'
import QS from 'qs'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://trip.haoxuer.com'

// http request 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config.url)
  if (VueCookie.get('userToken') && config.url !== '/rest/user/login.htm') {
    config.headers.Authorization = VueCookie.get('userToken')
  }

  // POST请求配置
  if (config.method === 'post') {
    config.data = QS.stringify(config.data)
  }

  // GET请求配置
  if (config.method === 'get') {
  }
  console.log(config)

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
