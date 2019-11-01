module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-pages/dist/' : '/',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/pc/main.js',
      title: 'pc-index'
    },
    mobile: {
      entry: 'src/mobile/main.js',
      template:'public/mobile.html',
      title: 'mobile-index'
    }
  }
}