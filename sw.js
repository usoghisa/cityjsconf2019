importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/026c34671df3aa919a20.js",
    "revision": "ae0bc513df0b5f7e4244a52c463056c8"
  },
  {
    "url": "/_nuxt/058484c910dfb07e5cb7.js",
    "revision": "34738999a2e59fe44b0c03cb04b7df8f"
  },
  {
    "url": "/_nuxt/1051b234b35f075cce87.js",
    "revision": "8b5b867a0860ade67697ef91f318adc9"
  },
  {
    "url": "/_nuxt/178e6140737119353413.js",
    "revision": "6195c6d58329f0510db220690a31ff29"
  },
  {
    "url": "/_nuxt/22215ce46ae677910266.js",
    "revision": "d3d017c2904f3f1875d350fc16495ef2"
  },
  {
    "url": "/_nuxt/2b3777a07da98edd29ba.js",
    "revision": "aa2cbf59f4ab1a9c0218c636aa6f0afc"
  },
  {
    "url": "/_nuxt/31d12c08ed0362a7a77d.js",
    "revision": "ae0bd39c3dffbb767602089f72ea4944"
  },
  {
    "url": "/_nuxt/332faf4e88dc2e7da32b.js",
    "revision": "ae5224c039a6409fb04dc43d6d093b4b"
  },
  {
    "url": "/_nuxt/349a3a3415549f16af92.js",
    "revision": "fb0fd7551d92ee8e8229f25f46fb67a2"
  },
  {
    "url": "/_nuxt/3626d22f9b3200ff1ccb.js",
    "revision": "da44260aef10518a4260d6ab720d5669"
  },
  {
    "url": "/_nuxt/3e360779e47b079c80ba.js",
    "revision": "d1d2be42037d08e73a426a3aaa683471"
  },
  {
    "url": "/_nuxt/3f436cb12f5e2e11722e.js",
    "revision": "a29b870c69b2fd14cbf37d747e8ab6ba"
  },
  {
    "url": "/_nuxt/425a37acf39cc4058422.js",
    "revision": "f0ae021fb772598999080ff2c0a9415e"
  },
  {
    "url": "/_nuxt/43bf5eaeb5a680a44a95.js",
    "revision": "d0314cecbe357eeaa204cb3a94be9bab"
  },
  {
    "url": "/_nuxt/5dfdb9891e10e709120c.js",
    "revision": "10921f194af68128c3cb8580d4fe78df"
  },
  {
    "url": "/_nuxt/6d83ccb3a71f2a458155.js",
    "revision": "0ffc206cad383a49d9737a89894e434c"
  },
  {
    "url": "/_nuxt/77cc37643d1811367d0c.js",
    "revision": "ac7bf120926dc1ab93e3123bef9ca888"
  },
  {
    "url": "/_nuxt/7eb062c963a16a3da089.js",
    "revision": "8e4aa083b2c253dad93947e93f179832"
  },
  {
    "url": "/_nuxt/821aa0f038bef2ff8e61.js",
    "revision": "c9213b0afa725f2de3d062aa22abc55a"
  },
  {
    "url": "/_nuxt/8572c26019ee9a1a6ef1.js",
    "revision": "9da6794f3214956025d0943bf9837662"
  },
  {
    "url": "/_nuxt/8b94d44f07e3be63540d.js",
    "revision": "c775f27b39d784531b84207ad64030e6"
  },
  {
    "url": "/_nuxt/95be0a72655308cfd70b.js",
    "revision": "70219440bc1cbb2e185464d9b5379b4e"
  },
  {
    "url": "/_nuxt/962aca97e31c9841c9e6.js",
    "revision": "b648fa348d328d4a004d07617fd05d3a"
  },
  {
    "url": "/_nuxt/9df33cd27de31d4af855.js",
    "revision": "26a60fdea8b80396d7ea612dc0992e06"
  },
  {
    "url": "/_nuxt/a618c6e36863e387faee.js",
    "revision": "d46170e7e9480628a663855d1863c426"
  },
  {
    "url": "/_nuxt/a85b26619696f8fe0784.js",
    "revision": "06797d62cd7d58e25c4dc2ab816ecac5"
  },
  {
    "url": "/_nuxt/af5c10ae6688131ac3e8.js",
    "revision": "828151521e9880307592e501e7882642"
  },
  {
    "url": "/_nuxt/cdea31f232eac8e5e15b.js",
    "revision": "136180ea974bcc8df037eb344cd9f595"
  },
  {
    "url": "/_nuxt/d46df6aa5000b993f115.js",
    "revision": "5165c9fef6a4cad4e3a9ebec09216ca9"
  },
  {
    "url": "/_nuxt/dabc41773f8d8469c57f.js",
    "revision": "af39da37d46e965bd71c770a4f35383a"
  },
  {
    "url": "/_nuxt/dfcd4d2dfdc546d71d75.js",
    "revision": "f434e723ca3c3faf8452609e1da51d43"
  },
  {
    "url": "/_nuxt/f6359326079f522c4933.js",
    "revision": "e9813c411ae9750bb3ff8f7b2d269fce"
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
