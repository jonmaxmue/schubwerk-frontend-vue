module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/variables/variables.sass"`
      }
    }
  },
  configureWebpack: {
    plugins: []
  }
}
