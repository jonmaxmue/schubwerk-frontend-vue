<template>
  <b-list-group>
    <b-list-group-item
      class="d-flex justify-content-between align-items-center sw-item"
      v-for="x in list"
      :key="x.url"
      :href="x.url"
    >
      {{ x.url }}
      <b-badge variant="primary" pill>{{ x.status }}</b-badge>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
import emotionMixin from '../../mixins/emotionMixin'
import percentageMixin from '../../mixins/percentageMixin'

export default {
  mixins: [emotionMixin, percentageMixin],
  props: {
    list: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.sw-item:nth-child(2)
    background-color: map-get($colors, 'light-gray')
</style>
