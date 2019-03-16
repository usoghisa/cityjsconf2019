importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22615d497a139ce510e8.js",
    "revision": "8f1475a33ff783841d0d9124c784b95d"
  },
  {
    "url": "/_nuxt/63469d7be2df32be8cbf.js",
    "revision": "b9c309622843a0d0c1d560da949b0df8"
  },
  {
    "url": "/_nuxt/7ad63bedb5e7e2e9b148.js",
    "revision": "42b51f2c9588569ede8ee4da60730f44"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/dbf24e53c02269a39df6.js",
    "revision": "5518246972d81359425a220884e15ae1"
  },
  {
    "url": "/_nuxt/e3a084da7591b2813029.js",
    "revision": "2be2b059856b1d66b2c2f6f88c68299c"
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
