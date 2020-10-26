<template>
	<div>
		<header class="header">
			<form class="form">
				<div class="icon"></div>
				<input type="text" placeholder="搜索文章/问题/视频/话题等内容" />
			</form>
			<div class="add"></div>
		</header>
		<div class="community">
			<div class="msgBox">
				<div class="msg">
					<img :src="require('../../../static/user.png')" alt="" />
					<span>2条新消息</span>
				</div>
			</div>

			<div class="clockIn">
				<div class="top">
					<p>健康打卡</p>
					<div class="record">
						<span>打卡记录</span>
						<img :src="require('../../../static/arrow.png')" alt="" />
					</div>
				</div>
				<div class="bottom">
					<p>HEALTH PUNCH</p>
					<div class="border"></div>
				</div>

				<p class="text">每天记录用药反应、症状变化，获得医生更有效更及时的治疗！</p>

				<div class="scoring">
					<div class="item">
						<img :src="require('../../../static/excellent.png')" alt="" />
					</div>
					<div class="item">
						<img :src="require('../../../static/veryGood.png')" alt="" />
					</div>
					<div class="item">
						<img :src="require('../../../static/good.png')" alt="" />
					</div>
					<div class="item">
						<img :src="require('../../../static/fair.png')" alt="" />
					</div>
					<div class="item">
						<img :src="require('../../../static/poor.png')" alt="" />
					</div>
				</div>

				<div class="symptom">
					<div class="left">
						<p>今日症状变化</p>
						<span>震颤、肌强直等症状今天感觉好转了？</span>
					</div>
					<button class="btn" type="button">
						更新
					</button>
				</div>
			</div>


		</div>

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
	import tab1 from './tab1.vue';
	import tab2 from './tab2.vue';
	import tab3 from './tab3.vue';
	import tab4 from './tab4.vue';

	export default {
		name: 'Home',
		data: function() {
			return {
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
			tab1,
			tab2,
			tab3,
			tab4,
		}
	}
</script>
<style scoped lang="less">
	.header {
		padding: 6px 16px;
		display: flex;
		align-items: center;
		box-shadow: 0px 1px 1px 0px rgba(51, 51, 51, 0.16);

		.form {
			flex: 1;
			height: 36px;
			border-radius: 36px;
			padding: 0 5px;
			display: flex;
			align-items: center;
			background-color: rgba(51, 51, 51, .05);

			.icon {
				width: 22px;
				height: 22px;
				background: url(../../../static/search.png) no-repeat;
				background-size: contain;
				margin-right: 9px;
			}

			input {
				font-size: 16px;
				height: 26px;
				flex: 1;
				background-color: transparent;
				padding: 0;
				border: 0;
				color: #333;
				caret-color:@color;

				&:focus {
					outline: 0;
				}

				&::placeholder {
					color: rgba(51, 51, 51, .4);
				}
			}
		}

		.add {
			width: 28px;
			height: 28px;
			background: url(../../../static/add.png) no-repeat;
			background-size: contain;
			margin-left: 16px;
		}
	}

	.community {
		padding: 16px 16px 20px 16px;

		.msgBox {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 16px;

			.msg {
				height: 32px;
				border-radius: 32px;
				background-color: rgba(51, 51, 51, .05);
				display: flex;
				align-items: center;
				padding: 4px 8px;

				img {
					width: 24px;
					height: 24px;
					margin-right: 8px;
				}

				span {
					font-size: 14px;
					color: @color;
					font-family: PingFangSC-Regular, PingFang SC;
				}
			}
		}

		.clockIn {
			.top {
				height: 34px;
				display: flex;

				p {
					height: 34px;
					font-size: 26px;
					font-family: PingFangSC-Thin, PingFang SC;
					font-weight: 100;
					color: #707070;
					line-height: 34px;
				}

				.record {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					span {
						height: 20px;
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(51, 51, 51, 0.4);
						line-height: 20px;
					}

					img {
						width: 15px;
						height: 15px;
						margin-left: 9px;
					}

				}
			}

			.bottom {
				display: flex;
				align-items: center;

				p {
					color: rgba(51, 51, 51, .48);
					height: 20px;
					font-size: 14px;
					font-family: PingFangSC-Light, PingFang SC;
					font-weight: 300;
					line-height: 20px;
				}

				.border {
					margin-left: 20px;
					flex: 1;
					border-top: 1px solid rgba(51, 51, 51, .05);
				}
			}

			.text {
				font-size: 14px;
				line-height: 20px;
				color: #333;
				font-family: PingFangSC-Regular, PingFang SC;

				margin: 16px 0;
			}
		}

		.scoring {
			background-color: #fff;
			box-shadow: 0px 0px 10px 2px rgba(132, 137, 155, 0.16);
			border-radius: 8px;
			height: 56px;
			display: flex;
			align-items: center;
			padding: 9px 16px;
			justify-content: space-between;
			margin-bottom: 16px;

			.item {
				width: 38px;
				height: 38px;
				border-radius: 38px;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 38px;
					height: 38px;
				}
			}
		}

		.symptom {
			height: 82px;
			background-color: #fff;
			box-shadow: 0px 0px 10px 2px rgba(132, 137, 155, 0.16);
			border-radius: 8px;
			display: flex;
			padding: 0 8px;
			align-items: center;

			.left {
				flex: 1;

				p {
					color: #333;
					font-size: 18px;
					line-height: 26px;
					margin-bottom: 4px;

					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
				}

				span {
					color: #333;
					font-size: 14px;
					line-height: 20px;
					font-family: PingFangSC-Regular, PingFang SC;
				}
			}

			.btn {
				width: 74px;
				height: 32px;
				padding: 0;
				border-radius: 32px;
				font-size: 14px;
				color: #fff;

				background: linear-gradient(180deg, #48D699 0%,@color 100%);
				box-shadow: 0px 4px 8px -4px rgba(68, 204, 119, 0.48);

				border: none;

				&:focus {
					outline: 0;
				}
			}
		}

	}

	.nav {
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
