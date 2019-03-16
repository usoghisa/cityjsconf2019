importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04da304adf506d0c066f.js",
    "revision": "dda6d0e9538eaab842ec667ecc830ca4"
  },
  {
    "url": "/_nuxt/22615d497a139ce510e8.js",
    "revision": "8f1475a33ff783841d0d9124c784b95d"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/bb4c44e6307892ff99d1.js",
    "revision": "fe019baae395426ce737e525de02675d"
  },
  {
    "url": "/_nuxt/cbaee3ce332fd77a9749.js",
    "revision": "da665233175aa18f59bd24d54ba6b429"
  },
  {
    "url": "/_nuxt/dbf24e53c02269a39df6.js",
    "revision": "5518246972d81359425a220884e15ae1"
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
