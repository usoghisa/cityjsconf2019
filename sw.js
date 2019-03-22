importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c2515c6c501c8e4cd08.js",
    "revision": "ed04312de71cf7a87a109805309dad1e"
  },
  {
    "url": "/_nuxt/c0ea7f1700fef4b93150.js",
    "revision": "480cce056cd30716172c8d64fa28d6b0"
  },
  {
    "url": "/_nuxt/c1ee2ea30db0e97796e8.js",
    "revision": "1a00c9d27ec8e5b5c184b01e95537f9c"
  },
  {
    "url": "/_nuxt/d67ee30e4fccfc7ffe03.js",
    "revision": "97ec263a4da0fc203182e1db710720d5"
  },
  {
    "url": "/_nuxt/e9761866d65dd4694f2e.js",
    "revision": "70d521e8948fae9eacd2660b7a4c228f"
  },
  {
    "url": "/_nuxt/ec41551faeee804061bc.js",
    "revision": "b0983611600461f9c2535fb0b4c0e3ac"
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
