import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0, //section 42のstate
    message: '初期メッセージ'
  },
  getters: {
    // messageを使用するゲッター
    message(state) {
      return state.message
    }
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
      state.message = payload.message
    },
    increment(state) {
      state.count++ // section 42のメソッド
    }
  },
  actions: {
    doUpdate({ commit }, message){
      commit('setMessage', { message })
    }
  },
  modules: {
  }
})
