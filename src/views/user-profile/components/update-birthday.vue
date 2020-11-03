<template>
	<div class="update-birthday">
		<van-datetime-picker
		  v-model="currentDate"
		  type="date"
		  title="选择年月日"
		  :min-date="minDate"
		  :max-date="maxDate"
		  @cancel="$emit('close')"
		  @confirm="onConfirm"
		/>
	</div>
</template>

<script>
	import { updateUserProfile } from '@/api/user'
	import dayjs from 'dayjs'
	
	export default{
		name:'UpdateBirthday',
		components:{},
		props:{
			value:{
				type:String,
				required:true
			}
		},
		data(){
			return{
				minDate: new Date(1970, 0, 1),
				maxDate: new Date(2025, 10, 1),
				currentDate: new Date(this.value),
			}
		},
		computed:{},
		watch:{},
		created() {
			
		},
		mounted() {
			
		},
		methods:{
			async onConfirm(){
				this.$toast.loading({
					message:'保存中',
					forbidclick:true
				})
				
				// const date = `${this.currentDate.getFullYear()}-${this.currentDate.getMonth()+1}-${this.currentDate.getDate()}`
				const date = dayjs(this.currentDate).format('YYYY-MM-DD')
				
				await updateUserProfile({
					birthday:date
				})
				
				
				this.$emit('input',date)
				this.$emit('close')
				this.$toast.success('保存成功')
				
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
</style>
