importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.1b8a63d0187838e8643f.js",
    "revision": "997f487b87098d2e730980ac38e1e235"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.ba1144839e0a1402bcc8.js",
    "revision": "b92bfb5177a8c9d6ba4eacaf59008d03"
  },
  {
    "url": "/_nuxt/pages/_page.2600295f42a30d572720.js",
    "revision": "81c6c51afe6ae1075a9da013f3364ffd"
  },
  {
    "url": "/_nuxt/vendor.1c47b48647a468a99d70.js",
    "revision": "7c293da8daa42462631c6d44036db923"
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





