<template>
	<div class="login-container">
		<van-nav-bar
		  class="app-nav-bar"
		  title="注册 / 登录"
		  left-arrow
		  @click-left="$router.back()"
		/>
	
	
		<!-- 登入 -->
		<!-- 使用vant-from 组件包裹所有的表单项 van-filed -->
		
		<van-form
		 @submit="onLogin"
		  @failed="onFailed"
		   :show-error="false"
			validate-first 
			ref="login-form"
			 :show-error-message="false">
		  <van-field
			v-model="user.mobile"
			icon-prefix="hotnew"
			left-icon="shouji"
			center
			placeholder="请输入手机号"
			name="mobile"
			:rules="formRules.mobile"
		  />
		  <van-field
			v-model="user.code"
			clearable
			icon-prefix="hotnew"
			left-icon="yanzhengma"
			center
			placeholder="请输入验证码"
			name="code"
			:rules="formRules.code"
		  >
			<template #button>
				<van-count-down v-if="isCountDownShow" @finish="isCountDownShow = false" :time="1000*60" format="ss s"/>
			    <van-button v-else round @click.prevent="onSendSms" :loading="inSendSmsLoading" size="mini" type="primary">发送验证码</van-button>
			  </template>
		  </van-field>
		  <div class="login-btn-wrap">
		  	<van-button class="login-btn" type="info" block 
		  	>登录</van-button>
		  </div>
		</van-form>
		
		
	
	</div>
</template>

<script>
	
	import { login,sendSms } from '@/api/user'
	import { Toast } from 'vant'
	
	export default{
		name:"LoginIndex",
		data(){
			return{
				user:{
					mobile:'18365443062',//手机号
					code:'246810'//验证码
				},
				formRules:{
					mobile:[
						{ required: true, message: '请输入手机号' },
						{ pattern:/^1[3|5|7|8|9]\d{9}$/,message:'手机号格式错误' }
						],
					code:[
						{ required: true, message: '请填写验证码' },
						{ pattern:/^\d{6}$/,message:'验证码格式错误' }
					]
				},
				//控制倒计时和发送按钮的显示状态
				isCountDownShow:false,
				inSendSmsLoading:false
			}
		},
		methods:{
			
			async onLogin(){
				Toast.loading({
				  message: '登录中...',
				  forbidClick: true, //背景不能被点击
				  duration:0  //展示时长
				});
				//1、找到数据接口
				//2、封装请求方法
				//3、请求调用登录
				try{
					const { data }  = await login(this.user)
					Toast.success('登陆成功')
					console.log(data.data)
					
					//将后端返回的用户登录状态(token等数据)放到Vuex容器中
					this.$store.commit('setUser', data.data)
					
					//登录成功，跳转回原来页面
					this.$router.back()
				}catch(err){
					// console.log('登录失败',err)
					Toast.fail('登录失败,手机号或验证码错误')
				}
				
				//4、处理响应结果
				
			},
			onFailed(error){
				if(error.errors[0]){
					this.$toast({
						message:error.errors[0].message,
						position:'top'
					})
				}
			},
			async onSendSms(){
				//校验手机号码
				try{
					await this.$refs['login-form'].validate('mobile')
					// console.log(validateRet)
				//验证通过,请求发送验证码,用户接受短信,输入验证码,请求登入
					this.inSendSmsLoading = true
					await sendSms(this.user.mobile)
					//发送验证码,显示倒计时
					this.isCountDownShow = true
				}catch(err){
					let message = ''
					if(err && err.response && err.response.status === 429){
						message = '发送太频繁了,请稍后重试'
					}else if(err.name === 'mobile'){
						message = err.message
					}else{
						message = '发送失败，请稍后重试'
					}
					
					this.$toast({
						message,
						position:'top'
					})
					
				}
				this.inSendSmsLoading = false
				
				
				
				//倒计时结束,隐藏倒计时,显示发送按钮
				
			}
		}
	}
</script>

<style lang="less">
	.login-container{
		.login-btn-wrap{
			padding: 26px 16px;
			.login-btn{
				background-color: #BD2C00;
				border: none;
				.van-button__text{
					font-size: 15px;
				}
			}
		}
	}
</style>
