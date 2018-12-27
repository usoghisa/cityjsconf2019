importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28716f7a3ee7f215f835.js",
    "revision": "6d1d651660873bc30aa39e183ca8cfba"
  },
  {
    "url": "/_nuxt/502383e5fa12a850ae86.js",
    "revision": "8a33e71b0e9ea5d0c7807e5d7fe7f33c"
  },
  {
    "url": "/_nuxt/59c8aa63e993fae209be.js",
    "revision": "566b17edf81bee8b2fcf3e5c93e99e09"
  },
  {
    "url": "/_nuxt/e262d836e3a4145e02d5.js",
    "revision": "0470b8ec8ddaec3f344a8efc6982a187"
  },
  {
    "url": "/_nuxt/e42563a6c04ead71accf.js",
    "revision": "c9e2afbffd7a4caaadc778f7ca0058ea"
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
