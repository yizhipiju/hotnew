// 请求模块
import axios from 'axios'
// import JSONbig from 'json-bigint'
import store from '@/store'

import { Toast } from 'vant'

import router from '@/router/'

const refreshTokenReq = axios.create({
	baseURL:'http://ttapi.research.itcast.cn/'
})

const request = axios.create({
	baseURL:'http://ttapi.research.itcast.cn/',//基础路径
	
	// transformResponse:[function(data){
	// 	try{
	// 		return JSONbig.parse(data)
	// 	}catch(err){
	// 		console.log('转换失败',err)
	// 		return data
	// 	}
	// }]
	
})


//请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
	const { user } = store.state
	
	//如果用户已登录，统一给接口设置token信息
	if(user){
		config.headers.Authorization = `Bearer ${user.token}`
	}
	
	//处理完之后一定要把config请求返回
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

//响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
   
    return response;
  }, async function (error) {
    
	
	const status = error.response.status
	if(status === 400){
		// 客户端参数请求异常
		Toast.fail('客户端参数请求异常')
	}else if(status === 401){
		//token无效
		//如果没有user或者user.token，直接去登录
		const { user } = store.state
		if(!user || !user.token){
			return redirectLogin()
		}
		//如果有refresh_token,则请求获取新的token
		try{
			const { data } = await refreshTokenReq({
				method:'PUT',
				url:'/app/v1_0/authorization',
				headers:{
					Authorization:`Bearer ${user.refresh_token}`
				}
			})
		//拿到新的token之后把它更新到容器中
			user.token = data.data.token
			store.commit('setUser',user)
			
		//把失败的请求重新发出去
			return request(error.config)
		}catch(err){
			redirectLogin()
		}
		
	}else if(status === 403){
		//没有权限操作
		Toast.fail('没有权限操作')
	}else if(status >= 500){
		//服务端异常
		Toast.fail('服务端异常')
	}
	
    return Promise.reject(error);
  });

function redirectLogin(){
	router.replace({
		name:'login',
		query:{
			redirect:router.currentRoute.fullPath
		}
	})
}

//导出
export default request