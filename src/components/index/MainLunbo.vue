<template>
	<div class="main-lunbo swiper-container">
		
		    <div class="swiper-wrapper">
		        <div v-for="item in lunboData" class="swiper-slide">
		        	<img :src="item.picUrl">
		        </div>

		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>		    
		   

	</div>
</template>

<script>
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
		mounted(){
			//console.log(this)
			mySwiper = new Swiper ('.main-lunbo', {
				autoplay : 3000,
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