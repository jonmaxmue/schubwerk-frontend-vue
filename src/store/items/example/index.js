import Vue from 'vue'
import Vuex from 'vuex'
import example from '../../analyse/ExampleStoreModule'
import analyseOverview from '../../analyse/OverviewStoreModule'
import analyseRealTimeActivity from '../../analyse/RealTimeActivityStoreModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analyseOverview: analyseOverview.overviewStoreModule,
    analyseRealTimeActivity:
      analyseRealTimeActivity.realTimeActivityStoreModule,
    b: example
  }
})
