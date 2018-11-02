import axios from 'axios'

export default axios.create({
  baseURL: 'http://api.spiralthread.com/api/collections/get/'
})