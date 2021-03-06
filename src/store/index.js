import Vue from 'vue'
import Vuex from 'vuex'
import { getItem,setItem,removeItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'hotnew-user'

export default new Vuex.Store({
  state: {
	  user:getItem('USER_KEY'),  //当前登录用户的登录状态 (token等数据)
	  // user:JSON.parse(window.localStorage.getItem('user'))  //当前登录用户的登录状态 (token等数据)
	  cachePages:['LayoutIndex']
  },
  mutations: {
	  setUser(state,data){
		  state.user = data
		  
		  //为了防止页面刷新数据丢失，我们还需要把数据放到本地存储中，这里仅仅是为了持久化数据
		  setItem('USER_KEY',state.user)
		  // window.localStorage.setItem('user',JSON.stringify(state.user))
	  },
	  addCachePage(state,pageName){
		  if(!state.cachePages.includes(pageName)){
			  state.cachePages.push(pageName)
		  }
	  },
	  removeCachePage(state,pageName){
		  const index = state.cachePages.indexOf(pageName)
		  if(index !== -1){
			  state.cachePages.splice(index,1)
		  }
	  }
  },
  actions: {
  },
  modules: {
  }
})
