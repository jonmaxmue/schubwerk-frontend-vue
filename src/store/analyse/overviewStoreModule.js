import OverviewService from '@/services/OverviewService'

const overviewStoreModule = {
  state: {
    overview: {}, // current overview
    overviews: [
      { id: 'leads', text: '...', done: true },
      { id: 'visits', text: '...', done: false }
    ],
    aTable: {}, // example for next
    aTables: []
  },
  mutations: {
    ADD_OVERVIEW(state, overview) {
      state.overview.push(overview)
    },
    SET_OVERVIEW(state, overview) {
      state.overview = overview
    },
    SET_OVERVIEWS(state, overviews) {
      state.overviews = overviews
    }
  },
  actions: {
    fetchOverview({ commit, getters }, id) {
      var overview = getters.getOverviewById(id)

      if (overview) {
        commit('SET_OVERVIEWS', overview)
      } else {
        OverviewService.getEvent(id)
          .then(response => {
            commit('SET_OVERVIEW', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    getOverviewById: state => id => {
      return state.overviews.find(overview => overview.id === id)
    }
  }
}

export default { overviewStoreModule }
