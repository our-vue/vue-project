<template>
	<div class="main-nav">
		<div v-if="navData.length!=0">
			<div class="nav-item" @click='goto("list")'>
				<img :src="navData[0].imgUrl" />
			</div>
			<div class="nav-item" @click='goto("tuangou")'>
				<img :src="navData[1].imgUrl" />
			</div>
			<div class="nav-item" @click='goto'>
				<img :src="navData[2].imgUrl" />
			</div>
			<div class="nav-item" @click='goto'>
				<img :src="navData[3].imgUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	import router from '../../router'
	export default {
		name:'MainNav',
		props:['navData'],		
		methods:{
			
			goto(rout){
		
				router.push(rout)
			}
		}
	}
</script>

<style scoped lang="scss">
.main-nav{
	padding-top:.04rem;
	width:100%;
	height:.9rem;
	background: white;
	.nav-item{
		width:25%;
		height:.9rem;
		float: left;
		text-align:center;
		line-height:.9rem;
		img{
			width:.85rem;
			height:.85rem;
		}
		
	}
}
</style>