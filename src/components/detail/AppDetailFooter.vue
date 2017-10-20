<template>
  <div class="app-detail-footer"  >
        <div class="catr-img">
            <img src="/static/imgs/catr.png" alt="">
            <span>0</span>
        </div>
        <div class="active-catr">
            <button @click="toggle">加入购物车</button>
        </div>
        
  </div>

</template>
<script>
import angel from "../../event_bus"
export default {
    name:"AppDetailFooter", 
    data() {
        return {
           
        }
    },
    methods: {
        toggle() {
            angel.$emit("toggle")
        }
    },  
   
}
</script>
<style lang="scss" scoped>
.app-detail-footer {
    width: 100%; 
    height: 0.5rem;
    position: fixed;
    left: 0;
    bottom: 0;  
    z-index: 1000; 
    .catr-img {
        width: 20%;
        background: #eb481c;
        text-align: center;
        position: relative;  
        height: 0.5rem;
        float: left;    
        img {
            width: 0.2rem;
            margin-top: 0.15rem;          
        }
        span {
            display: block;
            width: 0.15rem;
            height: 0.15rem;
            text-align: center;
            line-height: 0.15rem;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            left: 55%;
            top: 20%;
            color: #ff5918;
        }
    }
    .active-catr {
        width: 80%;    
        float: left; 
        button {
            width: 100%;
            background: #ff5918;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.16rem;
            color: #fff;
            outline: none;
            border: none;
        }
    }
}
</style>


