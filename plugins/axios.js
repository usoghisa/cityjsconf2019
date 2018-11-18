import axios from 'axios'

export default axios.create({
  baseURL: '//api.spiralthread.com/api/collections/get/'
})