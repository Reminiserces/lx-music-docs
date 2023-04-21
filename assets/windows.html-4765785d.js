import{_ as d,X as r,Y as a,Z as e,$ as o,a0 as n,a1 as s,C as c}from"./framework-626c655f.js";const i={},l=e("h3",{id:"windows-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-7","aria-hidden":"true"},"#"),o(" Windows 7")],-1),h=e("h3",{id:"界面异常-消失又出现",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#界面异常-消失又出现","aria-hidden":"true"},"#"),o(" 界面异常（消失又出现）")],-1),p={href:"https://www.electronjs.org/docs/latest/tutorial/window-customization#limitations",target:"_blank",rel:"noopener noreferrer"},u=s('<blockquote><p>在 windows 操作系统上, 当 DWM 被禁用时, 透明窗口将无法工作。</p></blockquote><p>因此，当 win7 没有使用<strong>Aero</strong>主题时界面将会显示异常，开启 AERO 的方法请自行百度：<code>win7开启Aero效果</code>（开启后可看到任务栏 变透明）。</p><p>从<code>0.14.0</code>版本起不再强制要求开启透明效果，若你实在不想开启（若非电脑配置太低，墙裂建议开启！），可通过添加运行参 数<code>-dt</code>来运行程序即可。该参数的作用是用来控制程序是否使用非透明窗口运行。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>启用<strong>Aero</strong>主题后，若软件出现黑边框，则重启软件即可恢复正常。</p><p>启用<strong>Aero</strong>主题后，如果问题还未解决，请尝试添加启动参数<code>-dt</code>(不懂怎么添加请自行百度)</p></div><h3 id="软件启动后-界面无法显示" tabindex="-1"><a class="header-anchor" href="#软件启动后-界面无法显示" aria-hidden="true">#</a> 软件启动后，界面无法显示</h3><p>对于软件启动后，可以在任务栏看到软件，但软件界面在桌面上无任何显示，或者整个界面偶尔闪烁的情况。</p>',6),_={href:"https://github.com/electron/electron/issues/19569#issuecomment-522231083",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[o("解决办法：下载"),e("code",null,".NET Framework 4.7.1"),o("或"),e("strong",null,"更高"),o("版本安装即可(建议安装最新版，若安装过程中遇到问题可尝试自行百度解决)。")],-1),m={href:"https://dotnet.microsoft.com/download/dotnet-framework",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("下载"),e("code",null,"Runtime(运行时)"),o("版即可，安装完成后可能需要重启才生效.")],-1),b=e("h3",{id:"桌面歌词字体列表为空",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#桌面歌词字体列表为空","aria-hidden":"true"},"#"),o(" 桌面歌词字体列表为空")],-1),g=e("p",null,"Windows 7 系统系统需要安装 Powershell 5.1 及以上版本才可正常获取系统字体列表。",-1),x=e("p",null,[o("想要查看当前 Powershell 版本可以在 Powershell 窗口输入命令："),e("code",null,"Get-Host")],-1),k={href:"https://github.com/PowerShell/PowerShell/releases",target:"_blank",rel:"noopener noreferrer"},v=s('<h2 id="windows-10-11" tabindex="-1"><a class="header-anchor" href="#windows-10-11" aria-hidden="true">#</a> Windows 10 &amp; 11</h2><h3 id="界面异常" tabindex="-1"><a class="header-anchor" href="#界面异常" aria-hidden="true">#</a> 界面异常</h3><p>尝试添加运行参数 <code>--disable-gpu-sandbox</code> 启动，例如：<code>.\\lx-music-desktop.exe --disable-gpu-sandbox</code>，添加方法可参阅下文 。没有遇到问题不要使用此参数！</p><p>若以上方法无效，则尝试将 <code>--disable-gpu-sandbox</code> 逐个换成以下参数启动，直到恢复正常为止：</p><ul><li><p><code>--no-sandbox</code></p></li><li><p><code>-dha</code></p></li><li><p><code>--disable-gpu</code></p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>参数添加方法（更加详细的方法自行百度“给快捷方式加参数”）:</p><p>-快捷方式：在快捷方式上右键-属性-在目标后面先加上一个<code>空格</code>，然后在后面加上<code>-dt</code>。（若有引号请先删除）</p><p>-命令行运行：在软件安装目录下运行 cmd，然后输入此命令<code>.\\lx-music-desktop.exe -dt</code></p><p>v1.6.0 及之后的版本才支持<code>-dha</code>参数</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这些参数会禁用程序的某些安全特性或降低程序性能，没有遇到问题不要使用它们！</p></div>',7);function E(P,A){const t=c("ExternalLinkIcon");return r(),a("div",null,[l,h,e("p",null,[o("由于软件默认使用了透明窗口，根据 Electron 官方文档 的"),e("a",p,[o("说明"),n(t)]),o("：")]),u,e("p",null,[o("原始问题看："),e("a",_,[o("https://github.com/electron/electron/issues/19569#issuecomment-522231083"),n(t)])]),w,e("p",null,[o("微软官方下载地址："),e("a",m,[o("https://dotnet.microsoft.com/download/dotnet-framework"),n(t)])]),f,b,g,x,e("p",null,[o("最新 Powershell 安装包可以去官方 "),e("a",k,[o("Github releases"),n(t)]),o(" 页下载，安装过程中 若出现错误，请自行按照提示或者百度/Google/Bing 解决。")]),v])}const B=d(i,[["render",E],["__file","windows.html.vue"]]);export{B as default};
