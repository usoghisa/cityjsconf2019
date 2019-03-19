importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/49af978eadad69229887.js",
    "revision": "0a36fd95995f99daecba0e0fa8165113"
  },
  {
    "url": "/_nuxt/56752c5ec18bda75e2d6.js",
    "revision": "19d18b0ddae855bd5594f586fe64c024"
  },
  {
    "url": "/_nuxt/871299f006b00d4d0d50.js",
    "revision": "8576c88dcfca6984f10ff381bd3721b3"
  },
  {
    "url": "/_nuxt/91837ac4055cf20430a3.js",
    "revision": "c47eb0cb1501db5c675344d4ae2ab37b"
  },
  {
    "url": "/_nuxt/cc00307b943be8699cea.js",
    "revision": "718442852cbdd747ba9e584ecd1198df"
  },
  {
    "url": "/_nuxt/e9761866d65dd4694f2e.js",
    "revision": "70d521e8948fae9eacd2660b7a4c228f"
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
