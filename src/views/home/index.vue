<template>
	<div class="home-container">
		<van-nav-bar class="app-nav-bar">
			<van-button 
			class="search-btn" 
			slot="title" icon="search" 
			type="primary" 
			round 
			size="small"
			to="/search"
			>搜索</van-button>
		</van-nav-bar>	
		
		<van-tabs v-model="active" class="channel-tabs">
		  <van-tab 
		  class="tab-item"
		  :title="channel.name" 
		  v-for="channel in channels" 
		  :key="channel.id">
			  <article-list :channel="channel" />
		  </van-tab>
		  
		  <div slot="nav-right" class="wap-nav-placeholder"></div>
		  <div slot="nav-right" 
		  @click="isChannelEditShow = true"
		  class="wap-nav-wrap">
			  <van-icon name="wap-nav" />
		  </div>
		  
		</van-tabs>
		
		
		<van-popup 
		v-model="isChannelEditShow" 
		position="bottom" 
		closeable
		close-icon-position="top-left"
		get-container="body"
		class="channel-edit-popup"
		style="height:100%"
		>
			<channel-edit
				:user-channels="channels"
				@close="isChannelEditShow = false"
				@update-active="onUpdateActive"
				:active = "active"
			/>
		</van-popup>
		
	</div>
</template>

<script>
	import { getUserChannels } from '@/api/user'
	import ArticleList from './components/article-list'
	import ChannelEdit from './components/channel-edit'
	import { mapState } from 'vuex'
	import { getItem } from '@/utils/storage'
	
	export default{
		name:'HomeIndex',
		data() {
		    return {
		      active: 0,
			  isChannelEditShow:false,
			  channels:[]//频道列表
		    };
		  },
		computed:{
			...mapState(['user'])
		},
		components:{
			ArticleList,
			ChannelEdit
		},
		methods:{
				//请求获取频道数据
			async loadChannels(){
				let channels = []
				if(this.user){
					const { data } = await getUserChannels()
					channels = data.data.channels
				}else{
					const localChannels = getItem('user-channels')
					if(localChannels){
						channels = localChannels
					}else{
						const { data } = await getUserChannels()
						channels = data.data.channels
					}
				}
				this.channels = channels
				// const { data } = await getUserChannels()
				// this.channels = data.data.channels
			},
			onUpdateActive(index){
				this.active = index
			}
		},
		created() {
			this.loadChannels()
		}
	}
</script>

<style scoped lang="less">
	.home-container{
		/deep/ .van-nav-bar__title{
			max-width: none;
		}
		.search-btn{
			width: 277px;
			height: 32px;
			.van-button__text{
				font-size: 14px;
			}
			.van-icon{
				font-size: 16px;
				border: none;
			}
		}
		.channel-tabs{
			/deep/ .van-tab{
				border-right: 1px solid #edeff3;
				border-bottom: 1px solid #edeff3;
			}
			/deep/ .van-tabs__line{
				// bottom: 20px;
				background-color: #468847;
				// width: 15px !important;
				// height: 3px;
			}
		}
		.wap-nav-placeholder{
			width: 33px;
			flex-shrink: 0;
		}
		.wap-nav-wrap{
			position: fixed;
			right: 0;
			height: 38px;
			width: 33px;
			display: flex;
			color: palevioletred;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			opacity: .9;
			.van-icon{
				font-size: 26px;
			}
			// &:before{
			// 	content: '';
			// 	width: 43px;
			// 	height: 25px;
			// 	background: url(线条.png) no-repeat;
			// 	background-size: contain;
			// 	position: absolute;
			// 	left: -15px;
			// 	top: 5px;
			
			// }
		}
		
	}
</style>
