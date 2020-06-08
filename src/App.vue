<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="sass">
// Bootstrap configuration
@import 'node_modules/rfs/sass'
@import 'assets/sass/variables/variablesBootstrap.sass'
@import 'node_modules/bootstrap/scss/bootstrap'

// Theme
@import 'assets/sass/variables.sass'
@import 'assets/sass/type.sass'
</style>