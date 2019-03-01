importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11125708d9a6faaed17f.js",
    "revision": "4da82027b65a83b56afb62f098d379e2"
  },
  {
    "url": "/_nuxt/2847d4777742243ceb18.js",
    "revision": "bdfc7ee3fc58aa39ebb67909f084bcac"
  },
  {
    "url": "/_nuxt/2ee401242768f4931bb4.js",
    "revision": "b6af5255e5e092b8e84ce0b5ad979242"
  },
  {
    "url": "/_nuxt/4b00d68079e19414260b.js",
    "revision": "8b5cd6ff9966e3338a57da7fed4826e5"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/b39f9ef856533888f2b3.js",
    "revision": "b4c97ff36b6d361ca0b6d722dd925058"
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
