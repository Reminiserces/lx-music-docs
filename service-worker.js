if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let i={};const f=e=>a(e,b),o={module:{uri:b},exports:i,require:f};s[b]=Promise.all(d.map((e=>o[e]||f(e)))).then((e=>(c(...e),i)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/4364.styles.c66f24a5.css",revision:"fc289db63123cce29fda7962597b6d63"},{url:"assets/css/styles.a09b036b.css",revision:"db7ded24c06db054797cac28093e52bd"},{url:"assets/js/3041.741104dc.js",revision:"9c631a825e87332af43365ff19da3b3b"},{url:"assets/js/3573.dacb30a4.js",revision:"c63285232492a76549fbdfd77f2d64c8"},{url:"assets/js/3618.332a76aa.js",revision:"f0b16f7e75e2c036532881978fbbeff8"},{url:"assets/js/4058.94cb96b7.js",revision:"75cabd1543bc6c75b9473979b07d5900"},{url:"assets/js/5261.d705bf8a.js",revision:"ebbce8ad8f96b77705c1c04c011177e6"},{url:"assets/js/5722.be34eb4c.js",revision:"2f201fc120201e1c7d7669a8dd1bb324"},{url:"assets/js/5826.e7746bc9.js",revision:"6a8338eaa9271c57fae6531e51f1d351"},{url:"assets/js/7233.1e8341cc.js",revision:"5c3491b48dfcb7853bd49f97ffe37809"},{url:"assets/js/7273.f38c081d.js",revision:"ab529b801e4b404c03dd30e7abfef620"},{url:"assets/js/7301.516661a4.js",revision:"21b7207981aead90371ed089310ecc60"},{url:"assets/js/7311.5872c533.js",revision:"4383b6e20530eb0ade349e917c39d0ab"},{url:"assets/js/app.bc33bf46.js",revision:"4628fe5db09f899d40dbbac693146d4f"},{url:"assets/js/runtime~app.823e2798.js",revision:"ebd03458f0c2552336906e747d6ff41b"},{url:"assets/js/v-0055f9a8.402d423e.js",revision:"e6d8505750e73e86f49ad28397409129"},{url:"assets/js/v-02058e68.42d3cc97.js",revision:"3d55a64020249df12c1516f2bba17f00"},{url:"assets/js/v-04c16130.86754eec.js",revision:"b346ebafae0707b863f4231a68d6a463"},{url:"assets/js/v-061ad5c3.a7b843e3.js",revision:"156bccd72fef8f139f15eb64265bcd2f"},{url:"assets/js/v-06c00f69.63f03e37.js",revision:"adadf417eebc07e33994307e5f90164b"},{url:"assets/js/v-070dd522.2d3e4114.js",revision:"94ba494509ccfc313b1f3f0d40d4a7d1"},{url:"assets/js/v-09631cb4.5988f0e7.js",revision:"b3c86851cff19f85f58ee3e4dd9c635c"},{url:"assets/js/v-09b58c82.ac515829.js",revision:"4c891fb435f803f2fb423ced22f1870a"},{url:"assets/js/v-0a91e120.c405ca23.js",revision:"2fb91076216cd2879618646ac04080ed"},{url:"assets/js/v-0af35658.36670a1c.js",revision:"1d4ad48444974bf5974a23b2e469514f"},{url:"assets/js/v-0b3386f4.400b5c79.js",revision:"01f2b7a2d7d361caf455a39395fc6365"},{url:"assets/js/v-0b73dab4.ab5df4e7.js",revision:"a265bdb327b2a6353bcfd8eb482a0672"},{url:"assets/js/v-0d460a64.4b46d138.js",revision:"77693863e236be1d63dbe11e68d0125d"},{url:"assets/js/v-1080ce78.d4029c3f.js",revision:"09be79b2f8f03f1220c795285c7d69d5"},{url:"assets/js/v-13cb5d8c.851a3d2b.js",revision:"734554de19464845dea22caa7ad02b83"},{url:"assets/js/v-1ba68dd9.fd25618f.js",revision:"bba361c9304ee553aa090a03b87b85d2"},{url:"assets/js/v-1c9a53a0.c6401195.js",revision:"7f061507dc5276a299d3397ff10dc6ab"},{url:"assets/js/v-2835557c.ce31d7e2.js",revision:"eebb175d66d84bf96f566679f0462cd9"},{url:"assets/js/v-291ff43e.83dcc2b6.js",revision:"0ba40c6a38aca1805d5167b1c9429029"},{url:"assets/js/v-2e9fc969.cb44d858.js",revision:"9799552bcf5a327a97defb03c2afe4ba"},{url:"assets/js/v-31678378.ebaeb538.js",revision:"ce02aeee5ee4fef032eb79d24b1426fd"},{url:"assets/js/v-31e727b1.8ea87c7c.js",revision:"acbcc9eff7b0506d27472f24d2677321"},{url:"assets/js/v-3247075c.83fc5dcc.js",revision:"0f9ba637b7324c5d4bb0fd099d35b4b1"},{url:"assets/js/v-33207a5c.6567cd00.js",revision:"3b45f2205451b5511c1b3176ed6a728a"},{url:"assets/js/v-345f8818.dfaa89dc.js",revision:"0a21988e98606127c965457b0e67afda"},{url:"assets/js/v-3706649a.93a33291.js",revision:"0ab9bd13725ba00c474d86e83cd4da20"},{url:"assets/js/v-3ecaf43a.a660a2cd.js",revision:"de9f68c4df28d5392d3e30bf2b648cb3"},{url:"assets/js/v-495fd1ca.6f8d2402.js",revision:"181f0f31ef5faa232da7e6629b592318"},{url:"assets/js/v-4ba9b1e6.b3ff69b7.js",revision:"2e27df1bf218b8b060d5df061bf0875c"},{url:"assets/js/v-4cb29dce.c65e82a8.js",revision:"2e54580c2f339d9b794516784e4ba178"},{url:"assets/js/v-4db8cbc6.32aa22d3.js",revision:"24745c70231facc34b368cc3c39a2e7d"},{url:"assets/js/v-4eff38a4.a2e4a41e.js",revision:"48ab007c7251538aee7b9ffd3f3dab27"},{url:"assets/js/v-519ded5f.e44cf3df.js",revision:"5dbd3a39a462cb7fe60ec8ff4de03674"},{url:"assets/js/v-5a4902d6.7fd322b8.js",revision:"23f8c2fd8bd11f6a8ae37a2b5732a793"},{url:"assets/js/v-5cdb9213.f8a4fafd.js",revision:"36fa54bea230b2ca9755e915414b64f7"},{url:"assets/js/v-61676179.76cb46da.js",revision:"a6d8ad7bb66798290d1e37b8b29bedf0"},{url:"assets/js/v-66105eec.27ce7570.js",revision:"cf2845a9d65c94e7f7c76a78d2efb28e"},{url:"assets/js/v-662b652c.ce556149.js",revision:"4bb264ded4fbfd4207b3f5f05f3351b2"},{url:"assets/js/v-66a4d55b.2e9bbd18.js",revision:"ebf24bf0a5c4f4a8898e412ac4d64723"},{url:"assets/js/v-6a8bb29b.5e9d343a.js",revision:"f10aef6a3daf4781da0ba02cdaff5ee9"},{url:"assets/js/v-6dfaea8e.39df2d11.js",revision:"cf07b0946e1cb6ec5218c3f3554caf35"},{url:"assets/js/v-6e483c56.4b7bbba6.js",revision:"bd07f8aef17c4485a9b235e1787e3d6a"},{url:"assets/js/v-72a1094f.034e00d9.js",revision:"59781045f2c00cc43505c1073c7a0294"},{url:"assets/js/v-7788049f.400424a7.js",revision:"e98ef6c15b8f562cb016d43a1f7f8560"},{url:"assets/js/v-7b29dd85.17fdd953.js",revision:"53f40b97a529b03abb1af8aa747515bb"},{url:"assets/js/v-7bd766d8.677ac4d0.js",revision:"f9fde833e417d37924be8e9074c4cfdd"},{url:"assets/js/v-7f147268.34e72535.js",revision:"86a6495f20e8e7ec32fbda733e24e1ad"},{url:"assets/js/v-8daa1a0e.4d2b92bc.js",revision:"a045fe037ef1700dcde3079f627249fc"},{url:"assets/js/v-93317488.2316c52d.js",revision:"204d2739c14788f70dae87add2fb489f"},{url:"assets/js/v-99e61298.5a55c039.js",revision:"58622675fb9bc0bb43d4e9bfa84f4d15"},{url:"assets/js/v-9b9eb67a.6da3cdba.js",revision:"48a8a1cc8a0872898f0380c96ef22f7b"},{url:"assets/js/v-a59cee64.25975619.js",revision:"69f063ba8fb33df011df955ccdacd118"},{url:"assets/js/v-a978773c.8e712c23.js",revision:"26fe682336dbcafb828bd31fdb525b64"},{url:"assets/js/v-b2566424.59943c6d.js",revision:"f53066d0ebf5297d8fc570b7d462faac"},{url:"assets/js/v-c1f73364.125092e5.js",revision:"bb85926211510faf4b1f6ec31e6ba5ac"},{url:"assets/js/v-cd57ab20.706a3444.js",revision:"c33fe20d79e078e83b53f5b2439e1d93"},{url:"assets/js/v-dfa745f4.9ebdd1bf.js",revision:"aa830065a4d2cea750a149c1edd5b3ff"},{url:"assets/js/v-edeeb380.ee986a3d.js",revision:"b885fc6a209a1aa6bcf0d51116d1ebbd"},{url:"assets/js/v-fae63220.2b21dbfd.js",revision:"b91abf5890d501e54c14290ea056df6f"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"3626daef864fd4ec441de173a2743be2"},{url:"desktop/document/changLog.html",revision:"c77946e60c88bb55ef96fe9c23e49ca3"},{url:"desktop/document/common/request.html",revision:"8c6b0d54f9eb824989b441735d549e8e"},{url:"desktop/document/common/revise-dns-host.html",revision:"e1089eb0a8acd1456f7746b8c56040d8"},{url:"desktop/document/data-path.html",revision:"02dd7ce1773ac6db70a86bbfee952821"},{url:"desktop/document/db-info.html",revision:"ab21eddd2982017e9a341179c628067a"},{url:"desktop/document/desktop-lyric/show-abnormal.html",revision:"65b1873034d8d16227dda3b3788031b7"},{url:"desktop/document/desktop-lyric/velocity-text.html",revision:"443ec2761cbbd7804b7639f2e87af165"},{url:"desktop/document/download/cannot-download.html",revision:"3fa59e033656bf409e74d3405debc95f"},{url:"desktop/document/hotkey.html",revision:"221063b779cfe633a5136e38c27ea3bf"},{url:"desktop/document/index.html",revision:"5c504c6b69bf4e3e889573143a212c30"},{url:"desktop/document/install/cannot-update.html",revision:"fff2f9188a71ff84881e4871527300ba"},{url:"desktop/document/install/install-failed.html",revision:"c4af1ff6435118d1f93e00640e9f63df"},{url:"desktop/document/license.html",revision:"4f0a3cb2bb31f9f69f1db9cd1f286101"},{url:"desktop/document/list/change-list-position.html",revision:"51fb3e4da44ab59f7b1d7e816489c832"},{url:"desktop/document/list/list-multiple-selection.html",revision:"8f1cdb67535bc24e98d0bccd28a5286c"},{url:"desktop/document/list/local-music.html",revision:"8063dddb60bed629509e30df192d9b1b"},{url:"desktop/document/list/play-all-list.html",revision:"a4400bf45212e9eab3ee812b4b712d95"},{url:"desktop/document/list/play.html",revision:"d703c701a309e96a40c71c38a7d1a9b7"},{url:"desktop/document/other/antivirus-software.html",revision:"e5530d7e4244361fb0d6932205062a00"},{url:"desktop/document/other/cannot-connect-internet.html",revision:"eda8b82606783d113a9defa3e2129ce9"},{url:"desktop/document/other/headphones-turn-off-unexpectedly.html",revision:"8cee78308cd6fc4b8de381ec1af9e253"},{url:"desktop/document/play/cannot-play.html",revision:"c7a687fc1c0a5a70a565795969ddda43"},{url:"desktop/document/run-params.html",revision:"ab0afd0e9a014310e9a01c9bb680bb40"},{url:"desktop/document/scheme-url.html",revision:"3b04b9dd67671da1c6e14cf6fba24fcf"},{url:"desktop/document/screen-abnormal/linux.html",revision:"1126464ebf4be25cf6b613a25bda00a0"},{url:"desktop/document/screen-abnormal/win10-11.html",revision:"a07eb57c5f0418a6aafc002a930688b8"},{url:"desktop/document/screen-abnormal/win7.html",revision:"80963c09eb0362cba105e38ad4e4d558"},{url:"desktop/document/songlist/detail.html",revision:"1699810ab7ccfd169163e2c11e9c1d0d"},{url:"desktop/document/songlist/open.html",revision:"23e073557577ced0855e6e4bffbed88a"},{url:"desktop/document/source/custom-source.html",revision:"6ee1ea9e5f0d6665093eb38db036d501"},{url:"desktop/document/source/use-source.html",revision:"eb797f4b19af83e0cba51b3dcbdde134"},{url:"desktop/document/sync-backup/backup.html",revision:"6417b12c1243f62b3305f1b1bf3013af"},{url:"desktop/document/sync-backup/sync.html",revision:"f0d0fb488fcd7cd73a3e0da4bb828a2c"},{url:"desktop/document/use-source.html",revision:"d5e882993aa60a020cec1a3e10177b7f"},{url:"desktop/index.html",revision:"7270a498904962d6a764f6f5a19b7114"},{url:"download/index.html",revision:"1caaee1958e72cbdbf5b0ae53889836d"},{url:"index.html",revision:"42d3a69bbecd86bad25d302be8f6e3e9"},{url:"mobile/document/data-path.html",revision:"58a9f72d7702722429ba77c39cf52772"},{url:"mobile/document/index.html",revision:"a612f328bb6d063e80ec892d65646e64"},{url:"mobile/document/license.html",revision:"ae772afa2c092590946ca72643f3dad2"},{url:"mobile/document/list-songlist/list-multiple-selection.html",revision:"7f0489bc3427ee77b45a19d8f76c1eed"},{url:"mobile/document/list-songlist/list-play-all.html",revision:"3281260aa8acbc8e6d6953f92fd82c91"},{url:"mobile/document/list-songlist/open-songlist.html",revision:"36d1a053581bc0fc2a7f0475712dc63f"},{url:"mobile/document/list-songlist/playlist.html",revision:"bc33fdcb2b559de842931fa1b5706125"},{url:"mobile/document/list-songlist/songlist-update.html",revision:"658eb1938d29ac3393728417f102b39b"},{url:"mobile/document/other/antivirus-software.html",revision:"bcb3ff224e46179102b813950725609a"},{url:"mobile/document/other/desktop-lyric.html",revision:"71cc5a76645ba3dd69807296b53591c6"},{url:"mobile/document/play-download/background-play.html",revision:"e72d722d0e2a4e4f65f8f3f5603442bf"},{url:"mobile/document/play-download/cannot-download.html",revision:"165129dfb2f315ceb2d76844460a10f7"},{url:"mobile/document/play-download/cannot-play.html",revision:"ad913acb33c7007fe9ec64b5dafd1e88"},{url:"mobile/document/play-download/revise-dns-host.html",revision:"bc6eede0caa4b37b4c53e304f9468561"},{url:"mobile/document/statusbar-lyric.html",revision:"ec1642a86dda3c675b69d4ec4a7e4932"},{url:"mobile/document/sync-backup/backup.html",revision:"8a8bc6d8350b2485ea943ced5fe2efb1"},{url:"mobile/document/sync-backup/sync.html",revision:"f0e330501a5270c5494caeb36c07b009"},{url:"mobile/document/update.html",revision:"8bedeff883e7f0169d94a05034b388d6"},{url:"mobile/document/use-source.html",revision:"e7b232586632bc738dc1b7a347841a17"},{url:"mobile/index.html",revision:"ace7e73139a541cfac0b4ee0a2cd769f"},{url:"report/index.html",revision:"b22ff9e1aca71ab219341381dfdc7719"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"icon/192.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"},{url:"icon/512.png",revision:"df20e5ee61493a62a51aedb192ddc9a3"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
