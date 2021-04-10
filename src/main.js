import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* <i class="fab fa-github"></i> */
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab )


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
