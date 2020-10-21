<template>
	<div class="search-suggestion">
		<van-cell
			icon="search"
			v-for="(str,index) in suggestions"
			:key="index"
			@click="$emit('search',str)"
		>
			<div slot="title" v-html="highlight(str)"></div>
		</van-cell>
	</div>
</template>

<script>
	import {getSearchSuggestions} from '@/api/search'
	import { debounce } from 'lodash'
	
	
	export default{
		name:'SearchSuggestion',
		components:{},
		props:{
			searchText:{
				type:String,
				required:true
			}
		},
		data(){
			return{
				suggestions:[] //联想数据建议列表
			}
		},
		computed:{},
		watch:{
			searchText:{
				handler: debounce(async function(){
					const {data} = await getSearchSuggestions(this.searchText)
					this.suggestions = data.data.options
				},200),
				immediate:true 
			}
		},
		created() {
			
		},
		mounted() {
			
		},
		methods:{
			highlight(str){
				//RegExp  是正则表达式的构造函数
				//参数一、字符串
				//参数二、匹配模式
				//返回值:正则对象
				return str.replace(
					new RegExp(this.searchText,'gi'),
					`<span style="color:orange">${this.searchText}</span>`
				)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
</style>
