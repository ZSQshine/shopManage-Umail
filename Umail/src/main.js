// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

//引入vant
import vant from 'vant'
import 'vant/lib/index.css'

// 引入vuex
import store from './store/index'

// 图片src头
Vue.prototype.$imgHead = "http://localhost:3000";

Vue.use(vant)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
