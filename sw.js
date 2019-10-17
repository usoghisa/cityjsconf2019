importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1aa35e60cb10eff613ce.js",
    "revision": "9e271b5d64e7e0089a12eb8d96878d2d"
  },
  {
    "url": "/_nuxt/21f14dfddb305b4581b6.js",
    "revision": "712956d9638f9c944a7f4b24356d8c59"
  },
  {
    "url": "/_nuxt/26b6e7964cb8b069b51a.js",
    "revision": "9b56ad124e1eb86f249c5fd2f18e7eb9"
  },
  {
    "url": "/_nuxt/2727744566367feed379.js",
    "revision": "b0656922dc292343b21b2dba161436d7"
  },
  {
    "url": "/_nuxt/336d86976d00d8cee727.js",
    "revision": "92e9623075afbf0721866b3c221d3034"
  },
  {
    "url": "/_nuxt/43e174326536a34c0f26.js",
    "revision": "74c5cb755b997b3713e46fc99f52b4c7"
  },
  {
    "url": "/_nuxt/46d99de9f7dfff5efb85.js",
    "revision": "07d71fa5129617e980d05947f7fa9615"
  },
  {
    "url": "/_nuxt/498f791213c3438ed4d5.js",
    "revision": "d4e3bc5c0549541ca012f0948079b36a"
  },
  {
    "url": "/_nuxt/4fb4a261dac410bad572.js",
    "revision": "a70816a0e69f723850cd5e3f95203e5b"
  },
  {
    "url": "/_nuxt/5b17ff929214dc986763.js",
    "revision": "5cbb00b79ce422e4f75491f55b995d38"
  },
  {
    "url": "/_nuxt/5cc51763e340f222872e.js",
    "revision": "b7234b4a9495fbac481b8cf728c2bf83"
  },
  {
    "url": "/_nuxt/61940136645674d9bd3f.js",
    "revision": "e479cd029b825b36a75f08217215a2e5"
  },
  {
    "url": "/_nuxt/6d95c509f2e68cf58ed3.js",
    "revision": "e58f1eee1363525b96d1d12340dbd695"
  },
  {
    "url": "/_nuxt/75bd56a2f0b90ab36433.js",
    "revision": "8ee077c2fd73b95188ce652069c0900e"
  },
  {
    "url": "/_nuxt/7d3957fd7a4952ba574a.js",
    "revision": "5b968727c76e46a8263359a8776a9c3a"
  },
  {
    "url": "/_nuxt/8435f1e8cd58be90c587.js",
    "revision": "c816e20600f55ae1b3fcb127fc7851e4"
  },
  {
    "url": "/_nuxt/935f3428cfb9fcbc25dd.js",
    "revision": "ac2e9eb7cbf14c5fa0cc0bc2f75c0c51"
  },
  {
    "url": "/_nuxt/9555bcec0479f154c114.js",
    "revision": "39c661c7984ed2482952b3a075c1b087"
  },
  {
    "url": "/_nuxt/9898c19bd9309063ee3b.js",
    "revision": "d4d41cd29e2a7af30794a14af2ec79c2"
  },
  {
    "url": "/_nuxt/a3d33b45edeb2865a21a.js",
    "revision": "17d864a659db148b03b6a31a72473aff"
  },
  {
    "url": "/_nuxt/b9fdb87a15f3f87fb9a1.js",
    "revision": "f4ec4d20279083a8852cbe5ab0a8dea6"
  },
  {
    "url": "/_nuxt/cc0179bda1d5d444899e.js",
    "revision": "eca646260f0fc00ecd38b929ad28f9f9"
  },
  {
    "url": "/_nuxt/d0459bd09a7acac08a7e.js",
    "revision": "323b12ee24f859d92275fe29700105a3"
  },
  {
    "url": "/_nuxt/ec5ad321d28ea661c838.js",
    "revision": "08e6930108e4b7d514236035fae444f5"
  },
  {
    "url": "/_nuxt/f39f039e9929e5820ded.js",
    "revision": "b2408bb1ca8ae426242054a5a394a206"
  },
  {
    "url": "/_nuxt/f3ca2ef26faea484e3ed.js",
    "revision": "8d0cfbf72d2bcfb5cabb172736fa1852"
  },
  {
    "url": "/_nuxt/fb14abd2aca6be5d22c8.js",
    "revision": "0ecd7834b8ff7c93aacec32f2a35bde4"
  },
  {
    "url": "/_nuxt/fbda0d89d00895580c42.js",
    "revision": "640046e7fc4a8ccbd9c10dcbb10441f5"
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
