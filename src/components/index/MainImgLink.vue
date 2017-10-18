<template id='main-img-link'>
	<div class="main-img-link">
		<img :src="item.items[0].imgUrl" />
	</div>
</template>

<script>
	export default {
		name:'MainImgLink',
		props:['item'],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
.main-img-link{
	width:100%;
	background: #f8f8f8;
	margin:0;
	img{
		width:100%;
	}
	
}
</style>