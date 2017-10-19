<template>
  <div class="app-classify-body-rightb">
  		<h1><img :src="info.imgurl"/></h1>
      <ul>
          <li v-for="food in foods" :key="food.id" @click="jumpTo(food.parentId)">
          	<img :src="food.checkicon">
          	<span>{{food.name}}</span>
          </li>
      </ul>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import router from "../../router"
export default {
  name: 'AppClassifyBodyRightb',
  data(){
    return{
        isShow:true
    }
  },
  computed:{
    ...mapState({foods:'sort_change',info:'parentInfo'})
  },
  methods:{
  	jumpTo(_id){
  			router.push({name:'classifydetail',params:{id:_id}})
  	}
  }
}
</script>

<style scoped lang="scss">  
    .app-classify-body-rightb{
        width:100%;
        height:100%;
        background:#fff;
        overflow: scroll;
        h1{
        	width:95%;
        	padding:0.05rem 0.1rem;
        	height:1rem;
        	img{
        		width: 100%;
        		height:100%;
        	}
        }
        ul{
        	display: flex;
        	flex-wrap: wrap;
        	padding-top:0.2rem;
        	li{
        		width:33.3%;
        		display: flex;
        		flex-direction: column;
        		justify-content: center;
        		align-items: center;
        		padding-bottom: 0.2rem;
        		img{
        			width:0.5rem;
        			height:0.5rem;
        		}
        		span{
        			
        			display: inline-block;
    			    width: 0.85rem;
    			    text-align: center;
					    color: #666;
					    line-height: .5rem;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
        		}
        	}
        }
    }
</style>
