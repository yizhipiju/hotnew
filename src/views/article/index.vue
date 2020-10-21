<template>
	<div class="article-container">
		<van-nav-bar
		  class="app-nav-bar"
		  title="文章详情"
		  left-arrow
		  @click-left="$router.back()"
		/>
		
		<h1 class="title">牛逼程序员</h1>
		
		<van-cell center class="user-info">
			<div slot="title" class="name">天涯小星客</div>
			<van-image 
				class="avatar"
				slot="icon"
				fit="cover"
				round
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
			<div slot="label" class="pubdate">14小时前</div>
			<van-button
				icon="plus"
				class="follow-btn"
				type="info"
				round
				size="small"
			>关注</van-button>
		</van-cell>
		<div class="markdown-body">
			<p>h2</p>
			<p>h2</p>
		</div>
		
	</div>
</template>

<script>
	import './github-markdown.css'
	import { getArticleById } from '@/api/article'
	
	export default{
		name:'ArticleIndex',
		components:{},
		props:{
			articleId:{
				type:String,
				required:true
			}
		},
		data(){
			return{}
		},
		computed:{},
		watch:{},
		created() {
			this.loadArticle()
		},
		mounted() {
			
		},
		methods:{
			async loadArticle(){
				const { data } = await getArticleById(this.articleId)
				console.log(data)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	// .article-container{
	// 	background-color: #CBCBCB;
	// }
	.title{
		font-size: 20px;
		color: #fff;
		margin: 0;
		padding: 14px;
		background-color: burlywood;
	}
	.user-info{
		background-color: #9B703F;
		.name{
			font-size: 14px;
			color: magenta;
		}
		.pubdate{
			color: #666;
			font-size: 7px;
		}
		.avatar{
			width: 40px;
			height: 40px;
			margin-right: 8px;
		}
		.follow-btn{
			width: 85px;
			height: 29px;
		}
	}
	
	.markdown-body{
		padding: 14px;
		background-color: #9B703F;
	}
</style>
