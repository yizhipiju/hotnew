// 请求模块
import axios from 'axios'
// import JSONbig from 'json-bigint'
import store from '@/store'

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

//导出
export default request