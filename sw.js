importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.7c436e0c26cbacb2c318.js",
    "revision": "31416cc2c627c982a2122e8997d01440"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.5aa82790c763e1521078.js",
    "revision": "b92bfb5177a8c9d6ba4eacaf59008d03"
  },
  {
    "url": "/_nuxt/pages/_page.2600295f42a30d572720.js",
    "revision": "81c6c51afe6ae1075a9da013f3364ffd"
  },
  {
    "url": "/_nuxt/vendor.b9ddd434c5bc58fac4ce.js",
    "revision": "19268c6985750afea1799bc8582a5bd6"
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





