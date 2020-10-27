<template>
	<div class="attentionList">
		<div v-for="(item,index) in items" :key="index" class="item">
			<header>
				<div class="avatar">
					<img :src="require('../../../static/user.png')" alt="" />
					<div class="sexIcon" :class="{man:item.sex===0,woman:item.sex===1}"></div>
				</div>
				<div class="userName">
					<p>{{item.name}}</p>
					<span class="sub">{{item.userInfo}}</span>
				</div>
				<button type="button" class="attention">关注</button>
				<button type="button" class="more"></button>
			</header>
			<div class="content">
				{{substrMsg(item.msg)}}
				<span class="at" v-if="item.atUserName!=''">@{{item.atUserName}}</span>
				<span v-if="item.msg.length>len">...<a>全文</a></span>
			</div>
			
			<div class="contentImg" v-if="item.imgUrl.length>0" :class="{one:item.imgUrl.length===1,more:item.imgUrl.length>1}">
				<img v-if="item.imgUrl.length===1" :src="item.imgUrl[0]" alt=""/>
				<img v-else v-for="(it,ind) in item.imgUrl" :key="ind" :src="it" alt=""/>
			</div>

			<div class="tagBox">
				<div class="tag">
					<div v-for="(it,ind) in item.tag" :key="ind" class="tagItem">
						<div class="imgBox">
							<img :src="require('../../../static/tag.png')" alt="" />
						</div>
						<span>{{it}}</span>
					</div>
					<div class="tagItem location">
						<div class="imgBox">
							<img :src="require('../../../static/location.png')" alt="" />
						</div>
						<span>{{item.location}}</span>
					</div>
				</div>
				<span class="date">{{item.date}}</span>
			</div>

			<div class="footer">
				<div class="interImgBox">
					<div class="inter">
						<img :src="require('../../../static/user.png')" alt="" />
						<img :src="require('../../../static/user.png')" alt="" />
						<img :src="require('../../../static/user.png')" alt="" />
					</div>
					<span>等 {{item.count}} 次互动</span>
				</div>
				<div class="btnGroup">
					<button type="button" class="msgBtn"></button>
					<button type="button" :class="{likeBtn:item.isLike,unlikeBtn:!item.isLike}"></button>
					<button type="button" class="shareBtn"></button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				len:99,
				items: [{
						sex: 1,
						name: '黄奶奶',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: false,
						tag: [],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: false,
						msg: '整夜无法入睡',
						atUserName: '',
						imgUrl: [],
					},
					{
						sex: 0,
						name: '李青峰',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: true,
						tag: ['帕金森', '帕金森'],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: true,
						msg: '今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点。',
						atUserName: '黄奶奶',
						imgUrl: ['http://iph.href.lu/232x308'],
					},
					{
						sex: 0,
						name: '李友宝',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: false,
						tag: ['帕金森'],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: false,
						msg: '今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点。今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点,左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点',
						atUserName: '黄奶奶',
						imgUrl: ['http://iph.href.lu/343x192'],
					},
					{
						sex: 0,
						name: '黄文亮',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: false,
						tag: ['帕金森', '帕金森'],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: true,
						msg: '今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点。',
						atUserName: '黄奶奶',
						imgUrl: ['http://iph.href.lu/109x109', 'http://iph.href.lu/109x109', 'http://iph.href.lu/109x109',
							'http://iph.href.lu/109x109', 'http://iph.href.lu/109x109', 'http://iph.href.lu/109x109',
							'http://iph.href.lu/109x109', 'http://iph.href.lu/109x109', 'http://iph.href.lu/109x109'
						],
					},
					{
						sex: 1,
						name: '吴小兰',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: false,
						tag: ['帕金森', '帕金森'],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: true,
						msg: '今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点。',
						atUserName: '黄奶奶',
						imgUrl: ['http://iph.href.lu/343x192'],
					},
					{
						sex: 1,
						name: '赵阿姨',
						userInfo: '63 岁 帕金森 II期 2 年',
						isAttention: false,
						tag: ['帕金森', '帕金森', '帕金森'],
						location: '武汉',
						date: '3-31',
						count: 376,
						isLike: false,
						msg: '今天去协和医院方媛主任看了，左旋多巴调整剂量到一次2片了，一天吃2次，希望调整剂量后睡眠会好一点。',
						atUserName: '黄奶奶',
						imgUrl: ['http://iph.href.lu/232x316'],
					},
				]
			}
		},
		methods: {
			substrMsg: function(str) {
				if (str.length > this.len) {
					str = str.substr(0, this.len);
				}

				return str;
			},
		}
	}
</script>

<style scoped lang="less">
	.attentionList {
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

					.sexIcon {
						position: absolute;
						bottom: 0;
						right: 0;
						width: 16px;
						height: 16px;
						background-repeat: no-repeat;
						background-size: contain;

						&.man {
							background-image: url('../../../static/man.png');
						}

						&.woman {
							background-image: url('../../../static/woman.png');
						}

					}
				}

				.userName {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;

					p {
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
						margin-bottom: 4px;
					}

					.sub {

						font-size: 12px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(51, 51, 51, .5);
						line-height: 16px;
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

			.content {
				margin-bottom: 8px;

				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 26px;
				text-align: justify;

				.at {
					font-size: 16px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #00AEE4;
					line-height: 26px;
					&:focus {
						outline: 0;
					}
				}
				
				a{
					font-size: 16px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: @color;
					line-height: 26px;
						
					position: absolute;
					right: 16px;		
						
				}
			}
			
			.contentImg{
				margin-bottom: 8px;
				img{
					vertical-align: top;
				}
				&.more{
					margin: 0 -8px 0 0;
					img{
						margin: 0 8px 8px 0;
					}
				}
			}

			.tagBox {
				display: flex;

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
						margin-bottom: 8px;
						min-width: 70px;

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
							flex: 1;
							text-align: center;
						}
					}
				}

				.date {
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, .6);
					line-height: 16px;
					text-align: right;
					width: 100px;
					margin-top: 3px;
				}
			}

			.footer {
				display: flex;
				align-items: center;

				.interImgBox {
					flex: 1;
					display: flex;
					align-items: center;

					.inter {
						margin-right: 12px;
						display: flex;
						align-items: center;

						img {
							width: 24px;
							height: 24px;
							margin-right: -4px;
						}
					}

					span {
						font-size: 12px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 16px;
					}
				}

				.btnGroup {
					display: flex;

					button {
						width: 24px;
						height: 24px;
						border: 0;
						padding: 0;
						background-size: contain;
						background-color: transparent;
						margin-left: 18px;
					}

					.msgBtn {
						background-image: url('../../../static/msg.png');
					}

					.unlikeBtn {
						background-image: url('../../../static/unlike.png');
					}

					.likeBtn {
						background-image: url('../../../static/like.png');
					}

					.shareBtn {
						background-image: url('../../../static/share.png');
					}
				}
			}
		}
	}
</style>
