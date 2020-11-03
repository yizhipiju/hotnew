<template>
	<div class="article-container">
		<van-nav-bar
		  class="app-nav-bar"
		  title="文章详情"
		  left-arrow
		  @click-left="$router.back()"
		/>
		
		<div class="article-wrap">
			<h1 class="title">{{article.title}}</h1>
			
			<van-cell center class="user-info">
				<div slot="title" class="name">{{article.aut_name}}</div>
				<van-image 
					class="avatar"
					slot="icon"
					fit="cover"
					round
					:src="article.aut_photo"
				/>
				<div slot="label" class="pubdate">{{article.pubdate | relativeTime}}</div>
				<van-button
					:icon="article.is_followed?'':'plus'"
					class="follow-btn"
					:type="article.is_followed ? '' : 'info'"
					round
					:loading="isFollowLoading"
					size="small"
					@click="onFollow"
				>{{article.is_followed ? '已关注' : '关注'}}</van-button>
			</van-cell>
			<div class="markdown-body" 
			ref="article-content"
			v-html="article.content"></div>
			
			<!-- 文章评论；列表 -->
			<comment-list 
			:source="articleId" 
			:list="commentList" 
			@reply-click="onReplyClick"
			@update-total-count="totalCommentCount = $event"
			/>
			
			
		</div>
		
		
		
		
		<!-- 底部区域 -->
		<div class="artic-bottom">
			<van-button
				class="comment-btn"
				type="default"
				round
				size="small"
				@click="isPostShow = true"
			>
				写评论
			</van-button>
			
			<van-icon 
				name="comment-o"
				:info="totalCommentCount"
				color="#777"
			/>
			
			<van-icon 
				:color="article.is_collected ? 'green' : '#777'"
				:name="article.is_collected ? 'star' : 'star-o'"
				@click="onCollect"
			/>
			
			<van-icon
				:color="article.attitude === 1 ? 'green' : '#777'"
				:name="article.attitude === 1 ? 'good-job' : 'good-job-o'"
				@click="onLike"
			/>
			
			<van-icon name="share" color="#777"></van-icon>
			
			<!-- 发布评论 -->
			<van-popup 
			v-model="isPostShow" 
			position="bottom"  
			>
				<post-comment 
				:target="articleId"
				@post-success="onPostSuccess"
				 />
			</van-popup>
			
			
			
			<!-- 评论回复 -->
			<van-popup
			v-model="isReplyShow" 
			position="bottom"  
			>
				<comment-reply 
					:comment="replyComment"
					@close="isReplyShow = false"
				/>
			</van-popup>
			
			
			
			
		</div>
		
		
	</div>
</template>

<script>
	import './github-markdown.css'
	import { getArticleById } from '@/api/article'
	import { ImagePreview } from 'vant'
	import { addFollow,deleteFollow } from '@/api/user'
	import { addCollect,deleteCollect } from '@/api/article'
	import { addLike,deleteLike } from '@/api/article'
	import CommentList from './components/comment-list'
	import PostComment from './components/post-comment'
 	import CommentReply from './components/comment-reply'
	
	export default{
		name:'ArticleIndex',
		components:{
			CommentList,
			PostComment,
			CommentReply
		},
		props:{
			articleId:{
				type:[String,Number,Object],
				required:true
				
			}
			
		},
		data(){
			return{
				article:{},
				isFollowLoading:false,
				isCollectLoading:false,
				isPostShow:false,
				commentList:[],
				totalCommentCount:0,
				isReplyShow:false,
				replyComment:{}
			}
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
				this.article = data.data
				
				this.$nextTick(()=>{
					this.handlePerviewImage()	
				})
				
				},
				handlePerviewImage(){
					const articleContent = this.$refs['article-content']
					const imgs = articleContent.querySelectorAll('img')
					const imgPaths = []
					imgs.forEach(img => {
						imgPaths.push(img.src)
						img.onclick = function(){
							ImagePreview({
								images:imgPaths,
								startPosition:0
							})
						}
					})
				},
				async onFollow(){
					this.isFollowLoading = true
					if(this.article.is_followed){
						//已关注,取消关注
						await deleteFollow(this.article.aut_id)
						
					}else{
						//没有关注,添加关注
						await addFollow(this.article.aut_id)
					}
					this.article.is_followed = !this.article.is_followed
					this.isFollowLoading = false
				},
				async onCollect(){
					this.$toast.loading({
						message:'操作中...',
						forbidClick:true  //禁止背景点击
					})
					if(this.article.is_collected){
						//已收藏,取消收藏
						await deleteCollect(this.articleId)
						
					}else{
						//没有收藏,添加收藏
						await addCollect(this.articleId)
					}
					this.article.is_collected = !this.article.is_collected
					this.isCollectLoading = false
					this.$toast.success(`${this.article.is_collected ? '' : '取消'}收藏成功`)
				},
				async onLike(){
					this.$toast.loading({
						message:'操作中...',
						forbidClick:true  //禁止背景点击
					})
					if(this.article.attitude === 1){
						//已点赞,取消点赞
						await deleteLike(this.articleId)
						this.article.attitude = -1
					}else{
						//没有点赞,添点赞
						await addLike(this.articleId)
						this.article.attitude = 1
					}
					
					// this.isCollectLoading = false
					this.$toast.success(`${this.article.attitude === 1 ? '' : '取消'}点赞成功`)
				},
				onPostSuccess(comment){
					this.commentList.unshift(comment)
					this.totalCommentCount++
					this.isPostShow = false
				},
				onReplyClick(comment){
					this.replyComment = comment
					this.isReplyShow = true
					console.log(this.replyComment)
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
	.article-wrap{
		position: fixed;
		left: 0;
		right: 0;
		top: 46px;
		bottom: 40px;
		overflow-y: auto;
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
		background-color: #ccc;
	}
	.artic-bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 40px;
		background-color: #FFf;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-around;
		.comment-btn{
			width: 150px;
			height: 30px;
		}
	}
</style>
