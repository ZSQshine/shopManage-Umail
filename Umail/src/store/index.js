import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {mutations,getters,state} from './mutations'
import actions from './actions'

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})