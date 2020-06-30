<template>
  <module-wrapper title="Echtzeit" :icon="realTimeActivity.icon">
    <b-col>
      <b-row>
        <b-col class="text-center">
          <h3 class="fs-2">{{ realTimeActivity.title }}</h3>
          <span>
            <b v-if="realTimeActivity.itemType == 'percentage'" class="fs-10">
              {{ average | percentage }}
            </b>
            <b v-else class="fs-10">{{ total }}</b>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <link-status-list
            :list="realTimeActivity.items"
            :statusType="realTimeActivity.itemType"
          />
        </b-col>
      </b-row>
    </b-col>
  </module-wrapper>
</template>

<script>
import ModuleWrapper from './partials/ModuleWrapper'
import LinkStatusList from './partials/LinkStatusList'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { ModuleWrapper, LinkStatusList },
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
    ...mapGetters('analyseRealTimeActivity', ['total', 'average'])
  }
}
</script>

<style lang="sass" scoped></style>
