// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
// 引入mint-ui  图片懒加载组件
import { Lazyload, MessageBox } from 'mint-ui'
import { Header, Search} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)
Vue.component(Search.name, Search)

Vue.use(Lazyload)
// 引入http服务
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.prototype.$msg = MessageBox //　MessageBox是一个方法
//配置拦截器, 加载loading的图标
// mint-ui插件
// 引入通用样式并执行
import './assets/css/reset.css'
// import './assets/css/base.less'
import './assets/fontSize/fontSize.js'

// 全局钩子函数--监听全局路由变化
router.beforeEach((to, from, next) => {
    //do something
    // 判断navBar是显示函数隐藏
  if (to.path === '/' || to.path === '/category' || to.path === '/cart' || to.path === '/mine') {
   // 在main.js内直接调用引入的对象,不能使用this(不是在vue实例内)
    store.state.navBarShow = true
  } else {
    store.state.navBarShow = false
  }
  next();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
