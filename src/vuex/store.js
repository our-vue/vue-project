
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
// import getters from './getters'
Vue.use(Vuex)

const state = {
	sort_info1:[],
	sort_info2:[],
	sort_left:[],
	sort_change:[],
	parentInfo:{},
	name:'',
	username:''
}

const mutations = {
	getInfo1(state,info){		
		state.sort_info1=info
		let obj=state.sort_info1.filter(function(obj){
			return obj.parentId==0
		})
		state.sort_left=obj
	},
	getInfo2(state,info){
		state.sort_info2=info
	},
	choose(state,arr){
		let obj=state.sort_info1.filter(function(obj){
			return obj.parentId==arr._id
		})
		state.sort_change=obj
		state.parentInfo=arr			
	},
	changeUsername(state,userID) {
        state.username = userID;
        
    }
}

const getters={
	
}

const store = new Vuex.Store({
	state,mutations,actions,getters
})


export default store