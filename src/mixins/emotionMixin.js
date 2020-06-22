export default {
  methods: {
    getEmotion(value, okay_low, okay_high, reverse = false) {
      if (value > okay_high) {
        return reverse ? 'bad' : 'good'
      } else if (value < okay_low) {
        return reverse ? 'good' : 'bad'
      } else {
        return 'okay'
      }
    },
    getArrow(emotion) {
      if (emotion == 'good') {
        return 'arrow-up'
      } else if (emotion == 'bad') {
        return 'arrow-down'
      } else {
        return ''
      }
    }
  }
}
