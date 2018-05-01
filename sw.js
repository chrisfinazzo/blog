/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_includes/about.html",
    "revision": "131da348090cc585218eba8726d0b9a0"
  },
  {
    "url": "_includes/banner.html",
    "revision": "a4d71e8066804e9b66a47f77e39abcb9"
  },
  {
    "url": "_includes/fb-open-graph.html",
    "revision": "10d79a5027f64628c4899e21be696c5f"
  },
  {
    "url": "_includes/feed.html",
    "revision": "b6851a5e7ee5d72f990d87767d21ece5"
  },
  {
    "url": "_includes/font-awesome.html",
    "revision": "e5780c81f29bc1a8c201910af737a0cc"
  },
  {
    "url": "_includes/fonts.html",
    "revision": "f465290a70ed897acfa0163237f46576"
  },
  {
    "url": "_includes/footer.html",
    "revision": "9d7e92d1e2d11ce82b86533af379b190"
  },
  {
    "url": "_includes/head.html",
    "revision": "d833bb5ca340ce7e5d3501e168c47958"
  },
  {
    "url": "_includes/icons.html",
    "revision": "e94d60d4782cfbf683e15e71b4583790"
  },
  {
    "url": "_includes/meta.html",
    "revision": "dec68a8061b175c3c3a403d227e8674b"
  },
  {
    "url": "_includes/nav.html",
    "revision": "0aaaac8a154ee54c8b3cb030785b124d"
  },
  {
    "url": "_includes/post-data.html",
    "revision": "61b55b2d2980b097f476848535ddbf2b"
  },
  {
    "url": "_includes/rights.html",
    "revision": "d8781b5499b15c2f2b4c29aec6f41d60"
  },
  {
    "url": "_includes/safari-pin.html",
    "revision": "dd138199bffab89d5a09d774801b25c3"
  },
  {
    "url": "_includes/social.html",
    "revision": "101138a248a1273785becd7cb06b966f"
  },
  {
    "url": "_includes/styles.html",
    "revision": "0aa463be827753c7e9a99f6e9aaede1d"
  },
  {
    "url": "_includes/twitter-card.html",
    "revision": "75e2c7b18bc2ec4d1fdac7cd0fb738bd"
  },
  {
    "url": "_layouts/default.html",
    "revision": "ab3a1deac5899cd0067d2d9d8fe4aafd"
  },
  {
    "url": "_layouts/post.html",
    "revision": "dabe858e388bb07c321611065f7d23b0"
  },
  {
    "url": "_site/2018/04/11/minimum-viable-writing-product/index.html",
    "revision": "1f69787fffc4547df5a154c44860e781"
  },
  {
    "url": "_site/2018/04/13/adventures-in-rsync/index.html",
    "revision": "09ee7f6863d86a1098f3312219c4ab4e"
  },
  {
    "url": "_site/2018/04/16/drunk-with-power/index.html",
    "revision": "7490c0830f2105b3ef11fd6385023d9a"
  },
  {
    "url": "_site/2018/04/20/a-desk-and-a-chair/index.html",
    "revision": "3b9a22410bebea6e1b9520901c8cdfcc"
  },
  {
    "url": "_site/2018/04/23/invalid/index.html",
    "revision": "0c8211dc5f2c0a6e02cf0da58451e195"
  },
  {
    "url": "_site/2018/04/28/security-by-deletion/index.html",
    "revision": "37f67e910a85f77e650c6761c9434463"
  },
  {
    "url": "_site/404/index.html",
    "revision": "076c53e6666beb03700947bb62dd200a"
  },
  {
    "url": "_site/colophon/index.html",
    "revision": "6b5e0cee86dd1a7a5312880b9f625131"
  },
  {
    "url": "_site/contact/index.html",
    "revision": "ed74a7b3b2971531e2b357224a45f7a8"
  },
  {
    "url": "_site/css/print.css",
    "revision": "7a10bad1929334df2485ec608c1c775b"
  },
  {
    "url": "_site/css/style.css",
    "revision": "9457df4ee4b7e41abcdd2cab6beadd16"
  },
  {
    "url": "_site/gulpfile.js",
    "revision": "bc2afbe18d123398d20814d2182e48f9"
  },
  {
    "url": "_site/index.html",
    "revision": "d3eb68129a36d22fee309e979650c490"
  },
  {
    "url": "_site/marcotte.js",
    "revision": "5b90829d5bef1abc8c22c35dbfdfa123"
  },
  {
    "url": "_site/package-lock.json",
    "revision": "60da7a867a2807861fdb5865d0fefed6"
  },
  {
    "url": "_site/package.json",
    "revision": "2c6ae5344ee30f833d98767813907e66"
  },
  {
    "url": "404.html",
    "revision": "58b018699a2b561eae961bf7f0a712a1"
  },
  {
    "url": "css/print.css",
    "revision": "7a10bad1929334df2485ec608c1c775b"
  },
  {
    "url": "css/style.css",
    "revision": "9457df4ee4b7e41abcdd2cab6beadd16"
  },
  {
    "url": "gulpfile.js",
    "revision": "bc2afbe18d123398d20814d2182e48f9"
  },
  {
    "url": "index.html",
    "revision": "b8fd2cea27c9c83a9ac4b9118383c23c"
  },
  {
    "url": "marcotte.js",
    "revision": "5b90829d5bef1abc8c22c35dbfdfa123"
  },
  {
    "url": "package-lock.json",
    "revision": "60da7a867a2807861fdb5865d0fefed6"
  },
  {
    "url": "package.json",
    "revision": "2c6ae5344ee30f833d98767813907e66"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
