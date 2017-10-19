import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/index/AppMain'
import AppClassify from '@/components/classify/AppClassify'
import AppCars from '@/components/cars/AppCars'
import AppClassifyDetail from '@/components/classify/classifydetail/AppClassifyDetail'
import AppMine from '@/components/mine/AppMine'
import AppLogin from '@/components/login/AppLogin'
import AppPassword from "@/components/login/AppPassword"
import AppList from "@/components/list/AppList"
import AppTuangou from "@/components/tuangou/AppTuangou"
import AppActivity from "@/components/activity/AppActivity"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: AppMain
    },
    {
    	path: '/classify',
    	name: 'classify',
    	component: AppClassify
    	
    }, 
    {
    	path: '/cars',
    	name: "cars",
    	component: AppCars
    },
    {
    	path: '/classifydetail',
    	name: "classifydetail",
    	component: AppClassifyDetail
    },
     {
    	path:'/mine',
    	name:'mine',
    	component:AppMine
    },
    {
      path: '/login',
      name: "login",
      component: AppLogin
    },
     {
      path: '/password',
      name: "password",
      component: AppPassword
    },
    {
      path: '/list',
      name: "list",
      component: AppList
    },
     {
      path: '/tuangou',
      name: "tuangou",
      component: AppTuangou
    },
    {
      path: '/activity',
      name: "activity",
      component: AppActivity
    }
  ]
})
