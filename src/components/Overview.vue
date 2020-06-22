<template>
  <b-col>
    <b-row>
      <BoxHeader></BoxHeader>
    </b-row>

    <b-row>
      <totals-horizontal
        v-show="overview"
        class="col-sm"
        v-for="oSet in overview.items"
        v-bind:key="oSet.title"
        :ref="oSet.title"
        :previous="oSet.previous"
        :current="oSet.current"
        :title="oSet.title"
      />
    </b-row>
  </b-col>
</template>

<script>
import BoxHeader from './BoxHeader'
import TotalsHorizontal from './partials/TotalsHorizontal'
import { mapState } from 'vuex'

export default {
  components: { TotalsHorizontal, BoxHeader },
  props: ['id'],
  mixins: [],
  created() {
    this.$store.dispatch('analyseOverview/fetchOverview', this.id)
  },
  computed: mapState({
    overview: state => state.analyseOverview.overview
  })
}
</script>

<style lang="sass" scoped>
#overview
  background-color: $background
</style>
