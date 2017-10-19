<template>
  <div class="app-cars">
    <router-link to="login" class="cars-login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppCars',

}
</script>


<style scoped lang="scss">
.app-cars {
  width: 100%;
  .cars-login {
    position: fixed;
    left: 50%;
    top: 30%;
    margin-left: -0.6rem;
    display: block;
    width: 1.2rem;
    height: 0.32rem;
    border: 2px solid #f67d30;
    color: #f67d30;
    text-align: center;
    line-height: 0.32rem;
    font-size: .16rem;

  }
}

</style>
