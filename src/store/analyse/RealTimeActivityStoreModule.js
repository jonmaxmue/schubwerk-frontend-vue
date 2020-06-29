import RealTimeActivityService from '@/services/analyse/RealTimeActivityService'

const realTimeActivityStoreModule = {
  namespaced: true,
  state: {
    realTimeActivity: {},
    realTimeActivities: [
      {
        id: 'leads',
        title: 'Echtzeit',
        icon: 'alarm',
        itemType: 'percent',
        items: [
          {
            status: 42,
            url: 'https://schubwerk.de/leistungen/'
          },
          {
            status: 12,
            url: 'https://schubwerk.de/produkte/'
          },
          {
            status: 54,
            url: 'https://schubwerk.de/ueber-uns/'
          },
          {
            status: 3,
            url: 'https://schubwerk.de/kontakt/'
          }
        ]
      },
      {
        id: 'visits',
        title: 'Echtzeit',
        icon: 'alarm',
        itemType: '',
        items: [
          {
            status: 15,
            url: 'https://schubwerk.de/leistungen/'
          },
          {
            status: 15,
            url: 'https://schubwerk.de/produkte/'
          },
          {
            status: 15,
            url: 'https://schubwerk.de/ueber-uns/'
          },
          {
            status: 15,
            url: 'https://schubwerk.de/kontakt/'
          }
        ]
      }
    ]
  },
  mutations: {
    ADD_REAL_TIME_ACTIVITY_ITEMS(state, id, items) {
      state.realTimeActivities[id].items = items
      state.realTimeActivity = state.realTimeActivities[id]
    },
    SET_REAL_TIME_ACTIVITY(state, realTimeActivity) {
      state.realTimeActivity = realTimeActivity
    }
  },
  actions: {
    fetchRealTimeActivityItems({ commit, getters }, id) {
      var realTimeActivity = getters.getRealTimeActivityById(id)

      if (realTimeActivity.items) {
        commit('SET_REAL_TIME_ACTIVITY', realTimeActivity)
      } else {
        RealTimeActivityService.getRealTimeActivityItems(id)
          .then(response => {
            commit('ADD_REAL_TIME_ACTIVITY_ITEMS', id, response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    getRealTimeActivityById: state => id => {
      return state.realTimeActivities.find(
        realTimeActivity => realTimeActivity.id === id
      )
    },
    status: state => {
      var sum = 0
      state.realTimeActivity.items.forEach(item => {
        sum += item.status
      })
      return sum
    }
  }
}

export default { realTimeActivityStoreModule }
