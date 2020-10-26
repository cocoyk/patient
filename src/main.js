import Vue from 'vue';
import App from './App.vue';

import 'amfe-flexible';
import './assets/styles/reset.css';
import './assets/styles/global.css';
import less from 'less';

import router from './router.js';
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false;
Vue.use(less);


new Vue({
	router: router, 	
	render: h => h(App),
}).$mount('#app')
