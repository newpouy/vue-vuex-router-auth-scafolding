import TestService from '@/services/test.service'
//
export default {
  namespaced: true,
  state: {
    loading: false,
    error: false,
    posts: [],
    pagination: {
      limit: 10,
      page: 0,
      total: 0
    },
    searchOptions: {
      userId: ''
    }
  },
  getters: {
  },
  mutations: {
    SET_SEARCH_USER_ID (state, data) {
      console.log('mut SET_SEARCH_USER_ID', data)
      state.searchOptions.userId = data
    },
    SET_POST (state, data) {
      console.log('mut data', data)
      state.posts = data
    },
    SET_PAGINATION (state, payload) {
      state.pagination = {
        page: payload.page || state.pagination.page,
        limit: payload.limit || state.pagination.limit,
        total: payload.total || state.pagination.total
      }
    },
    SET_ERROR (state, data) {
      state.error = data
    },
    SET_LOADING (state, data) {
      state.loading = data
    },
    ADD_POST_SINGLE (state, data) {
      console.log('posting an article...', data)
      state.posts.push(data)
    },
    TEMP_POST_REMOVAL (state, data) {
      state.posts.map(el => {
        if (el.temp && el.tempId === data) {
          el.temp = false
        }
        return el
      })
    }
  },
  actions: {
    getPosts ({state, commit}, payload) {
      commit('SET_LOADING', true)
      return TestService.getPosts()
        .then(response => {
          console.log(response)
          commit('SET_POST', response.data)
        })
        .catch(error => commit('SET_ERROR', error.message))
        .finally(() => commit('SET_LOADING', false))
    },
    setSearchOptions ({state, commit}, payload) {
      console.log(payload)
      // commit('SET_SEARCH_USER_ID', payload)
    },
    putPost ({commit}, payload) {
      return new Promise((resolve, reject) => {
        let modifiedPayload = {...payload, id: Math.floor(Math.random() * 65525)}
        commit('ADD_POST_SINGLE', modifiedPayload)
        const {tempId} = payload
        TestService.putPost(modifiedPayload)
          .then(res => {
            // after successful upload, delete the temp tag
            commit('TEMP_POST_REMOVAL', tempId)
            // then return success
            resolve(tempId)
          })
          .catch(err => {
            commit('SET_ERROR', err.message)
            reject(new Error('글 포스팅 중 에러가 발생하였습니다'))
          })
      })
    }
  }
}
