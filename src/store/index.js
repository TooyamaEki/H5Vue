import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)


const store = new Vuex.Store({
//   state,
//   mutations,
//   getters,
//   actions,
  modules
})

export default store
