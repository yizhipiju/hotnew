<template>
	<div class="my-container">
		<!-- <div class="user-info">
			<div class="base-info"></div>
			<div class="data-info"></div>
		</div> -->
		<van-cell-group v-if="user" class="my-info">
		  <van-cell class="base-info" center :border="false">
			  <van-image class="avatar" slot="icon" fit="cover" round :src="currentUser.photo" />
			  <div class="name" slot="title">{{currentUser.name}}</div>
			  <van-button class="update-btn" size="mini" round type="primary" >编辑资料</van-button>
		  </van-cell>
		  
		  <van-grid :border="false" class="data-info">
		    <van-grid-item class="data-info-item">
				<div slot="text" class="text-wrap">
					<div class="count">{{currentUser.art_count}}</div>
					<div class="text">头条</div>
				</div>
			</van-grid-item>
		    <van-grid-item class="data-info-item">
				<div slot="text" class="text-wrap">
					<div class="count">{{currentUser.follow_count}}</div>
					<div class="text">关注</div>
				</div>
			</van-grid-item>
		    <van-grid-item class="data-info-item">
				<div slot="text" class="text-wrap">
					<div class="count">{{currentUser.fans_count}}</div>
					<div class="text">粉丝</div>
				</div>
			</van-grid-item>
		    <van-grid-item class="data-info-item">
				<div slot="text" class="text-wrap">
					<div class="count">{{currentUser.like_count}}</div>
					<div class="text">获赞</div>
				</div>
			</van-grid-item>
		  </van-grid>
		</van-cell-group>
		
		<div v-else class="not-login">
			<div class="mobile" @click="$router.push('/login')">	
				<img src="./未登录.png" />
			</div>
			<div class="text">登录 / 注册</div>
		</div>
		
		<van-grid :column-num="2" class="nav-grid mb-4">
		  <van-grid-item class="nav-grid-item" icon-prefix="hotnew" icon="shoucang" text="收藏" />
		  <van-grid-item class="nav-grid-item" icon-prefix="hotnew" icon="lishi" text="历史" />  
		</van-grid>
		
		<van-cell title="消息通知" is-link to="" class="message1 mb-4" />
		<van-cell title="小爱同学" is-link to="" class="message2 mb-8" />
		<van-cell v-if="user" @click="onLogout" title="退出登录" class="logout-cell" />
		
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { getCurrentUser } from '@/api/user'
	
	export default{
		name:"MyInex",
		data(){
			return{
					currentUser:{}//当前登录用户信息
			}
		},
		computed:{
			...mapState(['user'])
		},
		methods:{
			async loadCurrentUser(){
				const { data } = await getCurrentUser()
				this.currentUser = data.data
			},
			onLogout(){
				//提示用户退出
				this.$dialog.confirm({
				  title: '退出提示',
				  message: '确认退出吗？'
				})
				  .then(() => { 
				    // on confirm
					//确认退出
					//清除用户登录状态
					this.$store.commit('setUser',null)
				  })
				  .catch(() => {
				    // on cancel
				  })
			}
			
		},
		created() {
			this.loadCurrentUser()
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.my-container{
		background-color: #EEEEEE;
		height: 667px;
		
		.my-info{
			background: url(header.jpg) no-repeat;
			background-size: cover;
			.base-info{
				box-sizing: border-box;
				height: 115px;
				background-color: unset;
				padding-top: 38px;
				padding-bottom: 11px;
				.avatar{
					width: 60px;
					height: 60px;
					border: 1px solid #fff;
					box-sizing: border-box;
					margin-right: 18px;
				}
				.name{
					color: #fff;
					font-size: 15px;
				}
				.update-btn{
					height: 20px;
					color: seagreen;
				}
			}
			.data-info{
				.data-info-item{
					height: 80px;
					color: #fff;
					.text-wrap{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.count{
							font-size: 20px;
						}
						.text{
							font-size: 13px;
						}
					}
				}
			}
			/deep/ .van-grid-item__content{
				background-color: unset;
			}
		}
		.not-login{
			height: 195px;
			background: url(header.jpg);
			background-size: cover;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			
			.mobile{
				width: 66px;
				height: 66px;
			}
			.mobile img{
				width: 100%;
				height: 100%;
			}
			.text{
				color: #fff;
				font-size: 16px;
			}
		}
		/deep/ .nav-grid{
			.nav-grid-item{
				height: 70px;
				.hotnew{
					font-size: 22px;
				}
				.hotnew-shoucang{
					color: #E8BF6A;
					
				}
				.hotnew-lishi{
					color: chartreuse;
				}
				.van-grid-item__text{
					font-size: 14px;
					color: #333333;
				}
			}
		}
		.logout-cell{
			text-align: center;
			color: brown;
			font-weight: 600;
			font-size: 20px;
			background-color: sandybrown;
		}
		.mb-4{
			margin-bottom: 6px;
		}
		.mb-8{
			margin-bottom: 20px;
		}
		.message1{
			background-color: seagreen;
		}
		.message2{
			background-color: salmon;
		}
		
	}
</style>
