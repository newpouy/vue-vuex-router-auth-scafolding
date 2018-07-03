import TestService from '@/services/test.service'
import uuidv4 from 'uuid/v4'
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
    },
    userQueue: []
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
    SET_COMMENT (state, data) {
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
    },
    ADD_COMMENT_SINGLE (state, data) {
      // TODO:add comment goes here
      state.comments.push(data)
    },
    TEMP_COMMENT_REMOVAL (state, data) {
      state.comments.map(el => {
        if (el.tempId) {
          if (el.tempId === data) {
            delete el.tempId
          }
        }
        return el
      })
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

    getComments ({commit}) {
      return TestService.getComments()
        .then(res => {
          commit('SET_COMMENT', res.data)
        })
        .catch(err => commit('SET_ERROR', err.message))
    },

    putComment ({commit}, payload) {
      console.log(payload)
      // WARNING : Payload is edited by following code
      let tempData = {
        ...payload,
        id: uuidv4(),
        time: moment().unix() }
      const {tempId} = tempData
      commit('ADD_COMMENT_SINGLE', tempData)

      return TestService.putComment(payload) // modified tempData is not used, because it doesn't actually post anything
        .then(res => {
          if (res) {
            // 기회형님께: 아래의 두 줄을 제거하면
            // 댓글이 제대로 달리지 않았을 때 보이는
            // 전송실패 뱃지가 딜립니다.
            // remove the two lines of code below to see errors
            commit('TEMP_COMMENT_REMOVAL', tempId)
            this.getComments({commit})
          } else {
            throw 'server did not respond for commenting'
          }
        })
        .catch(err => commit('SET_ERROR', err.message))

    }
  }
}
