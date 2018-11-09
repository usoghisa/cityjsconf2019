const { join } = require('path')
const axios = require('axios')
const _ = require('lodash')

module.exports = {
  /*
  ** Headers of the page
  */
 generate: {
  routes: [
    '/',
  ]
 },
 env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'CityJSConf 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'City of London Conference by the London JS Community' },
      { property: 'og:title', content: 'City of London JavaScript Conference' },
      { property: 'og:description', content: 'City of London JavaScript Conference by the London JS Community' },
      { property: 'og:image', content: 'http://api.spiralthread.com/images/audience.png' },
      { property: 'og:url', content: 'http://www.cityjsconf.org' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'City of London JavaScript Conference' },
      { name: 'twitter:image:alt', content: 'City of London JavaScript Conference' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  build: {
    cache: true,
    vendors: ['babel-polyfill'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }

    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      }
    }
  },
  plugins: [
    { src: '~plugins/vcarousel', ssr: false },
    { src: '~plugins/gmaps', ssr: false },
    { src: '~plugins/scroll', ssr: false },
    { src: '~plugins/ga', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios', 
    '@nuxtjs/dotenv', 
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
  ],
}