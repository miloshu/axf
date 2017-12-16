import Vue from 'vue'
import Router from 'vue-router'
// 旧的同步的加载方式
// import Home from 'pages/Home'
// import Category from 'pages/Category'
// import Cart from 'pages/Cart'
// import Mine from 'pages/Mine'
// import Login from 'pages/Login'

// 在路由页面的时候推荐使用下面的方式引用
// 异步的加载方式  按需加载(懒加载的方式)懒加载的好处是当你访问到这个页面的时候才会去加载相关资源，这样的话能提高页面的访问速度。
const Home = resolve => require(['pages/Home.vue'], resolve)
const Category = resolve => require(['pages/Category.vue'], resolve)
const Cart = resolve => require(['pages/Cart.vue'], resolve)
const Mine = resolve => require(['pages/Mine.vue'], resolve)
const Login = resolve => require(['pages/Login.vue'], resolve)
const Address = resolve => require(['pages/Address.vue'], resolve)
const AddSite = resolve => require(['pages/Address.vue'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/category',
    name: 'category',
    component: Category
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
    // meta: { requiresAuth: true }   // 路由元信息 标志位。
  }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/address',
      name: 'address',
      component: Address
    }, {
      path: '/add-site',
      name: 'add-site',
      component: AddSite
    }
  ]
})

// 全局钩子函数
// router.beforeEach((to, from, next) => {
//   //do something
//   next();
// });
// router.afterEach((to, from, next) => {
//   console.log(to.path);
// });