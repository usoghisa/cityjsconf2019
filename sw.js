importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/121a4651acdb29a8fe35.js",
    "revision": "a2e27bacfdabfe6e26ec680c8b559dbf"
  },
  {
    "url": "/_nuxt/176d2b931c8bb869e6ae.js",
    "revision": "b0966781568ddd46b95e938b8ffd7fbe"
  },
  {
    "url": "/_nuxt/3f594ee72faab29e9173.js",
    "revision": "3f61105c450bd791a129a27e189c0171"
  },
  {
    "url": "/_nuxt/b39f9ef856533888f2b3.js",
    "revision": "b4c97ff36b6d361ca0b6d722dd925058"
  },
  {
    "url": "/_nuxt/c58501768266b06cae90.js",
    "revision": "62dd50737eca8fccd009db69346d4d7b"
  },
  {
    "url": "/_nuxt/d64ba63fd732b98abf9d.js",
    "revision": "66f5e84fb257b7f42d00afbf15f6c3b1"
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
