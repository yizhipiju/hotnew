import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//加载vant组件库
import Vant from 'vant';
//加载vantage组件库样式
import 'vant/lib/index.css';
//全局注册完vant组件库

//自动设置rem基准值（html标签字体大小）
import 'amfe-flexible'

// 加载全局样式
import './styles/index.less'   

//时间处理
import './utils/dayjs'

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
