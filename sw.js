importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.b3ca59c3bbd700cfa48c.js",
    "revision": "806dd56177fed948c154984476660454"
  },
  {
    "url": "/_nuxt/layouts/default.915c21f5822107c0a2d9.js",
    "revision": "99546e21945cb577fc810f1f11d33363"
  },
  {
    "url": "/_nuxt/manifest.d5bfc7aec451953e9eba.js",
    "revision": "fd24e7580c7344248dccb96926e8f2ae"
  },
  {
    "url": "/_nuxt/pages/_page.60c58f5c7fd3d458cd08.js",
    "revision": "13e0f26feb0506cac75fff88c11f41e9"
  },
  {
    "url": "/_nuxt/vendor.03aa709f0cf45820d74e.js",
    "revision": "773ed74025c3d7a6b1902070d16cbb4c"
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





