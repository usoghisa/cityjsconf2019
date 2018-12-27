importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09ab581f280c3c13db95.js",
    "revision": "5bb8a6ef41d35616f55ba6ddccd40149"
  },
  {
    "url": "/_nuxt/8819e6732268bd2a91fc.js",
    "revision": "21f7a7ae249fdea95812597cb8c42d80"
  },
  {
    "url": "/_nuxt/b202f7ba38462c8fe9f8.js",
    "revision": "ef7a81b3b1b5a72c7ff4c4f641fa565e"
  },
  {
    "url": "/_nuxt/b8f21919dc1eb9ce56f4.js",
    "revision": "2842db4092f852f4800a0a10bf991af6"
  },
  {
    "url": "/_nuxt/cb1bf6381a6d940cd6f9.js",
    "revision": "cd48cde9c7c0a86cc47b056caf3b237c"
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
