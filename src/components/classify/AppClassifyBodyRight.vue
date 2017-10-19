<template>
  <div class="app-classify-body-right">   
  	<keep-alive>
      <component :is="isShow?'AppClassifyBodyRighta':'AppClassifyBodyRightb'"></component>
      </keep-alive>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import  AppClassifyBodyRighta from './AppClassifyBodyRighta'
import  AppClassifyBodyRightb from './AppClassifyBodyRightb'

export default {
  name: 'AppClassifyBodyRight',
  data(){
    return{
        isShow:true,
        ab:[]
    }
  },
  components:{
      AppClassifyBodyRighta,AppClassifyBodyRightb
  },
  computed:{
    ...mapState({foods:'sort_change'})
  },
  watch:{
  	foods:function(nv,ov){
  		if(nv.length!=0){
  			 this.isShow=false
  		}else{
  			this.isShow=true
  		}
  	}
  }
  
}
</script>

<style scoped lang="scss">  
    .app-classify-body-right{
        width:85%;
        height:100%;       
    }
</style>
