<template id='main-banner-swiper'>
	<div class="main-banner-swiper swiper-container">
		
	        <div  class="swiper-wrapper">
	        	<div v-for="(good,i) in item.items" :key='i' class="advice-group swiper-slide" @click="goto(good)">
	        		<img class='group-img' :src="good.imgUrl" />
	        		<div class="group-title">{{good.posDes}}</div>
	        		<div class="add-cart">
	        			<span>￥{{good.marketPrice}}</span>
	        			<img src='../../../static/imgs/add.png' />
	        		</div>
	        		<div class="now-price">
	        			￥{{good.price}}
	        		</div>
	        	</div>
	            
	        </div>

	   
	</div>
</template>

<script>
	import router from '../../router'
	import Swiper from '../../../static/swiper-3.4.2.min.js'
	let swiper;
	export default{
		name:'MainBannerswiper',
		props:['item'],
		data(){
			return{
				mySwiper:''
			}
		},
		methods:{
			goto(good){
				console.log(good)
				router.push({name:'detail',params:{id:good.source}})
			}
		},
		mounted(){
			
			swiper = new Swiper('.main-banner-swiper', {		        
		        slidesPerView: 3,
		        spaceBetween: 30
		    });
		}
		
	}
</script>

<style scoped lang='scss'>
.main-banner-swiper{
	padding: .08rem 0 0.08rem .08rem;
	box-sizing: border-box;
	background: white;
	.advice-group{
		width:.95rem!important;
		
		.group-img{
			width:100%;
		}
		.group-title{
			width:.95rem;			
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
			font-size: .12rem;
			margin-bottom: .09rem;
		}
		.add-cart{
			display: flex;
			justify-content: space-between;
			span{
				color: #bababa;
    			text-decoration: line-through;
    			margin-left:.06rem;
			}
			img{
				width:.19rem;
				height:.19rem;
			}
		}
	}
}

</style>