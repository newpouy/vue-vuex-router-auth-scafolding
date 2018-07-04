import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import SpinnerWave from './components/SpinnerWave.vue'

Vue.config.productionTip = false

Vue.component('spinner', SpinnerWave)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
