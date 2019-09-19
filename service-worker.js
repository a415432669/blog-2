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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b1ad9f60dc019389f9b2bf2c98f04f8d"
  },
  {
    "url": "about/index.html",
    "revision": "3fed1a38e8dddaeba05bb5a48e320e2c"
  },
  {
    "url": "assets/css/0.styles.1bd072d0.css",
    "revision": "7ebe1fca742758b63190ee14f8299388"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d27bd169.js",
    "revision": "58213ee7cb489056289578b50f69254d"
  },
  {
    "url": "assets/js/100.aa537c83.js",
    "revision": "25ad3765194c92f42a83d61e9ada8543"
  },
  {
    "url": "assets/js/101.63b951d5.js",
    "revision": "c1f879faa4437be39161a0accf36304c"
  },
  {
    "url": "assets/js/102.c4e5d287.js",
    "revision": "bf712912bc083abf4932130d5d4337b0"
  },
  {
    "url": "assets/js/103.d8e20495.js",
    "revision": "32966d9732d7d70dfb43ad73e49fc4d8"
  },
  {
    "url": "assets/js/104.01d6b95c.js",
    "revision": "58c2ec33c2012cb0a4a82d35f7d50f68"
  },
  {
    "url": "assets/js/105.1897256f.js",
    "revision": "1a8c7f27f9f35b0a3d4d4f3893749a31"
  },
  {
    "url": "assets/js/106.1e5a5757.js",
    "revision": "6986db704d59cc2fe48d2ea7d71aa963"
  },
  {
    "url": "assets/js/107.db22a1fb.js",
    "revision": "feab4d681cc7064b2cb10a181db7f26e"
  },
  {
    "url": "assets/js/108.4d162751.js",
    "revision": "c0d597d3286007480870e41ce6312fe5"
  },
  {
    "url": "assets/js/109.5a2efda2.js",
    "revision": "e8cf64abe8e7277fb66c7c88c9726aba"
  },
  {
    "url": "assets/js/11.72603a50.js",
    "revision": "b71f947024f85d9a4fc3e0614276005f"
  },
  {
    "url": "assets/js/110.6c52f9c3.js",
    "revision": "adc0cc840fb455c88faa1cbb9b27bb79"
  },
  {
    "url": "assets/js/111.f069054d.js",
    "revision": "8c2b6abdbf6fe5ba6eb383b7fd051963"
  },
  {
    "url": "assets/js/112.2659aa95.js",
    "revision": "0145bea88f3877bc6b0d5d4072392a54"
  },
  {
    "url": "assets/js/113.86e14856.js",
    "revision": "2b4b686fcd67b791647c713406403861"
  },
  {
    "url": "assets/js/114.8cefc519.js",
    "revision": "9ad0b49a790701ba47c24345e53b8761"
  },
  {
    "url": "assets/js/115.3b55f8d2.js",
    "revision": "fab52791fd8c74049d86d67c607c118d"
  },
  {
    "url": "assets/js/116.5167bbb4.js",
    "revision": "d45ce08b4d7c863820288c565ed1aca4"
  },
  {
    "url": "assets/js/117.1eb69a5a.js",
    "revision": "2bcb4f59ac396e1d0bfb48c9e069869d"
  },
  {
    "url": "assets/js/118.b26f26fa.js",
    "revision": "984a23e908cde7854201c286ab52bca2"
  },
  {
    "url": "assets/js/119.aebc2896.js",
    "revision": "d56701cbdaebb71cc510aacf3c09bdba"
  },
  {
    "url": "assets/js/12.61ee55d2.js",
    "revision": "311ed977f7fd6fbcea16d4583f594ab7"
  },
  {
    "url": "assets/js/120.aa97a6aa.js",
    "revision": "5b68a0cf9be36100178f47c2cc31b928"
  },
  {
    "url": "assets/js/121.a789feec.js",
    "revision": "e7afb7fdac0960f461ea5844ee0fa72a"
  },
  {
    "url": "assets/js/122.1127cd18.js",
    "revision": "8cb4e6571dc5121cc3d6844a82ddfb1c"
  },
  {
    "url": "assets/js/123.f2361a67.js",
    "revision": "be1dd6f5cf501ad321a472fba49c41ba"
  },
  {
    "url": "assets/js/124.86c399d8.js",
    "revision": "91047ac8fdf37fe8237cf9ed06457d23"
  },
  {
    "url": "assets/js/125.a4196986.js",
    "revision": "adbe70a25aaf32fbe99bb84600dc14dc"
  },
  {
    "url": "assets/js/126.4cf44d38.js",
    "revision": "952443499f6187150d6c08d597c152b9"
  },
  {
    "url": "assets/js/127.5561ad05.js",
    "revision": "c36f9947b12e23e01ac700eccf949912"
  },
  {
    "url": "assets/js/128.3f1122a6.js",
    "revision": "014d787fda57a419f3418dc04a77ddf7"
  },
  {
    "url": "assets/js/129.718f7a1b.js",
    "revision": "23429bf4b035a792208fbe6773526ea6"
  },
  {
    "url": "assets/js/13.220d4617.js",
    "revision": "85bd720c5d67dee12e110f9c2119d61d"
  },
  {
    "url": "assets/js/130.069e4469.js",
    "revision": "5bba1ac1c38debdd43ba60635a73fbbf"
  },
  {
    "url": "assets/js/131.1cfe85c3.js",
    "revision": "9d43a2cbda74b292e59ca7de2e095e8a"
  },
  {
    "url": "assets/js/132.31ce56f7.js",
    "revision": "5737c42cccadaa19d5f5ec49c53317a5"
  },
  {
    "url": "assets/js/133.58303890.js",
    "revision": "ee6432eea6b7f1e84151ba8431df79d6"
  },
  {
    "url": "assets/js/134.30403461.js",
    "revision": "8b48a7c59ab26a3a8232e2d6bb305fb7"
  },
  {
    "url": "assets/js/135.8725645a.js",
    "revision": "b18665a1e0b2403732b5e825cc494059"
  },
  {
    "url": "assets/js/136.1ac0aa35.js",
    "revision": "4b530d38b1ca0798b7137c0ad4bb0caa"
  },
  {
    "url": "assets/js/137.2419b032.js",
    "revision": "5c630ced81f2ddd01fbf98d95ac1cd34"
  },
  {
    "url": "assets/js/138.c99d79a3.js",
    "revision": "af1bc85795d799c27eef00f049709ea4"
  },
  {
    "url": "assets/js/139.a538fd83.js",
    "revision": "1c77c386bc3799383bc64be056266dfa"
  },
  {
    "url": "assets/js/14.7dd2dcf5.js",
    "revision": "dc970ddd94c2e7368576d9324b9c60c8"
  },
  {
    "url": "assets/js/140.c0a3078b.js",
    "revision": "75934b2f5d0da12462ae463e3639f284"
  },
  {
    "url": "assets/js/141.8b70e78a.js",
    "revision": "aefdfb4f86d773a4006f9140f349c399"
  },
  {
    "url": "assets/js/142.8c7a7118.js",
    "revision": "1c846adcc417b9a13e18c014a4af8941"
  },
  {
    "url": "assets/js/143.e5a11d7e.js",
    "revision": "4741241f9a8a1784736a142f8d4e02e9"
  },
  {
    "url": "assets/js/144.1ba54ea0.js",
    "revision": "96e3d502468a3faff0a84927b384b6ff"
  },
  {
    "url": "assets/js/145.71df4db4.js",
    "revision": "3b7371a2a32f973f4049d05752a6c6fd"
  },
  {
    "url": "assets/js/146.1a648851.js",
    "revision": "6e2a0e1f3dda412dafc2a78b75c8092d"
  },
  {
    "url": "assets/js/147.5be5d9a7.js",
    "revision": "3fd5ffe9017ee4c8cc41400c98109681"
  },
  {
    "url": "assets/js/148.a5a886ee.js",
    "revision": "a175066401f2cc498df100f7bd48ade3"
  },
  {
    "url": "assets/js/149.e07b4043.js",
    "revision": "c6cff2bae8bebd97282d103cd46a1c85"
  },
  {
    "url": "assets/js/15.d82e870b.js",
    "revision": "c4c936903e29729d0c9306a6af343d20"
  },
  {
    "url": "assets/js/150.5f2c8c79.js",
    "revision": "d857ae147e4d884f15391abf32145094"
  },
  {
    "url": "assets/js/151.e0deb65e.js",
    "revision": "e0e973da89698e1b3510fa9b63189164"
  },
  {
    "url": "assets/js/16.1e7e78fd.js",
    "revision": "507c0ae6a243199ab48b43baa9ed0447"
  },
  {
    "url": "assets/js/17.1a701b0e.js",
    "revision": "f30d295c50120c3ed092f21e6d53c0fc"
  },
  {
    "url": "assets/js/18.fad7b0c2.js",
    "revision": "ed76192979a7db9a23c1905b9b636b6c"
  },
  {
    "url": "assets/js/19.23f036dd.js",
    "revision": "3efb3da1f16560f4d97dc06f6b260159"
  },
  {
    "url": "assets/js/2.f7ad212a.js",
    "revision": "60260915ece09fd14bd96851643954b5"
  },
  {
    "url": "assets/js/20.ea341691.js",
    "revision": "5504b98c315b949307cbaf9569346e0f"
  },
  {
    "url": "assets/js/21.65b780ca.js",
    "revision": "b16115e95f07d28629fd773ce7d246f5"
  },
  {
    "url": "assets/js/22.ec986f22.js",
    "revision": "20f6917bf3255fcdb9cad94c143d332b"
  },
  {
    "url": "assets/js/23.e6cb285c.js",
    "revision": "759ce62ae08996bb9a93e04451807459"
  },
  {
    "url": "assets/js/24.bc2b5218.js",
    "revision": "4d94f858b794b66890d2670dee7e1fcb"
  },
  {
    "url": "assets/js/25.1ce5f66e.js",
    "revision": "2a379178766ab3589ebb7d05c54fbda8"
  },
  {
    "url": "assets/js/26.9e16a76d.js",
    "revision": "824b867e575f16f944e4133eb25352e0"
  },
  {
    "url": "assets/js/27.dc7f4970.js",
    "revision": "73bf80a701abad3716af2821a674b8a0"
  },
  {
    "url": "assets/js/28.8648766d.js",
    "revision": "f368811a71f7e77536fdb6510f677a5c"
  },
  {
    "url": "assets/js/29.bb62f7bf.js",
    "revision": "2fc03d949a721cc6248b41829f643055"
  },
  {
    "url": "assets/js/3.f95822d6.js",
    "revision": "7e1687c24a647aae4131a86132dfc49a"
  },
  {
    "url": "assets/js/30.f04fa841.js",
    "revision": "0f50191fa35262bf8f71ac87d0ba63fb"
  },
  {
    "url": "assets/js/31.7f1976cf.js",
    "revision": "968086c1d10af1c70c70b1725f3b5188"
  },
  {
    "url": "assets/js/32.f46ec976.js",
    "revision": "e0d7f9c00748bb5be8042a1c629dff51"
  },
  {
    "url": "assets/js/33.8874cee9.js",
    "revision": "315f4ce359baf774574c3adbc8da6331"
  },
  {
    "url": "assets/js/34.e85a96c4.js",
    "revision": "5878ff3efd965008a696676e631a14b6"
  },
  {
    "url": "assets/js/35.774d4e45.js",
    "revision": "40e4714acdf71eda00dd2174f4e399a9"
  },
  {
    "url": "assets/js/36.67cc3285.js",
    "revision": "1f21fe29f85d575eadcc20ad75efeb04"
  },
  {
    "url": "assets/js/37.36a56da2.js",
    "revision": "85caa5644d4fb8a8f8852511d56c8241"
  },
  {
    "url": "assets/js/38.d236b058.js",
    "revision": "851b379f35b9f4bdc6d0c03481055e0e"
  },
  {
    "url": "assets/js/39.db89f9f3.js",
    "revision": "b7b2b49f64cf4ce29e55eb34eda1a8be"
  },
  {
    "url": "assets/js/4.6e2c4845.js",
    "revision": "1c612c3b9e453d16b007f6af2a54ee38"
  },
  {
    "url": "assets/js/40.f8e77a73.js",
    "revision": "498bf03609622b5aa7fa175da9fff67a"
  },
  {
    "url": "assets/js/41.55919398.js",
    "revision": "4d16528b1c075c039d2b34f5916bdbab"
  },
  {
    "url": "assets/js/42.ec037adc.js",
    "revision": "0dc6effa6432b887963942e798d82caa"
  },
  {
    "url": "assets/js/43.aa8f31b6.js",
    "revision": "c5dcf5de4a88f92dbadd635126841d16"
  },
  {
    "url": "assets/js/44.39f45ec2.js",
    "revision": "7a02c8c4ea6b72b6ab406b0dd1d5b9bc"
  },
  {
    "url": "assets/js/45.66a936c1.js",
    "revision": "0da11daa7f0e057bf1e2de13936f9498"
  },
  {
    "url": "assets/js/46.201b788b.js",
    "revision": "de8f8b25ef4a3968a62a9dabcc82dfb0"
  },
  {
    "url": "assets/js/47.b29bc367.js",
    "revision": "c9fd2c7d93a29144e68db6b91981379d"
  },
  {
    "url": "assets/js/48.479277f9.js",
    "revision": "4650959108046314716e586a2a9b5cdc"
  },
  {
    "url": "assets/js/49.4bb86b21.js",
    "revision": "e3207fa3c3a37a6f7334a38fd4068d36"
  },
  {
    "url": "assets/js/5.c32d3110.js",
    "revision": "5e7b29bd3e6b29b4da60bb0827b62f00"
  },
  {
    "url": "assets/js/50.e32a0b84.js",
    "revision": "e378dca07bf5710a2b22efd29defa770"
  },
  {
    "url": "assets/js/51.68e4cc1e.js",
    "revision": "07dab5b6539ef55a02bd0e4242b21e90"
  },
  {
    "url": "assets/js/52.0fb4c987.js",
    "revision": "f3878f61ad3ac473fda7b42625fcf03f"
  },
  {
    "url": "assets/js/53.52e9f1ff.js",
    "revision": "ed24b73e49e77eafc50047b4d479c5ff"
  },
  {
    "url": "assets/js/54.ccd47afa.js",
    "revision": "94250507203093f1601cb5688e84ef61"
  },
  {
    "url": "assets/js/55.01d4fa20.js",
    "revision": "fa1d44b9cd6f1c7759c72fe2ee57c17e"
  },
  {
    "url": "assets/js/56.2ec5aca8.js",
    "revision": "9f79b295521a84318d74a805c9bf1ead"
  },
  {
    "url": "assets/js/57.f8730b8c.js",
    "revision": "d39ec8d4c2fdf162d17cce127987d590"
  },
  {
    "url": "assets/js/58.d13c61f3.js",
    "revision": "000dcad7fb67afd0f8728685e9444064"
  },
  {
    "url": "assets/js/59.ad5a06ed.js",
    "revision": "8546f6a773bdf8b502b3288c473cc55c"
  },
  {
    "url": "assets/js/6.3fefeb43.js",
    "revision": "b5f9b11c0d56c65b0190a8f8e0a78027"
  },
  {
    "url": "assets/js/60.a252663f.js",
    "revision": "95959735b3633594dd5d899ff8993cb3"
  },
  {
    "url": "assets/js/61.ad871543.js",
    "revision": "387a6bcc28daf75bd408e644ca1b8f84"
  },
  {
    "url": "assets/js/62.e2391ab2.js",
    "revision": "84b25e965a0229127d052cb0a827d435"
  },
  {
    "url": "assets/js/63.81e4c16d.js",
    "revision": "bfa50c3594ce5af41aa37f5424602912"
  },
  {
    "url": "assets/js/64.5bfb160b.js",
    "revision": "a22eb50c68aadfa96171fb6afd917b9d"
  },
  {
    "url": "assets/js/65.ae2ac6eb.js",
    "revision": "21bc9b499d0c767ba3ea993bb6ec680c"
  },
  {
    "url": "assets/js/66.c080f8a8.js",
    "revision": "84ddd40bc5c3537d7727c38304d7a732"
  },
  {
    "url": "assets/js/67.dc05df4b.js",
    "revision": "60bd0c74f06789f79589b1c04f50f6f3"
  },
  {
    "url": "assets/js/68.2afbe7d0.js",
    "revision": "544b8811da2aa0e63d5e5fe6c6ff1ed6"
  },
  {
    "url": "assets/js/69.0133d101.js",
    "revision": "e51ea5a2a8003fccd31b1dafec29cb9c"
  },
  {
    "url": "assets/js/7.ca6231da.js",
    "revision": "225b30651e50ada25ec6c68c5ec3ef18"
  },
  {
    "url": "assets/js/70.97ff0cbd.js",
    "revision": "cbaa7172a41722a11c99dc0fe7a89f23"
  },
  {
    "url": "assets/js/71.e1cb82dc.js",
    "revision": "9dd6fa62f7b281e6d67f3441e691be9c"
  },
  {
    "url": "assets/js/72.de09a8c6.js",
    "revision": "cbe99ad1cf6eebc4890e2bd9aa8b1471"
  },
  {
    "url": "assets/js/73.cf0fe61a.js",
    "revision": "7e0255b3f72d9209ac7b8c0329ed1522"
  },
  {
    "url": "assets/js/74.6cd42d30.js",
    "revision": "0c434cbdd24a35c73bd77acd4e2ae2db"
  },
  {
    "url": "assets/js/75.1bd254d5.js",
    "revision": "0af470f7e30863a2e719020276cfd36e"
  },
  {
    "url": "assets/js/76.4fdd178b.js",
    "revision": "5c500d1b29f70b1b45be7f71d42abce1"
  },
  {
    "url": "assets/js/77.39f6037d.js",
    "revision": "86e233c389b600957c154027535606aa"
  },
  {
    "url": "assets/js/78.6957ddc2.js",
    "revision": "914b744b37daf1c43d406b00454fd59e"
  },
  {
    "url": "assets/js/79.5b9d4042.js",
    "revision": "e4772bc81639ad8dacaf24bf06677b7c"
  },
  {
    "url": "assets/js/8.4ba7fc1d.js",
    "revision": "3f24f296b7ac965a07706715fe4c8f61"
  },
  {
    "url": "assets/js/80.1b76450e.js",
    "revision": "5e2d586b9b1832f77a499c1be14eaef8"
  },
  {
    "url": "assets/js/81.8177d898.js",
    "revision": "1c1f9db08e9022b4ba3d3d85b33ac933"
  },
  {
    "url": "assets/js/82.f6fccbe6.js",
    "revision": "4dde7efb8159810599532abf32efc7d0"
  },
  {
    "url": "assets/js/83.435e4ec3.js",
    "revision": "047dc7e749df4f298613689d2764b81a"
  },
  {
    "url": "assets/js/84.ccdd7b53.js",
    "revision": "25337f4ee293195b35aebd1f8d74e995"
  },
  {
    "url": "assets/js/85.1c36701f.js",
    "revision": "c654ddd5f9b9b9b7ac1e36e4dd08e71c"
  },
  {
    "url": "assets/js/86.2d7b0414.js",
    "revision": "f7b1202b1aa35b0136afb60b40765a47"
  },
  {
    "url": "assets/js/87.c157af3d.js",
    "revision": "f15f0f7e8f844553b24ae9f6433e2d76"
  },
  {
    "url": "assets/js/88.56f68f3d.js",
    "revision": "4561078854a41f34252ddf2576c14894"
  },
  {
    "url": "assets/js/89.3240d870.js",
    "revision": "b7622b7a2965289f279414079e979c9a"
  },
  {
    "url": "assets/js/9.c78014a6.js",
    "revision": "a39f0086cfbbf05507ae6d849fcd9b64"
  },
  {
    "url": "assets/js/90.9b2ae9b7.js",
    "revision": "dde1fa2f8826955d8de85fccbe3b83b6"
  },
  {
    "url": "assets/js/91.832315f8.js",
    "revision": "1fb136aa086fe72b239b9709dab5bd56"
  },
  {
    "url": "assets/js/92.ad24a91d.js",
    "revision": "d6d8843fd2b1877e82c57af0ea8a31b2"
  },
  {
    "url": "assets/js/93.c7a8ab31.js",
    "revision": "afb5d08ca0f9c65638c95b71f3fc385e"
  },
  {
    "url": "assets/js/94.bcd5cbea.js",
    "revision": "3300cb99e5ef72d7c607bb03e00c89ee"
  },
  {
    "url": "assets/js/95.7382c15e.js",
    "revision": "e78fa04da59af5ba9d68e3ea53ef6550"
  },
  {
    "url": "assets/js/96.8b2c7d38.js",
    "revision": "20db374cb4d895c0b931385b5015c113"
  },
  {
    "url": "assets/js/97.7024a669.js",
    "revision": "cd98bbe6e117e8f3bb129fb686dbf2da"
  },
  {
    "url": "assets/js/98.03ddfafa.js",
    "revision": "02efc6178ce31ec9ee55a9d8e09f0dfa"
  },
  {
    "url": "assets/js/99.858d2687.js",
    "revision": "b4a35f2df2d864930f3206cf4e4d8a13"
  },
  {
    "url": "assets/js/app.fc906c0f.js",
    "revision": "79f4ff889b53284031f79025bb609691"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "2865dff10464adfc6a4b945203adf891"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "9d565607d654e1854775b138ac8ca1f3"
  },
  {
    "url": "friends/index.html",
    "revision": "a6f9b2199f6f33d665359f37d3c9bd82"
  },
  {
    "url": "guide/index.html",
    "revision": "697386824e51a759fd4c7e8b5ba4cd48"
  },
  {
    "url": "index.html",
    "revision": "3b7b6897b199e3789f7063c4d592a5b9"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "a7263d004be0cc1a322807373ae57be7"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "c768c804878817458467f279ea3965d7"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "32298e552916ce8726eb6a365f430499"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "29e7702025a684e8e2f0acb724c379f2"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "2d2fa9421681923d9150afdb8a69b32d"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "bebf12b3e40ee7ee79a40a720bb6078e"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "702a640b0e62297f3714dfb9c7bed9bd"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "542d10af2ec15f8a5035ceb1ed1371a3"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "dbc833b17203a5daf3ae6c5a6f34856f"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "444871c71ff17bb4800ab8a88fcdfad7"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "fc6117f5c75d649bbb9c73f2f21e8d15"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "f130aa02ff0a143e1d3a952f1260c462"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "3f29fd07e759d9ede2f7327886c397fe"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "841f45b5ad290624a9038c80a0d64f59"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "de7dc23c3c0a7960be93571a7fd129c0"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "fe6059d9a6315cc200a48a374d4e34d0"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "127355e67109688afa16bf25f33eb486"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "5700b1c293e46aaba3e61814ab8f4f3c"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "9d352c5e165122111f3e935824349155"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "c6141c9193ce0fbcc6a2b551afd92708"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "c7f376e657588552ba1b3cccb3b4519a"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "c2695de99a5cebd1af14169c224ea02d"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "dc2c27b13cac4ab9136277f1258cabf5"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "60fc14fbf69ab443249a35148a87b13f"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "778f35b0925c84cac9f9c047ca6897cb"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "61eec1b8912a79db8beb62db3fdb6f74"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "8725fca07344961668bc6e262c9c7f69"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "755421e5006cd3c31732bab442cc56b2"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "34bdf526256e396c5f8d53860ce4cea4"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "2cf728950e17fd32fb7e87d6007f2182"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "c63423578d12354232e1611293df3033"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "c72d81b49c722e9a88609f1542e6a053"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "94ca4ae56841695d32bcbfd998922b12"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "1a0f2e9a27817a0bea1596a59e33141c"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "de5980c58f9a73206624fa3335ea0ba9"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "761369186e6d9380149dadd3e7cf0507"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "a92458e72caf0ae6a7e1be804dbfaca8"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "a5e0771ba457b5cd4cbc9e7e8c72b61a"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "566067590a4f89dcf1a36fd90379b5dd"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "b917457e4c58bde64bad586c30b6a97f"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "a451997ad6d90364b2f2c4fbc8ca6678"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "d7e894403b771524e64df880baa13766"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "f85444a42a02e08ca14981235627c5ea"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "bbf2be407dfe824de520a6e63b8c890e"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "78ba0def160dbef98256ea0b06f545c3"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "01a8f9619bc25b286559f2aae32fce49"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "4be7ba00bccd30cd029eda510755d68b"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "3d9faa8f956152a372281e9c9e368489"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "8158d3afa38f92a67870c744187d40e0"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "26475b8fe0177678782de9fcf048f914"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "68eda356bd8dd16cc3895548c54d8235"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "77eb2c95c3d9c7f402d360be009d94e2"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "5a2af814fa7561fdbd7df80f252af05d"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "4f97912d56efeddf487b8fe5bec5f8f9"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "69998b5c44a34252ccf95bef2f371c72"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "e054b03d5d2051b651e96d058080de2e"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "d41116d2447bc3331e773cc2b1622d7b"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "f3fad96b9c686d1d8633c9b8ad453f70"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "cf6dd382274ae9588f38b7541a179f62"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "954b5ea92c080dd8fd7ef4719480cdce"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "25cdc8b81e853e1a203ecfe6e3470e8b"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "60f1fa6edef2d8160cc766f1f11c695c"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "f7b4239e6116de96b2c95a4d0f9bf2f8"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "b1dd863239c6abdbc653c644c873f933"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "996628c61469f9f21286f46e6f3c0a56"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "856a7cfd34ce0f9cfd3c62bc4fab0edc"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "d72445c29404667db2a81ca41dcca1f3"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "7e38f2d498e4fbb633429e36102bfc70"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "a19642850d5abd0a52a3422e6560422c"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "daee13aeb0ac30a0bbd616edcd2dba07"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "0345bf264d1948264f39ca9aa62cc7b8"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "d6a11a8173e296710fcabc986c570275"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "6314f445c2f9fd40dc9ab1abfac16209"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "5e2bf738f1b7df4d88bb52535e40ae0f"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "04faca05a551a4f3cc4127b4923d4fb9"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "ab25fcee441f6e38dc8e9acae380e7e1"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "cdf401bc086d3929d404ca172272fe0f"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "41b45628f9aa617b00139494f7d9f574"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "eb1677a0f10eeb9742d5a1384af956d7"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "c09a4e6b1f68d216f94cef6b8ff276b4"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "0c6d18788036ebb73424594355142886"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "2bb54fe22b40ef5dd62e57787cc7544e"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "a7f81dc68ab3aa9f6bf54875264ff694"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "c123f64ef3c71c151400534282c4b647"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "4f43b2825a6a2fa36a63ba66e85054b8"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "8c20f460908aa201eb0bc7997b11268c"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "51dcf5e8a2ae1fdf46ca669557dc51a2"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "3bde4c886bc3497cc8d3a10816b0eef4"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "659428e4d64ee02984fc4f3f3f3560be"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "dd7878081cf867bb50b0fcd2d8837d2b"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "5da79996fa9f69fdaaa7f69ed8f4d35c"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "bb044c5c22fd92e6609e87c3e24c3e9f"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "4f25541dae7b14e4aaed98d24086818c"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "499701e303ad7e433256634b79c06575"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "edd4d606cf0566d61a757af9d91d9b64"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "54497f0d0358e4fe110473f97fdb7b41"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "eb9b64a987df796bd0683c7eeefa4ed0"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "3250a1afd005a418e764ba6887d6ba5e"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "cf7c8c1c261cb854e47a9b862bd4d1ef"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "3f9e511732cd57b9342bbc04d6431584"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "fefc572a07ee80177a693470b962f484"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "4d0181009a146001de63b8c2ae9cf1ba"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "4d97d02690d0b7aca3c1fc5e645e8ab5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "9db66dc8abb51f238d4b0afc15ca8d27"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "e26888d4ebf4b48dbaa00f97f7e3de67"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "3cd6807467488475b593ecc825abe2a3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "8b7450e0d5452f10d063c9538728696a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "557be521fa1c4a51ea5b2b2a9aa31679"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "4f21a015e48b11aa487591a020a72fcb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "52dca3eb9a53d5554cff22ec812ed813"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "7fdd6ee5140b70714c02689021b4fc02"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "97e7d52d8893fefbc689d7aa4d472175"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "e185ff3c445bc25ea1f0d6309d8a0151"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "4d28cc887fe434f6c1edcd5134b5c460"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "91cbd23d7911ca6149ebd2abecd29ee3"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "83948ed29edd5a294b06b850218df613"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "cc63a5d2e175a65e95ed98dc328d34d5"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "ee41728365af0f3c029c415f922406b1"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "109020713cd94a3dc88940a92294e378"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "45126e6a65fef10905a4061053b6a4b4"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "17772ff7c1a202413940d11178b177a6"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "9feca12b26b7d39d5090108b3f5667c6"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "1360e9ba2c5d6d87433a995e46d75793"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "41dd26af892e2062ea63c41002b81315"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "d710daed8da4242da4eefcafe032afb7"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "43792a80644d7799898f83718c32246b"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "329475f188051e557ccc5502930f132f"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "69271aabc5358ad015b8309c694f8a66"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "7cf628da6cda8fe9fcd41efc9571b87c"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "9c351aa204ca72aaaad7c65fa7ac2b91"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "2b92894aa59999bfcbb87d35b96122e1"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "14224eaae748b6498e8290563cf46204"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "54e765e0eae29581e8cdbacadb2e22b8"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "08dae1f1adfbf76a274d5fde4401a9c8"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "acb1e4bcee54a5655b751b387099f1e3"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "4be162dec3e11150ee64c051f0ada6f4"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "eff03efe602ba08652713459d212fc76"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "f6d5a719d11c1b453f0b79594a5b97e9"
  },
  {
    "url": "together/index.html",
    "revision": "0a4e2c1b6ab34207875a361a770d8bfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
