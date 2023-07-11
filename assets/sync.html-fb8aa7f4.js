import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as s,a as e,b as t,d as o,w as r,e as i}from"./app-cfa02f87.js";const h={},p=e("p",null,"此功能可以用于同步各端收藏的歌曲。",-1),_={class:"hint-container warning"},u=e("p",{class:"hint-container-title"},"注意",-1),P=e("p",null,"此功能是实验性的，v2.2.0的同步功能不支持与移动端v1.0.0之前版本的使用",-1),m=e("code",null,"LxDatas",-1),f=i('<div class="hint-container danger"><p class="hint-container-title">警告</p><p>由于同步传输时的数据是明文传输，请在受信任的网络下使用此功能！</p><p>请不要将端口号设置为<code>0</code>或者大于<code>65536</code>的数字，如果你不懂怎么改，请恢复为默认的<code>23332</code>！</p></div><p>从v2.2.0起，PC端的同步功能有两种工作模式：</p><ul><li><p>服务端模式，用于在同一局域网下，为其他设备提供同步服务</p></li><li><p>客户端模式，与移动端一样，可用于连接另一个处于“服务端模式”的PC端或独立版数据同步服务</p></li></ul>',3),x={href:"https://github.com/lyswhut/lx-music-sync-server#readme",target:"_blank",rel:"noopener noreferrer"},v=i('<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="图片教程" tabindex="-1"><a class="header-anchor" href="#图片教程" aria-hidden="true">#</a> 图片教程</h3><p><img src="https://i3.mjj.rip/2023/07/11/dcfca98c5b5ae6b7d4dd27cee5b13eda.jpeg" alt="img"></p><h3 id="服务端模式" tabindex="-1"><a class="header-anchor" href="#服务端模式" aria-hidden="true">#</a> 服务端模式</h3><ol><li><p>在 PC 端的设置-数据同步开启同步功能（这时如果出现安全软件、防火墙等提示网络连接弹窗时需要点击允许）</p></li><li><p>在移动端的设置-同步-同步服务器地址输入同步地址</p></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>同步地址格式为:<code>http://IP:PORT</code></p><p>将<code>IP</code>替换为 PC 端显示 IP(如果显示多个请填最相似那个)</p><p>将<code>PORT</code>替换为 PC 端显示 端口</p></div><ol start="3"><li><p>输入完这两项后点击“启动同步”</p></li><li><p>若连接成功，对于首次同步时，若两边的设备的列表不为空，则 PC 端会弹出选择列表同步方式的弹窗，同步方式的说明弹窗下面有介绍</p></li></ol><h3 id="客户端模式" tabindex="-1"><a class="header-anchor" href="#客户端模式" aria-hidden="true">#</a> 客户端模式</h3>',8),C={href:"https://github.com/lyswhut/lx-music-sync-server#readme",target:"_blank",rel:"noopener noreferrer"},b=e("ol",null,[e("li",null,[e("p",null,"在 PC 端的设置-数据同步选择“客户端模式”")]),e("li",null,[e("p",null,"输入同步服务地址，使用方法与移动端一致，详情看“服务端模式”使用方法的第2、3点")])],-1),g={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"提示",-1),y={href:"https://github.com/lyswhut/lx-music-sync-server#readme",target:"_blank",rel:"noopener noreferrer"},I=i("<ul><li>若你配置了SSL证书，则需要将上面第3步 <code>http://IP:PORT</code> 中的 <code>http:</code> 改为 <code>https:</code></li><li>若你使用了域名，则将 <code>IP</code> 换成你的域名</li><li>若你使用的是<code>https</code>，并且对外端口号是<code>443</code>，则可以省略端口号的填写，例如 <code>https://example.com/lxsync</code></li><li>若你使用的是<code>http</code>，并且对外端口号是<code>80</code>，则也可以省略端口号的填写</li></ul>",1),L=i('<h2 id="连接同步服务失败的可能原因" tabindex="-1"><a class="header-anchor" href="#连接同步服务失败的可能原因" aria-hidden="true">#</a> 连接同步服务失败的可能原因</h2><ul><li><p>此功能需要 PC 端与移动端都连接在同一个路由器下的网络才能使用（流量无法使用，可以手机开热点使用）</p></li><li><p>检查防火墙是否放行了软件，具体请百度</p></li><li><p>路由器若开启了 AP 隔离，则此功能无法使用（公司或公共网络可能会开启 AP 隔离）</p></li></ul><h2 id="连接同步服务失败的检查" tabindex="-1"><a class="header-anchor" href="#连接同步服务失败的检查" aria-hidden="true">#</a> 连接同步服务失败的检查</h2><ol><li><p>确保 PC 端的同步服务已启用成功（若连接码、同步服务地址没有内容，则证明服务启动失败，此时看启用同步功能复选框后面的错 误信息自行解决）</p></li><li><p>在手机浏览器地址栏输入<code>http://IP:PORT/hello</code>后回车，若此地址可以打开并显示 <code>Hello~::^-^::~v3~</code>则证明移动端与 PC 端 网络已互通，</p></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>将<code>IP</code>换成 PC 端显示的同步服务地址。</p><p>例如:<code>PORT</code>为 PC 端的端口号</p></div><ol start="3"><li>若移动端无法打开第 2 步的地址，则在 PC 端的浏览器地址栏输入并打开该地址，若可以打开，则要么是被 LX Music PC 端被电脑 防火墙拦截，要 么 PC 端与移动端不在同一个网络下，或者路由器开启了 AP 隔离（一般在公共网络下会出现这种情况）</li></ol><h2 id="关于同步弹窗的说明" tabindex="-1"><a class="header-anchor" href="#关于同步弹窗的说明" aria-hidden="true">#</a> 关于同步弹窗的说明</h2><p>对于首次同步时，若两边的设备的列表不为空，则 PC 端会弹出选择列表同步方式的弹窗，此弹窗内的同步方式仅针对<strong>首次同步</strong></p><p>第一次同步成功后，以后再同步时将会自动根据两边设备的列表内容合并同步，不信你可以在同步完成后断开两边的连接，然后在两边增 删一些歌曲或列表后再同步试试看~😉</p>',9);function R(w,T){const l=n("RouterLink"),c=n("ExternalLinkIcon");return d(),s("div",null,[p,e("div",_,[u,P,e("p",null,[t("目前PC端最新版已可以与移动端最新版进行同步，如果你之前升级过v2.0.0版本，后来用回v1.x.x，现在你可以删除 "),o(l,{to:"/desktop/document/data-path.html"},{default:r(()=>[t("数据目录")]),_:1}),t(" 下的"),m,t("目录，再次升级到最新版本即可")])]),f,e("p",null,[t("如果你有服务器，可以考虑部署我们开发的独立版"),e("a",x,[t("数据同步服务"),o(c)]),t("到你的服务器上，作为私人多端同步服务使用。")]),v,e("p",null,[t("该功能用于连接"),e("a",C,[t("独立版数据同步服务"),o(c)]),t("或同一局域网下另一个启用了“服务端模式”的 PC 端")]),b,e("div",g,[k,e("p",null,[t("若你使用的是"),e("a",y,[t("独立版数据同步服务"),o(c)]),t("，则注意以下几点：")]),I]),L])}const V=a(h,[["render",R],["__file","sync.html.vue"]]);export{V as default};
