const { join } = require('path')
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
  metaInfo: {
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    bodyAttrs: {
      class: ['dark-mode', 'mobile']
    }
  },
 env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'CityJS Conference 2019 - London, UK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'City of London Conference by the London JS Community' },
      { property: 'og:title', content: 'CityJS Conference 2019, London, 1 - 3 May 2019' },
      { property: 'og:description', content: 'City of London JavaScript Conference by the London JS Community' },
      { property: 'og:image', content: '//api.spiralthread.com/images/audience.png' },
      { property: 'og:url', content: '//www.cityjsconf.org' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'City of London JavaScript Conference' },
      { name: 'twitter:image:alt', content: 'City of London JavaScript Conference' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
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
    extend (config, { isClient, loaders: { vue } }) {
      if (config.dev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      
      // if (isClient) {
      //   config.entry.vendor.push('babel-polyfill')
      // }
               
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
    { src: '~plugins/async', ssr: false },
  ],
  modules: [
    '@nuxtjs/dotenv', 
    '@nuxtjs/bulma',
    'nuxt-fontawesome',
    '@nuxtjs/pwa',
  ],
}