import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/css/base.css'
import '../static/css/public.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
