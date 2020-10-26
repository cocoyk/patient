<template>
	<div>
		<Header></Header> <!-- 头部搜索  -->
		<ClockIn :count="count"></ClockIn> <!-- 打卡 -->

		<!-- tab切换 -->
		<section>
			<nav class="nav">
				<div v-for="(tab,index) in tabs"  :key="index"  @click="toggle(index,tab.view)" class="navItem" :class="{ active: active===index }">
					<p>{{tab.label}}</p>
					<span>{{tab.sub}}</span>
				</div>
			</nav>

			<component :is="currentView" keep-alive></component>
		</section>


	</div>
</template>
<script>
	import Header from './header.vue';
	import ClockIn from './clockIn.vue';

	import tab1 from './tab1.vue';
	import tab2 from './tab2.vue';
	import tab3 from './tab3.vue';
	import tab4 from './tab4.vue';

	export default {
		name: 'Home',
		data: function() {
			return {
				count:2,
				active: 0,
				currentView: 'tab1',
				tabs: [{
						view: 'tab1',
						label: '全部',
						sub: '内容广场',
					},
					{
						view: 'tab2',
						label: '关注',
						sub: 'Pick的人',
					},
					{
						view: 'tab3',
						label: '精选',
						sub: '小编推荐',
					},
					{
						view: 'tab4',
						label: '糖尿病',
						sub: '23人订阅',
					}
				]
			}
		},
		methods: {
			toggle(i, v) {
				this.active = i;
				this.currentView = v;
			}
		},
		components: {
			Header,
			ClockIn,
			tab1,
			tab2,
			tab3,
			tab4,
		}
	}
</script>
<style scoped lang="less">
	.nav {
		background-color: #fff;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 16px;

		.navItem {
			flex: 1;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			cursor: pointer;

			&:focus {
				outline: 0;
			}

			&.active {

				p {
					color: @color;
				}

				span {
					color: #fff;
					background-color: @color;
				}
			}
		}

		p {
			font-size: 16px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 0.4);
			line-height: 26px;
		}

		span {
			font-family: PingFangSC-Regular, PingFang SC;
			color: rgba(51, 51, 51, 0.4);
			line-height: 12px;

			font-size: 10px;
			border-radius: 20px;
			padding: 4px 8px;
			background-color: rgba(51, 51, 51, .05);
		}


	}
</style>
