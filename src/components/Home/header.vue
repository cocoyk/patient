<template>
	<header class="header">
		<form class="form">
			<div class="icon"></div>
			<input type="text" placeholder="搜索文章/问题/视频/话题等内容" />
		</form>
		<div class="add"></div>
	</header>

</template>

<script>
	export default {
		name: 'Header',
		data: function() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		background-color: #fff;
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
				caret-color: @color;

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
</style>
