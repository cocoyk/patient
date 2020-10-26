<template>
	<section>
		<!-- 关注列表 -->
		<AttentionList></AttentionList>
		
		<!-- 评价 -->
		<Evaluation></Evaluation>
		
		<!-- 分享 -->
		<ShareList></ShareList>
		
		
		<!-- 关注推荐 -->
		<Recommend></Recommend>
	</section>

</template>

<script>
	import AttentionList from './attentionList.vue';
	import Evaluation from './evaluation.vue';
	import ShareList from './shareList.vue';
	import Recommend from './recommend.vue';
	
	export default {
		components:{
			AttentionList,
			Evaluation,
			ShareList,
			Recommend,
		}
	}
</script>

<style>
</style>
