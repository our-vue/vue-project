<template>
  <div class="app-list-goods">
        <ul class="goods-list">
          <li v-for="good in goods" :key="good.goodsGuid">
            <a href="">
              <img :src="good.picUrl" alt="">
            </a>          
            <p class="goods-title">{{good.goodsName}}</p>
            <div class="goods-price">
              <span class="price">&yen;{{good.price}}<span>&yen;{{good.marketPrice}}</span></span>
              <img src="/static/imgs/gouwuche.png" alt="">
            </div>
          </li>
         
        </ul>
         
  </div>
</template>
<script>

export default {
  name: "AppListGoods",
  props:["goods"],
  data() {
      return {
          
      }
  },
  
}
</script>
<style scoped lang="scss">
.app-list-goods {
  width: 100%;
  background: white;
  .goods-list {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    li {
      width: 50%;
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-top: 0.1rem;
      padding-bottom: 0.2rem;
      a {
        display: block;
        width: 100%;
        overflow: hidden;
        border: 1px solid #eee;
        img {
          width: 100%;
        }
      }
      .goods-title {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.18rem;
        color: #676665;
        margin: 0.05rem;
      }
      .goods-price {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .price {
          font-size: 0.16rem;;
          color: #f39e65;
          span {
            font-size: 0.14rem;
            color: #ccc;
            margin-left: 0.05rem;
          }
        }
        img {
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
  }
  
}
</style>


