<template>
	<div class="article-list">
		<van-pull-refresh v-model="isRefreshLoading" :success-text="refreshSuccessText" :success-duration="1000" @refresh="onRefresh">
		  <van-list
		    v-model="loading"
		    :finished="finished"
		    finished-text="没有更多了"
		    @load="onLoad"
		  >
			
			<article-item
				v-for="(article,index) in articles" :key="index" :article=article
			 />
		    <!-- <van-cell v-for="(article,index) in articles" :key="index" :title="article.title" /> -->
			
		  </van-list>
		</van-pull-refresh>
		
	</div>
</template>

<script>
	import { getArticles } from '@/api/article'
	import ArticleItem from '@/components/article-item'
	
	
	export default{
		name:"ArticleList",
		props:{
			channel:{
				type:Object,
				required:true
			}
		},
		components:{
			ArticleItem
		},
		data() {
		    return {
		      articles: [],
		      loading: false,
		      finished: false,
		      timestamp:null,
			  isRefreshLoading:false,
			  refreshSuccessText:''
		    }
		  },
		methods: {
		    async onLoad() {
				
		       // 异步更新数据
		       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
				const { data } = await getArticles({
					channel_id:this.channel.id,//频道id
					timestamp:this.timestamp || Date.now(),//时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
					with_top:1,//是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
				})
				
				const { results } = data.data
				this.articles.push(...results)
				
				this.loading = false
				
				if(results.length){
					this.timestamp = data.data.pre_timestamp
				}else{
					this.finished = true
				}
		    },
			async onRefresh(){
				const { data } = await getArticles({
					channel_id:this.channel.id,//频道id
					timestamp:Date.now(),//时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
					with_top:1,//是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
				})
				
				const { results } = data.data
				this.articles.unshift(...results)
				
				this.isRefreshLoading = false
				
				this.refreshSuccessText = `更新了${results.length}条数据`
			}
		    
		}
		
	}
</script>

<style scoped lang="less">
	.article-list{
		position: fixed;
		left: 0;
		right: 0;
		top: 90px;
		bottom: 50px;
		overflow-y: auto;
		
	}
</style>
