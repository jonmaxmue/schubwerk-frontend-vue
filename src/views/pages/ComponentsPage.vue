<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: mapState(['event'])
}
</script>

<style lang="sass"></style>
