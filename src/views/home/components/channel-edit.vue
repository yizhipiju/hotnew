<template>
	<div class="channel-edit">
		<van-cell :border="false">
			<div slot="title" class="channel-title">我的频道</div>
			<van-button
			type="danger"
			plain
			round
			@click="isEdit = !isEdit"
			size="mini"
			>{{isEdit?'完成':'编辑'}}</van-button>
		</van-cell>
		
		<van-grid :gutter="10">
		  <van-grid-item 
		  v-for="(channel,index) in userChannels" 
		  :key="index" 
		  :icon="(isEdit && index !== 0)?'clear':''"
		  @click="onUserChannelClick(channel,index)"
		  class="grid-item"
		  :class="{active: index=== active}"
		  :text="channel.name" />
		</van-grid>
		
		<van-cell :border="false">
			<div slot="title" class="channel-title">频道推荐</div>
		</van-cell>
		
		<van-grid :gutter="10">
		  <van-grid-item 
		  v-for="(channel,index) in recommendChannels" 
		  :key="index" 
		  class="grid-item"
		  
		  :text="channel.name" 
		  @click="onAdd(channel)"
		  />
		</van-grid>
	</div>
</template>

<script>
	import { getAllChannels,addUserChannel,deleteUserChannel } from '@/api/channel'
	import { mapState } from 'vuex'
	import { setItem } from '@/utils/storage'
 	
	
	
	export default{
		name:'ChannelEdit',
		components:{},
		props:{
			userChannels:{
				type:Array,
				required:true
			},
			active:{
				type:Number,
				required:true
			}
		},
		data(){
			return{
				allChannels:[],
				isEdit:false  //编辑状态
			}
			
		},
		computed:{
			
			...mapState(['user']),
			//推荐频道
			recommendChannels(){
				return this.allChannels.filter(channel=>{
					return !this.userChannels.find(userChannel=>{
						return userChannel.id === channel.id
					})
				})
				
			}
		},
		watch:{},
		created() {
			this.loadAllChannels()
		},
		mounted() {
			
		},
		methods:{
			async loadAllChannels(){
				const { data } = await getAllChannels()
				this.allChannels = data.data.channels
			},
			
			async onAdd(channel){
				this.userChannels.push(channel)
				
				if(this.user){
					await addUserChannel({
						channels:[
							{id:channel.id,seq:this.userChannels.length}
						]
					})
				}else{
					setItem('user-channels',this.userChannels)
				}
				
			},
			onUserChannelClick(channel,index){
				if(this.isEdit && index !== 0){
				//编辑状态删除
					this.deleteChannel(channel,index)
				}else{
				//非编辑状态，切换频道
					this.switchChannel(index)
				}
				
			},
			async deleteChannel(channel,index){
				if(index <= this.active){
					this.$emit('update-active',this.active-1)
				}
				this.userChannels.splice(index,1)
				
				if(this.user){
					await deleteUserChannel(channel.id)
				}else{
					setItem('user-channels',this.userChannels)
				}
				
			},
			switchChannel(index){
				this.$emit('update-active',index)
				
				//关闭弹出层
				this.$emit('close')
			}
		}
		
		
	}
</script>

<style scoped lang="less">
	.channel-edit{
		padding-top: 54px;
		
		.channel-title{
			font-size: 16px;
			color: #333333;
		}
		.grid-item{
			position: relative;
			border: none;
			width: 80px;
			height: 43px;
			/deep/ .van-grid-item__content{
				background-color: goldenrod;
				.van-grid-item__text{
					font-size: 14px;
					color: #222222;
					margin-top: 0;
				}
			}
			/deep/ .van-grid-item__icon{
				position: absolute;
				right: -5px;
				top: -5px;
				color: #666600;
				font-size: 20px;
			}
		}
		.active{
			/deep/ .van-grid-item__text{
				color: white !important;
			}
		}
	}
</style>
