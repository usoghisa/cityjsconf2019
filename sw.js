importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0618ed6ecc8bdfb542ea.js",
    "revision": "1f62dfdb6b298fee1095b3d9d3dda9dc"
  },
  {
    "url": "/_nuxt/3fe183c341365519e477.js",
    "revision": "03875e55e504cc94ab6614e77206245b"
  },
  {
    "url": "/_nuxt/73bc7f5a9538c101cd04.js",
    "revision": "292f16207955666ff51446eabb577cf0"
  },
  {
    "url": "/_nuxt/7e173d337375c4f89804.js",
    "revision": "2ebf2356f8fd75af243f20f761cf0920"
  },
  {
    "url": "/_nuxt/8922992799cc7d96b661.js",
    "revision": "53780ccfd71f0ca177c5c901c79f6e5f"
  },
  {
    "url": "/_nuxt/97d8c1e37e55b3b36169.js",
    "revision": "3d260c5a48ecdd0e618dbd9470c494a7"
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
