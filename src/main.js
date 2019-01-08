// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * Created by 不动的推动者 on 2018/5/2.
 */
//
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'normalize.css'
import Axios from 'axios'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import echarts from 'echarts'
import './components/tem/index'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 全局挂载

Vue.use(Elementui);
Vue.use(moment);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$echarts = echarts



router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('lz_userName');
  const pass = localStorage.getItem('lz_passNumber');
   if (!user && !pass && to.path !== '/login') { // 检查路径用户是否即将进入我们的 chart 路径
     next('/login');
  }else{
       localStorage.setItem('lz_userName', user);
       localStorage.setItem('lz_passNumber', pass);
       next()
   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
