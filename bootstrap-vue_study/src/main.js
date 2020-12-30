import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import './assets/custom.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import ModalTest from './ModalTest.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  render: h => h(ModalTest),
}).$mount('#app')
