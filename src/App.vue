<template>
	<div class="container">
		<router-view></router-view>
		<nav class="nav">
			<router-link to="/" class="navItem">
				<div class="navIcon"></div>
				<span>首页</span>
			</router-link>
			<router-link to="/community" class="navItem">
				<div class="navIcon"></div>
				<span>社区</span>
			</router-link>
			<router-link to="/mall" class="navItem">
				<div class="navIcon"></div>
				<span>商城</span>
			</router-link>
			<router-link to="/myHealth" class="navItem">
				<div class="navIcon"></div>
				<span>我的健康</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>
<style scoped lang="less">
	.container {
		min-height: 100vh;
		padding-bottom: 50px;
	}

	.nav {
		position: fixed;
		z-index: 100;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		box-shadow: 0 -1px 0.5px rgba(51, 51, 51, .16);

		.navItem {
			flex: 1;
			justify-content: center;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;

			.navIcon {
				width: 26px;
				height: 26px;
				margin-bottom: 2px;
			}

			&:nth-child(1) {
				.navIcon {
					background: #fff url('../static/home.png') center center no-repeat;
					background-size: 26px 26px;
				}

				&.router-link-exact-active {
					.navIcon {
						background: #fff url('../static/home_selected.png') center center no-repeat;
						background-size: 26px 26px;
					}
				}
			}

			&:nth-child(2) {
				.navIcon {
					background: #fff url('../static/community.png') center center no-repeat;
					background-size: 26px 26px;
				}

				&.router-link-exact-active {
					.navIcon {
						background: #fff url('../static/community_selected.png') center center no-repeat;
						background-size: 26px 26px;
					}
				}
			}

			&:nth-child(3) {
				.navIcon {
					background: #fff url('../static/mall.png') center center no-repeat;
					background-size: 26px 26px;
				}

				&.router-link-exact-active {
					.navIcon {
						background: #fff url('../static/mall_selected.png') center center no-repeat;
						background-size: 26px 26px;
					}
				}
			}

			&:nth-child(4) {
				.navIcon {
					background: #fff url('../static/myHealth.png') center center no-repeat;
					background-size: 26px 26px;
				}

				&.router-link-exact-active {
					.navIcon {
						background: #fff url('../static/myHealth_selected.png') center center no-repeat;
						background-size: 26px 26px;
					}
				}
			}

			span {
				font-size: 10px;
				font-family: PingFangSC-Regular, PingFang SC;
				color: rgba(51, 51, 51, .6);
				line-height: 12px;
			}
		}
	}
</style>
