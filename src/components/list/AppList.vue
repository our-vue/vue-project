<template>
  <div class="app-list">
        <app-list-header :content='tagname'></app-list-header>
        <div  v-infinite-scroll="getData"
  infinite-scroll-distance="10">
            <app-list-goods :goods="goods"></app-list-goods>
        </div>
       <div class="msg"><span>{{msg}}</span></div>
        
    
  </div>
</template>
<script>
import AppListHeader from './AppListHeader'
import AppListGoods from "./AppListGoods"
import axios from "axios"
import { InfiniteScroll  } from 'mint-ui';

export default {
  name: "AppList",

  data() {
      return {
            tagname:'本周特惠专区',
            orderId: "0",
            pageSize: 6,
            pageIndex: 1,
            goods:[],
            msg:'',
            loading: true
      }
  },
  methods: {
    getData() {
        let that = this
        if(this.loading)(
            axios.get("http://localhost:3000/wochu/client/v1/goods/SearchByTagName", {
                params: {
                    parameters: {
                        tagname: that.tagname,
                        orderId: that.orderId,
                        pageSize: that.pageSize,
                        pageIndex: that.pageIndex
                    }
                }
            }).then((res)=>{
                if(res.data.data.items.length==0) {   
                    this.loading = false           
                    that.msg = "没有更多数据了！"
                    return false;
                }
               // console.log(res.data.data.items)            
                that.goods =that.goods.concat(res.data.data.items)         
                that.pageIndex++;  
            })
        )
        
    }
  },
  components: {
      AppListHeader,
      AppListGoods
  }
}
</script>
<style scoped lang="scss">
.msg {
    width: 100%;
    margin: 0.3rem 0;
    text-align: center;
    color: #ccc;    
}
</style>


