import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router/router.js'
import globalImports from './globalImports.js'
import server from '../server.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.component('globalImports', globalImports)

new Vue({
  el: '#katrequefy',
  router,
  template: '<App/>',
  components: { App }
})
