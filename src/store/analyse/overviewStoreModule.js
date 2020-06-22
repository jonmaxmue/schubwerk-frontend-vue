import OverviewService from '@/services/analyse/OverviewService'

const overviewStoreModule = {
  namespaced: true,
  state: {
    overview: {
      id: 'leads',
      items: [
        {
          title: 'Total',
          current: 75,
          previous: 70
        },
        {
          title: 'Aufgerufen',
          current: 15,
          previous: 15
        },
        {
          title: 'Kontaktformular',
          current: 20,
          previous: 18
        },
        {
          title: 'Chat',
          current: 40,
          previous: 46
        }
      ]
    }, // current overview DEMO DATA
    overviews: [
      { id: 'leads', items: [] },
      { id: 'visits', items: [] }
    ],
    aTable: {}, // example for next
    aTables: []
  },
  mutations: {
    ADD_OVERVIEW(state, overview) {
      state.overview.push(overview)
      state.overview = overview
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
        commit('SET_OVERVIEW', overview)
      } else {
        OverviewService.getOverview(id)
          .then(response => {
            commit('ADD_OVERVIEW', response.data)
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
