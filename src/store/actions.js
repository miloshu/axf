import ajax from 'axios'
import api from '@/api'
export default {
  // 解构赋值 函数的参数如果是对象的成员，优先使用解构赋值。{store对象的成员commit}  {commit},可以接受多个成员参数
  setBanner ({commit}) {
    let url = api.host + 'bannar'
    ajax.get(url)
      .then(res => {
        commit('SET_BANNAR', res.data)
      })
  },
  setClassifys ({commit}) {
    let url = api.host + 'classifys'
    ajax.get(url)
      .then(res => {
        commit('SET_CLASSIFYS', res.data)
      })
  },
  login ({commit}, phone) {
    // 根据传过来的phone判断改用户是注册还是登录
    let url = api.host + 'users?phone=' + phone
    return ajax.get(url) // 返回一个promise对象
      .then(res => {
        // console.log(res.data)  // 空数组
        if (res.data.length > 0) {
          // 已有用户-->登录
          let data = res.data[0]
          commit('SAVE_USERINFO', data)
          return '登录成功'
        } else {
          // 没有数据-->注册
          let url = api.host + 'users'
          let userObj = {
            phone: phone,
            level: 'V0',
            current_score: 0,
            dif_score: '距下一等级还需30成长值',
            // 所选的地址
            selectedSite: {}
          }
          // 向服务器数据库新增一个对象
          return ajax.post(url, userObj) // 返回一个promise对象
            .then(res => {
              // 将用户信息保存到userInfo里面
              commit('SAVE_USERINFO', res.data)
              return '注册成功'
            })
          }
      })
  }
}