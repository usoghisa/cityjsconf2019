importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ea8a3c029aa334773f1.js",
    "revision": "43fb6507b2ebcd0803762e04938ebb35"
  },
  {
    "url": "/_nuxt/22615d497a139ce510e8.js",
    "revision": "8f1475a33ff783841d0d9124c784b95d"
  },
  {
    "url": "/_nuxt/3c776bea0a0aed2ccac0.js",
    "revision": "b8e0673c535d797c829b62d139c41dae"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/d7571d9dff370262122b.js",
    "revision": "461db7a0b80a05602fc047ece72c1d7b"
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
