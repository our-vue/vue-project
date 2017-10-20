<template>
  <div class="app-detail-like" >
        <div class="cai-likes">
            <i></i>
            <span class="you">猜你喜欢</span>
            <i></i>
        </div>
        <ul class="swiper-goods element">
            <li class="like-goods" v-for="like in likes" :key="like.goodsGuid">
                <img :src="like.picUrl" alt="" />
                <p>{{like.goodsName}}</p>
                <div class="price">
                    <div>
                        <span class="old-price">&yen;{{like.marketPrice}}</span>               
                        <span>&yen;{{like.price}}</span>
                    </div>
                    <img src="/static/imgs/add.png" alt="" />
                </div>               
            </li>               
        </ul>
  </div>
</template>
<script>

export default {
    name:"AppDetailLike",
    props: ['likes'],
    data() {
        return {
           
        }
    },
    methods: {
      
    },  
}
</script>
<style lang="scss" scoped>
.app-detail-like {
    width: 100%;
    margin-top: -0.1rem;
    .cai-likes {
        height: 0.4rem;
        display: flex;
        justify-content: center;
        i {
            display: block;
            width: 20%;
            height: 1px;
            background: #001e00;
            margin-top:0.1rem;             
        }
        span {
            display: block;
            width: 20%;
            text-align: center;
            color: #001e00;
            font-size: 0.16rem;
        }
    }
    .swiper-goods {    
        width: 100%;  
        height: 1.89rem;
        background: #fff;
        padding: 0.1rem 0;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;        
        li {
            display: inline-block;
            width: 1.2rem;
            padding-left: 0.1rem;
            color: #001e00;          
            img {
                width: 100%;
            }
            p {
                font-size: 0.12rem;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-bottom: 0.01rem;
            }
            .price {
                display: flex;
                justify-content: space-between;
                span {
                    display: block;
                    padding-top: 0.02rem;
                    &.old-price {
                        color: #666;
                        text-decoration: line-through;
                    }
                    
                }
                img {
                    width: 0.2rem;
                    height: 0.2rem;
                    margin-top: 0.15rem;
                    margin-right: 0.05rem;
                }
                
            }
            
        }
    }
    .element::-webkit-scrollbar {
        display: none;
    } 
   
    
}
</style>


