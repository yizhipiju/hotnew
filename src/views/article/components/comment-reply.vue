<template>
	<div class="comment-reply">
		<van-nav-bar :title="`${comment.reply_count}条回复`">
			<van-icon 
			slot="left" 
			name="cross"
			@click="$emit('close')"
			></van-icon>
		</van-nav-bar>
		
		<comment-item 
			:comment="comment"
		/>
		
		<van-cell title="所有回复"/>
		<comment-list 
			:source="comment.com_id"
			type="c"
		/>
		
		
	</div>
</template>

<script>
	import CommentItem from './comment-item'
	import CommentList from './comment-list'
	
	
	export default{
		name:'CommentReply',
		components:{
			CommentItem,
			CommentList
		},
		props:{
			comment:{
				type:Object,
				required:true
			}
		},
		data(){
			return{}
		},
		computed:{},
		watch:{},
		created() {
			
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped" lang="less">
</style>
