<template>
  <div class="main-box-header col p-3">
    <div>
      <b-icon icon="graph-up" class="fs-3 mr-2"></b-icon>
      <h2 class="fs-3">Übersicht / Quickcheck</h2>
    </div>
    <div>
      <b-icon icon="question-circle" class="fs-3 mr-2"></b-icon>
      <b-icon icon="gear-fill" class="fs-3"></b-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.main-box-header
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  background-color: map-get($colors, "grey-light")

  div:first-of-type
    display: flex
    align-items: center
</style>
