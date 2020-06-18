<template>
  <b-col>
    <b-row>
      <BoxHeader></BoxHeader>
    </b-row>

    <b-row>
      <overview-set
        v-show="overViewSets"
        class="col-sm"
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
  components: { OverviewSet, BoxHeader },
  props: ['overViewSets'],
  mixins: []
}
</script>

<style lang="sass" scoped>
#overview
  background-color: $background
</style>
