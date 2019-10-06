importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0207cfac26fdec43555d.js",
    "revision": "6fd5e1392812f26deedf99dbe57e1dcd"
  },
  {
    "url": "/_nuxt/03662be5206dc6ed2761.js",
    "revision": "aa3cc9c0dfa466c26e6efb60da44fc91"
  },
  {
    "url": "/_nuxt/037df6c97f84478a5b95.js",
    "revision": "2b01e03e908a8c0aa52bd46cd73bc79b"
  },
  {
    "url": "/_nuxt/11a17d76e80e6f6f99b0.js",
    "revision": "e16014defff5033095a5af7387aec73f"
  },
  {
    "url": "/_nuxt/11d20bd7d377c19f7665.js",
    "revision": "cd49386ee4e42e12e1ccfa1c0f1c7794"
  },
  {
    "url": "/_nuxt/133e8539a847eb054068.js",
    "revision": "ba016467adb22718a43175d64e12ddab"
  },
  {
    "url": "/_nuxt/19496f74afa060e25269.js",
    "revision": "75770e1771e401e81e7abee9be677a20"
  },
  {
    "url": "/_nuxt/1b70f9a41fdb22e3444d.js",
    "revision": "8f9b7f221ec48c3bfcc6574b9e686d41"
  },
  {
    "url": "/_nuxt/1f4378c3d829174b9a79.js",
    "revision": "32051b9d46f7ef427e51921ca2250c47"
  },
  {
    "url": "/_nuxt/2b61174148b7f3554e3e.js",
    "revision": "183c3d1ccbdd8d51978cc53c623747db"
  },
  {
    "url": "/_nuxt/2cf956460e7ce71fab63.js",
    "revision": "8e7dde56980a82629749c6510bd4c168"
  },
  {
    "url": "/_nuxt/2f06943937bae2a91eec.js",
    "revision": "0f7593b7b91eed4dfa9197d67c37641f"
  },
  {
    "url": "/_nuxt/391b7c506df846b612d4.js",
    "revision": "20fa01e38d3d109830fff66188618d3e"
  },
  {
    "url": "/_nuxt/468cbeb126120647ca3f.js",
    "revision": "6d0f25f0597b675f771ec50709487fed"
  },
  {
    "url": "/_nuxt/4f7f5c88e1c97cdaa92e.js",
    "revision": "4a9cf5ea1b9261dfbe4e4a901da020b5"
  },
  {
    "url": "/_nuxt/560811f49bac52ba9e27.js",
    "revision": "922040a59daee5eaa4cf3d5ad7945f24"
  },
  {
    "url": "/_nuxt/82b9d7040a4ec3003a01.js",
    "revision": "8412d334a308fe88fbee0bdd69251c9f"
  },
  {
    "url": "/_nuxt/a154e143019ebf329838.js",
    "revision": "779ecc4552ab914172d1b63812a69202"
  },
  {
    "url": "/_nuxt/a2accb285ee5e1600a5c.js",
    "revision": "d5c0ad8481323c55d3a85ea221f3bf67"
  },
  {
    "url": "/_nuxt/ae34b6a40ab610edcfeb.js",
    "revision": "2d5d8da90f89f10862de0d7a0053cce1"
  },
  {
    "url": "/_nuxt/b19e982d9893a5b5761a.js",
    "revision": "18f15e10fba2c41a4af7dfeafb6e1254"
  },
  {
    "url": "/_nuxt/c3ce15de3dea6de78125.js",
    "revision": "4c373f990e2f6e6500502141f1ffd847"
  },
  {
    "url": "/_nuxt/c6ad601585699658f365.js",
    "revision": "86f32eac8e24a7f9d8197c4dd6277f0d"
  },
  {
    "url": "/_nuxt/ce4a114d8062163ad181.js",
    "revision": "b2e19ca397d301551561357bc6f3bb90"
  },
  {
    "url": "/_nuxt/df901d204d2245e7368f.js",
    "revision": "3a1f7c5fa3d1b317a891c97360226d46"
  },
  {
    "url": "/_nuxt/e1bfdfbad496d0924485.js",
    "revision": "4cfc29387462ab0851e4b1b899b507c4"
  },
  {
    "url": "/_nuxt/e2e0b382fd6660849477.js",
    "revision": "efc31fea4696d8b9a0e4f81ee56d4657"
  },
  {
    "url": "/_nuxt/f9dca6c755568e906718.js",
    "revision": "9dacf8932496dfc102856491c6648a86"
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
