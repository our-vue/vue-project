
import axios from 'axios'
import {Toast} from 'mint-ui'
import router from "../router"

const actions = {
    register({commit},params) {
         axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
          params:{
             userID:params.tellinfo,
             password:params.yazhen,
             status:'register'
          }
        }).then((res)=>{
          console.log(res)
            if(res.data == 0) {
                Toast({
                  message:"用户名重名",
                  duration:1500,
                  iconClass: "icon iconfont icon-Group"
                })
            }else if(res.data == 1) {
                router.push("/")
            }else {
               Toast({
                  message:"格式错误",
                  duration:1500,
                  iconClass: "icon iconfont icon-Group"
                })
            }
        })
    },
    login({commit},params) {
        axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
			params:{
				userID:params.username,
				password:params.password,
				status:'login'
			}
		}).then((res)=>{
			if(res.data.userID) {
				commit('changeUsername',res.data.userID)
                router.push("/mine")
            }else {
				 Toast({
                  message:"登录失败",
                  duration:1500,
                  iconClass: "icon iconfont icon-Group"
                })
			}
		})
    }
}

export default actions