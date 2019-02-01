importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a81f20abdd93c2227c4.js",
    "revision": "29ca220e4969aef3f6ea3a6c8c79d707"
  },
  {
    "url": "/_nuxt/2fec4a808cd2c31887bf.js",
    "revision": "ed252410c5934ea64f196530d7fd3145"
  },
  {
    "url": "/_nuxt/502d98c38f2a5140bdb4.js",
    "revision": "3a43a2b52c9b3525f7d315ad3a010fe3"
  },
  {
    "url": "/_nuxt/a2b27711a666b417f112.js",
    "revision": "6fb189f739cca8d6787a321c5b2b6097"
  },
  {
    "url": "/_nuxt/a7a162f791c0703a3408.js",
    "revision": "980b855db031d95dbb512bc456ca8891"
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
