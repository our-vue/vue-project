<template>
  <div class="app-login">
      <div class="login-logo">
            <img class="logo-gif" src="/static/imgs/loginTop.gif" alt="" >
            <img class="close" @click="close" src="/static/imgs/close.png" alt="" >
      </div>
      <div class="login-info">
          <span :class='duanxin' @click="duanxin1">短信登录</span>
          <span :class='mima' @click="mima1">密码登录</span>
      </div>
      <component :is="type"></component>
  </div>
</template>

<script>
import router from "../../router"
import AppLoginDuanxin from  './AppLoginDuanxin'
import AppLoginMima from './AppLoginMima'
export default {
  name: 'AppLogin',
  data() {
    return {
      duanxin: "active",
      mima: "",
      type: "AppLoginDuanxin"
    }
  },
  components: {
    AppLoginDuanxin,
    AppLoginMima
  },
  methods: {
    close() {
      router.push("cars")
    },
    duanxin1() {
      this.duanxin = "active";
      this.mima = "";
      this.type = "AppLoginDuanxin"
    },
    mima1() {
      this.duanxin = "";
      this.mima = "active";
      this.type= "AppLoginMima"
    }
  }
 

}
</script>

<style scoped lang="scss">
.app-login {
  padding-bottom: 0.5rem;
}
.login-logo {
  width: 100%;
  height: 3.92rem;
  position: relative; 
  .logo-gif {
    width: 100%;
    display:block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
  .close {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .3rem;
    height: .3rem;

  } 
}
.login-info {
  display: flex;
  justify-content: space-around;
  height: 0.48rem;
  line-height: 0.48rem;
  background: #fff;
  font-size: 0.2rem;
  color: #ccc;
  span {
    width: 1.0rem; 
    text-align: center;
  }
}
.active {
  color: #6eb242;
  border-bottom: 2px solid #6eb242;
}

</style>
