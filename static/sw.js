importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/026c34671df3aa919a20.js",
    "revision": "ae0bc513df0b5f7e4244a52c463056c8"
  },
  {
    "url": "/_nuxt/25f8d3ff7b2093e32ae3.js",
    "revision": "73a141dbb412c5544d57e40517684c54"
  },
  {
    "url": "/_nuxt/166c8eb883150982f27a.js",
    "revision": "6d8d3dacb64acc0d29273e5483d600d2"
  },
  {
    "url": "/_nuxt/4d6eaf2f212f17bf424d.js",
    "revision": "71ef2c5313c46b983722faa58e51823c"
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
    "url": "/_nuxt/634ebd43f57a9fc10ce3.js",
    "revision": "b9dd93d87d860ca49b8c0aedc919a3ff"
  },
  {
    "url": "/_nuxt/6b2a23341e3eaa1dfe6e.js",
    "revision": "8e3e1f0b1029e0d3efcefd892a58b51b"
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
    "url": "/_nuxt/73b8be8931ef5e5a7248.js",
    "revision": "7f1f7d791d6d3c2aa9ce79f5def3d69a"
  },
  {
    "url": "/_nuxt/5e33ac19b90370fc2def.js",
    "revision": "f69f6ddb3bda41e7566dd0911e55f5bf"
  },
  {
    "url": "/_nuxt/69695cbd08a21a525942.js",
    "revision": "f27e5e9dd5a4c824691f2d16ed2d6dea"
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
    "url": "/_nuxt/98f11a27ef3b2f3402bc.js",
    "revision": "3f4f501ac3bb6d2182c54c5117981c5b"
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
    "url": "/_nuxt/ab59f742cd3ec867903a.js",
    "revision": "04d13a859fb7c97b4b8dfc49467fc2f3"
  },
  {
    "url": "/_nuxt/ab8bccc4e1abb53cc3b0.js",
    "revision": "b7ee99283bfecbb677f11d0222e45cbe"
  },
  {
    "url": "/_nuxt/a8256b0758b4d7e5439e.js",
    "revision": "99b2efec6813344292f919645bea75e2"
  },
  {
    "url": "/_nuxt/a85b26619696f8fe0784.js",
    "revision": "06797d62cd7d58e25c4dc2ab816ecac5"
  },
  {
    "url": "/_nuxt/cdea31f232eac8e5e15b.js",
    "revision": "136180ea974bcc8df037eb344cd9f595"
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
    "url": "/_nuxt/f41ae8ba72fb7b2be98b.js",
    "revision": "73c1fdff946cdee2f77dbe01a4d9e1c5"
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
