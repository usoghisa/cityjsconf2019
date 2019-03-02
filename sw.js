importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2ee401242768f4931bb4.js",
    "revision": "b6af5255e5e092b8e84ce0b5ad979242"
  },
  {
    "url": "/_nuxt/448e6cdcd5107ef13d5e.js",
    "revision": "add6ebf9e32a491c3f1f7ca8cf8f7e37"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/a36ee3a4dcbd1333672e.js",
    "revision": "7f9ce4f23b3319a27cb5c2099223dcfa"
  },
  {
    "url": "/_nuxt/b39f9ef856533888f2b3.js",
    "revision": "b4c97ff36b6d361ca0b6d722dd925058"
  },
  {
    "url": "/_nuxt/d5ff92cd102092633ed0.js",
    "revision": "3fb96d7dcd137106bc4c961ae4d61e72"
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
