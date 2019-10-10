importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908c66df49e55d2d296.js",
    "revision": "d997ef7a5762d625a953d7f1f6002da9"
  },
  {
    "url": "/_nuxt/09f53d0a7fc33e1b0cfe.js",
    "revision": "49d9f05df3fa2c162fc4ed5b6d73a195"
  },
  {
    "url": "/_nuxt/2ce0e9930c786dd5a986.js",
    "revision": "5bfe53a7164d4e84b6a39eb5720cf36d"
  },
  {
    "url": "/_nuxt/3c3fa69698b0a890645f.js",
    "revision": "2efab644b87e11e9bf739c4ef3405ae7"
  },
  {
    "url": "/_nuxt/419224c9986c6bed4e60.js",
    "revision": "7aed5866fcaef71f484406cb323c995c"
  },
  {
    "url": "/_nuxt/42ac3c85bbdd64719c08.js",
    "revision": "e039f66049ed7bb7d4073c4f14565e17"
  },
  {
    "url": "/_nuxt/43136cc537cfaa8bd87c.js",
    "revision": "0adf5862e541682fcdb9736ffde64d72"
  },
  {
    "url": "/_nuxt/464a95395b11a95d083a.js",
    "revision": "af5c0286622625ccfaa4b23fdc58bbf0"
  },
  {
    "url": "/_nuxt/4678a0449cfcef142526.js",
    "revision": "6e1e8a477700ddbd41364b29a8fcec32"
  },
  {
    "url": "/_nuxt/5d524cd1300a4985802a.js",
    "revision": "dfa033c3769b932fea4c2fd9482805be"
  },
  {
    "url": "/_nuxt/5deee9747c273c78ce2f.js",
    "revision": "d2e59d2dd53d8e794c260ec888db7a17"
  },
  {
    "url": "/_nuxt/61f2520bb5251996dea3.js",
    "revision": "7396abfdf33b60b53e5946a482d1e347"
  },
  {
    "url": "/_nuxt/6da3fab03495cdc3dc56.js",
    "revision": "51a344a9a2d2616773d523f9c9bc6058"
  },
  {
    "url": "/_nuxt/716d6bc27df6784e41bb.js",
    "revision": "f3134e0fc28d01cb7f2af2c22feddf0d"
  },
  {
    "url": "/_nuxt/770a1156153c73dad835.js",
    "revision": "5e29992dc4a7b0ce463780688bb5a6f2"
  },
  {
    "url": "/_nuxt/87ab54dfc76c721774df.js",
    "revision": "a5d21490e09b768a22f7a066c75f2521"
  },
  {
    "url": "/_nuxt/94839adc3eb0bd895419.js",
    "revision": "09b175ee6ba601dc12e740635861ae12"
  },
  {
    "url": "/_nuxt/9864e75e657716f7f637.js",
    "revision": "f399220bea0b5384f855669028e924bc"
  },
  {
    "url": "/_nuxt/b6c277341db117f792b1.js",
    "revision": "519efdc33e6cd3c20382336da537da09"
  },
  {
    "url": "/_nuxt/bd05afb08f90c933010c.js",
    "revision": "5d43c3fc9e8a654bf1082d96e36b121f"
  },
  {
    "url": "/_nuxt/be302a477d17aa177a75.js",
    "revision": "2f52c48c774b69b88cb7e0a8f0ec89a5"
  },
  {
    "url": "/_nuxt/d22e455889f692ebf99d.js",
    "revision": "943b6e6bf927db806ca1289fc0a92e8e"
  },
  {
    "url": "/_nuxt/df563c13b70c5f037b96.js",
    "revision": "47747c97df13b687125f498f56dc7d6c"
  },
  {
    "url": "/_nuxt/dfc38c5467283f514924.js",
    "revision": "83e8fa8dd37762aaeb601b04e28c55bc"
  },
  {
    "url": "/_nuxt/e7f7fb077bf92f067dfe.js",
    "revision": "48444ee5ba17a0d6b7648622095f681e"
  },
  {
    "url": "/_nuxt/ec0a4725c64461d452b8.js",
    "revision": "50d64f7f5e73edb353f30e71b218760e"
  },
  {
    "url": "/_nuxt/edd16d35a112a9c452b4.js",
    "revision": "4ab937df5ab6c843f63e88dbbf98493f"
  },
  {
    "url": "/_nuxt/f58bca549ac68ff9d1fc.js",
    "revision": "6f6ebe6c8f72ae1164646542509e9720"
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
