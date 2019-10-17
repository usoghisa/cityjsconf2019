importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ff103b7e872e34ab28a.js",
    "revision": "2d46ffdbeae59436b3f297947e83dd3b"
  },
  {
    "url": "/_nuxt/166915d4699dd9b3098a.js",
    "revision": "624c1ee8d5bdad759978e3f56ac06d31"
  },
  {
    "url": "/_nuxt/1aa35e60cb10eff613ce.js",
    "revision": "9e271b5d64e7e0089a12eb8d96878d2d"
  },
  {
    "url": "/_nuxt/1d2528d7a18eebff9fd4.js",
    "revision": "9be580089b6cb99b24c1bdd48c23510a"
  },
  {
    "url": "/_nuxt/2727744566367feed379.js",
    "revision": "b0656922dc292343b21b2dba161436d7"
  },
  {
    "url": "/_nuxt/34d372a9d92e32d535e8.js",
    "revision": "ba579b4b34620110334136e8472c9a72"
  },
  {
    "url": "/_nuxt/498f791213c3438ed4d5.js",
    "revision": "d4e3bc5c0549541ca012f0948079b36a"
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
    "url": "/_nuxt/671c64d1e1f453dc4a36.js",
    "revision": "85cd9c817c00defe8d6af587ab25b550"
  },
  {
    "url": "/_nuxt/6d95c509f2e68cf58ed3.js",
    "revision": "e58f1eee1363525b96d1d12340dbd695"
  },
  {
    "url": "/_nuxt/7a808cacd7df7e74883a.js",
    "revision": "18ce6752bf48c9b1f9c0e01d303dd3ed"
  },
  {
    "url": "/_nuxt/7d3957fd7a4952ba574a.js",
    "revision": "5b968727c76e46a8263359a8776a9c3a"
  },
  {
    "url": "/_nuxt/8309e9c60ed92ebf46ee.js",
    "revision": "549d8a29d1e8a8b1a2b5775eb38b2e51"
  },
  {
    "url": "/_nuxt/8435f1e8cd58be90c587.js",
    "revision": "c816e20600f55ae1b3fcb127fc7851e4"
  },
  {
    "url": "/_nuxt/858a178841c7f0834456.js",
    "revision": "bec30da60e47b2f8e27cf2e32e41faff"
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
    "url": "/_nuxt/a3d33b45edeb2865a21a.js",
    "revision": "17d864a659db148b03b6a31a72473aff"
  },
  {
    "url": "/_nuxt/c3a9bd9dd5c235f69f8b.js",
    "revision": "798025e29749c1ed0c55566559c10ed8"
  },
  {
    "url": "/_nuxt/c7b2e78ebc4a0236a31a.js",
    "revision": "e3aaf3cf0999cce61d95348001c657b3"
  },
  {
    "url": "/_nuxt/d96c01d6ff7de05caa40.js",
    "revision": "8234e0261f57fa36e885165387dc6f2c"
  },
  {
    "url": "/_nuxt/e1fe25261e688e42a055.js",
    "revision": "caca88f6a1b13efe057be0a33206eb77"
  },
  {
    "url": "/_nuxt/ec061afb6d8ace50f780.js",
    "revision": "792b693045f0860cd9eebc9206b2c39e"
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
    "url": "/_nuxt/fbda0d89d00895580c42.js",
    "revision": "640046e7fc4a8ccbd9c10dcbb10441f5"
  },
  {
    "url": "/_nuxt/fffdbf0be02a9439100b.js",
    "revision": "937728fce851a75bbc4fafbf06d40b86"
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
