import Vue from 'vue';
import App from './App.vue';

import 'amfe-flexible';
import './assets/styles/reset.css';
import less from 'less';

import router from './router/index.js';

Vue.config.productionTip = false;
Vue.use(less);

new Vue({
	router: router, 	
	render: h => h(App),
}).$mount('#app')
