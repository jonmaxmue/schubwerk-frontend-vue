<template>
  <div class="overview-set p-3">
    <loading :is-full-page="false" :active.sync="localLoader"></loading>
    <h1 class="fs-2">
      <b>{{title}}</b>
    </h1>
    <span class="fs-9">{{numberFormat(value)}}{{valueSuffix}}</span>
    <span
      class="fs-2"
      :class="['percent', 'text-' + getEmotion(percentage, okayLowEmotion, okayHighEmotion)]"
    >
      <b-icon
        v-if="getArrow(getEmotion(percentage, okayLowEmotion, okayHighEmotion))"
        :icon="getArrow(getEmotion(percentage, okayLowEmotion, okayHighEmotion))"
      ></b-icon>
      <b>{{ percentage | percentage }}</b>
    </span>
  </div>
</template>

<script>
import formats from '../../../assets/js/components/Mixins/formats'

export default {
  mixins: [formats],
  name: 'OverviewSet',
  props: {
    okayLowEmotion: {
      type: Number,
      default: 0
    },
    okayHighEmotion: {
      type: Number,
      default: 0
    },
    previousValue: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    col: {
      type: String,
      required: false
    },
    value: {
      type: Number,
      default: 0
    },

    valueSuffix: {
      type: String,
      required: false
    },
    emotionClass: {
      type: String,
      required: false
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    percentage() {
      return this.previousValue !== 0 && this.value !== 0
        ? 100 - Math.round((this.previousValue / this.value) * 100).toFixed(2)
        : 0
    }
  },
  watch: {
    loading(val) {
      this.$refs.loader.isActive = val
    }
  }
}
</script>

<style lang="sass" scoped>
.overview-set
  display: flex
  flex-flow: column
  align-items: center
</style>
