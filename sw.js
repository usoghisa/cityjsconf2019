importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00180301920f30367220.js",
    "revision": "976fa798391954ce353f980093cdcda2"
  },
  {
    "url": "/_nuxt/1d3a1779e83612090f3d.js",
    "revision": "148740821719ab09d5cc46f0cf2f2ea9"
  },
  {
    "url": "/_nuxt/25f8d3ff7b2093e32ae3.js",
    "revision": "73a141dbb412c5544d57e40517684c54"
  },
  {
    "url": "/_nuxt/32089b7f08a6df6f698e.js",
    "revision": "186f02d334f21aeed30371eda0c8949c"
  },
  {
    "url": "/_nuxt/4d6eaf2f212f17bf424d.js",
    "revision": "71ef2c5313c46b983722faa58e51823c"
  },
  {
    "url": "/_nuxt/523fd27cda790cc018c2.js",
    "revision": "13c43b61572f89f46bc79e797a4c5480"
  },
  {
    "url": "/_nuxt/5c440dce16227f44814c.js",
    "revision": "1d44462f6a91b7dc6e84631534f358a1"
  },
  {
    "url": "/_nuxt/5fb40804b2bfbd980974.js",
    "revision": "7ff157a8067896accf86fd28126a9983"
  },
  {
    "url": "/_nuxt/62a7477be83f900557ff.js",
    "revision": "d6ab9f1fe352fcfd5af2fdd884dcca33"
  },
  {
    "url": "/_nuxt/634ebd43f57a9fc10ce3.js",
    "revision": "b9dd93d87d860ca49b8c0aedc919a3ff"
  },
  {
    "url": "/_nuxt/6b2a23341e3eaa1dfe6e.js",
    "revision": "8e3e1f0b1029e0d3efcefd892a58b51b"
  },
  {
    "url": "/_nuxt/718e6209c0f92e6388ec.js",
    "revision": "2125e0ea4aa0ee06cf71672916a5352f"
  },
  {
    "url": "/_nuxt/73b8be8931ef5e5a7248.js",
    "revision": "7f1f7d791d6d3c2aa9ce79f5def3d69a"
  },
  {
    "url": "/_nuxt/77a78007b8ff93bc6a94.js",
    "revision": "92642d8f1833fdf39e5576813bfded1d"
  },
  {
    "url": "/_nuxt/7ef83d4ec916a5a1a6c4.js",
    "revision": "89007882d67c403a61e55c13801bc193"
  },
  {
    "url": "/_nuxt/809c4de53af97e3d3794.js",
    "revision": "6783eba096cb1834eb1490b5bc913717"
  },
  {
    "url": "/_nuxt/9039f2704ff75faf70a2.js",
    "revision": "bf3adadc04513aa375bfe0ed2d99f668"
  },
  {
    "url": "/_nuxt/92e07819457792d9f3ca.js",
    "revision": "715db7058475082d5f9fb456b96b8928"
  },
  {
    "url": "/_nuxt/965cdf263407d8955cba.js",
    "revision": "e18f0cabe4a59ebc5004a815b8fd9838"
  },
  {
    "url": "/_nuxt/98f11a27ef3b2f3402bc.js",
    "revision": "3f4f501ac3bb6d2182c54c5117981c5b"
  },
  {
    "url": "/_nuxt/99cb1253cc55de806ac8.js",
    "revision": "d291beb4032afbb7ee6e2944ecfd9ac8"
  },
  {
    "url": "/_nuxt/a15ff98f860fcfb3c5a0.js",
    "revision": "1faff7382a64bcec33d2615bcab7100f"
  },
  {
    "url": "/_nuxt/a22765d1766d3f707e37.js",
    "revision": "775e54a23802ab1465cd6667ca4fdc3d"
  },
  {
    "url": "/_nuxt/ab59f742cd3ec867903a.js",
    "revision": "04d13a859fb7c97b4b8dfc49467fc2f3"
  },
  {
    "url": "/_nuxt/ab8bccc4e1abb53cc3b0.js",
    "revision": "b7ee99283bfecbb677f11d0222e45cbe"
  },
  {
    "url": "/_nuxt/af32253d3e2c23073347.js",
    "revision": "4f9a65382357dbf1f40f4ca4239f8059"
  },
  {
    "url": "/_nuxt/c98bb170c7904fc0590b.js",
    "revision": "b9a6c63d7850d69016404ec2374ebd8c"
  },
  {
    "url": "/_nuxt/cf07714777fec5fb5a40.js",
    "revision": "0914861778dcf973b44b6b53560c2593"
  },
  {
    "url": "/_nuxt/da52a1da5b6a8f595880.js",
    "revision": "ef6f7d88d4f452014b987369d5fa84f2"
  },
  {
    "url": "/_nuxt/de483780a4fbf8aeaba8.js",
    "revision": "12338b5094a96f595a23e676cf577a05"
  },
  {
    "url": "/_nuxt/e754950aac8319957adc.js",
    "revision": "cd133564ce1b378ef2fdadfd95a7c6e0"
  },
  {
    "url": "/_nuxt/fb56bbb8c937baa43af4.js",
    "revision": "c82af4ddd29f0c3d5891424161a4e4d0"
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
