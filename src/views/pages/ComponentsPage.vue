<template>
  <b-row>
    <b-col>
      <b-row>
        <b-col>
          <Overview id="leads" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" offset-md="7">
          <real-time-activity id="leads" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'

import Overview from '../../components/Overview'
import RealTimeActivity from '../../components/RealTimeActivity'

export default {
  components: { Overview, RealTimeActivity },
  props: ['id'],
  created() {
    //this.$store.dispatch('fetchLeadsOverview', this.id)
  },
  computed: mapState([''])
}
</script>

<style lang="sass"></style>
