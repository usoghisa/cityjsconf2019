importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c584efd8d54209ad7cb.js",
    "revision": "8fe24139f053ce1c8b662e1270399c50"
  },
  {
    "url": "/_nuxt/502383e5fa12a850ae86.js",
    "revision": "8a33e71b0e9ea5d0c7807e5d7fe7f33c"
  },
  {
    "url": "/_nuxt/7a2d533302a87ab75a1b.js",
    "revision": "9729518101de445c304aec8f1bfb9b12"
  },
  {
    "url": "/_nuxt/9c87524a660880d4dc8a.js",
    "revision": "bb596306906db2ddc15d6f09b01f6712"
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
