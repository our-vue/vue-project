<template>
  <div class="app-classify">
    <app-classify-input></app-classify-input>
    <app-classify-body></app-classify-body>   
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppClassifyInput from './AppClassifyInput'
import AppClassifyBody from './AppClassifyBody'
	import AppFooter from '../common/AppFooter'

export default {
  name: 'AppClassify',
  components:{
    AppClassifyInput,
    AppClassifyBody,
    AppFooter
  }
}
</script>

<style scoped>

</style>
