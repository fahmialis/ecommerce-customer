import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-fahmi.herokuapp.com'
})

export default instance
