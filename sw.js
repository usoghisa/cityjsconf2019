importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00180301920f30367220.js",
    "revision": "976fa798391954ce353f980093cdcda2"
  },
  {
    "url": "/_nuxt/0490cbfd5bfd6aab0eb2.js",
    "revision": "c03af87a47e873883fb0ce276f208ab9"
  },
  {
    "url": "/_nuxt/1ac7528ee061db1e7c4e.js",
    "revision": "81d6dcd113ae7c9278d5ec61381b161c"
  },
  {
    "url": "/_nuxt/1d3a1779e83612090f3d.js",
    "revision": "148740821719ab09d5cc46f0cf2f2ea9"
  },
  {
    "url": "/_nuxt/208b0edf2ad6a1755619.js",
    "revision": "43906aad1144b987695122c95f02ae4d"
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
    "url": "/_nuxt/357814e5edcc6a8c8642.js",
    "revision": "89c2d47d6ab74b25d11d397b92729894"
  },
  {
    "url": "/_nuxt/3d701c98e1c25c790a2d.js",
    "revision": "1f36e2b4a51bca2d2bebab332f626ad7"
  },
  {
    "url": "/_nuxt/4d6eaf2f212f17bf424d.js",
    "revision": "71ef2c5313c46b983722faa58e51823c"
  },
  {
    "url": "/_nuxt/4dc1e091a21158d98c75.js",
    "revision": "f6b4cceeaab56ae637fda3a4be9a5bd0"
  },
  {
    "url": "/_nuxt/5c440dce16227f44814c.js",
    "revision": "1d44462f6a91b7dc6e84631534f358a1"
  },
  {
    "url": "/_nuxt/6628e40068c73fda2caa.js",
    "revision": "1dda5724486ff507fa3dfee728c3e8db"
  },
  {
    "url": "/_nuxt/67c733f4d6b5c7a29bb9.js",
    "revision": "8384249113a34b9cb864cdab298eeed1"
  },
  {
    "url": "/_nuxt/718e6209c0f92e6388ec.js",
    "revision": "2125e0ea4aa0ee06cf71672916a5352f"
  },
  {
    "url": "/_nuxt/809c4de53af97e3d3794.js",
    "revision": "6783eba096cb1834eb1490b5bc913717"
  },
  {
    "url": "/_nuxt/80ebdc22caaee7718fb3.js",
    "revision": "1dff1ae9ec4c4284a998349713411f91"
  },
  {
    "url": "/_nuxt/826e806188b0b1ff6dd4.js",
    "revision": "4cf418734992cf0c4dce8a86f8831b5b"
  },
  {
    "url": "/_nuxt/882566f173dcc9524797.js",
    "revision": "4a8ddc50a88b80c1c0377228f5c32bcd"
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
    "url": "/_nuxt/98b9282ce6db3dcb0391.js",
    "revision": "f718454036bb2355844e45109e58d8e1"
  },
  {
    "url": "/_nuxt/a15ff98f860fcfb3c5a0.js",
    "revision": "1faff7382a64bcec33d2615bcab7100f"
  },
  {
    "url": "/_nuxt/a89db9cabd1e124a3345.js",
    "revision": "1608fa3720252a73974c5d1db4c24ffb"
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
    "url": "/_nuxt/d157005b28999725a2d5.js",
    "revision": "95fde3d8056ac369c850093dec0e9eb4"
  },
  {
    "url": "/_nuxt/e754950aac8319957adc.js",
    "revision": "cd133564ce1b378ef2fdadfd95a7c6e0"
  },
  {
    "url": "/_nuxt/e779c7e51e0ad7339fdc.js",
    "revision": "4a61592d9f62532ee745e7e74f8e40b7"
  },
  {
    "url": "/_nuxt/f6a3e117a4352d839eed.js",
    "revision": "f4a331d2c409c23018ec2d13890c6e61"
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
