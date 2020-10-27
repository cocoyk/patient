<template>
	<div class="shareList">
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
			
			<p class="msg">{{item.msg}}</p>
			
			<div class="doctorBox">
				<div class="img" :class="{man:item.shareSex===0,woman:item.shareSex===1}">
					<img :src="require('../../../static/doctor.png')" alt="" />
					<div class="sexIcon"></div>
				</div>
				<div class="doctorInfo">
					<div class="name">
						<span class="shareName">{{item.shareName}}</span>
						<span class="shareNameSub">{{item.shareNameSub}}</span>
					</div>
					<span class="shareText">{{item.shareText}}</span>
				</div>
			</div>
			<div class="footer">
				<div class="tag">
					<div v-for="(it,ind) in item.tag" :key="ind" class="tagItem">
						<div class="imgBox">
							<img :src="require('../../../static/tag.png')" alt=""/>
						</div>
						<span>{{it}}</span>
					</div>				
					<div class="tagItem location">
						<div class="imgBox">
							<img :src="require('../../../static/location.png')" alt=""/>
						</div>	
						<span>{{item.location}}</span>
					</div>
				</div>
				<span class="date">{{item.date}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items:[{
					sex:0,
					name:'李青峰',
					age:63,
					disease:'帕金森 II期 2 年',
					msg:'分享了一张名片',
					
					shareName:'陈吉相',
					shareNameSub:'主任医师',
					shareText:'神经科｜华中科技大学附属协和医院',
					shareSex:0,
					date:'3-31',
					
					tag:['帕金森','帕金森'],
					location:'武汉',
					
				},
				{
					sex:0,
					name:'李友宝',
					age:63,
					disease:'帕金森 II期 2 年',
					msg:'值得我们学习的人，分享给大家',
					
					shareName:'吴敏霞',
					shareNameSub:'',
					shareText:'63 岁 帕金森 II期 2 年',
					shareSex:1,
					date:'3-31',
					
					tag:['帕金森','帕金森'],
					location:'武汉',
					
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.shareList{
		.item{
			margin-bottom: 8px;
			padding: 16px 16px 8px 16px;
			background-color: #fff;
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
			
			.msg{
				margin: 8px auto;
				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 26px;
			}
			
			.doctorBox {
				height: 80px;
				background: rgba(51, 51, 51, 0.05);
				border-radius: 8px;
				padding: 16px 8px;
				display: flex;
			
				.img {
					width: 48px;
					height: 48px;
					margin-right: 8px;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.sexIcon{
						width: 16px;
						height: 16px;
						position: absolute;
						right: 0;
						bottom: 0;
					}
					&.man{
						.sexIcon{
							background: url('../../../static/man.png') no-repeat;
							background-size: contain;
						}
						
					}
					&.woman{
						.sexIcon{
							background: url('../../../static/woman.png') no-repeat;
							background-size: contain;
						}
						
					}
				}
			
				.doctorInfo {
					flex: 1;
					display: flex;
					flex-direction: column;
					
					.name {
						flex: 1;
						margin-bottom: 2px;
						.shareName {
							font-size: 18px;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: #333333;
							line-height: 26px;
							margin-right: 8px;
						}
			
						.shareNameSub {
							font-size: 14px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 20px;
						}
					}
			
					.shareText {
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
					}
				}
			}
			
			
			.footer{
				display: flex;
				margin-top: 9px;
				.tag{
					flex: 1;
					display: flex;
					flex-wrap: wrap;
					.tagItem{
						background: #F7F0E7;
						height: 24px;
						border-radius: 12px;
						border: 1px solid #CFA972;
						
						display: flex;
						align-items: center;
						margin-bottom: 8px;
						min-width: 70px;
						
						&:not(:last-child){
							margin-right: 9px;
						}
						padding: 0 8px 0 1px;
						.imgBox{
							width: 20px;
							height: 20px;
							border-radius: 20px;
							margin-right: 5px;
							background-color: #fff;
							img{
								width: 100%;
								height: 100%;
							}
						}
						span{
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
				.date{
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(51,51,51,.6);
					line-height: 16px;
					text-align: right;
					width: 100px;
					margin-top: 3px;
				}
			}
			
		}
	}
</style>
