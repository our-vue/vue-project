<template>
  <div class="app-tuangou-header">
        <div class="header">
          <span class="iconfont icon-common-fanhui-copy"></span>
          <h5>团购</h5>
        </div>
  </div>
</template>
<script>
export default {
  name: "AppTuangouHeader",
  data() {
      return {

      }
  }
}
</script>
<style scoped lang="scss">
.app-tuangou-header {
  width: 100%;
  .header {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #55ba42;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    span {
      float: left;
      padding-left: 0.2rem;
    }
    h5 {
      text-align: center;
      font-size: 0.2rem;
      font-weight: normal;
    }
    
  }
 
}
</style>


