import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Modal from '@/components/CommonUI/Modal.vue';
import focus from '@/components/Directives/focus.js';

Vue.directive('focus', focus);
Vue.config.productionTip = false;

Vue.component('Modal', Modal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
