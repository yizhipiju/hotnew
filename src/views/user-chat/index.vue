<template>
	<div class="user-chat">
		<van-nav-bar
		  class="app-nav-bar"
		  title="小爱同学"
		  left-arrow
		  @click-left="$router.back()"
		/>
		
		<van-cell-group class="message-list" ref="message-list">
		  <van-cell 
			:title="item.msg"
			v-for="(item, index) in messages"
			:key="index"
		  />
		  
		</van-cell-group>
		
		<van-cell-group class="send-message-wrap">
			<van-field 
				:border="false"
				v-model="message" 
				placeholder="请输入消息"
			/>
			<van-button  
				type="primary"
				@click="onSend"
			>发送</van-button>
		</van-cell-group>
		
	</div>
</template>

<script>
	import io from 'socket.io-client'
	import { getItem, setItem } from '@/utils/storage'
	
	
	export default{
		name:'UserChat',
		components:{},
		props:{},
		data(){
			return{
				message:'',
				socket:null,
				messages:getItem('chat-messages') || []
			}
		},
		computed:{},
		watch:{
			messages(){
				setItem('chat-messages',this.messages)
				this.$nextTick(()=>{
					this.scrollToBottom()
				})
			}
		},
		created() {
			const socket = io('http://ttapi.research.itcast.cn/')
			this.socket = socket
			
			socket.on('connect', () => {
				console.log('连接成功')
			})
			// socket.on('event', function(data){})
			socket.on('disconnect', () => {
				console.log('断开连接')
			})
			
			socket.on('message', data => {
				console.log(data)
				this.messages.push(data)
				
			})
		},
		mounted() {
			this.scrollToBottom()
		},
		methods:{
			onSend(){
				const data = {
					msg:this.message,
					timestamp:Date.now()
				}
				this.socket.emit('message',data)
				this.messages.push(data)
				
				this.message = ''
			},
			scrollToBottom(){
				const list = this.$refs['message-list']
				list.scrollTop = list.scrollHeight
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.message-list{
		position: fixed;
		left: 0;
		right: 0;
		top: 46px;
		bottom: 44px;
		overflow-y: auto;
	}
	.send-message-wrap{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		padding: 0 5px;
		align-items: center;
	}
</style>
