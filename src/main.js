// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'
import Http from './http'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import '../node_modules/bulmaswatch/solar/bulmaswatch.min.css'
import VueCarousel from 'vue-carousel'

Vue.use(Buefy)
Vue.use(VueCarousel)
Vue.use(Http)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Root)
})
