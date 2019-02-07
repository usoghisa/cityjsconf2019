importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ea126386f5d2156db5a.js",
    "revision": "a3a662e5e2fea95c48a156e485ac25d8"
  },
  {
    "url": "/_nuxt/3db0ad4d6f076e3929d0.js",
    "revision": "386baa7d96bc58be245e16747396dc4e"
  },
  {
    "url": "/_nuxt/8cf57dee74c2924b3882.js",
    "revision": "48376389270a265f2e1405b763d00a5f"
  },
  {
    "url": "/_nuxt/944167d343a4e4b5c1f4.js",
    "revision": "a5dbf7d49907406b3fed7cff3a8d35d9"
  },
  {
    "url": "/_nuxt/948d2968f1d94ee48c5d.js",
    "revision": "5934d1c2c4f46af5258cc9f3b176e972"
  },
  {
    "url": "/_nuxt/f3b78fc651f8ebdcc9e3.js",
    "revision": "bafafe0ea2de57584faa0b24a161db8b"
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
