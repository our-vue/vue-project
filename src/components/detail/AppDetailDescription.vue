<template>
  <div class="app-detail-description" >
      <!-- {{details}} -->
      <div class="good-description">
          <h4>{{details.goodsName}}</h4>
          <p>{{details.description}}</p>
          <span>&yen;{{details.price}} <span class="old-price">&yen;{{details.marketPrice}}</span></span>
      </div>
      <div class="good-mes">
          <img src="/static/imgs/navigation.png" alt="">
      </div>
      <ul>
          <li><span>产地 ： </span>{{details.origin1}}</li>
          <li><span>保质期 ： </span>{{details.shelfLife}}</li>
          <li><span>规格 ： </span>{{details.specification}}</li>
          <li><span>储存条件 ： </span>{{details.storageCondition}}</li>
      </ul>
      <div class="pingjia">
          <span>商品评价</span>
          <span class="iconfont icon-arrowRight"></span>
      </div>
  </div>
</template>
<script>

export default {
    name:"AppDetailDescription",
    props: ['details'],
    data() {
        return {
           
        }
    },
    methods: {
      
    },  
}
</script>
<style lang="scss" scoped>
.app-detail-description {
    width:100%;
    overflow: hidden;
    position: relative;
    top: -0.3rem;
    z-index: 10;
    .good-description {
        width: 95%;
        background: #fff;
        margin: 0 auto;
        box-shadow: 0 0 0.1rem #666;
        border-radius: 0.1rem;
        padding: 0 0.1rem;
        padding-top: 0.2rem;       
        h4 {
            font-size: 0.18rem;
            color: #001e00;
            padding-bottom: 0.1rem;          
        }
        p {
            color: #666;
            padding-bottom: 0.1rem;
        }
        span {
            display:inline-block;
            font-size: 0.16rem;
            color: #ff5918;
            padding-bottom: 0.1rem;
            font-weight: bold;
            span {
                font-size: 0.14rem;
                padding-left: 0.1rem;
                color: #ccc;   
                font-weight:normal;           
            }
        }
    }
    .good-mes {
        width: 100%;
        line-height: 0.5rem;
        img {
            width: 100%;
        }
    }
    ul {
        width: 100%;
        overflow: hidden;
        padding-left: 0.1rem;
        background: #fff;
        padding-top: 0.15rem;
        li {
            float: left;
            width: 50%;
            padding-bottom: 0.15rem;
            color: #333;
            span {
                color: #ccc;
            }
        }
    }
    .pingjia {
        width: 100%;
        padding:0 0.1rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.5rem;
        background: #fff;
        margin-top: 0.1rem;
    }
    
    
}
</style>


