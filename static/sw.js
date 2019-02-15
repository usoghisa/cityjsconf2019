importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28578c62554eb1ae86a4.js",
    "revision": "5fb9de1250485f643278b4abe54880f6"
  },
  {
    "url": "/_nuxt/32f057a8ac1364e755d8.js",
    "revision": "17d3a2a0ce2defab2df783ff56f9fa99"
  },
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
    "url": "/_nuxt/c00c1bfc85cb965a3943.js",
    "revision": "75d5f13d95fd945ead8940b53caff44e"
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
