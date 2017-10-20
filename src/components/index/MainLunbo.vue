<template>
	<div class="main-lunbo swiper-container">
		
		    <div class="swiper-wrapper">
		        <div v-for="item in lunboData" class="swiper-slide" @click="goToAdv(item.action.data.target.split('='))">
		        	<img :src="item.picUrl">
		        </div>

		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>		    
		   

	</div>
</template>

<script>
	import router from '../../router'
	import Swiper from '../../../static/swiper-3.4.2.min.js'
	let mySwiper;
	export default {
		name:'MainLunbo',
		props:['lunboData'],
		data(){
			return {
				mySwiper:''
			}
		},
		methods:{
			goToAdv(aid){
				//console.log(aid[1])
				router.push({name:'activity',params:{id:aid[1]}})
			}
		},
		mounted(){
			//let activityId=this.lunboData[0].action.data.target.split('=')
			//console.log(activityId)
			mySwiper = new Swiper ('.main-lunbo', {
				autoplay : 3000,
				autoplayDisableOnInteraction : false,
			    loop: true,			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',			    
			  })      
		},
		updated(){
			mySwiper.update()
		}
		
	}
</script>

<style scoped lang='scss'>
	.main-lunbo{
		width:100%;
		height:1.66rem;
		img{
			width:100%;
			height:1.66rem;
		}
	}
</style>