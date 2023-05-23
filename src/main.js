import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 导入字体图标
import './assets/fonts/iconfont.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入全局css
import './assets/css/global.css';


Vue.config.productionTip = false

Vue.use(ElementUI);

import axios from 'axios'
// 设置请求根路径
axios.defaults.baseURL = 'http://43.143.0.76:8889/api/private/v1/'
Vue.prototype.$http = axios




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
