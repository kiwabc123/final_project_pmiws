// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import * as VeeValidate from 'vee-validate'
import App from './App.vue'
// import store from './store'
import router from './router'
// import activity from './activity'
// import VueYoutube from 'vue-youtube'
// import Popover  from 'vue-js-popover'
// import circleProgress from 'vue2-circle-progress'
// import moment from 'moment'
import vuetify from './plugins/vuetify';
// import VueApexCharts from 'vue-apexcharts'
// js
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import * as alertify from 'alertifyjs'
// import * as jquery from 'jquery'
// css
// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
// import 'alertifyjs/build/css/alertify.css'
// import 'alertifyjs/build/css/themes/default.css'
// import './assets/styles.css'
// import './assets/styles.less'
// Vue.config.productionTip = false
// Vue.prototype.jquery = jquery
// Vue.prototype.alertify = alertify
// Vue.prototype.activity = activity
// Vue.prototype.moment = moment
// Vue.component('apexchart', VueApexCharts)
// Vue.use(VueApexCharts)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(VueYoutube)
// Vue.use(VeeValidate)
// Vue.use(circleProgress)
// Vue.use(Popover)
import VueApexCharts from 'vue-apexcharts'
// Vue.use(VueApexCharts)

// Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  // store,
  VueApexCharts,
  vuetify,
  render: h => h(App)
}).$mount('#app')