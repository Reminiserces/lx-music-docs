import{_ as n,N as o,O as i,U as e,a2 as t,Q as a,a7 as s,H as c}from"./framework-fb9db6e1.js";const r={},d={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"注意",-1),_=e("p",null,"此功能时实验性的",-1),p=e("p",null,"由于同步传输时的数据是明文传输，请在受信任的网络下使用此功能！",-1),u={href:"https://github.com/lyswhut/lx-music-desktop/releases/tag/v1.22.3",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[t("请不要将端口号设置为"),e("code",null,"0"),t("或者大于"),e("code",null,"65536"),t("的数字，如果你不懂怎么改，请恢复为默认的"),e("code",null,"23332"),t("！")],-1),P=s('<p>此功能需要配合移动端使用，PC 端与移动端处在同一个局域网（路由器的网络）下时，可以多端实时同步歌曲列表，使用方法：</p><ol><li>在 PC 端的设置-数据同步开启同步功能（这时如果出现安全软件、防火墙等提示网络连接弹窗时需要点击允许）</li><li>在移动端的设置-同步-同步服务器地址输入 PC 端显示的同步服务器地址（如果显示可以多个，则输入与<strong>移动端上显示的本机地 址</strong>最相似的那个），端口号与 PC 端的同步端口一致（<strong>输入完毕后需要按一下键盘上的回车键使输入的内容生效</strong>）</li><li>输入完这两项后点击“启动同步”</li><li>若连接成功，对于首次同步时，若两边的设备的列表不为空，则 PC 端会弹出选择列表同步方式的弹窗，同步方式的说明弹窗下面有 介绍</li></ol><h2 id="关于同步弹窗的说明" tabindex="-1"><a class="header-anchor" href="#关于同步弹窗的说明" aria-hidden="true">#</a> 关于同步弹窗的说明</h2><p>对于首次同步时，若两边的设备的列表不为空，则 PC 端会弹出选择列表同步方式的弹窗，此弹窗内的同步方式仅针对<strong>首次同步</strong></p><p>第一次同步成功后，以后再同步时将会自动根据两边设备的列表内容合并同步，不信你可以在同步完成后断开两边的连接，然后在两边增 删一些歌曲或列表后再同步试试看~😉</p><h3 id="连接同步服务失败的可能原因" tabindex="-1"><a class="header-anchor" href="#连接同步服务失败的可能原因" aria-hidden="true">#</a> 连接同步服务失败的可能原因</h3><ul><li>此功能需要 PC 端与移动端都连接在同一个路由器下的网络才能使用（流量无法使用，可以手机开热点使用）</li><li>检查防火墙是否拦截了 PC 端的服务端口</li><li>路由器若开启了 AP 隔离，则此功能无法使用（公司或公共网络可能会开启 AP 隔离）</li></ul><h3 id="连接同步服务失败的检查" tabindex="-1"><a class="header-anchor" href="#连接同步服务失败的检查" aria-hidden="true">#</a> 连接同步服务失败的检查</h3><ol><li>确保 PC 端的同步服务已启用成功（若连接码、同步服务地址没有内容，则证明服务启动失败，此时看启用同步功能复选框后面的错 误信息自行解决）</li><li>在手机浏览器地址栏输入<code>http://x.x.x.x:23332/hello</code>后回车，若此地址可以打开并显示 <code>Hello~::^-^::</code>则证明移动端与 PC 端 网络已互通，</li></ol><div class="hint-container info"><p class="hint-container-title">将`x.x.x.x`换成 PC 端显示的同步服务地址。</p><p>例如:<code>23332</code>为 PC 端的端口号</p></div><ol start="3"><li>若移动端无法打开第 2 步的地址，则在 PC 端的浏览器地址栏输入并打开该地址，若可以打开，则要么是被 LX Music PC 端被电脑 防火墙拦截，要 么 PC 端与移动端不在同一个网络下，或者路由器开启了 AP 隔离（一般在公共网络下会出现这种情况）</li></ol>',11);function C(f,v){const l=c("ExternalLinkIcon");return o(),i("div",null,[e("div",d,[h,_,p,e("p",null,[t("v2.0.0 的同步功能不支持与移动端 v1.0.0 之前版本的使用，需等待后面的新版移动端，目前移动端 v1 的开发工作已在进行中，若仍然想要使用此功能可以下载"),e("a",u,[t("v1.22.3"),a(l)]),t("绿色版用着先，后面同步在新版可以用了再用新版，到时候清理数据目录下的 LxDatas 重新自动迁移旧版数据即可")]),x]),P])}const m=n(r,[["render",C],["__file","sync.html.vue"]]);export{m as default};
