import axios from 'axios'
import { ResponseWrapper, ErrorWrapper } from './util'


class TestService {
  getPosts () {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log('service getPosts', response.data)
          return resolve(new ResponseWrapper(response, response.data))
        }).catch(error => reject(new ErrorWrapper(error)))
    })
  }
  putPost (payload) {
    return new Promise((resolve, reject) => {
      axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log('service putPost', res.data)
          // 회경형님께 : 글 작성시 에러가 발생하는 것을 보려면 아래를 주석처리 해제해주세요
          // throw new Error('error!!!')
          return resolve(new ResponseWrapper(res, res.data))
        }).catch(err => reject(new ErrorWrapper(err)))
    })
  }
}

export default new TestService()
