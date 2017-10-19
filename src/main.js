
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './_vuex/store'
import MinUI from 'mint-ui'
import "mint-ui/lib/style.css"

Vue.config.productionTip = false
Vue.use(MinUI)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
