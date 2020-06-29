<template>
  <b-row no-gutters="true">
    <b-col class="wrapper mb-5">
      <b-row no-gutters="true" class="header-row">
        <b-col>
          <div class="header col p-3">
            <div>
              <b-icon :icon="icon" class="fs-3 mr-2"></b-icon>
              <h2 class="fs-3">{{ title }}</h2>
            </div>
            <div>
              <b-icon icon="question-circle" class="fs-3 mr-2"></b-icon>
              <b-icon icon="gear-fill" class="fs-3"></b-icon>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="p-4">
        <slot></slot>
      </b-row>
    </b-col>
  </b-row>
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
  background-color: map-get($colors, 'white')

  .header-row
    background-color: $gray-200

    .header
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center
      background-color: $gray-200

      div:first-of-type
        display: flex
        align-items: center
</style>
