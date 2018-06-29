import axios from 'axios'
import Http from './http.init'
import { ResponseWrapper, ErrorWrapper } from './util'
import $store from '../store'
import $router from '../router'

import { API_URL } from '../.env'


export function getProducts ({email, password}) {
  return new Promise((resolve, reject) => {
    axios.get('http://testapi.76n1.com/api/products')
      .then(response => {
        console.log(response.data)
        return resolve(new ResponseWrapper(response, response.data))
      }).catch(error => reject(new ErrorWrapper(error)))
  })
}
