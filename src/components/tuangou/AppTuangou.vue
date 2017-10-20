<template>
  <div class="app-tuangou">
        <app-tuangou-header></app-tuangou-header>
        <div  v-infinite-scroll="getData"
  infinite-scroll-distance="10">
            <app-tuangou-goods :goods="goods"></app-tuangou-goods>
        </div>
       
        
    
  </div>
</template>
<script>
import AppTuangouHeader from './AppTuangouHeader'
import AppTuangouGoods from "./AppTuangouGoods"
import axios from "axios"
import { InfiniteScroll  } from 'mint-ui';

export default {
  name: "AppTuangou",
  data() {
      return {
            pageSize: 5,
            pageIndex: 1,
            goods:[],
            loading: true
      }
  },
  methods: {
    getData() {
        let that = this
        if(this.loading){
           
            axios.get("http://tg.wochu.cn/client/v1/groupBuy/HotSaleList", {
                params: {
                    parameters: {
                        pageSize: that.pageSize,
                        pageIndex: that.pageIndex
                    }
                }
            }).then((res)=>{
                if(res.data.data.items.length==0) {   
                    this.loading = false           
                    return false;
                }
                //console.log(res.data.data.items)            
                that.goods =that.goods.concat(res.data.data.items)         
                that.pageIndex++;  
            })
        }
        
    }
  },
  components: {
      AppTuangouHeader,
      AppTuangouGoods
  }
}
</script>
<style scoped lang="scss">

</style>


