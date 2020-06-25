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
  getOverviewsItems() {
    return apiClient.get('analyse/overviews/')
  },
  getOverviewItems(id) {
    return apiClient.get('analyse/overview/' + id)
  }
}
