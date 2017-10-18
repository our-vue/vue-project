<template>
	<div class="app-footer">
		<div class="footer-item" @click="changeRouter('','/')">
			<img :src="type==''?'../../../static/imgs/index_r.png':'../../../static/imgs/index_n.png'">
			<span :class='type=="index"?"active":""'>首页</span>
		</div>
		<div class="footer-item" @click="changeRouter('classify','classify')">
			<img :src="type=='classify'?'../../../static/imgs/shopping_r.png':'../../../static/imgs/shopping_n.png'">
			<span :class='type=="classify"?"active":""'>分类</span>
		</div>
		<div class="footer-item" @click="changeRouter('cars','cars')">
			<img :src="type=='cars'?'../../../static/imgs/cart_r.png':'../../../static/imgs/cart_n.png'">
			<span :class='type=="cart"?"active":""'>购物车</span>
		</div>
		<div class="footer-item" @click="changeRouter('mine','mine')">
			<img :src="type=='mine'?'../../../static/imgs/my_r.png':'../../../static/imgs/my_n.png'">
			<span :class='type=="mine"?"active":""'>我的</span>
		</div>
	</div>
</template>

<script>
	import router from '../../router'
	export default {
		name:'AppFooter',
		data(){
			return {
				type:''
			}
		},
		methods:{
			changeRouter(type,path){
				this.type=type;
				router.push(path)
			}
		},
		mounted(){
			//console.log(this.$route.path.replace('/',''))
			this.type=this.$route.path.replace('/','')
		}
	}
</script>

<style scoped lang="scss">
.app-footer{
	z-index:10;
	width:100%;
	height:.45rem;
	background: white;
	padding-bottom: .03rem;
	position: fixed;
	bottom: 0;
	.footer-item{
		float:left;
		width:25%;
		height:.45rem;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;
		img{
			width:.29rem;
			height:.29rem;
		}
		span{			
    		color: #999
		}
		.active{
			color:#5d8640;
		}
	}
}
</style>