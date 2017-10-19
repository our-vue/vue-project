import Vue from "vue"
import Vuex from "vuex"
import actions from './actions'

Vue.use(Vuex)

const state = {
    username: '',
}

const mutations = {
    changeUsername(state,userID) {
        state.username = userID
    }
}

const store =new Vuex.Store({
    state, mutations, actions
}) 

export default store