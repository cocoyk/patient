import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css';

import less from 'less';

import VueRouter from 'vue-router';
import Home from './components/Home/index.vue';//首页
import Community from './components/Community/index.vue';//社区
import Mall from './components/Mall/index.vue';//商城
import MyHealth from './components/MyHealth/index.vue';//我的健康

let router = new VueRouter({
	mode: 'history',
    routes: [
		{ path: '/', component: Home },
		{ path: '/community', component: Community },
		{ path: '/mall', component: Mall },
		{ path: '/myHealth', component: MyHealth },
    ]
});


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(less);

new Vue({
	router: router, 	
	render: h => h(App),
}).$mount('#app')
