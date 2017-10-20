<template>
  <div class="app-list-header">
        <div class="header">
          <span class="iconfont icon-common-fanhui-copy" @click="back"></span>
          <h5 v-text='content'></h5>
        </div>
         <h6 v-text='content'></h6>
  </div>
</template>
<script>
	import router from '../../router'
export default {
  name: "AppListHeader",
  props:['content'],
  data() {
      return {

      }
  },
  methods:{
  	back(){
  		router.push('/')
  	}
  }
}
</script>
<style scoped lang="scss">
.app-list-header {
  width: 100%;
  background: white;
  .header {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #55ba42;
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
  h6 {
    padding-top: 0.55rem;
    font-size: 0.18rem;
    font-weight: normal;
    line-height: 0.3rem;
    padding-left: 0.1rem;
  }
}
</style>


