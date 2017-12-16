<template>
  <div id="app">
    <!-- <div :class="isRed?'red':'blue'">hell axf</div>  class  一个样式. 返回一个字符串  ->三元运算符 --> 
    <router-view/>
    <nav-bar v-if="navBarShow"></nav-bar>
  </div>
</template>
<script>
// class  一个样式. 返回一个字符串  ->三元运算符
// :class  多个样式, 返回一个对象(样式做key, true或false做值) 
// :class="{'red': true, 'blue': false}"
import NavBar from './components/NavBar/NavBar'
export default {
  // beforeCreate () { 可以在这加个loading事件 },
  name: 'app',
  // data () {
  //   return {
  //     isRed: false
  //   }
  // },
  created () {
    // 在created函数中调用ajax获取页面初始化所需的数据。
    // 初始化操作,首页的banner数据和分类 实现自执行
    this.$store.dispatch('setBanner')
    // 设置获取分类的数据
    this.$store.dispatch('setClassifys')
  },
  components: {
    NavBar
  },
  computed: {
    navBarShow () {
      return this.$store.state.navBarShow
    }
  }
  // mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
  // mounted () {}
}
</script>
<style scoped>
  /* .red {
    background-color: #f00;
  }
  .blue {
    background-color: #0f0fff;
  } */
</style>

