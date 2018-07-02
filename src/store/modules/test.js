import TestService from '@/services/test.service'
//
export default {
  namespaced: true,
  state: {
    loading: false,
    error: false,
    posts: [],
    comments: [],
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
    SET_COMMENT (state,data) {
      state.comments = data
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
    }
  },
  actions: {
    getPosts ({state, commit}, payload) {
      commit('SET_LOADING', true)
      return TestService.getPosts() //<-API에서 값을 불러오는 부분
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

    getComments({commit}){
      return TestService.getComments()
        .then(res=>{
          commit('SET_COMMENT',res.data)
        })
        .catch(err=>commit('SET_ERROR',err.message))
    },
    putComment({commit},payload){
      let {userId,commentBody,postId} = payload
      return TestService.putComment({userId,commentBody,postId})
        .then(res=>{
          if(res)
            this.getComments()
          else
            throw "error with comment"
        })
        .catch(err=>commit('SET_ERROR',err.message))
    }
  }
}
