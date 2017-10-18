<template>
  <div class="app-classify">
    <app-classify-input></app-classify-input>
    <app-classify-body></app-classify-body>   
  </div>
</template>
<script>
import AppClassifyInput from './AppClassifyInput'
import AppClassifyBody from './AppClassifyBody'

export default {
  name: 'AppClassify',
  components:{
    AppClassifyInput,
    AppClassifyBody
  }
}
</script>

<style scoped>

</style>
