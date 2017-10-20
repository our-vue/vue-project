<template>
  <div class="app-detail">
     <app-detail-banner :banners="banners"></app-detail-banner>
     <app-detail-description :details="details"></app-detail-description>
     <app-detail-like :likes="likes"></app-detail-like>
     <app-detail-imgs :details="details"></app-detail-imgs>
     <app-detail-footer></app-detail-footer>
     <component :is="isInfo" :details="details"></component>
  </div>
</template>
<script>
import AppDetailBanner from './AppDetailBanner'
import AppDetailDescription from "./AppDetailDescription"
import AppDetailLike from './AppDetailLike'
import AppDetailImgs from './AppDetailImgs'
import AppDetailFooter from './AppDetailFooter'
import AppDetailInfo from "./AppDetailInfo"
import angel from "../../event_bus"
import axios from 'axios'
export default {
    name:"AppDetail",
    components: {
        AppDetailBanner,
        AppDetailDescription,
        AppDetailLike,
        AppDetailImgs,
        AppDetailFooter,
        AppDetailInfo
    },
    data() {
        return {
            banners: [],
            details: [],
            likes: [],
            isInfo: ""
        }
    },
    methods: {
        getBanner() {
            let that = this
            axios.get("http://api5.wochu.cn/client/v1/goods/imgLoopList",{
                params: {
                    parameters: {
                        goodsGuid:this.$route.params.id
                    }
                }
            }).then((res)=> {
                // console.log(res.data.data)
                that.banners = res.data.data
            })

        },
        getDetail() {
            let that = this
            axios.get("http://api5.wochu.cn/api/goods/goods/detail",{
                params: {
                    goodsGuid:this.$route.params.id
                }
            }).then((res)=> {
                // console.log(res.data.data)
                that.details = res.data.data
            })
        },
        getgoodsLike() {
            let that = this
            axios.get("http://api5.wochu.cn/client/v1/goods/getGoodsRelevantList",{
                params: {
                    parameters: {
                        goodsGuid:this.$route.params.id
                    }
                }
            }).then((res)=> {
                // console.log(res.data.data.userloving)
                that.likes = res.data.data.userloving
            })
        }
    },
    mounted() {
        this.getBanner()
        this.getDetail()
        this.getgoodsLike()
        let that = this
        angel.$on("toggle",function() {
            that.isInfo = "AppDetailInfo"
        })
        angel.$on("close",function() {
            that.isInfo = ""
        })
        console.log(this.$route.params.id)
    }
   
   
}
</script>
<style lang="scss" scoped>
.app-detail {
    width:100%;
    // overflow: hidden;
   
    
}
</style>


