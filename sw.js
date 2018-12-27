importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09ab581f280c3c13db95.js",
    "revision": "5bb8a6ef41d35616f55ba6ddccd40149"
  },
  {
    "url": "/_nuxt/15f4772491ad91c3ebe7.js",
    "revision": "967acc3ef03442431c5ea030cedde0d8"
  },
  {
    "url": "/_nuxt/8819e6732268bd2a91fc.js",
    "revision": "21f7a7ae249fdea95812597cb8c42d80"
  },
  {
    "url": "/_nuxt/b2788cb96be450e5c61d.js",
    "revision": "717be2a50b4f9bb9e1a0ba319496b32e"
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
