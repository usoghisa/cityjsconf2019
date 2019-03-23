importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/8b9b90bcb6ac2adfefe1.js",
    "revision": "0bf9ed5467b4f090db2c68750e33fe4b"
  },
  {
    "url": "/_nuxt/9e0efe580d14a0b9118f.js",
    "revision": "bc36f2906b9421d0adf19aa5f7b655ba"
  },
  {
    "url": "/_nuxt/a85634c28838f03475c2.js",
    "revision": "13b9b2ce682d665f57c5f6e688e67766"
  },
  {
    "url": "/_nuxt/c1ee2ea30db0e97796e8.js",
    "revision": "1a00c9d27ec8e5b5c184b01e95537f9c"
  },
  {
    "url": "/_nuxt/e9761866d65dd4694f2e.js",
    "revision": "70d521e8948fae9eacd2660b7a4c228f"
  },
  {
    "url": "/_nuxt/eced5817dd1ffbdeeb6f.js",
    "revision": "331668485f58788dab4679ebae380c7c"
  }
], {
  "cacheId": "cityjsconf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
