import Vue from 'vue'
import Router from 'vue-router'

//懒加载路由
let Home=()=>import ('../pages/Home')
let Cate=()=>import ('../pages/Cate')
let Cart=()=>import ('../pages/Cart')
let User=()=>import ('../pages/User')
let Login=()=>import ('../pages/Login')
let Register=()=>import ('../pages/Register')
let List=()=>import ('../pages/List')

Vue.use(Router)
// 解决跳转到登录页报错问题，重复点击导航
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
let router= new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/cate',
      component: Cate,
      meta:{
        title:'分类'
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        title:'登录页面'
      }
    },
    {
      path: '/register',
      component: Register,
      meta:{
        title:'注册页面'
      }
    },
    {
      path: '/list',
      component: List,
      meta:{
        title:'商品列表'
      }
    },
    {
      path: '/user',
      component: User,
      meta:{
        title:'用户中心'
      }
    },
  ]
})

//前置路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/user'){
    let memberInfo=JSON.parse(localStorage.getItem('memberInfo')||'{}');
    if(!memberInfo.token){
      next('/login');
    }
  }
  document.title=to.meta.title;
  next();
})
//导出路由对象
export default router;
