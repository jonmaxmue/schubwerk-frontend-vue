<template>
  <div>
    <Overview :id="id"></Overview>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Overview from '../../../components/Overview'

export default {
  components: { Overview },
  props: [],
  data: function() {
    return {
      id: this.$route.name
    }
  },
  created() {
    //this.$store.dispatch('fetchLeadsOverview', this.id)
  },
  computed: mapState([''])
}
</script>

<style lang="sass"></style>
