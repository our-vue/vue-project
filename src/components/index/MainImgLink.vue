<template id='main-img-link'>
	<div class="main-img-link">
		<img :src="item.items[0].imgUrl" @click="goto()" />
	</div>
</template>

<script>
	import router from '../../router'
	export default {
		name:'MainImgLink',
		props:['item'],
		data(){
			return{
				
			}
		},
		methods:{
			goto(){
				router.push({name:'activity',params:{id:this.item.items[0].source.split('=')[1]}})
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