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
}

export default new TestService()
