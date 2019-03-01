importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5afe51b481f925267f56.js",
    "revision": "4b7170de465aebb453974eba3c26e12c"
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
    "url": "/_nuxt/c0c4327d647208bcc25e.js",
    "revision": "03233f23774e95696e3da769cb660539"
  },
  {
    "url": "/_nuxt/d5931b92f4b32f90884a.js",
    "revision": "65995d8ac9d9126b982d1d7c71e4a9d0"
  },
  {
    "url": "/_nuxt/db983150f22925c66ee5.js",
    "revision": "dd06ff32cd7b5b399dd0fa9874399ec9"
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
