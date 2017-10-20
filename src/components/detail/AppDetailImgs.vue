<template>
  <div class="app-detail-imgs" v-html="details.descriptionDetail" >
        
  </div>
</template>
<script>

export default {
    name:"AppDetailImgs",
    props: ['details'],
    data() {
        return {
           
        }
    },
    methods: {
      
    },  
}
</script>
<style lang="scss" >
.app-detail-imgs {
    width: 100%; 
        img {
            width: 100%;
        }
}
</style>


