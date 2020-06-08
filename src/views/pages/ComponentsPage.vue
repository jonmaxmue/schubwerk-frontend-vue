<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'

// Example
export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: mapState(['event'])
}
</script>

<style scoped>
</style>
