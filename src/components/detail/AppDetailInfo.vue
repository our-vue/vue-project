<template>
  <div class="app-detail-info"  >  
      <div class="good">
        <span class="close" @click="close">×</span>
        <div class="good-info">
            <div class="tupian">
                <img :src="details.picUrl" alt="">
            </div>
            
            <div class="info-title">
                <p class="title">商品售价</p>
                <p class="price">&yen;{{details.price}}</p>
                <div class="number">
                    <span class="num-title">购买数量</span>
                    <div class="active-num">
                        <span @click="changeNumber(true)">一</span>
                        <input class="input" type="text" v-model="num"/>
                        <span @click="changeNumber()">十</span>
                    </div>
                </div>
            </div>
        </div>
        <button @click="joinCatr">加入购物车</button>
       </div>  
        
  </div>
</template>
<script>
import angel from "../../event_bus"
export default {
    name:"AppDetailInfo", 
    props: ['details'], 
    data() {
        return {
           num: 1
        }
    },
    methods: {
      close() {
          angel.$emit("close")
      },
      changeNumber(type) {
          if(type) {
              this.num--
              if(this.num <=1) {
                  this.num=1
              }
          }else {
              this.num++
          }
      }

    },  
}
</script>
<style lang="scss" >
.app-detail-info {
    width: 100%; 
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    background: rgba(0,0,0,0.6);
    .good {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #fff;
        .close {
            position: absolute;
            right:0.1rem;
            top: 0.1rem;
            display: block;
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background: #ccc;
            text-align: center;
            line-height: 0.15rem;
            font-size: 0.2rem;
            color: #fff;
        }
        .good-info {
            padding-top: 0.2rem;
            display: flex;
            justify-content: left;
            padding: 0.2rem;
            .tupian {
                width: 30%;
                border: 1px solid #eee;
                border-radius: 0.1rem;
                text-align: center;
                margin-right: 0.1rem;
                img {
                    width: 100%;
                }
            }
            .info-title {
                .title {
                    color: #ccc;
                   margin-bottom: 0.05rem;
                }
                .price {
                    color: #ff5918;
                    font-size: 0.16rem;
                }
                .number {
                    display: flex;
                    margin-top: 0.25rem;
                    .num-title {
                        font-size: 0.16rem;
                        margin-top: 0.02rem;
                    }
                    .active-num {
                        display: flex;
                        width: 1.3rem;
                        border: 1px solid #ccc;
                        height: 0.35rem;
                        border-radius: 0.1rem;
                        margin-left: 0.1rem;
                        line-height: 0.35rem;
                        span {
                            display: block;
                            width: 0.4rem;
                            // height: 0.3rem;
                            text-align:center;
                            font-weight:bolder;
                            font-size: 0.15rem;
                        }
                        .input {
                            width: 0.5rem;
                            display: block;
                            border: none;
                            outline: none;
                            text-align: center;
                            border-left: 1px solid #ccc;
                            border-right: 1px solid #ccc;
                            box-sizing: border-box;
                            font-size: 0.16rem;
                        }
                    }
                   
                }
            }
            
        }
        button {
            display: block;
            width: 100%;
            height: 0.5rem;
            font-size: 0.16rem;
            border: none;
            outline: none;
            color: #fff;
            background: #ff5918;
        }
    }
   
}
</style>


