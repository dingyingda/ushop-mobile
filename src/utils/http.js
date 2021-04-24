import axios from 'axios'
//导入路由对象
import router from '../router/index'
//结构出vant里的消息提示组件
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

//开发模式和生产模式的判断  基础路由配置
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/api';
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3000/api';
}

//请求拦截器
axios.interceptors.request.use(function(config){
  //设置请求头
  let res = JSON.parse(localStorage.getItem('memberInfo') || '{}');
  config.headers.authorization = res.token;
    return config;
})

//响应拦截器
axios.interceptors.response.use(function(response){
  //token失效时候跳转到登录页面
    if(response.data.code===403){
      Toast(response.data.msg);
      router.push('/login');
    }
    return response.data;
})

export default axios;
