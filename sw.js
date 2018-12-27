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
    "url": "/_nuxt/8b581ce303d84861746f.js",
    "revision": "f32029649abcb30568fcb6020a62e696"
  },
  {
    "url": "/_nuxt/b8f21919dc1eb9ce56f4.js",
    "revision": "2842db4092f852f4800a0a10bf991af6"
  },
  {
    "url": "/_nuxt/e2dd3e559900bcae2fba.js",
    "revision": "44802fb6fe973554d095d636011e7558"
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
