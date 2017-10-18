<template>
  <div class="app-classify-body-left">
      <ul>
          <li id="tj" @click.stop="changeId('tj',''),id1='tj'"><p :class="id1=='tj'?'on':''">推荐</p></li>
          <li v-for="item in items" :key="item.id" :id="item.id"  @click.stop="changeId({_id:item.id,imgurl:item.adImg.url,title:item.name}),id1=item.id" ><p :class="id1==item.id?'on':''">{{item.name}}</p></li>
      </ul>
  </div>
</template>
<script>

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'AppClassifyBodyLeft',
  data(){
    return {
        id1:"tj"     
    }
  },
  computed:{
      ...mapState({items:'sort_left'})
  },
  methods:{
      ...mapMutations({changeId:'choose'})
    }
}
</script>

<style scoped lang="scss">
  .on{
    color:green!important;
    border-left:2px solid green;
    font-size:0.16rem !important;
  }  
    .app-classify-body-left{
            width:25%;
            height:100%;
            background:#fff;
            border-right:1px solid #ccc;
            overflow:scroll;
            ul{
              li{               
                  padding:0.1rem 0;
                  
                  p{
                    height:0.3rem;
                    line-height:0.3rem;
                    text-align:center;
                    color:#666;
                    font-size:0.14rem;
                  }
                }
            }
    }
</style>
