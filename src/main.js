import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSession from 'vue-session'
import VuetifyMoney from "vuetify-money";
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueSession)
Vue.use(VuetifyMoney)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
