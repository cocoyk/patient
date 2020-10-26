<template>
	<div class="commentList">
		<div v-for="(item,index) in items" :key="index" class="item">
			<header class="user">
				<div class="userAvatar">
					<img :src="require('../../../static/user.png')" alt="" />
					<div class="sex" :class="{man:item.sex===0,woman:item.sex===1}"></div>
				</div>
				<div class="userInfo">
					<p class="name">{{item.name}}</p>
					<span>{{item.age}}岁 {{item.disease}}</span>
				</div>

			</header>
			<div class="comment">
				<h3 class="title">我的评价</h3>
				<div class="starItems">
					<div class="starItem"></div>
					<div class="starItem"></div>
					<div class="starItem half"></div>
					<div class="starItem unStar"></div>
					<div class="starItem unStar"></div>
				</div>
				<p>{{item.msg}}</p>
			</div>
			<div class="doctorBox">
				<img :src="require('../../../static/doctor.png')" alt="" />
				<div class="doctorInfo">
					<div class="name">
						<span class="doctorName">{{item.doctorName}}</span>
						<span class="position">{{item.position}}</span>
					</div>
					<span class="hospital">{{item.hospital}}</span>
				</div>
			</div>
			<div class="date">{{item.date}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					userAvatar: '',
					sex: 1,
					name: '张玲玲',
					age: 63,
					disease: '帕金森 II期 2 年',
					star: 2.5,
					doctorName: '陈吉相',
					position: '主任医师',
					hospital: '神经科｜华中科技大学附属协和医院',
					date: '3-31',
					msg: '陈医生医德高尚，医术高明，是一位好医 生，就是号太难挂了',
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.commentList {
		background-color: #fff;
		margin-bottom: 8px;

		.item {
			padding: 16px 16px 20px 16px;
		}

		.user {
			display: flex;

			.userAvatar {
				width: 48px;
				height: 48px;
				position: relative;

				img {
					width: 100%;
					height: 100%;
				}

				.sex {
					width: 16px;
					height: 16px;
					position: absolute;
					bottom: 0;
					right: 0;

					&.man {
						background: url(../../../static/man.png);
						background-size: contain;
					}

					&.woman {
						background: url(../../../static/woman.png);
						background-size: contain;
					}
				}
			}

			.userInfo {
				flex: 1;
				justify-content: center;
				flex-direction: column;
				display: flex;
				margin-left: 8px;

				.name {
					font-size: 14px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 20px;
					margin-bottom: 4px;
				}

				span {

					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, .6);
					line-height: 16px;
				}
			}
		}

		.comment {
			.title {
				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(51, 51, 51, .6);
				line-height: 26px;
				margin: 12px auto 6px;
				text-align: center;
			}

			.starItems {
				display: flex;
				margin-bottom: 8px;
				align-items: center;
				justify-content: center;

				.starItem {
					width: 44px;
					height: 44px;
					background: url(../../../static/star.png) no-repeat;
					background-size: contain;

					&.half {
						background: url(../../../static/halfStar.png) no-repeat;
						background-size: contain;
					}

					&.unStar {
						background: url(../../../static/unstar.png) no-repeat;
						background-size: contain;
					}

				}
			}

			p {
				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 26px;
				margin-bottom: 8px;
			}

		}


		.doctorBox {
			height: 80px;
			background: rgba(51, 51, 51, 0.05);
			border-radius: 8px;
			padding: 16px 8px;
			display: flex;

			img {
				width: 48px;
				height: 48px;
				margin-right: 8px;
			}

			.doctorInfo {
				flex: 1;
				display: flex;
				flex-direction: column;

				.name {
					flex: 1;
					margin-bottom: 2px;

					.doctorName {
						font-size: 18px;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 26px;
						margin-right: 8px;
					}

					.position {
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
					}
				}

				.hospital {
					font-size: 14px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 20px;
				}
			}
		}

		.date {
			margin-top: 12px;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, .6);
			line-height: 16px;
			text-align: right;
		}
	}
</style>
