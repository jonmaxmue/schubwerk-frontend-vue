export default {
  methods: {
    getPercentage(previous, current) {
      return previous !== 0 && current !== 0
        ? (100 - Math.round((previous / current) * 100).toFixed(2)) / 100
        : 0
    }
  }
}
