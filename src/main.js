// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//使用http
import './utils/http'

//使用vant
import  './utils/vant'
//挂vue原型对象的属性为全局属性
Vue.prototype.$imgBaseUrl='http://127.0.0.1:3000';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
