export default {
  SET_BANNAR (state, data) {
    state.bannar = data
    console.log(data)
  },
  SET_CLASSIFYS (state, data) {
    state.classifys = data
  },
  SAVE_USERINFO (state, data) {
    state.userInfo = data
  }
}