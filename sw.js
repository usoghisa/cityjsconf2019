importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/27fea8b8810970544249.js",
    "revision": "332fd5e45e0f01acfc273d288dd185ab"
  },
  {
    "url": "/_nuxt/49bebbb28eff86bc5ae2.js",
    "revision": "3cae0c4eab366b68a1e1cecf03d3d48e"
  },
  {
    "url": "/_nuxt/a7a162f791c0703a3408.js",
    "revision": "980b855db031d95dbb512bc456ca8891"
  },
  {
    "url": "/_nuxt/af37c0f2d0b430706ca1.js",
    "revision": "180f6339d926af1fe6c4d99891583f89"
  },
  {
    "url": "/_nuxt/d906cd7d71fe40d46dc6.js",
    "revision": "a9c2fc49bfdd13679c5dfcefe55a5dab"
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
