importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3abe3785de703201ccf9.js",
    "revision": "51aa6fd4b30523d11954e16ed6de08fd"
  },
  {
    "url": "/_nuxt/768dd9f2f52c99f232f0.js",
    "revision": "68486d049ece52629d882f4e7a661dd3"
  },
  {
    "url": "/_nuxt/a7a162f791c0703a3408.js",
    "revision": "980b855db031d95dbb512bc456ca8891"
  },
  {
    "url": "/_nuxt/c4b38970b13751fcac0d.js",
    "revision": "bccab1802b70d2207f838f3fcfd13053"
  },
  {
    "url": "/_nuxt/d906cd7d71fe40d46dc6.js",
    "revision": "a9c2fc49bfdd13679c5dfcefe55a5dab"
  },
  {
    "url": "/_nuxt/f630ca06d922b88b6254.js",
    "revision": "201bcc9695b0087d45e0bbe425221a55"
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
