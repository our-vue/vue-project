<template>
  <div class="app-classify-body-righta">
        <div class="one" v-for="item in foods_a" :key="item.id">
           <h3><span></span>{{item.name}}<span></span></h3>
            <ul>
                <li v-for="food in item.children" :key="food.id">
                    <img :src="food.imgUrl">
                    <span>{{food.name}}</span>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  name: 'AppClassifyBodyRighta',
  data(){
    return{
        isShow:true
    }
  },
  computed:{
    ...mapState({foods_a:'sort_info2'})
  },
  watch:{
      
  }
}
</script>

<style scoped lang="scss">  
    .app-classify-body-righta{
    	height: 100%;
    	overflow: scroll;
        .one{
             margin-bottom:0.05rem;
             background:#fff;
            h3{
                padding-top:0.05rem;
                text-align:center;
                padding-bottom:0.3rem;
                span{
                    display:inline-block;
                    width:0.3rem;
                    height:0.005rem;
                    background:#ccc;
                    vertical-align:middle;
                    margin:0 0.1rem;
                }
            }
            ul{
                display:flex;
                width:100%;
                flex-wrap: wrap;
                li{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    width: 33.3%;
                    padding-bottom:0.1rem;
                    span{
                   			line-height: 0.5rem;
                    }
                    img{
                        width:0.5rem;
                        height:0.5rem;
                    }
                }
            }
        }
    }
</style>
