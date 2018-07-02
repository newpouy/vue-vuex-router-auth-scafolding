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

  /*
  * API calls for getting comments
  * from views/TestPage.vue
  * ->components/Test/TournaWholeList.vue
  * ->components/Test/TournaRow.vue
  * ->components/Test/TournaComment.vue
  */

  /*
  //Comment data example
  [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }, ...
  ]
  */

  getComments () {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
          console.log('service getComments', res.data)
          return resolve(new ResponseWrapper(res, res.data))
        }).catch(err => reject(new ErrorWrapper(err)))
    })
  }

  putComment ({userId, postId, commentBody}) {
    return new Promise((resolve, reject) => {
      console.log(`user ${userId} puts comment on post id ${postId}\n: ${commentBody}`)
      axios.post('https://jsonplaceholder.typicode.com/posts/')
        .then(res => {
          console.log('service putComment success!')
          return resolve(new ResponseWrapper(res, res.data))
        }).catch(err => reject(new ErrorWrapper(err)))
    })
  }
}

export default new TestService()
