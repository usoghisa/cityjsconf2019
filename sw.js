importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0240252de994dd601fc2.js",
    "revision": "936ce119aa300f1b6d71545d89d7ab19"
  },
  {
    "url": "/_nuxt/04e7865f08aac062b832.js",
    "revision": "96a3c12153cb50999d65f9dd0eaa1bd0"
  },
  {
    "url": "/_nuxt/1051b234b35f075cce87.js",
    "revision": "8b5b867a0860ade67697ef91f318adc9"
  },
  {
    "url": "/_nuxt/1060ffe01fbd646b79c5.js",
    "revision": "1a5361ecd95864377103d954551b083e"
  },
  {
    "url": "/_nuxt/166c8eb883150982f27a.js",
    "revision": "6d8d3dacb64acc0d29273e5483d600d2"
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
    "url": "/_nuxt/3ae68ad3dcc557d424f1.js",
    "revision": "e37a7340ef4488a159d53f6b2c40de35"
  },
  {
    "url": "/_nuxt/43bf5eaeb5a680a44a95.js",
    "revision": "d0314cecbe357eeaa204cb3a94be9bab"
  },
  {
    "url": "/_nuxt/77cc37643d1811367d0c.js",
    "revision": "ac7bf120926dc1ab93e3123bef9ca888"
  },
  {
    "url": "/_nuxt/7d8d551e4674b02f6473.js",
    "revision": "82830c45164bab81c5bb2bd65b549276"
  },
  {
    "url": "/_nuxt/7f8828053130fb3bba09.js",
    "revision": "1cfd1e59dd4fdfcf4ce91f2ecd9e9096"
  },
  {
    "url": "/_nuxt/8572c26019ee9a1a6ef1.js",
    "revision": "9da6794f3214956025d0943bf9837662"
  },
  {
    "url": "/_nuxt/8595a796a01b0761436f.js",
    "revision": "84c05aaeb77ed276d4b3f27a618c3df9"
  },
  {
    "url": "/_nuxt/88ed1397fa158004ba29.js",
    "revision": "3f07e35df2cd9069df4eabee65bade00"
  },
  {
    "url": "/_nuxt/8b94d44f07e3be63540d.js",
    "revision": "c775f27b39d784531b84207ad64030e6"
  },
  {
    "url": "/_nuxt/962aca97e31c9841c9e6.js",
    "revision": "b648fa348d328d4a004d07617fd05d3a"
  },
  {
    "url": "/_nuxt/97dc39768cd43a58b77a.js",
    "revision": "c4f803eb6ae94cf438effac0541916ce"
  },
  {
    "url": "/_nuxt/9b3c276bc388d8919140.js",
    "revision": "9c5adae58de3143d801a86f5965a4cae"
  },
  {
    "url": "/_nuxt/9bc8cd0e0606946c2128.js",
    "revision": "e5b4b7dcb194de19986ed608c62b52f6"
  },
  {
    "url": "/_nuxt/a618c6e36863e387faee.js",
    "revision": "d46170e7e9480628a663855d1863c426"
  },
  {
    "url": "/_nuxt/a7445a92b01909688c45.js",
    "revision": "f92528b051cfcbbba601f0602cd0aca3"
  },
  {
    "url": "/_nuxt/b38124eacee704264106.js",
    "revision": "62ea1568cc0b250d8a9c72b15e2a1927"
  },
  {
    "url": "/_nuxt/b58d94caa8cd9895241d.js",
    "revision": "f6037c14312d159b700ab8ca3033b184"
  },
  {
    "url": "/_nuxt/c79b0c408b31180b77de.js",
    "revision": "4bd5d91feed736822b3dbea8b77a7b9a"
  },
  {
    "url": "/_nuxt/d0bf9d506ef14164c861.js",
    "revision": "40cefded05bae01dd1921e8a8f715524"
  },
  {
    "url": "/_nuxt/d99fec10988cb25dcf5a.js",
    "revision": "4eaf6a20b78a17c5f93539f2a4933f30"
  },
  {
    "url": "/_nuxt/f225638785406c4340ca.js",
    "revision": "7f280e9f0916a429e8902942f7821e7a"
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
