if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const l=e=>a(e,i),f={module:{uri:i},exports:t,require:l};s[i]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(d(...e),t)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-07f52ecd.js",revision:"51b6185ce59e2eabf0d087fb8c591ebc"},{url:"assets/404.html-0ca2a31a.js",revision:"2786af8eb907cad66c0f74a51f9caca0"},{url:"assets/antivirus-software.html-320e604a.js",revision:"456fdc66bd1e0f43e2937494299be085"},{url:"assets/antivirus-software.html-340f072f.js",revision:"2d3c11de7d64e99a56b24c5186cc24fd"},{url:"assets/antivirus-software.html-35ca1cf7.js",revision:"0cabbf6a56d8c7296ad0f98a356db75a"},{url:"assets/antivirus-software.html-c26ae637.js",revision:"dd5d83058cb77da8d001839348f5f723"},{url:"assets/antivirus-software.html-ca20671a.js",revision:"c1c7edb94f7d4301232d4b003e92fa84"},{url:"assets/antivirus-software.html-eac6b1c7.js",revision:"3a987e46bcfb94d5f9c5c478eef39b73"},{url:"assets/app-6dedea65.js",revision:"b3152c0de15c3934b236a27dae16b3eb"},{url:"assets/auto-bcb4bc66.js",revision:"d3c605e64297b8c2d062b1df82ede13e"},{url:"assets/background-play.html-0f6ab822.js",revision:"4c2032d32173d3c7270d1851ffce9de9"},{url:"assets/background-play.html-a94a7232.js",revision:"00566f6db47c703881b2954e7ce45896"},{url:"assets/backup.html-1100724a.js",revision:"fd5bd3fe415f3ae212c6f68cc853b11f"},{url:"assets/backup.html-1b51b236.js",revision:"ffccd03738c3c00a2c6036f9a22c202d"},{url:"assets/backup.html-4cf22a8d.js",revision:"d9913fe9232e58b1d97b897f29201ff2"},{url:"assets/backup.html-53b4fdf7.js",revision:"fd5bd3fe415f3ae212c6f68cc853b11f"},{url:"assets/backup.html-7ffa38f9.js",revision:"48bd00c8f5095c938eab03d030b4d025"},{url:"assets/backup.html-ceb6bad6.js",revision:"78dacf677b0c30c55bcc55ba0e1b751d"},{url:"assets/cannot-connect-internet.html-1a111e1a.js",revision:"7e3aeee48cf3bd120845436d08bc9da9"},{url:"assets/cannot-connect-internet.html-b34d196c.js",revision:"625304f5fe8777a67855dab9e79eca7a"},{url:"assets/cannot-connect-internet.html-b97be07e.js",revision:"625304f5fe8777a67855dab9e79eca7a"},{url:"assets/cannot-connect-internet.html-dedab909.js",revision:"de154f37102331815a139855b7721d45"},{url:"assets/cannot-download.html-49e88305.js",revision:"79c2145f87f64668a45b7bf320576b05"},{url:"assets/cannot-download.html-50d43e37.js",revision:"27e2fdb96f57767ef445f905e922efb6"},{url:"assets/cannot-download.html-9f8b57d5.js",revision:"097af40bc9ca1d1864a3ed7ee8de4d5d"},{url:"assets/cannot-download.html-c6d3d8ff.js",revision:"19773c0a00333769e326defa4eb4e353"},{url:"assets/cannot-play.html-212765db.js",revision:"ce429038d832d117eabdd671093802e1"},{url:"assets/cannot-play.html-4d591a10.js",revision:"dc99b9398dbf69646117ce2d3dce7b76"},{url:"assets/cannot-play.html-7c5ace0b.js",revision:"0239fcb4ddabb73c2e61aee39196d7a5"},{url:"assets/cannot-play.html-7e58cba5.js",revision:"229c802133f17fa18f56fd3640bb0914"},{url:"assets/cannot-update.html-1c47e836.js",revision:"61378ce0e091ec3b8572bb83ec2b2d02"},{url:"assets/cannot-update.html-471764b5.js",revision:"7d1f1380abd8988c3f329524a9d10c44"},{url:"assets/change-list-position.html-403ebd5f.js",revision:"57f93a110c6b684909d062ce609c0870"},{url:"assets/change-list-position.html-63a5b3a5.js",revision:"57f93a110c6b684909d062ce609c0870"},{url:"assets/change-list-position.html-8aa8acd4.js",revision:"d29e902b65ab1736518096a5925d48ea"},{url:"assets/change-list-position.html-fec55b07.js",revision:"b84418f92e2553b3f46196ac6816bac5"},{url:"assets/changLog.html-00352ed8.js",revision:"5e2c76aa49ca2c48a5a736a5b401ec96"},{url:"assets/changLog.html-64cb05b0.js",revision:"11261d4bb108fe960220bee31c25b748"},{url:"assets/custom-source.html-0fd1587e.js",revision:"e4d9c22d8627267db7957fd6590ef371"},{url:"assets/custom-source.html-a5491482.js",revision:"3a871030d7ba78d9dda8c3abe1c843ed"},{url:"assets/data-path.html-01d6ad96.js",revision:"8f2fcb23e3bcbf1b16578995cf726fe2"},{url:"assets/data-path.html-7c93fc0c.js",revision:"73d366d8c7a5e78a03565d5388428a93"},{url:"assets/data-path.html-86911c4e.js",revision:"178d8b0b53e7c06cdc09ff5fd72ba457"},{url:"assets/data-path.html-b5c4254d.js",revision:"88b822b0dec9a14c3f63de9ff960ab2f"},{url:"assets/db-info.html-5fe4d475.js",revision:"4a04115b922a478fdd5723a919f5a10e"},{url:"assets/db-info.html-eea1fb7d.js",revision:"d57238418761e5ef22f382397c633d6d"},{url:"assets/desktop-lyric.html-27e70e5a.js",revision:"276db65b0d9b1cf18a4e9bbb7d914658"},{url:"assets/desktop-lyric.html-5714faf1.js",revision:"6e8b878db80aba8d1eda0a5b89a38274"},{url:"assets/desktop-lyric.html-7b149379.js",revision:"38d23dec1072d3c0ca6a372e8dba1b51"},{url:"assets/desktop-lyric.html-826474ae.js",revision:"276db65b0d9b1cf18a4e9bbb7d914658"},{url:"assets/desktop-lyric.html-b7f36bf3.js",revision:"a1b1804cd384e386a63aee1ecc60bfdd"},{url:"assets/desktop-lyric.html-efadc2d2.js",revision:"d5776381d102b7f108d6666a34d8adc9"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-bcad4379.js",revision:"b10aa964b423e0d9f8785abe266b4f02"},{url:"assets/headphones-turn-off-unexpectedly.html-44a18eca.js",revision:"555222961b1093b0de93b69435f62b8f"},{url:"assets/headphones-turn-off-unexpectedly.html-6d4cdcd3.js",revision:"4aad164cf4c65cdd76c3573bf0fa0fde"},{url:"assets/headphones-turn-off-unexpectedly.html-8ac9300a.js",revision:"555222961b1093b0de93b69435f62b8f"},{url:"assets/headphones-turn-off-unexpectedly.html-a3edecd6.js",revision:"ca334f4070eebe859c780b6318b109a5"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/hotkey.html-88522317.js",revision:"b2a251780b6d46a6b8377d5693e28c9d"},{url:"assets/hotkey.html-ae36c226.js",revision:"7eea23dd6016ce042612411ceaccafe3"},{url:"assets/index-63dde3cb.js",revision:"cf73d511c31e580c9bb87294dc39f270"},{url:"assets/index.html-33bf0053.js",revision:"8f64ecc17fbb054ac523aa7ee48a19e4"},{url:"assets/index.html-49ab38bf.js",revision:"83afb1dbbe30af7f1736826724318df7"},{url:"assets/index.html-5db6f1f3.js",revision:"ef84227134552640ab7b58a41332bbee"},{url:"assets/index.html-6e723686.js",revision:"6c691c70b3f0a2620df2d87474441c7a"},{url:"assets/index.html-7017c649.js",revision:"28c1f7349d83ad94e9eda0def1e5e381"},{url:"assets/index.html-74bab16f.js",revision:"30446251054194830befe0826ca02686"},{url:"assets/index.html-7c5beaef.js",revision:"66562c5642afabd925cb704fc0ad01a6"},{url:"assets/index.html-9e3b51ed.js",revision:"c3ef21793fd30acac2de9dd4ffbe94c6"},{url:"assets/index.html-aca63ca5.js",revision:"42d555a7bf47626c207f98b4079cebee"},{url:"assets/index.html-b1bfc2f5.js",revision:"6fbb310a767081aec916b82fbec93bac"},{url:"assets/index.html-ca335153.js",revision:"592ae006e4f26ea27e59bc9af2ce7cf0"},{url:"assets/index.html-d68040b5.js",revision:"20d0d9123400d80203889352e73d4bd5"},{url:"assets/index.html-dec4a522.js",revision:"1374b0ca6575c32cf41f5bb4d08004ab"},{url:"assets/index.html-ec3ed2c2.js",revision:"c55242ad935b80e0e0b5b1164b68a849"},{url:"assets/index.html-f1b75bd9.js",revision:"ed0d6e322b58f28fdec0f28677f12c09"},{url:"assets/index.html-f82e3db9.js",revision:"ccb70a115cc325e4fd5aa48e80a2ce2c"},{url:"assets/install-failed.html-1dc7b3fa.js",revision:"607bbafdcced28658873dd04cbc78d95"},{url:"assets/install-failed.html-9f7305b8.js",revision:"988645151328bbc786c60b590cdfc766"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/license.html-28215966.js",revision:"05b82da0486d64d03b2e632ecd7b7f89"},{url:"assets/license.html-3bf9e12d.js",revision:"55a7d79539230c3f0b4680dfe80b9a00"},{url:"assets/license.html-64753927.js",revision:"3ba226a0e5311383f022f2d33bc01e3b"},{url:"assets/license.html-eaceaa3a.js",revision:"425d64e9a39baa5d8145af4cff0b87ba"},{url:"assets/linux.html-266b55be.js",revision:"17f5322b0bf0ef474a94658a2428e623"},{url:"assets/linux.html-b81a1cbb.js",revision:"02b93a9503a3b5c0449387917e5968b4"},{url:"assets/list-multiple-selection.html-0fbda068.js",revision:"87badaafeff77d96870ae19138dba48a"},{url:"assets/list-multiple-selection.html-4d45f240.js",revision:"9746612602aaa9586b2cf562038f09d2"},{url:"assets/list-multiple-selection.html-8407ea86.js",revision:"d3f36bb891e533ee90cedb61a161661a"},{url:"assets/list-multiple-selection.html-8f165ef3.js",revision:"4771126d88960294385b712fa506020c"},{url:"assets/list-multiple-selection.html-b62fce49.js",revision:"9e55f484713cb17b2f96e15ebab05922"},{url:"assets/list-multiple-selection.html-db671905.js",revision:"9746612602aaa9586b2cf562038f09d2"},{url:"assets/list-play-all.html-0ba994b4.js",revision:"261c9f55500d39260a832647ba662093"},{url:"assets/list-play-all.html-47aae449.js",revision:"d486ec08c847b19570b730055e29e8b9"},{url:"assets/list-play-all.html-8f54074c.js",revision:"58518f941e34cc92ea5184bcd625fb89"},{url:"assets/list-play-all.html-9172347f.js",revision:"b8af9777062c7443095d868bd58f7470"},{url:"assets/list-play-all.html-a71b2fc8.js",revision:"f9438a31c2c301352feb81fefce3b6b7"},{url:"assets/list-play-all.html-e4ff01ba.js",revision:"d486ec08c847b19570b730055e29e8b9"},{url:"assets/localMusic.html-416752b7.js",revision:"98e1dfcc455cd52dc93bdaac2ced91e7"},{url:"assets/localMusic.html-8b791ea6.js",revision:"040aae63fe1aa96400938542ef83ee2a"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-d6dffa3f.js",revision:"ebdd4aa6b3c0bf792c787129dd5c0f79"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/open-songlist.html-0399f9f2.js",revision:"923bf723f2d790af480e81d497087dca"},{url:"assets/open-songlist.html-0d62c389.js",revision:"3c7b835ba3768073c940d7ad928e9220"},{url:"assets/open-songlist.html-1e50afb2.js",revision:"30f2d5fd565f00748cb2fd0164178ed6"},{url:"assets/open-songlist.html-893931f3.js",revision:"33a13d3bb2b6ed8c458f6fd2d5980228"},{url:"assets/open-songlist.html-a61ee6c3.js",revision:"46fbdf4365237c7c766372c5b57da055"},{url:"assets/open-songlist.html-d71f09dc.js",revision:"98c0f0aca2187fac876670db3e2c26ec"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/playlist.html-141f17e9.js",revision:"486fce2833175b105f7194ef3806cefc"},{url:"assets/playlist.html-16b1f71b.js",revision:"cc8ae4d7dc2e9e2fb9d01d7a97a30a83"},{url:"assets/playlist.html-2e529d5f.js",revision:"486fce2833175b105f7194ef3806cefc"},{url:"assets/playlist.html-9dad89aa.js",revision:"d59cf3f1a09e9027fce7e16b70676926"},{url:"assets/playlist.html-a61d9de4.js",revision:"5a7d020c22bc876e02a5077eec9fd257"},{url:"assets/playlist.html-d833c9b4.js",revision:"065bd66a1ae2ade57bf1a64a266f10db"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/revise-dns-host.html-3d8ed96a.js",revision:"d51feb23797e4551c68fcf54cc0e17bf"},{url:"assets/revise-dns-host.html-64f88e23.js",revision:"bd6c8f55f4b41596231d0fa185c39294"},{url:"assets/revise-dns-host.html-8780e264.js",revision:"d8957b6b715b3d9a7bbd0889198a5fee"},{url:"assets/revise-dns-host.html-c6bbe4be.js",revision:"34d706289196acf6f416e74b1ee74b57"},{url:"assets/run-params.html-305cb017.js",revision:"7491cfb9c753e2bcda8baf4981b60b0e"},{url:"assets/run-params.html-94542ed5.js",revision:"63183d6af4475dd6a22587a279a7d4f0"},{url:"assets/scheme-url.html-ad52045e.js",revision:"984cc18a6882b7cc04e116daa405e7c6"},{url:"assets/scheme-url.html-e96ad393.js",revision:"cb11b32563519bda7efcd416a0d22633"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html-c237de0e.js",revision:"323041d088f7a1f0465da9814bda3073"},{url:"assets/slides.html-f9748966.js",revision:"44aaf1cd9a2f8a917a974b8ea9b47cc9"},{url:"assets/songlist-update.html-38025c53.js",revision:"3b05b4102869a3478630c40a4af4927e"},{url:"assets/songlist-update.html-3fefc722.js",revision:"39a9f22490be1bf9f36f302da534ccd0"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/statusbar-lyric.html-042ffa70.js",revision:"a94af6970739f9cf0ef7c309c073177b"},{url:"assets/statusbar-lyric.html-dfcd6622.js",revision:"6494dc7741080f49edb966a2da176086"},{url:"assets/style-52ccf0ce.css",revision:"1244faf048edfd604ac0baee13f02eea"},{url:"assets/sync.html-1e7fd78e.js",revision:"63b034a6d02b7a0a5fef2d0eb725cf96"},{url:"assets/sync.html-3bc2a107.js",revision:"0c856ad75ad82901ee64a920de5cce01"},{url:"assets/sync.html-54bcdaab.js",revision:"c81baa3b9e96bf3e81e1022bf514caf7"},{url:"assets/sync.html-a65a1095.js",revision:"d578096477c31c8f5fa615032fc60f14"},{url:"assets/sync.html-ca72fc97.js",revision:"06fac41fa9503d4db9fe093b8263aded"},{url:"assets/sync.html-ff17f938.js",revision:"c53c9fded941ac3332272bd9b6ab2aa3"},{url:"assets/update.html-456c0f33.js",revision:"8d2f843ad445e54739a73d7c5341e288"},{url:"assets/update.html-e57c43f4.js",revision:"be3d071697312bfc096efc35c94b04a0"},{url:"assets/use-source.html-6aba1ec1.js",revision:"1a191c47ddbeb0948df147c1bfd9dd95"},{url:"assets/use-source.html-72f66c01.js",revision:"9fb717d4e9007380d127d55f8ae829bf"},{url:"assets/use-source.html-a055a0d1.js",revision:"3f52e58a0c5d10cc7b0ae8c4ca849ec1"},{url:"assets/use-source.html-a9433b3c.js",revision:"0a4d2c46459d5840928eb613fe85488e"},{url:"assets/use-source.html-b43b17a6.js",revision:"99f8b5e56c64e945d2907a97c40b9508"},{url:"assets/use-source.html-dc135de1.js",revision:"3807293dbc8cb758503cceed22bff7c6"},{url:"assets/velocity-text.html-5ec9294b.js",revision:"6c208a1db22133007e5a1330e1540f5a"},{url:"assets/velocity-text.html-9d339560.js",revision:"1aa09fe5853cb46610b8d47b3b475250"},{url:"assets/velocity-text.html-b4abe377.js",revision:"1c2177c5069a9608d2fd6af5df8fa496"},{url:"assets/velocity-text.html-ea1f4eef.js",revision:"a98cfe5264d59198ed835bebea45ee47"},{url:"assets/vue-repl-fc8cb36f.js",revision:"8666cd35e863f68228cf167ae4fa9672"},{url:"assets/VuePlayground-cf9b3bcc.js",revision:"2bd220e3c9660218b619d40858378084"},{url:"assets/win10-11.html-78eb5e17.js",revision:"42b36da9006079ac5b58fbc5c9879553"},{url:"assets/win10-11.html-d0e213c0.js",revision:"1fab8def7749db8a3997391463f56c00"},{url:"assets/win7.html-19fd9296.js",revision:"3cce424ab774e58b70e6b4098a8fe920"},{url:"assets/win7.html-acd400b2.js",revision:"57b236be9fe221e02ffea5349033f16a"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"f6a10557d1ba7d6c1215f9c859eabf84"},{url:"desktop/document/data-path.html",revision:"5a16eb5aeb40892aab4d142f18b5511b"},{url:"desktop/document/diy-source/custom-source.html",revision:"871f100e6d48202aa7f7cb2a10396939"},{url:"desktop/document/diy-source/use-source.html",revision:"0c970d410b543626dd80692550c5e5f5"},{url:"desktop/document/hotkey.html",revision:"b16151e7f726c326b4c17a6ef4598d37"},{url:"desktop/document/index.html",revision:"ccb58c2ba8b38e18abee21f8d9b9ca37"},{url:"desktop/document/install/cannot-update.html",revision:"2924d98226068d46b4774097db11d38a"},{url:"desktop/document/install/install-failed.html",revision:"b8b54a681cf8e4670fd90ad630486cb0"},{url:"desktop/document/license.html",revision:"631a1c6b0c717c2c4715edf38a5bd263"},{url:"desktop/document/list/change-list-position.html",revision:"3d07f9c5c69f62a9d7886c8df1a09a69"},{url:"desktop/document/list/list-multiple-selection.html",revision:"c02edbddafc7aa1d737b5dc562f93b50"},{url:"desktop/document/list/list-play-all.html",revision:"8bfb4ac438234028f71414b9ac3c2c3a"},{url:"desktop/document/list/open-songlist.html",revision:"e2dd24e5ede056cea1756abfcf16c366"},{url:"desktop/document/list/playlist.html",revision:"1121ededd265c402089e9cbe81a0177e"},{url:"desktop/document/lyric/desktop-lyric.html",revision:"52436006b5667c307b561c604ca57018"},{url:"desktop/document/lyric/velocity-text.html",revision:"bb57117d9a714a8ed4a8716d6eca0d9b"},{url:"desktop/document/other/antivirus-software.html",revision:"9928f39a62e325135f465a0498dd6d89"},{url:"desktop/document/other/cannot-connect-internet.html",revision:"49845a25cfa9f2ce41ba7bf1f5befcbc"},{url:"desktop/document/other/headphones-turn-off-unexpectedly.html",revision:"9d7c25eb38b26a8afab94b1310cf6cfd"},{url:"desktop/document/play-download/cannot-download.html",revision:"c6de565c2af8096ccde5a5c72a17759d"},{url:"desktop/document/play-download/cannot-play.html",revision:"113c06c38436c895da96c856899f4b2d"},{url:"desktop/document/play-download/revise-dns-host.html",revision:"e53d42db91e81170abda339cd4b1f2cb"},{url:"desktop/document/run-params.html",revision:"a14abc6064277c84dcf1720540f958eb"},{url:"desktop/document/scheme-url.html",revision:"c32e824bc8fee9d8ac646fbd77e9cd99"},{url:"desktop/document/screen-abnormal/linux.html",revision:"2816d7108c0bb6e84175cc13135168c5"},{url:"desktop/document/screen-abnormal/win10-11.html",revision:"438d2573543d76b01b4a063f4ec13120"},{url:"desktop/document/screen-abnormal/win7.html",revision:"bbca5e07524fd6abe073598a31cc37e0"},{url:"desktop/document/sync-backup/backup.html",revision:"6acef5377d7d25ba69d0bcd3ae751ab0"},{url:"desktop/document/sync-backup/sync.html",revision:"7d5d95dcda4d494a047a008f7256d6cc"},{url:"desktop/document/use-source.html",revision:"1b34fb387c2625a6add12796f2009575"},{url:"desktop/document/v2/changLog.html",revision:"c1b7bb19aa59c4c4ce214a4f09849ee3"},{url:"desktop/document/v2/db-info.html",revision:"d673272dd765f645246c0d2455c3dcef"},{url:"desktop/document/v2/index.html",revision:"51c61a8c9891515c21035eee6569b5ab"},{url:"desktop/document/v2/list/change-list-position.html",revision:"19d7baa09c737254f2b469333eca675a"},{url:"desktop/document/v2/list/list-multiple-selection.html",revision:"c7b6ea9c39b0ff03a9d6faf1898dcefa"},{url:"desktop/document/v2/list/list-play-all.html",revision:"34c42305c965529891a76e02cd335d0f"},{url:"desktop/document/v2/list/open-songlist.html",revision:"2471d269d384a094e98eddfabad4fdc2"},{url:"desktop/document/v2/list/playlist.html",revision:"8e289a30da3d8298ca79f3271f41e872"},{url:"desktop/document/v2/localMusic.html",revision:"895fcfb95d4910db019bb321a51ba67b"},{url:"desktop/document/v2/lyric/desktop-lyric.html",revision:"c2d9ef64e05e3050ebac888a455a6f96"},{url:"desktop/document/v2/lyric/velocity-text.html",revision:"0d72b1c02710d0d1a149769eb47334e0"},{url:"desktop/document/v2/other/antivirus-software.html",revision:"066c6b07da6c63cd684bab20d21ba471"},{url:"desktop/document/v2/other/cannot-connect-internet.html",revision:"e13e29429e2b95ec6b328982f1b11409"},{url:"desktop/document/v2/other/headphones-turn-off-unexpectedly.html",revision:"3c9d857327a2449acf8c00ffd2a0879f"},{url:"desktop/document/v2/sync-backup/backup.html",revision:"8bdbbb6582729aeb30ec4983130ea203"},{url:"desktop/document/v2/sync-backup/sync.html",revision:"eb4a129552e99a12d0bd65294b33e08c"},{url:"desktop/index.html",revision:"865b2d8eaf352d480fb201aa967e1861"},{url:"download/index.html",revision:"90681f1213bd611da687d37e1deb48b0"},{url:"index.html",revision:"61dd08e411816b74d14c647da1d37ac3"},{url:"mobile/document/data-path.html",revision:"718925deee844531bb970153dbcfc819"},{url:"mobile/document/index.html",revision:"fb54e380fc2350e14f64123a0b682124"},{url:"mobile/document/license.html",revision:"67ce549bbd594c6121652c0ad7e0109c"},{url:"mobile/document/list-songlist/list-multiple-selection.html",revision:"61d05553c741298768a158c9fad1abed"},{url:"mobile/document/list-songlist/list-play-all.html",revision:"43e2a8117d97800e7590bbd65d7e6ec1"},{url:"mobile/document/list-songlist/open-songlist.html",revision:"81d44f14681c27388c2a75de7f86b5aa"},{url:"mobile/document/list-songlist/playlist.html",revision:"56030bdf60223466a0ee8708620376d9"},{url:"mobile/document/list-songlist/songlist-update.html",revision:"ae1089b0f6f0c9c8feeefc47023f68ea"},{url:"mobile/document/other/antivirus-software.html",revision:"05359746e331ef1217608a9c1315dd47"},{url:"mobile/document/other/desktop-lyric.html",revision:"ecf94dfa1da65429b2b87f58b79d86ca"},{url:"mobile/document/play-download/background-play.html",revision:"53fa0c50fd53bf968bfcc4c473db5dc3"},{url:"mobile/document/play-download/cannot-download.html",revision:"029fba178e327fc464f7005eef66956d"},{url:"mobile/document/play-download/cannot-play.html",revision:"f8d8a0b325a6445e978f1d9b2e9d471e"},{url:"mobile/document/play-download/revise-dns-host.html",revision:"627731c79473654c27f6fd502913bcb0"},{url:"mobile/document/statusbar-lyric.html",revision:"d6497c9bfdbab434d32e5c0bfe5e4d24"},{url:"mobile/document/sync-backup/backup.html",revision:"2f241b716eb30a0e349c1c87987c0029"},{url:"mobile/document/sync-backup/sync.html",revision:"9b8d6ff7c9b42c551f0ec8fead046578"},{url:"mobile/document/update.html",revision:"4dd3fdad484f89c8688f4c9f8d35d223"},{url:"mobile/document/use-source.html",revision:"188b585e56eff8bf5ffe902bf01e8c8c"},{url:"mobile/index.html",revision:"c083ebac65d69e391a010d84e921d704"},{url:"report/index.html",revision:"6ca8517c8d3ca638554d59c62526fb7a"},{url:"slides.html",revision:"ec13002d232ebd8d85e3c4dc0e76fcfe"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"icon/192.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"},{url:"icon/512.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
