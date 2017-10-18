<template>
  <div id="app">
   		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import './style/reset.scss';
#app{
	background: #f8f8f8;
}

</style>
