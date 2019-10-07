importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/058433e2ad68857f5daf.js",
    "revision": "5353bf919cffac84fee2cea0ad2a1c89"
  },
  {
    "url": "/_nuxt/100b6899394879d03b3b.js",
    "revision": "7e21dae2a4aa0382d87e21339277bb8a"
  },
  {
    "url": "/_nuxt/1bc0d85b0a6618fed298.js",
    "revision": "4764415b62662bf725d937a9c922ef17"
  },
  {
    "url": "/_nuxt/22ad2f5d825d6ff77767.js",
    "revision": "b61e82b4d9400214782f8a8f618a317d"
  },
  {
    "url": "/_nuxt/2e5bd603372d2f7baae8.js",
    "revision": "7009dbd85dd19e222bea8f1318013ea3"
  },
  {
    "url": "/_nuxt/4b0a35faef660e011ab0.js",
    "revision": "a96da582051a8871face47ba4042b414"
  },
  {
    "url": "/_nuxt/5f40b0a31124cf2a44fa.js",
    "revision": "038a57df065ef841022c2a3ce485998a"
  },
  {
    "url": "/_nuxt/62792034ad561a7a2825.js",
    "revision": "4365d09c11b7069479af75f2c19d981b"
  },
  {
    "url": "/_nuxt/716d6bc27df6784e41bb.js",
    "revision": "f3134e0fc28d01cb7f2af2c22feddf0d"
  },
  {
    "url": "/_nuxt/71be43aad2c739d69edb.js",
    "revision": "593a350cae332657ba3777ffb7cd2934"
  },
  {
    "url": "/_nuxt/770a1156153c73dad835.js",
    "revision": "5e29992dc4a7b0ce463780688bb5a6f2"
  },
  {
    "url": "/_nuxt/871ddc94fdb068fbe864.js",
    "revision": "cf28a619f88e4bf97dedacc3a9101ab6"
  },
  {
    "url": "/_nuxt/8daf862458a32daa2eea.js",
    "revision": "291d263b0bb29702e73bba90157cc47e"
  },
  {
    "url": "/_nuxt/97020a3c42283094a2ff.js",
    "revision": "f261d5f196631ebc5846628fd083b03a"
  },
  {
    "url": "/_nuxt/9bc6f8ce730775479726.js",
    "revision": "ec8f8052dc1a24bbfd976e2cd0d40ba9"
  },
  {
    "url": "/_nuxt/a101eb8ba2014bc3fa7a.js",
    "revision": "1787e537ae181c2a5a368f06fcc2364e"
  },
  {
    "url": "/_nuxt/a2ae8890c079c260a8c9.js",
    "revision": "8a6216a800c750caed6a4d023371343b"
  },
  {
    "url": "/_nuxt/a6cbc5e75821a67d5b58.js",
    "revision": "64f034d6aee0c020e5159fbf0fe3b65b"
  },
  {
    "url": "/_nuxt/a921928c3d75a53db24b.js",
    "revision": "42b5d577b8fe9033c64c631ddd20e010"
  },
  {
    "url": "/_nuxt/b11f1e950e06ebbc94ac.js",
    "revision": "758a25507f9177a68b03eefb686b04c8"
  },
  {
    "url": "/_nuxt/b5061f84ace59da6d132.js",
    "revision": "f52e4adfdca5eb962135b781a3c59951"
  },
  {
    "url": "/_nuxt/cf9e75dbf553ea05f7ab.js",
    "revision": "8b4c00f0c10a92514ce8ae6572c8f54c"
  },
  {
    "url": "/_nuxt/e7f7fb077bf92f067dfe.js",
    "revision": "48444ee5ba17a0d6b7648622095f681e"
  },
  {
    "url": "/_nuxt/edd16d35a112a9c452b4.js",
    "revision": "4ab937df5ab6c843f63e88dbbf98493f"
  },
  {
    "url": "/_nuxt/f2313e1bd4b82452d671.js",
    "revision": "14acbb62f2ea83ff174d583684783ee3"
  },
  {
    "url": "/_nuxt/f4e267c6772572d0f077.js",
    "revision": "eeb3d220abb539427edea1678dd5af1f"
  },
  {
    "url": "/_nuxt/fa16e473f657f7488b6b.js",
    "revision": "1a6e0d9431b5ac20cc785bd1c3da9c53"
  },
  {
    "url": "/_nuxt/fec0b3da7fe8e25d9819.js",
    "revision": "dfe9465d84b675ce777c83ba6e7b2a28"
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
