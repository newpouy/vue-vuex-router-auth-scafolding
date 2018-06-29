import axios from 'axios'

const resourceHost = 'http://localhost:3000'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated: (state) => {
      return state.accessToken
    }
  },
  mutations: {
    LOGIN (state, {accessToken}) {
      state.accessToken = accessToken
      localStorage.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {
    LOGIN ({commit}, {email, password}) {
      return axios.post(`${resourceHost}/login`, {email, password})
        .then(({data}) => {
          console.log('hihihihihihi')
          commit('LOGIN', data)
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
        })
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
    CHECK_TOKEN (a, b) {
      return axios.get(`${resourceHost}/me`).then(data => {
        console.log(data)
      })
    }
  }
}
