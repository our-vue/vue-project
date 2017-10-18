import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/index/AppMain'
import AppClassify from '@/components/classify/AppClassify'
import AppCars from '@/components/cars/AppCars'
import AppMine from '@/components/mine/AppMine'
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
    	path:'/mine',
    	name:'mine',
    	component:AppMine
    }
  ]
})
