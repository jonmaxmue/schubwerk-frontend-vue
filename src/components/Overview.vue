<template>
  <b-col id="overview">
    <b-row>
      <module-title-options :title="overview.title" :icon="overview.icon" />
    </b-row>

    <b-row>
      <property-overview
        v-show="overview"
        class="col"
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
import ModuleTitleOptions from './partials/ModuleTitleOptions'
import PropertyOverview from './partials/PropertyOverview'
import { mapState } from 'vuex'

export default {
  components: { ModuleTitleOptions, PropertyOverview },
  mixins: [],
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  created() {
    this.$store.dispatch('analyseOverview/fetchOverviewItems', this.id)
  },
  computed: {
    ...mapState({
      overview: state => state.analyseOverview.overview
    })
  }
}
</script>

<style lang="sass" scoped>
#overview
  background-color: map-get($colors, 'white')
</style>
