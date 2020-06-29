import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api`, // TODO: Set the schubwerk api as baseUrl
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRealTimeActivitiesItems() {
    return apiClient.get('analyse/real-time-activities/')
  },
  getRealTimeActivityItems(id) {
    return apiClient.get('analyse/real-time-activities/' + id)
  }
}
