<template>
	<div class="search-container">
		<!-- 搜索栏 -->
		<form action="/">
			<van-search 
				v-model="searchText" 
				placeholder="请输入搜索关键词" 
				show-action
				shape="round"
				background="#4fc08d"
				@search="onSearch(searchText)"
				@cancel="$router.back()"
				@focus="isResultShow = false"
			/>
		</form>
		<!-- /搜索栏 -->
		
		<!-- 搜索结果 -->
		<search-result 
		:search-text="searchText"
		v-if="isResultShow" />
		<!-- /搜索结果 -->
		
		<!-- 联想建议 -->
		<search-suggestion  
		:search-text="searchText"
		@search="onSearch"
		v-else-if="searchText" />
		<!-- /联想建议 -->
		
		
		<!-- 历史记录 -->
		<search-history 
		@search="onSearch"
		:search-histories="searchHistories"
		@update-history="searchHistories = $event"
		v-else />
		<!-- /历史记录 -->
		
		
	</div>
</template>

<script>
	import SearchSuggestion from './components/search-suggestion'
	import SearchHistory from './components/search-history'
	import SearchResult from './components/search-result'
	import { setItem,getItem } from '@/utils/storage'
	// import { getSearchHistories } from '@/api/search'
	import { mapState } from 'vuex'
	
	
	export default{
		name:'SearchIndex',
		components:{
			SearchResult,
			SearchSuggestion,
			SearchHistory
		},
		props:{},
		data(){
			return{
				searchText:'',//搜索输入框的内容
				isResultShow:false,//控制搜索结果的显示状态
				searchHistories:getItem('search-histories') || []
			}
		},
		computed:{
			...mapState(['user'])
		},
		watch:{
			searchHistories(){
				setItem('search-histories',this.searchHistories)
			}
		},
		created() {
			this.loadSearchHistories()
		},
		mounted() {
			
		},
		methods:{
			onSearch(searchText){
				this.searchText = searchText
				
				const index = this.searchHistories.indexOf(searchText)
				if(index !== -1){
					this.searchHistories.splice(index,1)
				}
				this.searchHistories.unshift(searchText)
				
				// setItem('search-histories',this.searchHistories)
				
				this.isResultShow = true
			},
			async loadSearchHistories(){
				const searchHistories = getItem('search-histories') || []
				// if(this.user){
				// 	const { data } = await getSearchHistories()
				// 	searchHistories = [...new Set([...searchHistories,...data.data.keywords])]
				// }
				
				this.searchHistories = searchHistories
				
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	
</style>
