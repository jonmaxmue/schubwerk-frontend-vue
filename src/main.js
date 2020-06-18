import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/items/example'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

// 1. For dynamic components - now it is not nessecary to do it manually
const requireComponent = require.context(
  './components', // the relative path of the directory to search
  false, // subdirectories will not be searched
  /Base[A-Z]\w+\.(vue|js)$/ // regular expression that searches for components starting with "Base" and ending in .vue or .js
)
// 2. For dynamic components - now it is not nessecary to do it manually
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')) // removes what's before and after the filename itself
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
