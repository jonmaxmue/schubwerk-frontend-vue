import OverviewService from '@/services/analyse/OverviewService'

const overviewStoreModule = {
  namespaced: true,
  state: {
    overview: {},
    overviews: [
      {
        id: 'leads',
        title: 'Overview Leads',
        icon: 'graph-up',
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
      },
      {
        id: 'visits',
        title: 'Overview Visits',
        icon: 'graph-up',
        items: [
          {
            title: 'Total',
            current: 105,
            previous: 80
          },
          {
            title: 'Aufgerufen',
            current: 80,
            previous: 23
          },
          {
            title: 'Kontaktformular',
            current: 52,
            previous: 66
          },
          {
            title: 'Chat',
            current: 23,
            previous: 23
          }
        ]
      }
    ]
  },
  mutations: {
    ADD_OVERVIEW_ITEMS(state, id, items) {
      state.overviews[id].items = items
      state.overview = state.overviews[id]
    },
    SET_OVERVIEW(state, overview) {
      state.overview = overview
    }
  },
  actions: {
    fetchOverviewItems({ commit, getters }, id) {
      var overview = getters.getOverviewById(id)

      if (overview.items) {
        commit('SET_OVERVIEW', overview)
      } else {
        OverviewService.getOverviewItems(id)
          .then(response => {
            commit('ADD_OVERVIEW_ITEMS', id, response.data)
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
