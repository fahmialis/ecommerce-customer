import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
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
    }

  },
  modules: {
  }
})
