importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.56f3e9ac95f4b94fb7fa.js",
    "revision": "2daf63f8bade77b552db9836ed69cc48"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.e5256c1204f7c11e0d66.js",
    "revision": "b92bfb5177a8c9d6ba4eacaf59008d03"
  },
  {
    "url": "/_nuxt/pages/_page.2600295f42a30d572720.js",
    "revision": "81c6c51afe6ae1075a9da013f3364ffd"
  },
  {
    "url": "/_nuxt/vendor.5b303b92850f35dd4b2e.js",
    "revision": "4e5d2cb4ae87a92fccba2b465e20fda2"
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





