module.exports = {
  publicPath: '/miplanificacion',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080'
  },

  transpileDependencies: ['vuetify'],
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
