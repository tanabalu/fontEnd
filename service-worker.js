if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-a3b6cda6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2cc7328b.css",revision:"3fc5aad59eae0ddadfb4347c94339c07"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/131.7d1b4c0e.js",revision:"a1cc80e8401ca4d7880b2875c5410f47"},{url:"assets/js/132.7aa2db1e.js",revision:"6745b2250363aaafcee091ff09a80214"},{url:"assets/js/133.72075d73.js",revision:"d70b9cd73e18a81e64f88fa1275c4318"},{url:"assets/js/134.1893049f.js",revision:"38d77f6f25f5aeea1ac85f2077e5ca6e"},{url:"assets/js/135.52278a05.js",revision:"fe5ff22c18d23191072458418475d681"},{url:"assets/js/app.16bb9ca5.js",revision:"f69b2cd1942442012c75ec2c85b22ca8"},{url:"assets/js/layout-Blog.edbcb42f.js",revision:"c3af3cba5af5d56cf7816c18e33b1d71"},{url:"assets/js/layout-Layout.8693f67d.js",revision:"3a2bc81498eedbd9d3c8e72e20055232"},{url:"assets/js/layout-NotFound.40d48033.js",revision:"6ae02932508eaee0db16b8013efe8a4a"},{url:"assets/js/layout-Slide.f03a8ed6.js",revision:"e71a692470a387d957f82c9c9608b83d"},{url:"assets/js/page-apply和call.8189c714.js",revision:"6ec1bb0a603ac0ad6f90cd5f8880548f"},{url:"assets/js/page-babel原理.700ffdf3.js",revision:"73806a32117f4976509f6254120a5c2f"},{url:"assets/js/page-BFC.092ae860.js",revision:"0f7f7320852c1c27fc53495f1d6c8d47"},{url:"assets/js/page-bind的实现.d7432bb1.js",revision:"7a9043bf0f1b5d80ef4f602c851ab8b7"},{url:"assets/js/page-cluster原理.c9c8b9da.js",revision:"b49cb98130fa05b29474446b3e2f9f8e"},{url:"assets/js/page-computed和watch.e647626e.js",revision:"7b4a6951f3aca35fc394007fd9596b52"},{url:"assets/js/page-CSS.879a34d0.js",revision:"17d2bb3cd79162ed1caf33245b46ab62"},{url:"assets/js/page-CSS性能优化.3d3a166b.js",revision:"1003333cb54fd9e42d5c09875c3c82a3"},{url:"assets/js/page-CSS新特性.ff59fb04.js",revision:"f32a4a22f5fb88c5269ecfbf6d7464a5"},{url:"assets/js/page-CSS样式隔离.59724566.js",revision:"dd30a4721c867f4ecf865b7ce19a394e"},{url:"assets/js/page-CSS选择器及优先级.88ab2916.js",revision:"f3da9a9cdfd72cf003e48de0c3b86b1a"},{url:"assets/js/page-data函数.253ac56b.js",revision:"b355f35a55c372a9e6c7a618dcf4f517"},{url:"assets/js/page-div垂直居中.64e71066.js",revision:"16fecbef45a645c37769c74585862c77"},{url:"assets/js/page-DOM树.f57c6894.js",revision:"e978179c7ba8193ff9c97d6535adfb31"},{url:"assets/js/page-fiber.f753b29d.js",revision:"68307787563bc72f9e97aa28a1b2d53e"},{url:"assets/js/page-flex布局.59ad07ad.js",revision:"e6232d12c68e29fecccd01cce1dbf1fb"},{url:"assets/js/page-generator原理.8e96784d.js",revision:"75d37fb7df11d057bc4cce55757b5f17"},{url:"assets/js/page-history和hash两种路由.e0ce095c.js",revision:"ff7dcb21f73d193df128b4e91f93783d"},{url:"assets/js/page-HTML.f8ba15e1.js",revision:"3799e9dc5be0eaf3485f93695e2944b8"},{url:"assets/js/page-http.331c8abb.js",revision:"c1d54d68c480c3a761756f0074cf91e6"},{url:"assets/js/page-http20.086c94db.js",revision:"f72bcc6934c83b970d5f82007dd056ec"},{url:"assets/js/page-http30.74c559b5.js",revision:"51828fbdafeffb5e4efb8456e5cb29fc"},{url:"assets/js/page-https.271677a9.js",revision:"8938dac49bf05554f8d5e93f9da66bf7"},{url:"assets/js/page-IntroPage.a4692c5a.js",revision:"8db0f9def183e524bff4421aab332c97"},{url:"assets/js/page-IO多路复用.21eca37b.js",revision:"2802c75b84bd2fc598c08bad08a61249"},{url:"assets/js/page-Javascript.0f4c60fa.js",revision:"e77e1b3893301d6cc165949703de68ba"},{url:"assets/js/page-keepalive.761fb296.js",revision:"60b7bf80a0d6d0cc65f7653c03974c34"},{url:"assets/js/page-Markdown增强.04e4bcd3.js",revision:"54833553fb56572ecad95c0485743254"},{url:"assets/js/page-MVC.d44a568b.js",revision:"92df5c342cedd150c4d439138500f47a"},{url:"assets/js/page-MVP.168207cd.js",revision:"379b41291a29b781947dd6698b96eefc"},{url:"assets/js/page-MVVM.ad6a2f22.js",revision:"eaaed637f230bf0ac7222b763c1c6789"},{url:"assets/js/page-new操作符.a7482162.js",revision:"fe8554d971d81b5c7b661c9d5f92ac38"},{url:"assets/js/page-nexttick原理.9c69bcbb.js",revision:"e18ae54717e99217afe663e5cbc1022c"},{url:"assets/js/page-Node.23ec478b.js",revision:"89d342dba29112cf71c904b49ed5d27b"},{url:"assets/js/page-pipe原理.77cf0609.js",revision:"aa4b7d1f3b74a6bce8731e70477998b0"},{url:"assets/js/page-position.b2d6f4ee.js",revision:"109333b130c0f6998c60c1d350475212"},{url:"assets/js/page-promise原理.0afda245.js",revision:"ca2d5ee56b86544773e86e81c6536553"},{url:"assets/js/page-React.bef7c8f1.js",revision:"43ad26e940c09ad1e3fda22339037c24"},{url:"assets/js/page-Redux.be374f40.js",revision:"656948a31ee00e05cd6fd977c1968c39"},{url:"assets/js/page-redux核心原则.dbcf99f2.js",revision:"0a32bd33986e522ce149b291d0ea9aa9"},{url:"assets/js/page-redux核心逻辑.03356c57.js",revision:"c1afb1910f04848d7570726fe651d08e"},{url:"assets/js/page-require原理.e115f3e7.js",revision:"944a79a8ce7a21a462be612d761d025c"},{url:"assets/js/page-setState过程.a9cc40c0.js",revision:"1825457253b5cd0c5689dbfcca762112"},{url:"assets/js/page-slot.da359739.js",revision:"808306d5c2e2bd993c63c2f31b275d9e"},{url:"assets/js/page-tcp.879d2208.js",revision:"9de5245639b7c03014d0c697b2e58117"},{url:"assets/js/page-this的指向.fd2f0190.js",revision:"ae57dd72c5a862b9a498a757549851fd"},{url:"assets/js/page-treeshaking.9ed8c049.js",revision:"155294903ba043919d8e7a4cf70f86c7"},{url:"assets/js/page-udp.c7c659ef.js",revision:"d55b8953912ae1c556f39289314c9a8f"},{url:"assets/js/page-uglify原理.f8fbdf44.js",revision:"458bd1f17d3d61b15821b1d81817fabe"},{url:"assets/js/page-v8垃圾回收机制.324743a7.js",revision:"f3c560e46d8ec9f3031f41018f787077"},{url:"assets/js/page-virtualdom.2107becd.js",revision:"23681989243524bde680e15a0f9ae517"},{url:"assets/js/page-Vue.98aa34cd.js",revision:"d1d021691b8829cb55af95a5f4acfd6d"},{url:"assets/js/page-webpack.7a5121a8.js",revision:"c59e75f48d546af1eb886e8802c435ca"},{url:"assets/js/page-webpackloader机制.b1addc7d.js",revision:"b6d9493202e8ffc857a41a3d24a11801"},{url:"assets/js/page-websocket.6fad302d.js",revision:"b6f5da2479779d2b90577801d5befef3"},{url:"assets/js/page-七层网络模型.e5f3032c.js",revision:"eb690e8f9dda44f2c5de641de4ca5831"},{url:"assets/js/page-事件循环.27b968a0.js",revision:"e27a29178dcbecbc464fe6fefbf0c323"},{url:"assets/js/page-事件循环机制.d084fae8.js",revision:"6b77dead34698d1328b7cf96a24cfe58"},{url:"assets/js/page-事件模型.85ee8be8.js",revision:"08df81608fed946f5e57a06979fb6709"},{url:"assets/js/page-从输入URL到浏览器渲染的全过程.9265c7ec.js",revision:"25470425df9ded7f825be3f573d928a3"},{url:"assets/js/page-作用域.64ff03f2.js",revision:"4fa92b8fd5124f26bc5c676c3c96f876"},{url:"assets/js/page-其他.2e728895.js",revision:"1abdc9624976c2bc07c04d541ad83eeb"},{url:"assets/js/page-内存泄漏.28bc9fe0.js",revision:"6546c88f558468fbdd4b1d11d8526dbf"},{url:"assets/js/page-前端微服务.e74340bb.js",revision:"7ed1d4f763115fea35c06d338a15049c"},{url:"assets/js/page-前端性能优化手段.c2557317.js",revision:"600cd64fd5105fbaaa59a99539428001"},{url:"assets/js/page-前端性能优化指标RAIL.4126cd06.js",revision:"3a368478a4369b9b52a9d7acb459f550"},{url:"assets/js/page-功能介绍.44004f79.js",revision:"8d741911349e8a5513b1e49c89a238a5"},{url:"assets/js/page-动画性能.d5d6eaa0.js",revision:"116a30923e226ce41805c92353539d43"},{url:"assets/js/page-博客主页.2b3853d8.js",revision:"e378c5a016c37ebef1500d167042f467"},{url:"assets/js/page-原型链.b98c392f.js",revision:"66959e9c1716530dd09fea69afe81157"},{url:"assets/js/page-变量提升.7a04204a.js",revision:"c2ef3de065466c2dcbdf7cf4fc5dcedb"},{url:"assets/js/page-合成事件.3a26fb59.js",revision:"5528793322c159abc6920d78a3fef3fc"},{url:"assets/js/page-圣杯双飞翼布局.097c9030.js",revision:"e0eddcf6e22c92f336219a025138e214"},{url:"assets/js/page-大量图片加载优化.01077230.js",revision:"7ece01865d224da000a97afb1b4a26bd"},{url:"assets/js/page-守护进程.0972013f.js",revision:"2bb19b6337e65d88c40d952c1aabe87d"},{url:"assets/js/page-密码加密的文章.dcf5c1d7.js",revision:"cc11ce570675d7c08aac57b892627b1c"},{url:"assets/js/page-层叠上下文.9c2523e5.js",revision:"5741ec415d72ec35475e5e02dbbc3bd4"},{url:"assets/js/page-工程化.f2ca0ff2.js",revision:"749f3f7e2588ac5f826509169ad48d56"},{url:"assets/js/page-常用设计模式.06d247e5.js",revision:"6850ce6a5bb2c9f079b5857b3f3aef9b"},{url:"assets/js/page-幻灯片页.717a413c.js",revision:"c6b64db14929d5943384d4d62576aa33"},{url:"assets/js/page-异常处理.b04b5681.js",revision:"653d36b0e86672dd74d1d669cef37a5e"},{url:"assets/js/page-性能.aa4c5da1.js",revision:"a5836e17b84ee9b0e995ffdc85124012"},{url:"assets/js/page-性能优化.543b3fe2.js",revision:"ad6a7aa8737e5a216e78bbe1c51f9a55"},{url:"assets/js/page-操作系统.cb121ca4.js",revision:"35ea69b541dde61fc0ebd005fe8fed24"},{url:"assets/js/page-数据类型判断.643be1b0.js",revision:"9f47cae83f42cb7dbf49b43c0218c5d3"},{url:"assets/js/page-数据绑定原理.e088ac0b.js",revision:"8094dac73c53c09bf8765248d31aca5d"},{url:"assets/js/page-柯里化.223a3ecf.js",revision:"96982b6d4c99bb7a9ebe4223238040ee"},{url:"assets/js/page-样式隔离.3bd34f2e.js",revision:"8173a96e92fdc34cd6e1352d1ec37cc3"},{url:"assets/js/page-模块化机制.2c42bb7f.js",revision:"841c222a8edc1c914ff9a62bdc9fa757"},{url:"assets/js/page-模块机制.90b90d96.js",revision:"01239ad8e50b138a1348a8ab98dff211"},{url:"assets/js/page-死锁.b1bf85ec.js",revision:"1f1aa64a789822029c44e653c04bcc39"},{url:"assets/js/page-每日学习.c4698432.js",revision:"d7a86a0f690cd9471db24ad544124e12"},{url:"assets/js/page-流机制.8a7f005c.js",revision:"c77b735ebcbf3cf7abaabf494f03fb7e"},{url:"assets/js/page-浏览器架构.01a67222.js",revision:"5bb87a98ecd86b35212931057784a892"},{url:"assets/js/page-浏览器运行原理.88455a75.js",revision:"33185bed2a705cd9718b2ddff6be1c03"},{url:"assets/js/page-浮动.6fd55bc1.js",revision:"54f26bb56d03f3f67dd5710d85b402fd"},{url:"assets/js/page-浮点数精度.d55e8904.js",revision:"1ad9581ed6cdae569320257f9e2b099e"},{url:"assets/js/page-渲染合成层.91741d7e.js",revision:"cc1b0c6d06fea021cee4408e49dffa05"},{url:"assets/js/page-白屏.d90f65dc.js",revision:"65dc1b7d5b89309f9e05343e33d60738"},{url:"assets/js/page-盒子模型.f9aad738.js",revision:"afc11546d4369613d631755576ed0ca7"},{url:"assets/js/page-立即执行函数.70544d01.js",revision:"10b84e7fbc67c611b6a626c5aa9ac8a9"},{url:"assets/js/page-组件禁用.79ee7147.js",revision:"fcc6cf1183abf81e2f1e75383092ce9d"},{url:"assets/js/page-继承.bebcc613.js",revision:"7a0c84c7ec9671f404769849104b37af"},{url:"assets/js/page-缓存策略.8d801136.js",revision:"1ba2ed6cbf37c85b68f3f0c45767c921"},{url:"assets/js/page-网络.561330f1.js",revision:"94bda3702ade618b0ebf4d41a3fbd5e4"},{url:"assets/js/page-设计模式.081d1450.js",revision:"ebf3973d86909c3a1b7666573b6dda8b"},{url:"assets/js/page-跨域.82ae5f7e.js",revision:"895d98f47e56989e69760d49e65475ef"},{url:"assets/js/page-跨标签页通信.db778e6e.js",revision:"f511569dc0aeff4b78b5d92c83211374"},{url:"assets/js/page-进程与线程.e4881aeb.js",revision:"7f5e444e1714e79e3818738261387cee"},{url:"assets/js/page-进程调度策略.2163ba82.js",revision:"7b4e8e12922f4311b94917859a85a983"},{url:"assets/js/page-进程通信.abb96792.js",revision:"5d5ef429b1039f117524aebb9c47d390"},{url:"assets/js/page-重构.01533a66.js",revision:"b3223526eb668798f0e2592a026bef76"},{url:"assets/js/page-重绘和重排.17ac4ce0.js",revision:"5fc46a1908b75fd55fb8e50ca6d44444"},{url:"assets/js/page-错误处理.bfc44c86.js",revision:"bb375dd79327796fbc9e37f68aa0f215"},{url:"assets/js/page-闭包.2964bd6a.js",revision:"9448edcee9e091bc43519fcc986770a1"},{url:"assets/js/page-页面配置.f488bf0e.js",revision:"db039615633efa12bf3b927af7d01205"},{url:"assets/js/page-项目主页.46c147d3.js",revision:"93fa4a22cce49733cf02a79c209efa6e"},{url:"assets/js/page-高阶组件.bb451b9b.js",revision:"915b8454f49e81a5b4777d311fd78f9d"},{url:"assets/js/vendors~flowchart.ad7c23f1.js",revision:"a6a0c7c7de01b330c7ae73b67e07a148"},{url:"assets/js/vendors~layout-Blog~layout-Layout.b56de0ea.js",revision:"a5e56676e1cc814df897b6b0ff201863"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.568b53c3.js",revision:"5f4ed5e3bb303d79e5527de4fc86d0c5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.cf1dbb0b.js",revision:"16cd575776dff09c50c4d5059c8ebd23"},{url:"assets/js/vendors~photo-swipe.2ed0b7e4.js",revision:"01f83b9edcada9bd677d87403e557194"},{url:"assets/js/vendors~reveal.83b271ce.js",revision:"e189591eb44502da06a3b26c8b46a851"},{url:"assets/js/vendors~valine.8704f47a.js",revision:"4abdb182538267f11817b801ab899140"},{url:"logo.svg",revision:"c1cc507c5ecf9ef91f5bc8e94d15f94e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"9d86ac7eed884f3371632f93de7cf449"},{url:"article/index.html",revision:"84ccc6fed994d1562aba1b29df514af8"},{url:"category/index.html",revision:"a458d573b68e1bed8fcd38e4027d57fd"},{url:"category/使用指南/index.html",revision:"f389970d96cc45eb4960ab3b08aa6351"},{url:"css/BFC/index.html",revision:"6c9601ba70c434ecd0c4602d5a5749d1"},{url:"css/box/index.html",revision:"2b321d69965274eb8492e6540d740142"},{url:"css/center/index.html",revision:"15cc3a52f54be9e6ff95ca8027bc2816"},{url:"css/context/index.html",revision:"abb768fc2ee2c0db5b0140a873a39681"},{url:"css/flex/index.html",revision:"98c7163036d7001f07a8c24e13d4dad6"},{url:"css/float/index.html",revision:"85a43c054634d89b327adda9eea8ae3a"},{url:"css/index.html",revision:"f2efb3c9a3bf2a3e240c18bedde1a907"},{url:"css/layout/index.html",revision:"f836ffff3de4fd030c30970650b19741"},{url:"css/module/index.html",revision:"d7fedc9a3a2e01d2bac2785b60698725"},{url:"css/newFeatures/index.html",revision:"b1e518660698d0e75f918a1444d59e0f"},{url:"css/performance/index.html",revision:"957a889e820129904d12faf32cc90c90"},{url:"css/position/index.html",revision:"42b6c8385ba57c1201a52feaac2e0722"},{url:"css/selector/index.html",revision:"4f5e6b4352625c49c43b108f8ac98244"},{url:"designMode/common/index.html",revision:"09fd4ac59d00df135a6eb9be7b53be6d"},{url:"designMode/index.html",revision:"f26b73a762bfcd669a62cb6db6af200a"},{url:"designMode/MVC/index.html",revision:"b085f21452130be3dca96b90fe90d670"},{url:"designMode/MVP/index.html",revision:"b6af6119efa941559883367de37ebc43"},{url:"designMode/MVVM/index.html",revision:"af1dbd702b11631e0cacd4fd7f26aff9"},{url:"designMode/reconstitution/index.html",revision:"71d78a3b4c6f8a14bb6ad50d08f8a293"},{url:"encrypt/index.html",revision:"8a834b0d61a7eeaaafc84e7a2522afd9"},{url:"engineering/babel/index.html",revision:"d8ea145cefacd83fbfe36561e5d5307a"},{url:"engineering/index.html",revision:"8fe3ddf793113fcd6cb6ecde90a8be4b"},{url:"engineering/loader/index.html",revision:"444444c15219315d1adf1975562ada09"},{url:"engineering/microService/index.html",revision:"66e5e30c4884f7ca2c5d6323c383ea0e"},{url:"engineering/module/index.html",revision:"e9933f516a9cf5100aec125fde5fd45d"},{url:"engineering/treeShaking/index.html",revision:"7b6e7defd56629a8f063cb391ed13f88"},{url:"engineering/uglify/index.html",revision:"e73de3924c494c40751a3186c4903c5b"},{url:"engineering/webpack/index.html",revision:"864f678990bcbed655505d2730895e80"},{url:"guide/disable/index.html",revision:"1f9b46c7e169dd62f5a96d7eeacc9c34"},{url:"guide/encrypt/index.html",revision:"26d6f230d8fc77d71c01ed586b4c034e"},{url:"guide/index.html",revision:"956bb24f9d956a76a2849e03a25950da"},{url:"guide/markdown/index.html",revision:"aeca38a3c8f47f8ebdfbcd965506c812"},{url:"guide/page/index.html",revision:"bab6eabf40b7302c15f4edc59f5cc653"},{url:"home/index.html",revision:"87373b149386eb42cd4d4d8737402f8c"},{url:"html/browserArchitecture/index.html",revision:"57b88d70f309d7ac3081c8bbbd4ccfd9"},{url:"html/browserRun/index.html",revision:"2fae2853b79fabc5275fde7835617a1a"},{url:"html/cache/index.html",revision:"c9fd6bfda14c4a49cdfe2f25d298ab94"},{url:"html/communication/index.html",revision:"76609e6bdb746e86a8243bef8c8d51d9"},{url:"html/DOM/index.html",revision:"a73055fbab11fa7332fa1f0df3505f28"},{url:"html/event/index.html",revision:"d68155cc0265bee2be10faddb5e03250"},{url:"html/index.html",revision:"13d094cab7c7451e5752b7e430a4b677"},{url:"html/memory/index.html",revision:"c2a9af5397f190c6f000799aaed8cec5"},{url:"html/router/index.html",revision:"f6e91ed944f1c0ea444b4bc28e9ae2c0"},{url:"index.html",revision:"4ad1bc408dd055f170fa9642d250da76"},{url:"intro/index.html",revision:"0ff2572b447bfacaf3c51dd77afb63f4"},{url:"javascript/bind/index.html",revision:"2108f60973c51ecb504426c7032577a8"},{url:"javascript/call/index.html",revision:"7ca8e3b8cec26dbf050675bf4879c2c9"},{url:"javascript/closure/index.html",revision:"ba370f52fda3a64920c1effaa5e71efa"},{url:"javascript/cross/index.html",revision:"7e878d92711e41c34b0edd766e1d3088"},{url:"javascript/currie/index.html",revision:"ac0f411d2bd6f829f1806137ef8ee44a"},{url:"javascript/executedImmediately/index.html",revision:"421351dfa7049be12aed3f68181bcf03"},{url:"javascript/extends/index.html",revision:"5e7eb2fac27a5591b9f45baf4cb413b6"},{url:"javascript/float/index.html",revision:"3c23023fbf94cc76008250c6b09cbc16"},{url:"javascript/generator/index.html",revision:"23cad498d36fcb1dcbdda09be8015b83"},{url:"javascript/index.html",revision:"9a8f6b262959a49aa03350bfd3b5358b"},{url:"javascript/loop/index.html",revision:"bcf9ec8c34d5ae69bf5a32ba1ddc9942"},{url:"javascript/new/index.html",revision:"8ece1c3f6467d81b1d0a216830fbb223"},{url:"javascript/promise/index.html",revision:"0ee2784c00eddafab43ec980650836c0"},{url:"javascript/prototype/index.html",revision:"656e18a29557e99e477dda7a8c03a76c"},{url:"javascript/scope/index.html",revision:"a493301fc9b6c9d60ab63e4e1b0bb7c0"},{url:"javascript/this/index.html",revision:"ee50ef0d9d7956dd73882c3e29f5e051"},{url:"javascript/typeof/index.html",revision:"265adf83169869d9b2c2016bf82950d0"},{url:"javascript/v8/index.html",revision:"54a0df6427956055392d27e7536090f0"},{url:"javascript/variableAscension/index.html",revision:"ea4084bd89819f7b0374a8ba52903069"},{url:"learning/index.html",revision:"e1977ee81b4f7e4ef0887b9aaf4b6d56"},{url:"network/http/index.html",revision:"106c683d0419808abb8a47e1e05aefdc"},{url:"network/http2.0/index.html",revision:"d4a375bd57c845a1074e58f962d334cd"},{url:"network/http3.0/index.html",revision:"49135e48f3e918c53187a8a802d5e59a"},{url:"network/https/index.html",revision:"8266750f653ac72ed91302b8e224bdc9"},{url:"network/index.html",revision:"46c2de3d8217371a45ffe39eb62cee7d"},{url:"network/model/index.html",revision:"d73b2939c9d4162237cb90bedd2c1ecb"},{url:"network/tcp/index.html",revision:"547ff0941744d752397edbc6584867ac"},{url:"network/udp/index.html",revision:"e5d36a1de4e56b39b379dfa1d7d91969"},{url:"network/websocket/index.html",revision:"1a0c037109050fbd702fa91b7f0dd34d"},{url:"node/catch/index.html",revision:"170869efe14b352328612dcce20114a7"},{url:"node/cluster/index.html",revision:"dd9a3b4c16a6adbb7c4b8e35206478c6"},{url:"node/communication/index.html",revision:"a16998983365d4e0b3539079a62b618e"},{url:"node/index.html",revision:"cc7e0df322e105c04794b2df8c23c309"},{url:"node/loop/index.html",revision:"faa02333ee5146bc7bf432ba66983f97"},{url:"node/module/index.html",revision:"1c86e1e554093fed3f4d2848322830f7"},{url:"node/pipe/index.html",revision:"0d72231e787ba49f728f0a34d0ec8770"},{url:"node/provide/index.html",revision:"d715ac6e88bb6be4e53c049b7f0dd717"},{url:"node/require/index.html",revision:"7dd5968a073364ebc6c003a7dc049b2b"},{url:"node/stream/index.html",revision:"1092364f10c5ff6991b18f23ae952685"},{url:"others/index.html",revision:"f4881bcf9fdf04fec02ed00f10981af3"},{url:"performance/animation/index.html",revision:"7567fce7da30e808e0206932b4e0bdab"},{url:"performance/hang/index.html",revision:"788e312bbbd046b5274fe3fd17346fe3"},{url:"performance/images/index.html",revision:"df17bbff5248854fd6e5581cbbfbe78e"},{url:"performance/index.html",revision:"aaa203818103effb31905c5c31b120f7"},{url:"performance/indicator/index.html",revision:"28c4a0afb1393df538c9edd62d251827"},{url:"performance/optimize/index.html",revision:"cb4f45d0305a01331358b40ed57876ff"},{url:"performance/redraw/index.html",revision:"cd9af2678b043aa2002596ac0f4cb141"},{url:"performance/render/index.html",revision:"62c045c94f20a3e9da73c77269745b34"},{url:"performance/url/index.html",revision:"11cc48994ba314a6cdd622fa646718a2"},{url:"react/error/index.html",revision:"91b0fd2b65f94d96b14f9f99116484f1"},{url:"react/fiber/index.html",revision:"386172d68f36abf6531e694f1ac7761b"},{url:"react/HOC/index.html",revision:"8de67a738bb2500e25dc1993aaf7484f"},{url:"react/index.html",revision:"35a019cf3ba82fd1e76d351abd0ef744"},{url:"react/performance/index.html",revision:"d93a89ce87ab8428e1a5e0f1b8f1fd01"},{url:"react/setState/index.html",revision:"6a77510f34886450a32b025dee99c558"},{url:"react/synthetic/index.html",revision:"19ac85dccbc75ecc25b116abfe8c3ddd"},{url:"react/VDom/index.html",revision:"a2a6149c35b0dbf5711288b74be53f9d"},{url:"redux/index.html",revision:"b0e54369a9133e95daef5736f0f82f41"},{url:"redux/logic/index.html",revision:"c96938a06c1deff412533e10a46444b9"},{url:"redux/rule/index.html",revision:"57267ee90a49fae8a78477597e4979a9"},{url:"slide/index.html",revision:"12cb02ac2223dcac24077c99b8be9f30"},{url:"slides/index.html",revision:"627ef2bc052b2c61e260b9551dc440e4"},{url:"star/index.html",revision:"e92dd45f797d3aac7cef0f349cf35352"},{url:"system/communication/index.html",revision:"499ad66daeb56f58c3cefb9d1b4d5fa5"},{url:"system/index.html",revision:"8f2355a291168cc2fd79ae8ad135177c"},{url:"system/io/index.html",revision:"a800833b835b0eb79b1045dd684faef2"},{url:"system/lock/index.html",revision:"5971325b36e62ff3ab88b4b3ad17bd7b"},{url:"system/process/index.html",revision:"0f8fafb25871b371e405feacec4a583c"},{url:"system/schedule/index.html",revision:"390e8aa6dfe113b6346b5cdb8255d893"},{url:"tag/index.html",revision:"62efa30a8380602d6bc7d405369427e3"},{url:"tag/markdown/index.html",revision:"1890097208dd98263822658f78be1c69"},{url:"tag/使用指南/index.html",revision:"d1cec7141fc3bd8882a52962755ce0cf"},{url:"tag/文章加密/index.html",revision:"2b8a401bd11aa88d68bb2cc569cc3090"},{url:"tag/页面配置/index.html",revision:"eaab62dc51eaaa9dc018982362cd9a04"},{url:"timeline/index.html",revision:"774e28afe5e6ebeac0892db3b7a694d7"},{url:"vue/bind/index.html",revision:"1b04b4370cad0bf319630592e681b519"},{url:"vue/computed/index.html",revision:"08d1888f1a01a4fbc958dba9da3c85f9"},{url:"vue/css/index.html",revision:"d4717e497d87463d00e28701edc32a5f"},{url:"vue/data/index.html",revision:"82464af2a343c5d8491392bef0fad5f9"},{url:"vue/index.html",revision:"b43187b295407e3b5af685381c3bc9ae"},{url:"vue/keepAlive/index.html",revision:"a0d9eb287d6afc51ca67cd77e5451522"},{url:"vue/nextTick/index.html",revision:"2150e0ad2053ca3d36d184065421edef"},{url:"vue/slot/index.html",revision:"96386dabd016c7680bd3445e4d2f01f5"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
