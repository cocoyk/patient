<template>
	<div class="list">
		<div v-for="(item,index) in items" :key="index" class="item">
			<header>
				
			</header>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items:[{
					userAvatar:'',
					sex:1,
					name:'黄奶奶',
					age:63,
					disease:'帕金森 II期 2 年',
					isFollow:false,
					msg:'',
					tag:['帕金森'],
					location:'武汉',
					data:'3-31',
					count:376,
					isLike:false,
				}]
			}
		}
	}
</script>

<style scoped lang="less">
</style>
