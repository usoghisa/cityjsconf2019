importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09ab581f280c3c13db95.js",
    "revision": "5bb8a6ef41d35616f55ba6ddccd40149"
  },
  {
    "url": "/_nuxt/0b5eb1024f0c558bcb2a.js",
    "revision": "38f77dbd3a789c8cbc43a8b40004351b"
  },
  {
    "url": "/_nuxt/332d1f4834553cb37461.js",
    "revision": "cb67e5631ec3e5821fb0180ab466a5bd"
  },
  {
    "url": "/_nuxt/8819e6732268bd2a91fc.js",
    "revision": "21f7a7ae249fdea95812597cb8c42d80"
  },
  {
    "url": "/_nuxt/b8f21919dc1eb9ce56f4.js",
    "revision": "2842db4092f852f4800a0a10bf991af6"
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
