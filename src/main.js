import Vue from 'vue'
import App from './app.vue'
import router from './router/index'

import './utils/responsive'
import './utils'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
