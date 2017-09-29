// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FBSignInButton from 'vue-facebook-signin-button'
import axios from 'axios'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)
Vue.prototype.$http = axios.create({
  baseURL: 'http://api.minsta.web.id'
})

Vue.use(FBSignInButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
