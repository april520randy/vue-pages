module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/learn-vue/' : '/',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/pc/main.js',
      title: 'pc-index'
    },
    mobile: {
      entry: 'src/mobile/main.js',
      title: 'mobile-index'
    }
  }
}