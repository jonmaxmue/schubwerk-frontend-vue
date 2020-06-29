<template>
  <module-wrapper :title="overview.title" :icon="overview.icon">
    <property-set
      v-show="overview"
      class="col"
      v-for="oSet in overview.items"
      v-bind:key="oSet.title"
      :ref="oSet.title"
      :previous="oSet.previous"
      :current="oSet.current"
      :title="oSet.title"
    />
  </module-wrapper>
</template>

<script>
import ModuleWrapper from './partials/ModuleWrapper'
import PropertySet from './partials/PropertySet'
import { mapState } from 'vuex'

export default {
  components: { ModuleWrapper, PropertySet },
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

<style lang="sass" scoped></style>
