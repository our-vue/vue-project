<template>
  <div class="app-classify-input">

     <input type="text" placeholder="支持首字母搜索">
  </div>
</template>
<script>
export default {
  name: 'AppClassifyInput'
}
</script>

<style scoped lang="scss">  
    .app-classify-input{
        height: 0.5rem;
        background: #fff;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
          width:90%;
          height:0.33rem;
          border:1px solid #ccc;
          border-radius:5px;
          padding-left:0.35rem;
          background:url("../../assets/icon-search-40@2x.png") no-repeat left 0.1rem center;
          background-size:0.2rem;
        }
    }
</style>
