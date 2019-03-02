importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28578c62554eb1ae86a4.js",
    "revision": "5fb9de1250485f643278b4abe54880f6"
  },
  {
    "url": "/_nuxt/5afe51b481f925267f56.js",
    "revision": "4b7170de465aebb453974eba3c26e12c"
  },
  {
    "url": "/_nuxt/82d90b298c7faa6e6637.js",
    "revision": "fa84fb55dff9ce89ffc93858e09e01fa"
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
    "url": "/_nuxt/c519fc2c3ec9dabf8048.js",
    "revision": "a1e565a86cf6848a40a9f6aa005e7de0"
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
