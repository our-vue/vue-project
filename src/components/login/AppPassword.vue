<template>
  <div class="app-password">
    <header>
      <span class="iconfont icon-common-fanhui-copy" @click="fanhui"></span>
      <p>忘记密码</p>
    </header>
    <form action="" @submit.prevent="submit" class="form">
          <p><input type="text" placeholder="输入手机号" class="tell" v-model="tellinfo" maxlength="11"/><span class="del" v-show="show" @click="del">×</span></p>
          <p><input type="text" placeholder="输入验证码" class="yazhen" v-model="yazhen"><span :class="flag">获取验证码</span></p>
          <p><input type="submit" value="修改密码并登录" class="submit"></p>
    </form>
   
  </div>
</template>

<script>
import axios from 'axios'
import router from "../../router"
import {mapActions} from "vuex"
import {Toast} from "mint-ui"
export default {
  name: 'AppPassword',
  data() {
    return {
      tellinfo:'',
      yazhen:'',
      imgs:[],
      flag:"yzinfo",
      show: false
    }
  },
  methods: {
     ...mapActions(['register']),
    fanhui() {
      router.go(-1)
    },
    del() {
        this.tellinfo = ''
        this.show = false
    },
    submit() {
      if(this.tellinfo && this.yazhen) {
        this.register({username:this.tellinfo,password:this.yazhen})
      }else if(this.tellinfo.length==0){
        Toast({
          message:"手机号不能为空",
          duration:1500,
          iconClass: "icon iconfont icon-Group"
        })
      }else if(this.yazhen.length ==0){
         Toast({
          message:"密码不能为空",
          duration:1500,
          iconClass: "icon iconfont icon-Group"
        })
      }
    }

  },
  watch: {  
    tellinfo() {
      if(this.tellinfo != "") {
        this.show = true
      }     
      if(this.tellinfo.length == 11){
            this.flag = "action"
      }else{
        this.flag= "yzinfo"
      }
    }
  },
  
 

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
.app-password {
  width: 100%;
  header {
    width: 100%;
    height: 0.35rem;
    line-height: 0.35rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    span {
      font-size: 0.16rem;
      float: left;
      padding-left: 0.2rem;
    }
    p {
      font-size: 0.18rem;;
      color: #666;
      text-align: center;
      
    }
  }
  .form {
    width: 100%;
    padding: 0 0.27rem;
    box-sizing: border-box;
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
      .yzinfo {
        position: absolute;
        right: 0;
        bottom: 0.1rem;
        background: #eee;
        color: #ccc;
        font-size: 0.16rem;
        width: 0.9rem;
        height: 0.3rem;
        text-align: center;
        line-height:0.3rem;
        border-radius: 0.1rem;
      }
      .del {
        position: absolute;
        right: 0;
        bottom: 0.1rem;
        font-size: 0.2rem; 
        background: #eee;
        width: 0.25rem;
        height: 0.25rem;
        text-align: center;
        line-height: 0.25rem;
        border-radius: 50%;
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
    color: #eee;
    margin-top: 0.2rem;
    text-align: center;
  }
  .action {
      position: absolute;
      right: 0;
      bottom: 0.1rem;
      font-size: 0.16rem;
      width: 0.9rem;
      height: 0.3rem;
      text-align: center;
      line-height:0.3rem;
      border-radius: 0.1rem;
      background: #6eb042;
      color: #fff;
  }
 
}
</style>
