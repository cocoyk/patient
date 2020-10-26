<template>
	<div class="recommendList">
		<div class="items">
			<div v-for="(item,index) in items" :key="index" class="item">
				<div class="close">
					<img :src="require('../../../static/close.png')" alt="" />
				</div>
				<img class="avatar" :src="require('../../../static/doctor.png')" alt="" />
				<p>{{item.label}}</p>
				<span class="sub">{{item.sub}}</span>
				<button class="btn">
					<div class="icon"></div>
					<span>关注</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					avatar: '',
					label: '女性健康',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生2',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生3',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生4',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生5',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生6',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生7',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生8',
					sub: '中国医师学会科普分会',
				}, {
					avatar: '',
					label: '张启军谈养生9',
					sub: '中国医师学会科普分会',
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.recommendList {
		padding: 16px;
		overflow-x: scroll;
		background-color: #fff;
		margin-bottom: 8px;

		.items {
			display: inline-flex;
			justify-content: space-between;
			align-items: center;
		}

		.item {
			width: 168px;
			height: 202px;
			background: #FFFFFF;
			box-shadow: 0px 0px 10px 2px rgba(132, 137, 155, 0.16);
			border-radius: 8px;
			display: flex;
			flex-direction: column;
			align-items: center;

			padding: 16px 0;
			position: relative;
			flex-shrink: 0;

			&:not(:last-child) {
				margin-right: 8px;
			}

			.close {
				width: 25px;
				height: 25px;
				padding: 7px;
				position: absolute;
				right: 0;
				top: 0;

				img {
					width: 11px;
					height: 11px;
					display: block;
				}
			}

			.avatar {
				width: 64px;
				height: 64px;
			}

			p {
				font-size: 16px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 26px;
				margin: 8px auto 4px;
			}

			.sub {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 20px;
			}

			.btn {
				margin-top: 16px;
				width: 88px;
				height: 32px;
				background: linear-gradient(180deg, #48D699 0%, #44CC77 100%);
				box-shadow: 0px 4px 8px -4px rgba(68, 204, 119, 0.48);
				border-radius: 16px;
				padding: 0;
				border: 0;
				display: flex;
				align-items: center;
				justify-content: center;

				&:focus {
					outline: 0;
				}

				.icon {
					width: 22px;
					height: 22px;
					background: url('../../../static/add.png') no-repeat;
					background-size: contain;
				}

				span {
					font-size: 14px;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 20px;
				}
			}

		}
	}
</style>
