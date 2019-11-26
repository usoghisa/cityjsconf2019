importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/026c34671df3aa919a20.js",
    "revision": "ae0bc513df0b5f7e4244a52c463056c8"
  },
  {
    "url": "/_nuxt/1051b234b35f075cce87.js",
    "revision": "8b5b867a0860ade67697ef91f318adc9"
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
    "url": "/_nuxt/3626d22f9b3200ff1ccb.js",
    "revision": "da44260aef10518a4260d6ab720d5669"
  },
  {
    "url": "/_nuxt/3e360779e47b079c80ba.js",
    "revision": "d1d2be42037d08e73a426a3aaa683471"
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
    "url": "/_nuxt/4cfe8d6ef2aaafd225ed.js",
    "revision": "00a30bba6b187f0d30556af4ef861144"
  },
  {
    "url": "/_nuxt/5b5e771c6ab9d6a07204.js",
    "revision": "72dd39f4bd35822abdaedf6dcb4acc4d"
  },
  {
    "url": "/_nuxt/5e33ac19b90370fc2def.js",
    "revision": "f69f6ddb3bda41e7566dd0911e55f5bf"
  },
  {
    "url": "/_nuxt/6a80f47c68d25702b906.js",
    "revision": "e94f63678ae93a441db18b0452b95612"
  },
  {
    "url": "/_nuxt/6af5923f58a4995aad98.js",
    "revision": "51eff963e1cffdde8b6dd525af72596a"
  },
  {
    "url": "/_nuxt/77cc37643d1811367d0c.js",
    "revision": "ac7bf120926dc1ab93e3123bef9ca888"
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
    "url": "/_nuxt/a13c014049b5f3652428.js",
    "revision": "97f247ea56182c156b366d0f225c59da"
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
    "url": "/_nuxt/c0181c7cc212043a6486.js",
    "revision": "09ce7de74a45f489f3e32abe1c2a9fea"
  },
  {
    "url": "/_nuxt/cdea31f232eac8e5e15b.js",
    "revision": "136180ea974bcc8df037eb344cd9f595"
  },
  {
    "url": "/_nuxt/d02a69075c0b2e13e05d.js",
    "revision": "e344b45b124d5fe1b2b0236af49b405d"
  },
  {
    "url": "/_nuxt/d0fb3b415d164b86cbbb.js",
    "revision": "c3f5ba6a07cc9bd26f4987bff43643aa"
  },
  {
    "url": "/_nuxt/dabc41773f8d8469c57f.js",
    "revision": "af39da37d46e965bd71c770a4f35383a"
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
