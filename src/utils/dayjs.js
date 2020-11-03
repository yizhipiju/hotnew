
import Vue from 'vue'

// 初始化dayjs相关配置
import dayjs from 'dayjs'

//配置使用中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'
//配置使用处理相对时间
dayjs.extend(relativeTime)

dayjs.locale('zh-cn')


//把处理相对时间的代码包装为全局过滤器，就可以在任何模板中使用啦
Vue.filter('relativeTime',value=>{
	return dayjs(value).from(dayjs())
})

Vue.filter('datetime',(value,format = 'YYYY-MM-DD HH:mm:ss')=>{
	return dayjs(value).format(format)
})


// 当前实例使用
dayjs().format()

