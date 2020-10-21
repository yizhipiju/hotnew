// PostCSS的配置文件
//PostCSS是基于Node.js运行的CSS的工具
module.exports = {
	//配置要是用的相关插件
  plugins: {
	  //自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
	//把px转换为rem
    'postcss-pxtorem': {
		//转换的根元素基准值
		//vant组件库是基于逻辑像素375宽写的
      rootValue: 37.5,
	  
	  //需要转换的CSS属性,*就是所有属性都要转换
      propList: ['*'],
    },
  },
}