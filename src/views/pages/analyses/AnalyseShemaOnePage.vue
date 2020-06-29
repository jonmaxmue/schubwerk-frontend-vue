<template>
  <b-row>
    <b-col>
      <b-row>
        <b-col>
          <Overview :id="id" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" offset-md="7">
          <real-time-activity :id="id" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'

import Overview from '../../../components/Overview'
import RealTimeActivity from '../../../components/RealTimeActivity'

export default {
  components: { Overview, RealTimeActivity },
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
