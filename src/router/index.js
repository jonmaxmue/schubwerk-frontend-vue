import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
//import EventCreate from '../views/items/example/EventCreate.vue'
//import EventList from '../views/items/example/EventList.vue'
//import EventShow from '../views/items/example/EventShow.vue'
import ComponentsPage from '../views/pages/ComponentsPage.vue'
import AnalyseShemaOnePage from '../views/pages/analyses/AnalyseShemaOnePage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/components',
    name: 'components',
    component: ComponentsPage
  },
  {
    path: '/leads',
    name: 'leads',
    component: AnalyseShemaOnePage
  },
  {
    path: '/visits',
    name: 'visits',
    component: AnalyseShemaOnePage
  }
  /*
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/create',
    name: 'event-create',
    // EXAMPLE
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      //import(webpackChunkName: "about"),
      import('../views/example/EventCreate.vue'),
    props: true
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
