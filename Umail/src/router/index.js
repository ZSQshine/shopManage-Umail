import Vue from 'vue'
import Router from 'vue-router'
import {Toast} from 'vant'


Vue.use(Router)
const index = ()=>import('../pages/index')
const home = ()=>import('../pages/home')
const cate = ()=>import('../pages/cate')
const goodslist = ()=>import('../pages/goodslist')
const mine = ()=>import('../pages/mine')
const cart = ()=>import('../pages/cart')
const login = ()=>import('../pages/login')
const register = ()=>import('../pages/register')

 const router = new Router({
  routes: [
   {
     path:'/',
     component:index,
     redirect:'/home',
     children:[
       {
         path:'home',
         component:home,
       },
       {
        path:'cart',
        component:cart,
      },
      {
        path:'cate',
        component:cate,
      },
      {
        path:'mine',
        component:mine,
      },
     ],
   },
   {
     path:'/login',
     component:login,
   },
   {
     path:'/register',
     component:register
   },
   {
     path:'/goodslist',
     component:goodslist
   },
   {
     path:'*',
     redirect:'/login'
   }
  ]
})

// 全局路由守卫
router.beforeEach((to,form,next)=>{
  if(to.path == '/mime' || to.path == '/cart'){
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user){
      next();
    }else{
      Toast.success('请先登录');
      router.push('/login');
    }
   
  }
  next();
})

export default router
