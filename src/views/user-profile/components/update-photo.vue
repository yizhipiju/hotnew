<template>
	<div class="update-photo">
		<img class="image" :src="image" ref="image" alt="" />
		<van-nav-bar
			class="toolbar"
			left-text="取消"
			right-text="确认"
			@click-left="$emit('close')"
			@click-right="onConfirm"
		/>
	</div>
</template>

<script>
	import { updateUserPhoto } from '@/api/user'
	import 'cropperjs/dist/cropper.css'
	import Cropper from 'cropperjs'

	
	
	export default{
		name:'UpdatePhoto',
		components:{},
		props:{
			file:{
				required:true
			}
		},
		data(){
			return{
				image:window.URL.createObjectURL(this.file),
				cropper:null
			}
		},
		computed:{},
		watch:{},
		created() {
			
		},
		mounted() {
			const image = this.$refs.image
			this.cropper = new Cropper(image, {
			  viewMode:1,
			  dragMode:'move',
			  aspectRatio:1,
			  // autoCropArea:false,
			  cropBoxResizable:false,
			  cropBoxMovable:false,
			  background:false,
			  movable:true
			})
		},
		methods:{
			getCroppedCanvas(){
				return new Promise(resolve => {
					this.cropper.getCroppedCanvas().toBlob((blob) =>{
						resolve(blob)
					})
				})
			},
			async onConfirm(){
				this.$toast.loading({
					message:'保存中',
					forbidclick:true,
					duration:0
				})
				
				const file = await this.getCroppedCanvas()
				const fd = new FormData()
				fd.append('photo',file)
				
				
				// const fd = new FormData()
				// fd.append('photo',this.file)
				await updateUserPhoto(fd)
				
				
				this.$emit('update-photo',window.URL.createObjectURL(file))
				this.$emit('close')
				this.$toast.success('保存成功')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.toolbar{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: orange;
	}
	/* Ensure the size of the image fit the container perfectly */
	.image {
	  display: block;
	
	  /* This rule is very important, please don't ignore this */
	  max-width: 100%;
	}
</style>
