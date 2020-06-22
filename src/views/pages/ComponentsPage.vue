<template>
  <div>
    <Overview></Overview>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Overview from '../../components/Overview'

export default {
  components: { Overview },
  props: ['id'],
  created() {
    //this.$store.dispatch('fetchLeadsOverview', this.id)
  },
  computed: mapState([''])
}
</script>

<style lang="sass"></style>
