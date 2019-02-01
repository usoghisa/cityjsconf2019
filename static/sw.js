importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23978a0d01b20767372f.js",
    "revision": "27df96f1a6420eed7ac4228554bc6411"
  },
  {
    "url": "/_nuxt/49bebbb28eff86bc5ae2.js",
    "revision": "3cae0c4eab366b68a1e1cecf03d3d48e"
  },
  {
    "url": "/_nuxt/a7a162f791c0703a3408.js",
    "revision": "980b855db031d95dbb512bc456ca8891"
  },
  {
    "url": "/_nuxt/d906cd7d71fe40d46dc6.js",
    "revision": "a9c2fc49bfdd13679c5dfcefe55a5dab"
  },
  {
    "url": "/_nuxt/d9db489f30bbc83bac5f.js",
    "revision": "53c56a11509707fddb7928059dbcf6f5"
  },
  {
    "url": "/_nuxt/f630ca06d922b88b6254.js",
    "revision": "201bcc9695b0087d45e0bbe425221a55"
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
