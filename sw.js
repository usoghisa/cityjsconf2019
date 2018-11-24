importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.1e84ecbb486d111aa9f7.js",
    "revision": "50a24892aa021e0b4a5e3f5d26c6c6e7"
  },
  {
    "url": "/_nuxt/layouts/default.56f1d5a1fac1d42dbdd6.js",
    "revision": "8c1bb84e57b6caeca974f7b3509bc50d"
  },
  {
    "url": "/_nuxt/manifest.a08dec7c5dee7639df2c.js",
    "revision": "14d9d28aac2dc0317176b266c2a79fbb"
  },
  {
    "url": "/_nuxt/pages/_page.3ebd8ed837b9590e67d1.js",
    "revision": "5f7ac604ba04e46ea3e632f11298b48f"
  },
  {
    "url": "/_nuxt/vendor.7576034ddcf14f161475.js",
    "revision": "d92abf7866b1c291c3634ff4b633bf9b"
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





