import Vue from 'vue'
import Vuex from 'vuex'
import example from '../../analyse/exampleStoreModule'
import analyseOverview from '../../analyse/overviewStoreModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analyseOverview: analyseOverview.overviewStoreModule,
    b: example
  }
})
