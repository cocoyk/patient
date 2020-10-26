<template>
	<div class="featuredItems">
		<div v-for="(item,index) in items" :key="index" class="item">
			<header>
				<div class="avatar">
					<img :src="require('../../../static/user.png')" alt="" />
					<div class="lv lv_ss"></div>
				</div>
				<div class="mechanism">
					<p>{{item.mechanism}}</p>
					<div class="sub">
						<img :src="require('../../../static/auth.png')" alt="" />
						<span>{{item.mechanismSub}}</span>
					</div>
				</div>
				<button type="button" class="attention">关注</button>
				<button type="button" class="more"></button>
			</header>

			<div class="title">
				{{item.title}}
				<div class="sub">
					<span>内容等级：{{item.lv}}</span>
					<div class="icon"></div>
				</div>
			</div>
			<div class="content" :class="{one:item.imgUrl.length===1,more:item.imgUrl.length>1}">
				<p>{{substrMsg(item.msg,item.imgUrl.length)}}
					<span>全文</span>
				</p>
				<div v-if="item.imgUrl.length===1" class="img">
					<img :src="src" alt="" />
				</div>
				<div v-if="item.imgUrl.length>1" class="img">
					<img :src="src" v-for="(item,index) in item.imgUrl" :key="index" alt="" />
				</div>
			</div>

			<div class="cause">
				<div class="causeItem">{{item.cause}}</div>
				<div class="causeItem">{{item.causePeriods}}
					<div class="icon"></div>
				</div>
				<div class="causeItem">病因</div>
			</div>

			<div class="doctorComment">
				<div v-for="(it,ind) in item.lists" :key="ind" class="item">
					<div class="sidebar">
						<div class="img recommend8"></div>
						<span>{{it.text}}</span>
					</div>
					<div class="main">
						<p>{{it.content}}</p>
						<span>{{it.sub}}</span>
					</div>
				</div>
			</div>

			<div class="tagBox">
				<div class="tag">
					<div class="tagItem">
						<div class="imgBox">
							<img :src="require('../../../static/tag.png')" alt="" />
						</div>
						<span>{{item.tag}}</span>
					</div>
				</div>
			</div>

			<div class="footer">
				<p>{{item.count}} 评论 · {{item.effective}} 有用</p>
				<span>{{item.date}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://iph.href.lu/109x109',
				items: [{
					lv: 'III级',
					title: '帕金森病突出的病理生理，原发性震颤有哪些表现? ',
					mechanism: 'BMJ 英国医学杂志',
					mechanismSub: '全球顶级医学期刊权威杂志',
					msg: '帕金森病主要的病理改变是中脑黑质多巴胺能神经元的变性死亡、纹状体DA含量显著性减少以及黑质残存神经元胞质内出现嗜酸性包涵体，即路易小体（Lewy body）。出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症',
					cause: '帕金森病',
					causePeriods: 'Ⅰ期-Ⅴ期',
					lists: [{
						lv: 8,
						text: '强烈推荐',
						content: '陈彪等 10 名医生',
						sub: '参与评议',
					}, {
						lv: 3,
						text: '强烈推荐',
						content: '甲型H1N1流感诊断诊断诊断诊断诊断诊断',
						sub: '共引用 10 条权威证据',
					}],
					tag: '帕金森',
					count: 1234,
					effective: 1234,
					date: '3-31',
					imgUrl: [],
				}, {
					lv: 'III级',
					title: '帕金森病突出的病理生理，原发性震颤有哪些表现? ',
					mechanism: 'BMJ 英国医学杂志',
					mechanismSub: '全球顶级医学期刊权威杂志',
					msg: '帕金森病主要的病理改变是中脑黑质多巴胺能神经元的变性死亡、纹状体DA含量显著性减少以及黑质残存神经元胞质内出现嗜酸性包涵体，即路易小体（Lewy body）。出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症',
					cause: '帕金森病',
					causePeriods: 'Ⅰ期-Ⅴ期',
					lists: [{
						lv: 8,
						text: '强烈推荐',
						content: '陈彪等 10 名医生',
						sub: '参与评议',
					}],
					tag: '帕金森',
					count: 1234,
					effective: 1234,
					date: '3-31',
					imgUrl: [''],
				}, {
					lv: 'III级',
					title: '帕金森病突出的病理生理，原发性震颤有哪些表现? ',
					mechanism: 'BMJ 英国医学杂志',
					mechanismSub: '全球顶级医学期刊权威杂志',
					msg: '帕金森病主要的病理改变是中脑黑质多巴胺能神经元的变性死亡、纹状体DA含量显著性减少以及黑质残存神经元胞质内出现嗜酸性包涵体，即路易小体（Lewy body）。出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症出现临床症',
					cause: '帕金森病',
					causePeriods: 'Ⅰ期-Ⅴ期',
					lists: [{
						lv: 8,
						text: '强烈推荐',
						content: '中华人民共和国卫生部．甲型H1N1流感诊疗方案流感诊疗方案流感诊疗方案',
						sub: '共引用 10 条权威证据',
					}],
					tag: '帕金森',
					count: 1234,
					effective: 1234,
					date: '3-31',
					imgUrl: ['', '', ''],
				}]
			}
		},
		methods: {
			substrMsg: function(str, count) {
				if (count !== 1) {
					str = str.substr(0, 84) + '...';
				} else {
					str = str.substr(0, 50) + '...';
				}
				return str;
			}
		}
	}
</script>

