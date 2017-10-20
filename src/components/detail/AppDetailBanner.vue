<template>
  <div class="app-detail-banner">
     <span class="iconfont icon-common-fanhui-copy fanhui" @click="fanhui"></span>
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner,i) in banners" :key="i"><img :src="banner.picUrl" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../../router'
export default {
    name:"AppDetailBanner",
    props: ["banners"],
    methods: {
        fanhui() {
            router.go(-1)
        }
    },
    mounted() {
        this.mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            pagination : '.swiper-pagination',
            paginationType : 'fraction'   
        }) 
    },
    updated() {
        this.mySwiper.update()
    }
   
   
}
</script>
<style lang="scss" scoped>
.app-detail-banner {
    width:100%;
    position: relative;
    .fanhui {
        position: absolute;
        left: 0.2rem;
        top: .2rem;
        z-index: 10;
        display: block;
        width: 0.3rem;
        height: 0.3rem;
        background: #ccc;
        color: #eee;
        text-align: center;
        line-height: 0.3rem;
        border-radius: 50%;
    }
    img {
        width: 100%;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 0.4rem;
        left: 3.2rem;
    }
    .swiper-pagination {
            width: .4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            background: #ccc;
            color: #eee;
            border-radius: 50%;
           
    }
    
}
</style>


