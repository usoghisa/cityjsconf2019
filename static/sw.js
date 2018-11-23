importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.1913f9070bcc30423ec8.js",
    "revision": "98375d771863553696520d8f7292ad0d"
  },
  {
    "url": "/_nuxt/layouts/default.e1044d5f80f7a147099e.js",
    "revision": "172e94b4f195046dd74a365d3dd6aa1e"
  },
  {
    "url": "/_nuxt/manifest.47956d86798ac5a918b4.js",
    "revision": "5f6a52d740da05867f008ab455578210"
  },
  {
    "url": "/_nuxt/pages/_page.637cd5e50cd205542649.js",
    "revision": "b0b67c65c38ee45205adde0733767344"
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





