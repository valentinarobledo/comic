import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

import './app.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(axios)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
