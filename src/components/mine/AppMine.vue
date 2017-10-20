<template>
	<div class="app-mine">
		<mine-header :uname='uname'></mine-header>
		<app-footer></app-footer>
		<mine-order></mine-order>
		<mine-nav></mine-nav>
		<div class="mine-adv">
			<img :src="data" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import AppFooter from '../common/AppFooter'
	import MineHeader from './MineHeader'
	import MineOrder from './MineOrder'
	import MineNav from './MineNav'
	import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default {
		name:'AppMine',
		data(){
			return {
				data:'',
				uname:localStorage.username?localStorage.username:'未登录'
			}
		},
		components:{
			AppFooter,
			MineHeader,
			MineOrder,
			MineNav
		},
		methods:{
			getData(){
				let that=this;
				axios.get('http://api5.wochu.cn/api/advertisement/position/list?type=2')
					.then((res)=>{
						//console.log(res.data.data[0])
						that.data=res.data.data[0].imageUrl
					})
		
			}
		},
		mounted(){
			
			//console.log(this.uname)
			this.getData()
		}
	
	}
</script>

<style scoped lang="scss">
	.mine-adv{
		height: .75rem;
    	width: 100%;
    	text-align: center;
    	margin-bottom: .55rem;
    	img{
    		width:90%;
    	}
	}
</style>