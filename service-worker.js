if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const l=e=>a(e,i),b={module:{uri:i},exports:t,require:l};s[i]=Promise.all(d.map((e=>b[e]||l(e)))).then((e=>(c(...e),t)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-a2de60f0.js",revision:"1edc0b4d08b095d20284a07bf254152b"},{url:"assets/404.html-d6035ef3.js",revision:"eee0a6bf5196f61a1f23b9fc815dfb19"},{url:"assets/antivirus-software.html-3a9fab38.js",revision:"0ee6d3fab78a95ea095c6b918df6cdab"},{url:"assets/antivirus-software.html-5b2434ce.js",revision:"024d7e6a4f07f171231e6275cabbbe63"},{url:"assets/antivirus-software.html-7f172578.js",revision:"7f3f9105130e7a130f6601afd59909d6"},{url:"assets/antivirus-software.html-8a9f2caf.js",revision:"b87985ada08ca5a293b9d4fc8d568d6f"},{url:"assets/app-88d4cf56.js",revision:"42836363b4b22fecfc47bfb105908360"},{url:"assets/auto-ba5ecab5.js",revision:"57b89633667b5b0106aa3e1509a740db"},{url:"assets/background-play.html-e83e7cff.js",revision:"5863422c2d0f755df0cf15cda9720045"},{url:"assets/background-play.html-f0f6ed74.js",revision:"cfd0e4605cad17f2d7f172996562a514"},{url:"assets/backup.html-07120bbf.js",revision:"19ecfff1ac4414676f0f7ba1c8cd4940"},{url:"assets/backup.html-7565f08d.js",revision:"16ec7801220cca55d8efe7497cdc559f"},{url:"assets/backup.html-c68406da.js",revision:"0e23a3ab60c374bd349efd51e3787a12"},{url:"assets/backup.html-cc0b72d7.js",revision:"270782da53e5d3c8d34d201359c141a3"},{url:"assets/cannot-connect-internet.html-3555add8.js",revision:"0f1d1c8b89d6f1c0883ae9d364085f16"},{url:"assets/cannot-connect-internet.html-f1e9fafd.js",revision:"64b5bcef74fce34360b43734295317e2"},{url:"assets/cannot-download.html-0c124e02.js",revision:"81715d631a3d740a4fc4f660c0d43878"},{url:"assets/cannot-download.html-49fff603.js",revision:"3a3c3a2f91d603a5510878e26d0462f2"},{url:"assets/cannot-download.html-d76b86b2.js",revision:"5448b29aedec7b39fa15717bf3d6fc7c"},{url:"assets/cannot-download.html-e12e81da.js",revision:"406d901901f6fbc052a947b6527688f2"},{url:"assets/cannot-play.html-5e1f279c.js",revision:"45386ba16617afe0cb3b17f350cb0223"},{url:"assets/cannot-play.html-636e73cc.js",revision:"1be8b543366b2fa4de17db62a5b0f431"},{url:"assets/cannot-play.html-89cae350.js",revision:"430f794ae22d731669cd5eb056e20913"},{url:"assets/cannot-play.html-e564d9bc.js",revision:"aaca00297ff8eb9921ea074a3651826f"},{url:"assets/cannot-update.html-6191c7f4.js",revision:"7578739995f3d2a00b6d3d254db3c1cc"},{url:"assets/cannot-update.html-d4e006cb.js",revision:"335a280742ee9ef4905ba931a766a071"},{url:"assets/change-list-position.html-0593a39c.js",revision:"b7f9af4547dda735043a25818c025bd1"},{url:"assets/change-list-position.html-bb0a93a4.js",revision:"c78695b5782bd4183f8a197e1ba869ca"},{url:"assets/changLog.html-94117d75.js",revision:"5001e162966c886fc75afd7a842e5636"},{url:"assets/changLog.html-b7f05baa.js",revision:"f910fcf7118084357a04d63f5c9dc337"},{url:"assets/custom-source.html-2d0ee318.js",revision:"a2a0361b7de76553f07d3997c8ee9577"},{url:"assets/custom-source.html-c7855c14.js",revision:"4e21367e64359116d61f914f85ab4364"},{url:"assets/data-path.html-30bdf043.js",revision:"71767b2c95ad22ed8e545217e91073e4"},{url:"assets/data-path.html-5c26fcb0.js",revision:"a1911729ddd2e378a8d2125575ab4b02"},{url:"assets/data-path.html-942907c2.js",revision:"d5fe571aa3fc4ce5ad5e898dc2766291"},{url:"assets/data-path.html-aeb03065.js",revision:"d18861b5d8a460e026bd662d6346b99a"},{url:"assets/db-info.html-9b1925c3.js",revision:"963314cac1058803fe630180ce203ab8"},{url:"assets/db-info.html-c09f0bd9.js",revision:"af349a2a0e9a8a668de2de4a86eb3405"},{url:"assets/desktop-lyric.html-8385e0f8.js",revision:"bc89ab88b88a27f1c2e89b44e7c6ebde"},{url:"assets/desktop-lyric.html-e450a7d4.js",revision:"fe2fbab92d8290bcf1968bef3e61bd6e"},{url:"assets/detail.html-7ffa1d2f.js",revision:"d881880f980fe8264185837e4be2930a"},{url:"assets/detail.html-9e6efb1e.js",revision:"3269a220ded59337a99712e7f0566276"},{url:"assets/diagram-definition.0faef4c2-268cad43.js",revision:"f88cb4ef7ddb587affc045368e95a1a7"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/flowchart-35969cab.js",revision:"9e6946328eeacbd52ab4fc11bd4a99f8"},{url:"assets/framework-22f7553e.js",revision:"183873f8c64c410a978f8cbfc57a6996"},{url:"assets/headphones-turn-off-unexpectedly.html-5d8d00e7.js",revision:"eb5b8b1ec7ead27d7ec604b90bd711ce"},{url:"assets/headphones-turn-off-unexpectedly.html-8722601d.js",revision:"ad4578893c301bdd7433180689a873d3"},{url:"assets/hotkey.html-2941d1d9.js",revision:"abb0793cab28aabbb192b30deec9c35f"},{url:"assets/hotkey.html-a90d2c94.js",revision:"6cd1ec52c60254af019cc2ca4c1c5df8"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-0771e945.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-09ad8d62.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-1a7a5e35.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-1c351f36.js",revision:"c8953a1c4f6a5a62c30a752b3a0bbd25"},{url:"assets/index.html-1dd822d8.js",revision:"82fc493c755dfa6f66906628b2ede438"},{url:"assets/index.html-1e2d8b44.js",revision:"e049a9a59b3fbe25da464daae074c19d"},{url:"assets/index.html-21692519.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-24e5de63.js",revision:"b8b5fa4ddd1fdbea1a9f3b6c429b13e6"},{url:"assets/index.html-26d75b24.js",revision:"de25cf7a119635768db03a63856cb84f"},{url:"assets/index.html-2854de9d.js",revision:"65c7f97e81f85846f4f1b2eba70544ed"},{url:"assets/index.html-34fd2931.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-38c4a98d.js",revision:"1501cca289976dd970538b6f15cf8427"},{url:"assets/index.html-39458404.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-3ac1f182.js",revision:"c23a1bf787a1ca2d1eec69c23351a0e2"},{url:"assets/index.html-3f392d0a.js",revision:"c4877c662a72b0cafbc21349c7bd1b83"},{url:"assets/index.html-3fd5c595.js",revision:"00da869b8eafbee6f668c48944ec59ea"},{url:"assets/index.html-42955d4d.js",revision:"6bdaa9cf4fe46e0c4cfa4db7d33d159d"},{url:"assets/index.html-4d7c8530.js",revision:"ead837406028f09126f98e089057e4d3"},{url:"assets/index.html-4dc685d5.js",revision:"ef82da0fb71bf4b9e9ddfcc48191383c"},{url:"assets/index.html-53c629e3.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-5c29e049.js",revision:"c4cd59b95747c462901d4f114c8bf7b3"},{url:"assets/index.html-5de685c6.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-70c146f2.js",revision:"d9d9f555186a14e4a19a20bdb40be8bf"},{url:"assets/index.html-73ee858b.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-74708556.js",revision:"a0db639e14e90d503c6e876302d714a9"},{url:"assets/index.html-75c6c8db.js",revision:"3bde6a7b8d726a31163addf23b463945"},{url:"assets/index.html-7c4cf387.js",revision:"06d06d7af460c9c7e9dcd3cb387c9ccd"},{url:"assets/index.html-86c08d30.js",revision:"545289a1c0910421d0286fe3e9c38ddc"},{url:"assets/index.html-946985ec.js",revision:"22c30a96e32822f91fe02a77b1b3516b"},{url:"assets/index.html-95a42929.js",revision:"ef8bb1a8848bfc5944ef3b7644edecd8"},{url:"assets/index.html-99e23405.js",revision:"86b7b5e93a5a61db10221d15f156351e"},{url:"assets/index.html-9e01bc68.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-9fa18fd5.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-a2988cd9.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-ab87c46f.js",revision:"f37b82180af27eec9e762356a59d1849"},{url:"assets/index.html-ab8de7e9.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-afc0f8f2.js",revision:"191fab824f004199492b4c40e212e6f8"},{url:"assets/index.html-b08f0907.js",revision:"a7befcf2b05c21a4b7f559d8b82f7f58"},{url:"assets/index.html-c76de8e1.js",revision:"20cf018ed25c47a58d1190fbda5189ed"},{url:"assets/index.html-c7fea888.js",revision:"5bb3ddb42fc565975b517469c54f5fb1"},{url:"assets/index.html-cebb176a.js",revision:"702ba171cc906fb1fea6c371762d0155"},{url:"assets/index.html-d0182218.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-d5350b8a.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-da887bee.js",revision:"d1e336b455bc461b4eeca24b30a2b583"},{url:"assets/index.html-e135d1fa.js",revision:"2dd369b3059073460083086a463a99ad"},{url:"assets/index.html-ed78e497.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-f0af01ce.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-f13c7878.js",revision:"55533751c45d7d44bf9bdc7bbd910cbd"},{url:"assets/index.html-f3a043c5.js",revision:"93f0d1d9dd019d0b70db4e88752ac87e"},{url:"assets/index.html-fed0c865.js",revision:"df1d5298e547ac264bb5209e13976365"},{url:"assets/install-failed.html-281fd99a.js",revision:"8d0e34f6336e8626d950081b47514e4d"},{url:"assets/install-failed.html-f3993cc7.js",revision:"cb84106fc0516a9836d13097bf12d2c4"},{url:"assets/license.html-02a324f0.js",revision:"7eb2981ff9def793afe3deea95d58197"},{url:"assets/license.html-17ec20dc.js",revision:"f655aa54023f21e1a6a9ff5ce873b4c4"},{url:"assets/license.html-5556a3c3.js",revision:"0c171369dd684e3ae17e8b94ed386158"},{url:"assets/license.html-627e0964.js",revision:"26c72563053ac1e7e3fdfc50a72f1d95"},{url:"assets/linux.html-0a95d6c5.js",revision:"ca664c2856006c609732e5803e41cc21"},{url:"assets/linux.html-57a58e9c.js",revision:"dccfea6f6ee5c2a55710a3d010076746"},{url:"assets/list-multiple-selection.html-41e6216c.js",revision:"5a5f4e29a7544a818eb5ac61e3268c00"},{url:"assets/list-multiple-selection.html-46e78793.js",revision:"e5be6cd284538b10cb2e76eb1e129edc"},{url:"assets/list-multiple-selection.html-9278a3ad.js",revision:"328823554c8c76b18aaaf89fc63b5d87"},{url:"assets/list-multiple-selection.html-bb0d994c.js",revision:"ae07680555f8a83edf0a11ba95d38a42"},{url:"assets/list-play-all.html-77a8a941.js",revision:"f0818f4fd382fa1340eab25805d5e9f8"},{url:"assets/list-play-all.html-f0f4170f.js",revision:"d03206b3187b747abfa8198fecc36668"},{url:"assets/local-music.html-7e9dca56.js",revision:"a17b3cc5ba1f45e609745922294f3de7"},{url:"assets/local-music.html-cba6cc6d.js",revision:"8368639ff14752ded455f1f3e8b1ae9e"},{url:"assets/mermaid-mindmap.esm.min-9bc1a64a.js",revision:"4b30c4e349f0903d821b39505df94468"},{url:"assets/mermaid.esm.min-6068c030.js",revision:"cbde194e4f2a3add94c41a0a54a1103c"},{url:"assets/open.html-15c6b4fb.js",revision:"f9a426d3e5b1954376df6d7c474517fe"},{url:"assets/open.html-7fc92f04.js",revision:"f6d289a52fda4005e58a1e2f5ae0ee42"},{url:"assets/open.html-95dc0917.js",revision:"aa959da21994311be78ead07f34db101"},{url:"assets/open.html-db0b644d.js",revision:"1b5aac9ca35385aeae26a241c935aeea"},{url:"assets/photoswipe.esm-04fddac6.js",revision:"9ad259a6b763e1045e31c1ec4984750d"},{url:"assets/play-all-list.html-22c2f428.js",revision:"c0647eeed112565c2569a8459698c7be"},{url:"assets/play-all-list.html-c61aace6.js",revision:"2836ac59667de5fcc49de0b3f84facc8"},{url:"assets/play.html-af81613b.js",revision:"3c25fd98620746cf8a63c0f3246cadc8"},{url:"assets/play.html-b93fdfd2.js",revision:"5acef6190f15f84b256f74ecb9143e4b"},{url:"assets/playlist.html-120c0872.js",revision:"59f2fad3940d87a725ee866c7702496c"},{url:"assets/playlist.html-3a8dfba0.js",revision:"67339f6e0de764f2420602ea43b195f9"},{url:"assets/request.html-08e28d38.js",revision:"a8a590fc16aa2fb8c550e24b1e9b81fa"},{url:"assets/request.html-5a3b32ba.js",revision:"f9a2cee7f03dc43932a9394fb0411a8c"},{url:"assets/revise-dns-host.html-2ce1a634.js",revision:"1bd19a6f7fc03d15b30254e4bcb1cb95"},{url:"assets/revise-dns-host.html-6e8ea436.js",revision:"e5b927f4382a0ba47ed6a0c6ae6f022d"},{url:"assets/revise-dns-host.html-a62a55a3.js",revision:"47a6656acee8b77db0022046834533c1"},{url:"assets/revise-dns-host.html-f714e473.js",revision:"30ea0f0aaa7710a13de88d6b4ae6bb0e"},{url:"assets/run-params.html-0382398f.js",revision:"0c395b828a6ad814540c94164b188b96"},{url:"assets/run-params.html-7cabdfd5.js",revision:"c85898b996fb708ec7f85329c453bdd7"},{url:"assets/scheme-url.html-0728ab8c.js",revision:"6571bc4b09cbb38154a7e73dc05e1481"},{url:"assets/scheme-url.html-6796847d.js",revision:"cb64dc416b2b3b7f90cda0a2646348d8"},{url:"assets/show-abnormal.html-90939eff.js",revision:"8d191d71d8e825b1f140033907ee2c55"},{url:"assets/show-abnormal.html-f3bb8700.js",revision:"5157a3499c6882170a5bf46cbb1b6be6"},{url:"assets/songlist-update.html-5d383fb2.js",revision:"c9727b3a40b2ff56bc35cc57839cfd68"},{url:"assets/songlist-update.html-9ed6f7de.js",revision:"0bd36ba66508bca11cf5b175a668c69d"},{url:"assets/Space-dc1151bb.js",revision:"eb7b18f0923190697391014bba32b1df"},{url:"assets/statusbar-lyric.html-522d79af.js",revision:"8552e88de545ee11b1f1fc3a726e7112"},{url:"assets/statusbar-lyric.html-70ab5c50.js",revision:"78ab57dabee9da11f039247d0b8631f8"},{url:"assets/style-81746982.css",revision:"eb6f60d87662c907fca24ef076696189"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/sync.html-7f7f56df.js",revision:"a4a419a2e9c858061a0a9227a9d62d88"},{url:"assets/sync.html-815583f3.js",revision:"6c16f2f985935155b3265f608a8b4f24"},{url:"assets/sync.html-d7185b4c.js",revision:"09e5ba889c5e3599c601fb4b02d2345a"},{url:"assets/sync.html-e2b52712.js",revision:"3d6fd4b124e30834f0a90b276323762a"},{url:"assets/update.html-354b4849.js",revision:"527a9b6d6be9a475c0de482ac0ca55e0"},{url:"assets/update.html-b3bd8ddf.js",revision:"8574c7e40aa23ac95ae065a89d0cde25"},{url:"assets/use-source.html-4c98562c.js",revision:"68ff3d06257f6d59be59e73e743dce68"},{url:"assets/use-source.html-7b988b42.js",revision:"31c35ec791214657e4b9079dbbef4dce"},{url:"assets/use-source.html-8832f0f7.js",revision:"d6c30f95c4ba2b2b3705ebf40428e814"},{url:"assets/use-source.html-cac34bde.js",revision:"ad2137e0b9fa8fabcc9914097ebab774"},{url:"assets/use-source.html-d9da498a.js",revision:"7d144af12ee5dac1b9ba7deabec21edc"},{url:"assets/use-source.html-ff851c18.js",revision:"7170ab238d2ece4a16cc23a48591b0f7"},{url:"assets/velocity-text.html-27dc6d7b.js",revision:"787b3fee3df7ba4530b668d1e46a9575"},{url:"assets/velocity-text.html-96a8c7d9.js",revision:"7fa9ecb0e7448bb8f60a33b3799cf788"},{url:"assets/vue-repl-d741079b.js",revision:"3779ec4e0cce3494369ec705782c5f2f"},{url:"assets/VuePlayground-8fc41d09.js",revision:"88a936b1e4475f4e13a6ee71b01c7bdc"},{url:"assets/win10-11.html-52fb39b3.js",revision:"292b7ece4b1a41902fdaca7a5c4189b0"},{url:"assets/win10-11.html-f4ecbcd6.js",revision:"3758c9d89660b144691e9c28945c4e40"},{url:"assets/win7.html-9d249812.js",revision:"48d71af2af3125efc93f453d1d6871fa"},{url:"assets/win7.html-e7aa288a.js",revision:"050fd20978c9b9b411b4a548177c26c2"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"8c804509ab0ee9e1816f18f371158338"},{url:"desktop/changLog.html",revision:"d0546fb3120e06394b0edd66aae1f996"},{url:"desktop/document/common/index.html",revision:"eb0e1dc2f5ab9088b061a05dfd22a944"},{url:"desktop/document/common/request.html",revision:"09e8fa779572eb50ac08a3b1bc33cd37"},{url:"desktop/document/common/revise-dns-host.html",revision:"f1d0fd0558e68db2ddc84b0c0fd010bd"},{url:"desktop/document/data-path.html",revision:"7f236a6b89253e636ab5711de55562b3"},{url:"desktop/document/db-info.html",revision:"3fcb1014fd0025d10ea1beec7a963f76"},{url:"desktop/document/desktop-lyric/index.html",revision:"7423e2d7c6e5ed2235b58d89a7a399f6"},{url:"desktop/document/desktop-lyric/show-abnormal.html",revision:"2238fdcde779523cfeb6fcd81e509991"},{url:"desktop/document/desktop-lyric/velocity-text.html",revision:"966e03ff44fddab37e1855ea0f0b343d"},{url:"desktop/document/download/cannot-download.html",revision:"af42f528b2c20e981fe644e917e882d2"},{url:"desktop/document/download/index.html",revision:"887c69b7075345c212f85c520b8cdab5"},{url:"desktop/document/index.html",revision:"033088fdc0aafdac32e3f778a4e84916"},{url:"desktop/document/install/cannot-update.html",revision:"3666b8d026b7d0ffa9515d958bc4b8b7"},{url:"desktop/document/install/index.html",revision:"2b7c31961e20e6f2821919209cb3d265"},{url:"desktop/document/install/install-failed.html",revision:"78c3dec1b819aa742dd4ad1b8af68bff"},{url:"desktop/document/list/change-list-position.html",revision:"bfdf2e1f90441d82ed1609c2a3071f15"},{url:"desktop/document/list/index.html",revision:"eed03198e2e081dc9af54f0388c2c799"},{url:"desktop/document/list/list-multiple-selection.html",revision:"37025e3bfae4fa5ffb613f1352a0e963"},{url:"desktop/document/list/local-music.html",revision:"857bb240b1007c58b1887a8f5c4c2e18"},{url:"desktop/document/list/play-all-list.html",revision:"d68aa5e542c0856c49ca9990eaf5b2d0"},{url:"desktop/document/list/play.html",revision:"f1b6ca4a3dda122075f7efb771929dc4"},{url:"desktop/document/other/antivirus-software.html",revision:"ef84a3db5e2832563913a769097d375f"},{url:"desktop/document/other/cannot-connect-internet.html",revision:"10c97eb312014253ee867eb61257d192"},{url:"desktop/document/other/headphones-turn-off-unexpectedly.html",revision:"2f1c3c0c1b32c6744b84147a9580d53d"},{url:"desktop/document/other/index.html",revision:"001596017d7275eec98347a047b1f6f2"},{url:"desktop/document/play/cannot-play.html",revision:"189271ba28ebcb1ec8d9c67efaa254a5"},{url:"desktop/document/play/index.html",revision:"0ca3711db97be1fefd74006723b5a883"},{url:"desktop/document/screen-abnormal/index.html",revision:"f9a60910bea5c9397a953007ae03b15c"},{url:"desktop/document/screen-abnormal/linux.html",revision:"15ea99725f0ed0256e7e3bbb7026e8cf"},{url:"desktop/document/screen-abnormal/win10-11.html",revision:"751ee257c69a9c008d1db2c02274584a"},{url:"desktop/document/screen-abnormal/win7.html",revision:"a3b0cde85dc9537c28741688ab6cc8ba"},{url:"desktop/document/songlist/detail.html",revision:"dd188742152fff9f10f87e54770fd671"},{url:"desktop/document/songlist/index.html",revision:"9ea83c5c249dfab8516507927f7b5ffc"},{url:"desktop/document/songlist/open.html",revision:"26038a6efda4a84e514fcfc88fcb5298"},{url:"desktop/document/source/custom-source.html",revision:"8b3292ecb8cf2d19ca099d68977ece26"},{url:"desktop/document/source/index.html",revision:"e317b7da8123d2d971e41c79e7b1298a"},{url:"desktop/document/source/use-source.html",revision:"e52dafd9b029083f6932a27651125c32"},{url:"desktop/document/sync-backup/backup.html",revision:"a7fbfdecc2c80e757b9e8fe272dcb33d"},{url:"desktop/document/sync-backup/index.html",revision:"082fe33920365d6a5cadc3005597b148"},{url:"desktop/document/sync-backup/sync.html",revision:"e10e524a616e7dd063ed2e102c7db2e3"},{url:"desktop/hotkey.html",revision:"c2ed70341641829ab37cf8e8437ec418"},{url:"desktop/index.html",revision:"6bb70b4520f5519ce33142ad763337ab"},{url:"desktop/license.html",revision:"a8fa84f7326bf98c8490746d43959738"},{url:"desktop/run-params.html",revision:"bb450395bfc207849b9c6f247776add9"},{url:"desktop/scheme-url.html",revision:"5a0c7299f21377f5296d5e1f06daab49"},{url:"desktop/use-source.html",revision:"aa8a66df295ae3c674a3aaa4dbb8dbd2"},{url:"download/index.html",revision:"d1299afb9155816c54e5cf5ff1500df9"},{url:"index.html",revision:"46f135a5ee268cf4c5d944a36b4d9d2d"},{url:"mobile/document/common/index.html",revision:"05ac79062be4581d5732a049d1668543"},{url:"mobile/document/common/revise-dns-host.html",revision:"04c445432ccab412586b5b3c1d619447"},{url:"mobile/document/data-path.html",revision:"4b42f4f0b635e20102633a28f3cfd4a7"},{url:"mobile/document/download/cannot-download.html",revision:"4938fc3ebcc03cf9f0b27afd775005a8"},{url:"mobile/document/download/index.html",revision:"c77d51af2127405fb4f5db36de7c59f1"},{url:"mobile/document/index.html",revision:"b4e8e8cdb250e3ae288d7922ca731c00"},{url:"mobile/document/list/index.html",revision:"cb15e6161bcc6bd822f6358111ac665f"},{url:"mobile/document/list/list-multiple-selection.html",revision:"22690be271af2c97897bacf7d84e273c"},{url:"mobile/document/list/list-play-all.html",revision:"eba875ef925ae5e50ca79694e5c06c24"},{url:"mobile/document/list/playlist.html",revision:"fd693c52e3ad305c72effd5aa17a52d2"},{url:"mobile/document/list/songlist-update.html",revision:"88e2dcc7726a8a02ad66a8f2b1247077"},{url:"mobile/document/other/antivirus-software.html",revision:"8b46c205cef64d4c844bb61fafc49e7f"},{url:"mobile/document/other/desktop-lyric.html",revision:"203dcbfd41a52f00ac045d251f200b6e"},{url:"mobile/document/other/index.html",revision:"ddbf84d6a36df182c3b51b9c9220a44d"},{url:"mobile/document/play/background-play.html",revision:"53d9f9f1e072ed66a521e39903cd5190"},{url:"mobile/document/play/cannot-play.html",revision:"35c6d7e4a04034018d863d8b79ffda1d"},{url:"mobile/document/play/index.html",revision:"86eb170fc42777254e2ce6c13c73a27c"},{url:"mobile/document/songlist/index.html",revision:"875c8c82be4f7ebd51806447a0956fc4"},{url:"mobile/document/songlist/open.html",revision:"8e3d420260a5417e8d15153464dc52ac"},{url:"mobile/document/sync-backup/backup.html",revision:"8950d02e9a1837bb54ae6693be8271a1"},{url:"mobile/document/sync-backup/index.html",revision:"554761558e865eea0bd416542d2eb3b0"},{url:"mobile/document/sync-backup/sync.html",revision:"8afc71a26a6ff48ede6a26f0b48f420e"},{url:"mobile/index.html",revision:"8c3eb1493a1bf61de3ca876054a1a73e"},{url:"mobile/license.html",revision:"16043ee38f2a70772f8b548ad9a1c7f5"},{url:"mobile/statusbar-lyric.html",revision:"b298003445ad8439755ee8612e17aba1"},{url:"mobile/update.html",revision:"73f5a9e0e8512bbae88ca8494e3b5432"},{url:"mobile/use-source.html",revision:"eaf226b853898398811be1a375752855"},{url:"report/index.html",revision:"a72ea79948f132862a7ddbcdfe02677e"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"icon/192.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"},{url:"icon/512.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
