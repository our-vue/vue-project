<template>
  <div class="app-login-duanxin">
    <form action="" @submit.prevent="submit" class="form">
          <p><input type="text" placeholder="输入手机号" class="tell" v-model="tellinfo"/></p>
          <p><input type="password" placeholder="输入密码" class="mima" v-model="yazhen"><span class="iconfont icon-wangjimima-copy"></span></p>
          <p><input type="submit" value="登录" class="submit"></p>
    </form>
    <p class="message" @click="password">忘记密码</p>
  </div>
</template>

<script>
import router from '../../router'
import {mapActions} from 'vuex'
export default {
  name: 'AppLoginDuanxin',
  data() {
    return {
      tellinfo:'',
      yazhen:''
    }
  },
  methods: {
    ...mapActions(['login']),
    password() {
      router.push("password")
    },
    submit() {
        this.login({username:this.tellinfo,password:this.yazhen})
    }
  }
   
}
</script>
<style lang="scss">
    .mint-toast {
      position: fixed;
      max-width: 85%;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      -webkit-transition: opacity .3s linear;
      transition: opacity .3s linear;
        .mint-toast-icon {
            display: block;
            text-align: center;
            font-size: 0.22rem;
            color: #e23333;
        }
    }
    
</style>
<style scoped lang="scss">
.app-login-duanxin {
  width: 100%;
  padding: 0 0.27rem;
  box-sizing: border-box;
  .form {
    width: 100%;
    p {
      width: 100%; 
      position: relative; 
      input {
        width: 100%;
        border: none;
        height: 0.5rem;
        border-bottom: 1px solid #ccc;
        outline: none;
        font-size: 0.16rem;
      }
      span {
        position: absolute;
        right: 0;
        bottom: 0.1rem;
        color: #ccc;
        font-size: 0.25rem;
      }
      .submit {
        margin-top: 0.3rem;
        height: 0.6rem;
        background: #c3dcb3;
        color: #fff;
        font-size: 0.2rem;
        border-radius: 0.3rem;
      }
    }
  }
  .message {
    font-size: 0.2rem;
    color: #668528;
    margin-top: 0.2rem;
    text-align: right;
  }
  .actionfont {
    color: #668528;
  }
 
}
</style>
