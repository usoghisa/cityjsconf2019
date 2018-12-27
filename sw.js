importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28716f7a3ee7f215f835.js",
    "revision": "6d1d651660873bc30aa39e183ca8cfba"
  },
  {
    "url": "/_nuxt/384dd9197c5167226ea4.js",
    "revision": "0f5835d9b13a66f84b1483427012043c"
  },
  {
    "url": "/_nuxt/502383e5fa12a850ae86.js",
    "revision": "8a33e71b0e9ea5d0c7807e5d7fe7f33c"
  },
  {
    "url": "/_nuxt/e42563a6c04ead71accf.js",
    "revision": "c9e2afbffd7a4caaadc778f7ca0058ea"
  },
  {
    "url": "/_nuxt/ffc8c21a78eb148e4601.js",
    "revision": "4bff17054d8380fc47eef9fc891deb82"
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
