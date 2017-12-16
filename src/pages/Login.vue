<template>
  <div class="main">
    <!-- <mt-search v-model="value" :result.sync="result"></mt-search> -->
    <mt-header title="验证手机">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back">返回</mt-button> -->
        <mt-button icon="back" class="mintui mintui-back"></mt-button>
      </router-link>
    </mt-header>
    <div class="theme-bg" :class="{'picHide': isShow}">
      <p class="info">为了方便您及时查询订单信息，鲜蜂侠需要验证您的手机号为查询帐号</p>
    </div>
    <!-- <form action="" method="post" enctype="application/x-www-form-urlencoded"> -->
      <input @focus='hide()' @blur='show()' v-model="phone" class="bd_1" type="text" name="tel" placeholder="请输入手机号码" pattern="^[1][3,4,5,7,8][0-9]{9}$"
        title="请输入11位的数字" required>
      <input v-model="VerificationCode" type="text" placeholder="短信验证码" required>
      <p class="login-voice-wrap">收不到短信？使用<u>语音验证码</u></p>
      <input @click="login()" class="login-submit" type="submit" value="确定">
    <!-- </form> -->
  </div>
</template>
<script>
let timer;
export default {
  data () {
    return {
      isShow: false,
      phone: '',
      VerificationCode: ''
    }
  },
  methods: {
    // 当input聚焦的时候隐藏图片
    hide () {
      clearTimeout(timer)
      this.isShow = true
    },
     // 当input失焦的时候显示图片
    show () {
      // 让等待1s之后再触发
      timer = setTimeout ( ()=> {
        this.isShow = false
      }, 1000)
    },
    login () {
      // 获取input的值
      let phone = this.phone
      let VerificationCode = this.VerificationCode
      // 对其进行号码验证 
      if(!(/^1[34578]\d{9}$/.test(phone))) {
        this.$msg('提示', '手机号码格式错误，请重新输入')
        // this.$router.push('/')
      } else {
        // 手机验证成功, 发起请求
        this.$store.dispatch('login', phone)
        // 接收action里'注册成功'返回的promise对象
          .then(res => {
            if(res === '注册成功') {
              return this.$msg('提示', '注册成功!')
            }
          })
          // 当用户点击弹出的确定按钮以后立即执行以下代码
          .then(res => {
            this.$router.push('/cart')
            // return this.$msg('提示', '登录成功!')
          })
      }
      // html 的pattern已验证过
      // if (phone !== '' && VerificationCode !== '')
      // this.$router.push('/cart')
    }
  }
}
</script>
<style scoped>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efefef;
    overflow-x: hidden;
  }
  .mint-header {
    height: 4.5rem;
    color: #333;
    font-size: 1.4rem;
    font-weight: 700;
    background-color: #f9fafd;
  }
  .theme-bg {
    position: relative;
    width: 100%;
    height: 6.9rem;
    background: #ffd600 url("images/bg-afc.png") no-repeat 1rem bottom;
    -webkit-background-size: auto 85%;
    background-size: auto 85%;
    overflow: hidden;
    transition: height 1s;
    -webkit-transition: height 1s;
  }
  .info {
    position: absolute;
    left: 10rem;
    top: 1.5rem;
    width: 62%;
  }
  input {
    display: block;
    width: 95%;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }
  .bd_1 {
    border-top: .1rem solid #e0e0e0;
    border-bottom: .1rem solid #e0e0e0;
  }
  .login-voice-wrap {
    text-align: center;
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  u {
    color: #00f;
  }
  .login-submit {
    width: 94%;
    height: 4rem;
    margin: 0 auto;
    font-size: 1.6rem;
    color: #000;
    background-color: #ffd600;
    border-radius: .5rem;
  }
  .picHide {
    height: 0px !important;
  }
</style>
