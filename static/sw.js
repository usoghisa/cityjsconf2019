importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2023c38235c6d927a52a.js",
    "revision": "c58984866aeaf5f3664e4b88bf74ae3b"
  },
  {
    "url": "/_nuxt/3a07042bbc8485eef5fb.js",
    "revision": "a530625f1b672a761407a127a6529674"
  },
  {
    "url": "/_nuxt/4f110acfa8976e4f4d13.js",
    "revision": "d24e78bbf8b2ef9ca884b101d4349243"
  },
  {
    "url": "/_nuxt/5442ee39fe6c9e403b5b.js",
    "revision": "4573eef1706294b8a43ffdacf9a285e2"
  },
  {
    "url": "/_nuxt/54b2d531b0665fc0b9f8.js",
    "revision": "3f7f9d6ff3ed020107260021292938cd"
  },
  {
    "url": "/_nuxt/c61a73dc182e386981aa.js",
    "revision": "0bb4fb5dce6733490b0a004287019029"
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
