import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./components/Home/index.vue"; //首页
import Community from "./components/Community/index.vue"; //社区
import Mall from "./components/Mall/index.vue"; //商城
import MyHealth from "./components/MyHealth/index.vue"; //我的健康

export default new Router({
	mode: "history",
	routes: [{
			path: "/",
			component: Home,
			meta: {
				title: "首页"
			}
		},
		{
			path: "/community",
			component: Community,
			meta: {
				title: "社区"
			}
		},
		{
			path: "/mall",
			component: Mall,
			meta: {
				title: "商城"
			}
		},
		{
			path: "/myHealth",
			component: MyHealth,
			meta: {
				title: "我的健康"
			}
		},
	],
});
