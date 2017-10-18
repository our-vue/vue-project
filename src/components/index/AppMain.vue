<template>
  <div class="app-main">
    <main-header></main-header>
    <main-lunbo :lunboData='lunboData'></main-lunbo>
    <main-nav :navData='navData'></main-nav>
   <component v-for='(item,i) in mainData' :key='i' :is='changeTemplate(item)' :item='item'></component>
   <app-footer></app-footer>
  </div>
</template>

<script>
	import axios from 'axios'
	import MainHeader from './MainHeader'
	import MainLunbo from './MainLunbo'
	import MainNav from './MainNav'
	import MainRemindMsg from './MainRemindMsg'
	import MainImgLink from './MainImgLink'
	import MainBannerSwiper from './MainBannerSwiper'
	import AppFooter from '../common/AppFooter'
export default {
  name: 'AppMain',
  data(){
  	return{
  		lunboData:[],
  		navData:[],
  		mainData:[],
  		type:MainRemindMsg
  	}
  },
  components:{
  	MainHeader,
  	MainLunbo,
  	MainNav,
  	MainRemindMsg,
  	MainImgLink,
  	MainBannerSwiper,
  	AppFooter
  },
  methods:{
  	getData(){
  		let that=this;
			axios.get('http://localhost:3000/wochu/client/v1/app/layoutamend?parameters=%7B%22version%22%3A%2210.0.0%22%2C%22source%22%3A%22H%22%7D')
				.then((res)=>{
					//console.log(res.data.data.recommendedContent[0].items)
					that.lunboData=res.data.data.carousel;
					that.navData=res.data.data.recommendedContent[0].items
				})
			axios.get('http://localhost:3000/wochu/api/app/acts?version=20.0.0&source=H')
				.then((res)=>{
					//console.log(res.data.data.acts)
					that.mainData=res.data.data.acts
				})
  	},
  	changeTemplate(result){
  		return result.templateType==5?'MainRemindMsg':result.templateType==4?'MainImgLink':result.templateType==13?'MainBannerSwiper':''
  	}
  },
  mounted(){
  	
  	this.getData()
  }
 
}
</script>


<style scoped>
.app-main{
	width:100%;

	padding-top:.45rem;
	padding-bottom: .45rem;
	
}
</style>
