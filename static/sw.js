importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/042353d2e3793aeac10c.js",
    "revision": "f4dedd64b27d88a995669f5a32082c8f"
  },
  {
    "url": "/_nuxt/502d98c38f2a5140bdb4.js",
    "revision": "3a43a2b52c9b3525f7d315ad3a010fe3"
  },
  {
    "url": "/_nuxt/7c3d7ea2eb44e1d8efed.js",
    "revision": "a5b5eaae7cd09b39bc1deb4408c0dce0"
  },
  {
    "url": "/_nuxt/cdc26281434de869c209.js",
    "revision": "35eae39658a02b8dad765b003e0078b1"
  },
  {
    "url": "/_nuxt/f6e75c60b75a88c08fd8.js",
    "revision": "d720028479e4968147e13da721cbb41d"
  },
  {
    "url": "/_nuxt/fb07030a1a1c90be234d.js",
    "revision": "886b0449b55534bd4d67cd3e8a2be9cd"
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
