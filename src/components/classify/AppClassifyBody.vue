<template>
  <div class="app-classify-body">
			  <div v-if='isReady' class="ini">
					  <app-classify-body-left></app-classify-body-left>
		        <app-classify-body-right></app-classify-body-right>
			  </div>
        <div v-else class="inin">
        		<img src="../../assets/loadding.gif"/>
        </div>
  </div>
</template>
<script>
import AppClassifyBodyLeft from './AppClassifyBodyLeft'
import AppClassifyBodyRight from './AppClassifyBodyRight'
import axios from 'axios'
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'AppClassifyBody',
  data(){
    return{
    	isReady:false
    }   
  },
  components:{
    AppClassifyBodyLeft,
     AppClassifyBodyRight
  },
  methods:{
      menu1(url){
        let that=this
        axios.get(url).then((res)=>{       
             that.$store.commit('getInfo1',res.data.data)
             that.isReady=true
        })
      },
      menu_item1(url){
        let that=this
         axios.get(url).then((res)=>{
           that.$store.commit('getInfo2',res.data.data)
          })
      }
  },
  mounted(){
    this.menu1("http://api5.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D")
    this.menu_item1("http://api5.wochu.cn/client/v1/goods/GetCategoryRecommendList")
  }
}
</script>

<style scoped lang="scss">  
    .app-classify-body{
    	.ini{
    		margin-top:0.1rem;
        display:flex;
        width:100%;
        height:5.58rem;
    	}
        .inin{
        	position: absolute;
        	width: 1rem;
        	height:2.2rem;
        	top:50%;
        	left:50%;
        	margin:-1.1rem 0 0 -0.5rem;
        	img{
        		width: 100%;
        		height:100%;
        	}
        }
    }
</style>
