<template>
	<div class="app-classify-detail">
		<div class="header">
			<div class="header_top">
				<span class="iconfont back icon-common-fanhui-copy" @click.stop="backTo"></span>
				<p class="title">{{title.title}}</p>
				<p>
					<span><img src="../../../assets/icon-search-40@2x.png"/></span>
					<span class="iconfont icon-gouwudai"></span>
				</p>
			</div>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="food in foods" :key="food.id" style="min-width: 100px;" @click="type=food.id">{{food.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//http://api5.wochu.cn/api/goods/getcategoryandgoods?orderId=1&categoryId=2
	import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
	import Swiper from '../../../../static/base/swiper.min.js'
	export default {
		name: 'AppClassifyDetail',
		data() {
			return {
				 	type:1
			}
		},
		computed: {
			...mapState({
				foods: 'sort_change',
				title: 'parentInfo'
			})
		},
		components: {
				
		},
		methods: {
			backTo(){
				this.$emit('goback')
			}
		},
		mounted() {
			this.$on('goback', function() {
				window.history.go(-1)
			})
			let swiper = new Swiper('.swiper-container', {			
//      slidesPerView: 3,
        paginationClickable: true,
			});
		}
	}
</script>
 @import '../../../../static/base/swiper-3.4.2.min.css'

<style lang="scss">
 
	.app-classify-detail {
		.header {
			background: #fff;
			.header_top {
				height: 0.5rem;
				border-bottom: 1px solid #ccc;
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				.title {
					flex: 1;
					text-align: center;
					padding-left: 0.35rem;
				}
				p {
					font-size: 0.2rem;
				span {
						font-size: 0.26rem;
						color: #333;
						margin-right: 0.1rem;
					img {
							width: 0.25rem;
							height: 0.25rem;
						}
					}
				}
				.back {
					margin-left: 0.1rem;
				}
			}
			.swiper-container {
				width: 100%;
				height: 0.5rem;			
				.swiper-wrapper {
					width: 100%;
					height: 100%;
					display:flex;	
					align-items:center;	
					.swiper-slide {
						 padding:0 0.1rem;
						 color:#666;
					}		
					.on{
						 color:#008000;
						 border-bottom:1px solid #008000;
					}	
				}				
			}
		}
	}
</style>