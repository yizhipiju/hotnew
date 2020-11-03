<template>
	<div class="user-profile">
		<van-nav-bar
		  class="app-nav-bar"
		  title="个人信息"
		  left-arrow
		  @click-left="$router.back()"
		/>
		
		<input type="file" hidden ref="file" accept="image/*" @change="onFileChange" />
		<van-cell title="头像" is-link center @click="$refs.file.click()" class="cell1" >
			<van-image width="30" height="30" round fit="cover"
			:src="user.photo" />
		</van-cell>
		<van-cell title="昵称" 
			class="cell2"
			is-link 
			:value="user.name" 
			@click="isEditNameShow = true"
		></van-cell>
		<van-cell title="性别" 
			class="cell3"
			is-link 
			:value="user.gender === 0 ? '男' : '女' "
			@click="isEditGenderShow = true"
		></van-cell>
		<van-cell title="生日" 
			class="cell4"
			is-link 
			:value="user.birthday"
			@click="isEditBirthdayShow = true"
		></van-cell>
		
		<!-- 修改昵称 -->
		<van-popup 
			v-model="isEditNameShow" 
			position="bottom" 
			:style="{ height: '100%' }" 
		>
			<update-name
				v-if="isEditNameShow"
				v-model="user.name"
				@close="isEditNameShow = false"
			
			></update-name>
		</van-popup>
		
		
		<!-- 修改性别 -->
		<van-popup 
			v-model="isEditGenderShow" 
			position="bottom" 
		>
			<update-gender
				@close="isEditGenderShow = false"
				v-model="user.gender"
			></update-gender>
		</van-popup>
		
		
		<!-- 修改生日 -->
		<van-popup 
			v-model="isEditBirthdayShow" 
			position="bottom" 
		>
			<update-birthday
				v-if="isEditBirthdayShow"
				v-model="user.birthday"
				@close="isEditBirthdayShow = false"
			></update-birthday>
		</van-popup>
		
		
		<!-- 修改头像 -->
		<van-popup 
			class="update-photo-popup"
			v-model="isEditPhotoShow" 
			position="bottom" 
			style="height:100%"
		>
			<update-photo
				v-if="isEditPhotoShow"
				:file="previewImage"
				@close="isEditPhotoShow = false"
				@update-photo="user.photo = $event"
			></update-photo>
		</van-popup>
		
	</div>
</template>

<script>
	import { getUserProfile } from '@/api/user'
	import UpdateName from './components/update-name'
	import UpdateGender from './components/update-gender'
	import UpdateBirthday from './components/update-birthday'
	import UpdatePhoto from './components/update-photo'
	
	export default{
		name:'UserProfile',
		components:{
			UpdateName,
			UpdateGender,
			UpdateBirthday,
			UpdatePhoto
		},
		props:{},
		data(){
			return{
				user:{},
				isEditNameShow:false,
				isEditGenderShow:false,
				isEditBirthdayShow:false,
				isEditPhotoShow:false,
				previewImage:null
			}
		},
		computed:{},
		watch:{},
		created() {
			this.loadUserProfile()
		},
		mounted() {
			
		},
		methods:{
			async loadUserProfile(){
				const { data } = await getUserProfile()
				this.user = data.data
			},
			onFileChange(){
				this.isEditPhotoShow = true
				
				const file = this.$refs.file.files[0]
				this.previewImage = file
				
				this.$refs.file.value = ''  //为了解决相同文件也被触发
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.van-popup{
		background-color: #f5f7f9;
	}
	.update-photo-popup{
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cell1{
		background-color: olivedrab;
	}
	.cell2{
		background-color: orangered;
	}
	.cell3{
		background-color: brown;
	}
	.cell4{
		background-color: gray;
	}
</style>
