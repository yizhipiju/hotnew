<template>
	<div class="update-gender">
		<van-picker
		   show-toolbar
		   :default-index="defaultIndex"
		   :columns="columns"
		   @cancel="$emit('close')"
		   @confirm="onConfirm"
		   @change="onGenderChange"
		 />
	</div>
</template>

<script>
	import { updateUserProfile } from '@/api/user'
	
	export default{
		name:'UpdateGender',
		components:{},
		props:{
			value:{
				type:Number,
				required:true
			}
		},
		data(){
			return{
				 columns: ['男','女'],
				 defaultIndex:this.value,
			}
		},
		computed:{},
		watch:{},
		created() {
			
		},
		mounted() {
			
		},
		methods:{
			onGenderChange(picker,value,index){
				this.defaultIndex = index
			},
			async onConfirm(){
				this.$toast.loading({
					message:'保存中',
					forbidclick:true
				})
				
				await updateUserProfile({
					gender:this.defaultIndex
				})
				
				
				this.$emit('input',this.defaultIndex)
				this.$emit('close')
				this.$toast.success('保存成功')
				
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
</style>
