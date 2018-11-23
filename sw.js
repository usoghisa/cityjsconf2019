importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.95036a9ff1b2899dc069.js",
    "revision": "2ffbae4a0e7fa83c8bacde021008bd94"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.dff96561173d6daaa26c.js",
    "revision": "b92bfb5177a8c9d6ba4eacaf59008d03"
  },
  {
    "url": "/_nuxt/pages/_page.2600295f42a30d572720.js",
    "revision": "81c6c51afe6ae1075a9da013f3364ffd"
  },
  {
    "url": "/_nuxt/vendor.09c2a6827372cc60f627.js",
    "revision": "9d227e7e47238b165729b26de444fa8d"
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





