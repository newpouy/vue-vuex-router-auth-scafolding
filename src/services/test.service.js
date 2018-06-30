import axios from 'axios'
import { ResponseWrapper, ErrorWrapper } from './util'


class TestService {
  getProducts () {
    return new Promise((resolve, reject) => {
      axios.get('http://testapi.76n1.com/api/products')
        .then(response => {
          console.log('service getProducts', response.data)
          return resolve(new ResponseWrapper(response, response.data))
        }).catch(error => reject(new ErrorWrapper(error)))
    })
  }
}

export default new TestService()
