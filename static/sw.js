importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02893cbd86efa81f4256.js",
    "revision": "33e8b732d95cc6ee22a4d64bb3e61b5b"
  },
  {
    "url": "/_nuxt/0394bbb19b0a8f7da265.js",
    "revision": "689ed5ddb91876d72b1e04b8fd75d3c0"
  },
  {
    "url": "/_nuxt/1aa35e60cb10eff613ce.js",
    "revision": "9e271b5d64e7e0089a12eb8d96878d2d"
  },
  {
    "url": "/_nuxt/24056b20af638ef7f402.js",
    "revision": "0bb6d8cfc39a67dd45a1fbf8c51d9d23"
  },
  {
    "url": "/_nuxt/27651455f33acb3c19ab.js",
    "revision": "dff913e81a6f4ff789f5b1fada09bb67"
  },
  {
    "url": "/_nuxt/28beb91d4c86d7dd4e33.js",
    "revision": "564f599c53edb9498d3aa33c578e8155"
  },
  {
    "url": "/_nuxt/336d86976d00d8cee727.js",
    "revision": "92e9623075afbf0721866b3c221d3034"
  },
  {
    "url": "/_nuxt/3b19c54ef8f9e3158a9a.js",
    "revision": "25e874345731da21a2a094e84dd866d9"
  },
  {
    "url": "/_nuxt/498f791213c3438ed4d5.js",
    "revision": "d4e3bc5c0549541ca012f0948079b36a"
  },
  {
    "url": "/_nuxt/4aaf247a64761bba16d5.js",
    "revision": "17027c64153216996d78fb6a21290bae"
  },
  {
    "url": "/_nuxt/4fb4a261dac410bad572.js",
    "revision": "a70816a0e69f723850cd5e3f95203e5b"
  },
  {
    "url": "/_nuxt/5278d25fa3e398bd700f.js",
    "revision": "9c331576753e467d3e88cf1445a595a7"
  },
  {
    "url": "/_nuxt/53723e1120b024a76b2c.js",
    "revision": "30dd623d01004b1a3b525be8f04255ca"
  },
  {
    "url": "/_nuxt/5378a8f4c1bf528975d4.js",
    "revision": "9e2453a985fa7d7cd4fa18f75e4fbc54"
  },
  {
    "url": "/_nuxt/5b17ff929214dc986763.js",
    "revision": "5cbb00b79ce422e4f75491f55b995d38"
  },
  {
    "url": "/_nuxt/61940136645674d9bd3f.js",
    "revision": "e479cd029b825b36a75f08217215a2e5"
  },
  {
    "url": "/_nuxt/655e799e176806a8b02d.js",
    "revision": "b5e85798739b073a0fd57fce22aa86c2"
  },
  {
    "url": "/_nuxt/6c0fbcc6a71f5ff6f00a.js",
    "revision": "1955c99d3d37aacc53635392643b098e"
  },
  {
    "url": "/_nuxt/7d3957fd7a4952ba574a.js",
    "revision": "5b968727c76e46a8263359a8776a9c3a"
  },
  {
    "url": "/_nuxt/97c0bfc5ce489f5e3ca9.js",
    "revision": "764ff82e8864dc81742c94ed04de862b"
  },
  {
    "url": "/_nuxt/9ac3b9f45c360f497c45.js",
    "revision": "5f88eb56b3faa19fed7ef75ed0b32aa8"
  },
  {
    "url": "/_nuxt/a06a5b4951b9a1150beb.js",
    "revision": "d7b42b051dabd2953d44e496bde91a9a"
  },
  {
    "url": "/_nuxt/a3d33b45edeb2865a21a.js",
    "revision": "17d864a659db148b03b6a31a72473aff"
  },
  {
    "url": "/_nuxt/b72e3a9099d65a8bb8a1.js",
    "revision": "a063a91b652af987c2e5a345f7397fb5"
  },
  {
    "url": "/_nuxt/ec5ad321d28ea661c838.js",
    "revision": "08e6930108e4b7d514236035fae444f5"
  },
  {
    "url": "/_nuxt/fb14abd2aca6be5d22c8.js",
    "revision": "0ecd7834b8ff7c93aacec32f2a35bde4"
  },
  {
    "url": "/_nuxt/fbda0d89d00895580c42.js",
    "revision": "640046e7fc4a8ccbd9c10dcbb10441f5"
  },
  {
    "url": "/_nuxt/fe1e528adfa52ec42333.js",
    "revision": "54967c0a685508662d4dc36631004006"
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
