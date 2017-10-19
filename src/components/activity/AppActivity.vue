<template>
  <ul class="app-activity">
      <li v-for="img in imgs" :key="img.aId"><img :src="img.imageUrl" alt=""></li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
    name:"AppActivity",
    data() {
        return {
            imgs:[],
            loading: true
        }
    },
    methods: {
        getImages() {
            let that = this
            if(this.loading) {
                axios.get("http://wmall.wochu.cn/client/v1/goods/activityTemplate",{
                    params: {
                        parameters: {
                            aTId:391
                        }
                    }
                }).then((res)=> {
                    console.log(res.data.data.areaList)
                    that.imgs = res.data.data.areaList
                })
            }

        }
    },
    mounted() {
        this.getImages()
    }
  
}
</script>
<style lang="scss" scoped>
.app-activity {
    width:100%;
    li {
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>


