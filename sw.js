importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5508317e50162ce03899.js",
    "revision": "cd3d58fae07a9320fb3fc7570d2eb993"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.1c7c6eb6801aafeeb0c9.js",
    "revision": "b92bfb5177a8c9d6ba4eacaf59008d03"
  },
  {
    "url": "/_nuxt/pages/_page.2600295f42a30d572720.js",
    "revision": "81c6c51afe6ae1075a9da013f3364ffd"
  },
  {
    "url": "/_nuxt/vendor.49623708371005583403.js",
    "revision": "94ef4b744dd4ece5cace4c67b8cab002"
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





