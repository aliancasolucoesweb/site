import axios from 'axios'

const http = axios.create({
  baseURL: process.env.API
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get: () => http
  })
}
