<template>
	<div class="comment-list">
		<van-cell>全部标题</van-cell>
		<van-list 
			v-model="loading" 
			:finished="finished" 
			finished-text="没有更多了" 
			@load="onLoad"
			
		>
			<comment-item 
				v-for="(comment,index) in list"
				:key="index" 
				:comment="comment"
				@reply-click="$emit('reply-click',$event)"
			/>
			<!-- <van-cell 
			v-for="(comment,index) in list" 
			:key="index" 
			:title="comment.content" /> -->
		</van-list>
	</div>
</template>

<script>
	import { getComments } from '@/api/comment'
	import CommentItem from './comment-item'
	
	export default {
		name: 'CommentList',
		components: {
			CommentItem
		},
		props: {
			source:{
				type:[Number,String,Object],
				required:true
			},
			type:{
				type:String,
				default:'a'
			},
			list:{
				type:Array,
				default:() => []
			}
		},
		data() {
			return {
				// list: [],
				loading: false,
				finished: false,
				offset:null,
				limit:10
			}
		},
		computed: {},
		watch: {},
		created() {

		},
		mounted() {
			
		},
		methods: {
			async onLoad() {
				const { data } = await getComments({
					type:this.type,
					source:this.source.toString(),
					offset:this.offset,
					limit:this.limit
				})
				
				this.$emit('update-total-count',data.data.total_count)
				
				const { results } = data.data
				console.log(results)
				this.list.push(...results)
				this.loading = false
				if(results.length){
					this.offset = data.data.last_id
				}else{
					this.finished = true
				}
			},
		}
	}
</script>

<style scoped="scoped" lang="less">
</style>
