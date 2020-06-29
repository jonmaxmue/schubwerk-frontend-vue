<template>
  <div class="property-set">
    <h3 class="fs-2">{{ title }}</h3>
    <span class="fs-9">{{ current }}{{ suffix }}</span>
    <span :class="['fs-2', 'percent', 'text-' + getEmotion(percentage, 0, 0)]">
      <b-icon
        v-if="getArrow(getEmotion(percentage, 0, 0))"
        :icon="getArrow(getEmotion(percentage, 0, 0))"
      ></b-icon>
      <b>{{ percentage | percentage }}</b>
    </span>
  </div>
</template>

<script>
import emotionMixin from '../../mixins/emotionMixin'
import percentageMixin from '../../mixins/percentageMixin'

export default {
  mixins: [emotionMixin, percentageMixin],
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    current: {
      type: Number,
      required: true,
      default: 0
    },
    previous: {
      type: Number,
      required: true,
      default: 0
    },
    suffix: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {
    percentage() {
      return this.getPercentage(this.previous, this.current)
    }
  },
  watch: {}
}
</script>

<style lang="sass" scoped>
.property-set
  display: flex
  flex-flow: column
  align-items: center
</style>