<style scoped lang="less">
	.featuredItems {
		.item {
			background-color: #fff;
			padding: 16px;
			margin-bottom: 8px;

			header {
				display: flex;
				margin-bottom: 8px;

				.avatar {
					width: 48px;
					height: 48px;
					margin-right: 8px;
					position: relative;

					img {
						width: 100%;
						height: 100%;
					}

					.lv {
						position: absolute;
						bottom: 0;
						left: 4px;
						width: 40px;
						height: 14px;
						background-repeat: no-repeat;
						background-size: contain;

						&.lv_sss {
							background-image: url('../../../static/lv_sss.png');
						}

						&.lv_ss {
							background-image: url('../../../static/lv_ss.png');
						}

						&.lv_s {
							background-image: url('../../../static/lv_s.png');
						}

						&.lv_a {
							background-image: url('../../../static/lv_a.png');
						}

						&.lv_b {
							background-image: url('../../../static/lv_b.png');
						}
					}
				}

				.mechanism {
					flex: 1;

					p {
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
						margin: 5px 0 2px;
					}

					.sub {
						display: flex;
						align-items: center;

						img {
							width: 14px;
							height: 14px;
							margin-right: 2px;
						}

						span {
							font-size: 12px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 16px;
						}
					}
				}

				.attention {
					width: 75px;
					height: 32px;
					line-height: 32px;
					background: rgba(51, 51, 51, 0.05);
					border-radius: 16px;
					border: 0;
					padding: 0;

					font-size: 14px;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #44CC77;
					margin-right: 8px;

					&:focus {
						outline: 0;
					}
				}

				.more {
					width: 24px;
					height: 25px;
					padding: 0;
					border: 0;
					background: url('../../../static/more.png') no-repeat;
					background-size: contain;
				}
			}

			.title {
				font-size: 18px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 26px;
				margin-bottom: 4px;
				position: relative;
				z-index: 1;

				.sub {
					position: absolute;
					bottom: 4px;
					right: 0;
					display: flex;
					justify-content: center;
					align-items: center;

					span {
						font-size: 12px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(51,51,51,.5);
						line-height: 16px;
						margin-right: 5px;
					}

					.icon {
						width: 16px;
						height: 16px;
						background: url('../../../static/doubt.png') no-repeat;
						background-size: contain;
					}
				}
			}

			.content {
				margin-bottom: 8px;

				p {
					font-size: 16px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 26px;
					text-align: justify;

					// display: -webkit-box;
					// -webkit-box-orient: vertical;
					// -webkit-line-clamp: 3;
					// overflow: hidden;
					span {
						font-size: 16px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: @color;
						line-height: 26px;
						position: absolute;
						right: 16px;
					}
				}

				&.one {
					display: flex;

					.img {
						width: 109px;
						height: 109px;
						margin-left: 8px;
					}

					span {
						right: 133px;
					}
				}

				&.more {
					margin-bottom: 12px;

					p {
						margin-bottom: 8px;
					}

					.img {
						display: flex;

						img {
							width: 109px;
							height: 109px;
							margin-right: 8px;
						}
					}
				}
			}

			.cause {
				display: flex;
				height: 24px;
				background: rgba(51, 51, 51, 0.05);
				border-radius: 8px;
				margin-bottom: 8px;
				padding: 0 8px;

				.causeItem {
					display: flex;
					align-items: center;
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 16px;
					margin-right: 20px;

					&::before {
						display: block;
						content: '';
						width: 8px;
						height: 8px;
						background-color: @color;
						border-radius: 8px;
						margin-right: 4px;
					}

					.icon {
						width: 15px;
						height: 15px;
						margin-left: 5px;
						background: url('../../../static/doubt.png') no-repeat;
						background-size: contain;
					}
				}
			}

			.doctorComment {
				display: flex;
				margin-right: -9px;
				margin-bottom: 9px;

				.item {
					flex: 1;

					display: flex;
					height: 48px;
					background: rgba(51, 51, 51, 0.05);
					border-radius: 8px;
					padding: 6px 9px 6px 0;
					margin-bottom: 0;
					margin-right: 9px;

					.sidebar {
						width: 49px;
						border-right: 1px solid rgba(51, 51, 51, .1);
						margin-right: 4px;
						text-align: center;
						display: flex;
						flex-direction: column;
						justify-content: center;

						.img {
							margin: 0 auto 2px auto;

							&.recommend8 {
								width: 36px;
								height: 18px;
								background: url('../../../static/recommend8.png') no-repeat;
								background-size: contain;
							}


							&.recommend3 {
								width: 34px;
								height: 18px;
								background: url('../../../static/recommend3.png') no-repeat;
								background-size: contain;
							}
						}

						span {
							font-size: 10px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: rgba(51, 51, 51, .5);
							line-height: 12px;
							transform: scale(0.83);
						}
					}

					.main {
						flex: 1;
						display: flex;
						flex-direction: column;
						width: 0;

						p {
							font-size: 12px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 16px;
							margin-bottom: 4px;
						}

						span {
							font-size: 10px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 12px;
						}

						p,
						span {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}


				}
			}

			.tagBox {
				display: flex;
				margin-top: 9px;
				margin-bottom: 8px;
				align-items: center;

				.tag {
					flex: 1;
					display: flex;
					flex-wrap: wrap;

					.tagItem {
						background: #F7F0E7;
						height: 24px;
						border-radius: 12px;
						border: 1px solid #CFA972;

						display: flex;
						align-items: center;

						&:not(:last-child) {
							margin-right: 9px;
						}

						padding: 0 8px 0 1px;

						.imgBox {
							width: 20px;
							height: 20px;
							border-radius: 20px;
							margin-right: 5px;
							background-color: #fff;

							img {
								width: 100%;
								height: 100%;
							}
						}

						span {
							font-size: 12px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #CFA972;
							line-height: 16px;
						}
					}
				}

			}

			.footer {
				display: flex;
				justify-content: space-between;

				p {
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 16px;
				}

				span {
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 16px;
				}
			}
		}
	}
</style>
