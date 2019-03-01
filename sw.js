importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e154faf40fb2e18c85d.js",
    "revision": "22459716ea069e4192ac83e18526eace"
  },
  {
    "url": "/_nuxt/2ee401242768f4931bb4.js",
    "revision": "b6af5255e5e092b8e84ce0b5ad979242"
  },
  {
    "url": "/_nuxt/72672a0df73e00ad1271.js",
    "revision": "b998d37deeaa798a0739763b092612b3"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/b39f9ef856533888f2b3.js",
    "revision": "b4c97ff36b6d361ca0b6d722dd925058"
  },
  {
    "url": "/_nuxt/f1304db7190ef2dca4f7.js",
    "revision": "1ba9505496f30c97d164777bae6324ad"
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
