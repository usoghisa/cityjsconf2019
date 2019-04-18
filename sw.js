importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16d82bb9ad78434801e0.js",
    "revision": "bca7d260c858022208b7967f044d3957"
  },
  {
    "url": "/_nuxt/4dca515fbee39cc806cf.js",
    "revision": "8a0b67474b8470455c2797c48af5fd66"
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
    "url": "/_nuxt/c4dc7af91ec259849886.js",
    "revision": "ce65d42c2d5eda2225f43d144077766f"
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
