<template>
  <div class="wrapper col p-3">
    <div>
      <b-icon :icon="icon" class="fs-3 mr-2"></b-icon>
      <h2 class="fs-3">{{ title }}</h2>
    </div>
    <div>
      <b-icon icon="question-circle" class="fs-3 mr-2"></b-icon>
      <b-icon icon="gear-fill" class="fs-3"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    icon: {
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
  computed: {},
  watch: {}
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  background-color: $gray-200

  div:first-of-type
    display: flex
    align-items: center
</style>
