<template>
  <b-col>
    <b-row>
      <main-box-header></main-box-header>
    </b-row>

    <b-row>
      <overview-set
        class="col-sm"
        v-if="overViewSets"
        v-for="oSet in overViewSets"
        v-bind:key="oSet.title"
        :ref="oSet.title"
        :previousValue="oSet.previousTotal"
        :value="oSet.total"
        :title="oSet.title"
      />
    </b-row>
  </b-col>
</template>

<script>
import BoxHeader from './BoxHeader'
import OverviewSet from './partials/OverviewSet'
export default {
  components: { OverviewSet, MainBoxHeader },
  props: ['overViewSets'],
  mixins: []
}
</script>

<style lang="sass" scoped>
#overview
  background-color: $background
</style>
