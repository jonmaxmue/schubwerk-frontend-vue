<template>
  <b-row>
    <b-col id="real-time-activity">
      <b-row>
        <module-title-options :title="realTimeActivity.title" :icon="realTimeActivity.icon" />
      </b-row>

      <b-row>
        <b-col class="text-center">
          <h3>Status</h3>
          <b>{{ status }}</b>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <h3>Seiten</h3>
          <link-list :list="realTimeActivity.items" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import ModuleTitleOptions from './partials/ModuleTitleOptions'
import LinkList from './partials/LinkList'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { ModuleTitleOptions, LinkList },
  mixins: [],
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  created() {
    this.$store.dispatch(
      'analyseRealTimeActivity/fetchRealTimeActivityItems',
      this.id
    )
  },
  computed: {
    ...mapState({
      realTimeActivity: state => state.analyseRealTimeActivity.realTimeActivity,
      status: state => state.analyseRealTimeActivity.getters.status
    }),
    ...mapGetters('analyseRealTimeActivity', ['status'])
  }
}
</script>

<style lang="sass" scoped>
#real-time-activity
  background-color: map-get($colors, 'white')
</style>
