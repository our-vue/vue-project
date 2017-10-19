<template>
  <div class="app-tuangou-goods">
        <ul class="goods-list">
          <li v-for="good in goods" :key="good.HotSale_ID">
            <a href="">
              <img :src="good.hotSaleImage[0].URL" alt="">
            </a>          
            <p class="goods-title">{{good.product_title}}</p>
            <p class="goods-info">{{product_describe}}</p>
            <div class="goods-price">
              <span class="price">&yen;{{good.discount_price}}<span class="yuan">/&yen;{{good.market_price}}</span><span class="tuan"> {{good.parter_number}}人团</span></span>
              <a href="">去开团</a>
            </div>
          </li>
         
        </ul>
         
  </div>
</template>
<script>

export default {
  name: "AppTuangouGoods",
  props:["goods"],
  data() {
      return {
          
      }
  },
  
}
</script>
<style scoped lang="scss">
.app-tuangou-goods {
  width: 100%;
  padding-top: 0.5rem;
  box-sizing: border-box;
  .goods-list {
    width: 100%;
    li {
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
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
        padding: 0.05rem 0.1rem 0;
        box-sizing: border-box;
      }
      .goods-info {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.14rem;
        color: #ccc;
        padding: 0 0.1rem;
        box-sizing: border-box;
      }
      .goods-price {
        width: 100%;
        padding: 0.2rem 0.1rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        .price {
          font-size: 0.18rem;;
          color: #f39e65;
          .yuan {
            font-size: 0.14rem;
            color: #ccc;
            margin-left: 0.05rem;
            text-decoration: line-through;
          }
        }
        a {
          display: block;
          width: 1rem;
          height: 0.37rem;
          text-align: center;
          line-height: 0.37rem;
          color: #fff;
          background: #f96d16;
          border-radius: 0.1rem;
          font-size: 0.16rem;
        }
      }
    }
  }
  
}
</style>


