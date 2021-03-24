import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    addProducts (state, payload) {
      state.products = payload
    },
    addToCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios.post('/user/login', payload)
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/home')
        })
        .catch(err => {
          // console.log({ err })
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    logout (context, payload) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged out'
      })
      localStorage.removeItem('access_token')
      router.push('/')
    },
    register (context, payload) {
      // console.log(payload)
      axios.post('/user/register', payload)
        .then(data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You can login now'
          })
          router.push('/')
        })
        .catch(err => {
          console.log({ err })
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    googleLogin (context, payload) {
      // console.log(payload, 'masuk store')
      axios.post('/user/googleLogin', payload)
        .then(({ data }) => {
          console.log(data, 'masuk then')
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/home')
        })
        .catch(err => {
          // console.log({ err })
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    getProducts (context, payload) {
      const headers = {
        access_token: localStorage.access_token
      }
      axios.get('/product', { headers })
        .then(({ data }) => {
          // console.log({ data })
          context.commit('addProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      // console.log(payload, 'masuk store')
      const id = +payload
      const headers = {
        access_token: localStorage.access_token
      }
      // console.log(headers, 'ini headers')
      axios.post(`/customerItem/${id}`, '', { headers })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to cart'
          })
        })
        .catch(({ err }) => {
          console.log(err, 'ini error')
        })
    },
    getCartItems (context, payload) {
      const headers = {
        access_token: localStorage.access_token
      }
      axios.get('/customerItem', { headers })
        .then(({ data }) => {
          // console.log({ data })
          context.commit('addToCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeItem (context, payload) {
      // console.log(payload, 'masuk store')
      const id = +payload
      const headers = {
        access_token: localStorage.access_token
      }
      // console.log(headers, 'ini headers')
      axios.delete(`/customerItem/${id}`, { headers })
        .then(({ data }) => {
          // console.log(data, 'ini data')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item removed'
          })
        })
        .catch(({ err }) => {
          console.log(err, 'ini error')
        })
    },
    updateCart (context, payload) {
      // console.log(payload, 'ini payload di store')
      const headers = {
        access_token: localStorage.access_token
      }
      const id = payload.id
      const data = {
        ProductId: payload.ProductId,
        amount: payload.amount
      }
      axios.patch(`/customerItem/${id}`, data, { headers })
        .then(data => {
          // console.log(data)
          this.dispatch('getCartItems')
        })
        .catch(err => {
          // console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
          this.dispatch('getCartItems')
        })
    }
  },
  modules: {
  }
})
