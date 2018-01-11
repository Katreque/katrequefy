import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'

const Goku = {template: "<p>Oi! Eu sou o Goku!</p>"}

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/goku',
      name: 'goku',
      component: Goku
    }
  ]
})
