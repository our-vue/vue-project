<template>
	<div class="main-nav">
		<div class="nav-item" v-for="(nav,i) in navData" :key='i' >
			<img :src="nav.imgUrl" />
		</div>
	</div>
</template>

<script>
	export default {
		name:'MainNav',
		props:['navData'],
		data(){
			return {
				
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