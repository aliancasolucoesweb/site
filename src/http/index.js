import axios from 'axios'

const http = axios.create({
  baseURL: process.env.API
})

export default function install (Vue) {
  Object.defineProperty(Vue, '$http', {
    get: () => http
  })
}
