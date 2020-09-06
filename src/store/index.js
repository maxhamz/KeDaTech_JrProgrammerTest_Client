import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apiconfig.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    token: ''
  },
  mutations: {
    SET_USERS (state, payload) {
      state.users = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_TOKEN (state, payload) {
      state.token = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log('LOGIN @ STORE')
      console.log(payload)
      return axios({
        method: 'GET',
        url: '/users',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  },
  modules: {
  }
})
