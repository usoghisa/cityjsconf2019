importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a6b126b7945a7862c83.js",
    "revision": "72e30c3e6e3159da6b6e0c050dc3e80a"
  },
  {
    "url": "/_nuxt/4a2382504a561afcf6ef.js",
    "revision": "b39fe51f616786b21a74f8375abd4a02"
  },
  {
    "url": "/_nuxt/815b6e5c3ae4bc546cf9.js",
    "revision": "53dc1557962ccf35061bdaa897716519"
  },
  {
    "url": "/_nuxt/857e507c559caf5e361d.js",
    "revision": "3fa5d62891a9f7179f4ac459f83b99fb"
  },
  {
    "url": "/_nuxt/b460c3b13784ec34907f.js",
    "revision": "33347f21eede3eff3b89683cdf6dd4f9"
  },
  {
    "url": "/_nuxt/f183476db7df67b876d6.js",
    "revision": "b5af55ba7753a2fb289a32ff681046d4"
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
