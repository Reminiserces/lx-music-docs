import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as r,a as e,b as t,d as o,w as l,e as i}from"./app-d23ad21d.js";const h={},p=i('<h2 id="仅几首歌曲不能播放" tabindex="-1"><a class="header-anchor" href="#仅几首歌曲不能播放" aria-hidden="true">#</a> 仅几首歌曲不能播放</h2><p><strong>可能是这首歌曲在所有平台中播放都需要收费</strong></p><p><strong>或者只有某一个平台有版权，并且在该平台播放该歌曲需要收费，其他平台没有版权的歌曲在 LX Music 中无法正常播放</strong></p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="通用解决方法" tabindex="-1"><a class="header-anchor" href="#通用解决方法" aria-hidden="true">#</a> 通用解决方法</h2><p>尝试按以下顺序解决：</p>',6),u=e("li",null,[e("p",null,"尝试更新到最新版本")],-1),_=e("li",null,[e("p",null,"尝试切换其他歌曲（或直接搜索该歌曲），若全部歌曲都无法试听与下载则进行下一步")],-1),m=e("li",null,[e("p",null,"尝试到 设置-音乐来源 切换到其他接口（一般修改为测试接口就可以解决）")],-1),f=e("li",null,[e("p",null,"尝试切换网络，比如用手机开热点（所有歌曲都提示请求异常时可通过此方法解决，或等一两天后再试）")],-1),g={href:"https://github.com/lyswhut/lx-music-desktop/issues/5",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("p",null,"若没有在第 5 条链接中的第一条评论中看到接口无法使用的说明，则应该是你网络无法访问接口服务器的问题，如果接口有问题我会 在那里说明。")],-1),k=e("code",null,"http://ts.tempmusics.tk",-1),x=e("strong",null,"404",-1),w=e("strong",null,"DNS",-1),v=i('<h2 id="提示-api-is-not-found或者歌曲为灰色-无法点击" tabindex="-1"><a class="header-anchor" href="#提示-api-is-not-found或者歌曲为灰色-无法点击" aria-hidden="true">#</a> 提示 <code>Api is not found</code>或者歌曲为<code>灰色</code>,无法点击</h2><p>在<code>设置</code>→<code>音乐来源</code>修改为测试接口</p><h2 id="所有歌曲都提示-请求异常😮-可以多试几次-若还是不行就换一首吧。。。" tabindex="-1"><a class="header-anchor" href="#所有歌曲都提示-请求异常😮-可以多试几次-若还是不行就换一首吧。。。" aria-hidden="true">#</a> 所有歌曲都提示 <code>请求异常😮，可以多试几次，若还是不行就换一首吧。。。</code></h2><div class="hint-container danger"><p class="hint-container-title">警告</p><p>请注意，国内的校园网以及公司网络有可能屏蔽国外网站的请求，LX Music 的 api 接口在国外，使用此网络无法播放属于正常现象</p><p>尝试更换网络，如切换到移动网络，若移动网络还是不行则尝试开关下手机的飞行模式后再试</p><p>若使用家庭网络的话，可尝试将光猫断电 5 分钟左右再通电联网后播放。</p></div><h3 id="相同网络环境下-以前可以使用-然后突然不可用了" tabindex="-1"><a class="header-anchor" href="#相同网络环境下-以前可以使用-然后突然不可用了" aria-hidden="true">#</a> 相同网络环境下，以前可以使用，然后突然不可用了</h3><p>先查看接口链接是否可以访问，如果可以访问，那么大概率被 ban-ip 了</p><p>LX Music 的接口在发现异常请求时会临时封禁用户的 ip</p><p>你可以：</p><ol><li>重启网络设备更换 WAN ip</li><li>更换网络环境（比如使用流量等）</li><li>等几天等待接口自动解封你的 ip</li></ol><h2 id="提示-getaddrinfo-eai-again-或-无法连接到服务器" tabindex="-1"><a class="header-anchor" href="#提示-getaddrinfo-eai-again-或-无法连接到服务器" aria-hidden="true">#</a> 提示 <code>getaddrinfo EAI_AGAIN ...</code> 或 <code>无法连接到服务器</code></h2><p><strong>请先尝试更新最新版!!!!!</strong></p><p>尝试在在浏览器打开这个地址<code>http://ts.tempmusics.tk</code>，浏览器显示 404 是正常的，如果不是 404 那就证明所在网络无法访问接口 服务器。若网页无法打开或打开来不是 404，则可能是 DNS 的问题，可以尝试上面的方法。</p><h2 id="windows-版所有歌曲都提示-音频加载错误-5秒后切换下一首" tabindex="-1"><a class="header-anchor" href="#windows-版所有歌曲都提示-音频加载错误-5秒后切换下一首" aria-hidden="true">#</a> Windows 版所有歌曲都提示 <code>音频加载错误，5秒后切换下一首</code></h2><p><strong>请先尝试更新最新版!!!!!</strong></p><p>尝试关闭 Internet 选项 的代理设置。</p><p>如果你不知道怎么做，可以尝试按以下步骤去做：</p><p>按<kbd>windows</kbd>+<kbd>r</kbd>键打开“运行”窗口，输入<code>inetcpl.cpl</code>后回车，在打开的 Internet 选项 对话框中，切换到 连接 -&gt; 局域网设置，在弹出的新窗口中把代理服务器下的勾去掉，如果自动配置下的勾也有被勾选，那么建议也去掉，最后按确定关闭所有 弹窗。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果还是无法解决，那么请更新至最新版再尝试，我们在 1.22.0 的版本中修复了:</p><p><code>修复若配置了http_proxy环境变量时，会意外使用此代理配置的问题</code></p></div>',18),y={href:"https://github.com/lyswhut/lx-music-desktop/issues/873#issuecomment-1146945724",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/lyswhut/lx-music-desktop/compare/v1.21.0...v1.22.0",target:"_blank",rel:"noopener noreferrer"};function L(I,A){const n=s("ExternalLinkIcon"),a=s("RouterLink");return c(),r("div",null,[p,e("ol",null,[u,_,m,f,e("li",null,[e("p",null,[t("若还不行请到这个链接查看详情："),e("a",g,[t("https://github.com/lyswhut/lx-music-desktop/issues/5"),o(n)])])]),b]),e("p",null,[t("想要知道是不是自己网络的问题可以看看"),k,t("能不能在浏览器打开，浏览器显示 "),x,t(" 是正常的，如果不是 404 那就证明所在网络无法访问接口服务器。若网页无法打开或打来不是 404，则应该是 "),w,t(" 的问题，可以尝 试"),o(a,{to:"/desktop/document/common/revise-dns-host.html"},{default:l(()=>[t("修改 DNS 和 HOST")]),_:1})]),v,e("blockquote",null,[e("p",null,[t("来源："),e("a",y,[t("https://github.com/lyswhut/lx-music-desktop/issues/873#issuecomment-1146945724"),o(n)])])]),e("blockquote",null,[e("p",null,[t("1.22.0 更新日志："),e("a",N,[t("https://github.com/lyswhut/lx-music-desktop/compare/v1.21.0...v1.22.0"),o(n)])])])])}const V=d(h,[["render",L],["__file","cannot-play.html.vue"]]);export{V as default};
