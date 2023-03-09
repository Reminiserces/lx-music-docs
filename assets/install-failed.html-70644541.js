import{_ as n,N as i,O as o,U as e,a2 as l,Q as t,a7 as r,H as s}from"./framework-fb9db6e1.js";const d={},c=r('<h2 id="windows-安装版安装失败" tabindex="-1"><a class="header-anchor" href="#windows-安装版安装失败" aria-hidden="true">#</a> Windows 安装版安装失败</h2><h3 id="提示安装程序并未成功地运行完成" tabindex="-1"><a class="header-anchor" href="#提示安装程序并未成功地运行完成" aria-hidden="true">#</a> 提示安装程序并未成功地运行完成</h3><p>对于部分电脑出现安装失败的问题，可以做出以下尝试：</p><ul><li><p>若你之前可以安装成功，但现在安装失败，就去<strong>控制面板-程序和功能</strong>或用第三方卸载工具看下有没有之前的版本残留，若同时在 不同路径下安装了多个版本就可能会出现该问题，这种情况卸载掉所有版本重新安装即可</p></li><li><p>清理安装路径下的残留文件</p></li><li><p>清理注册表（建议用清理工具清理）</p></li></ul><h3 id="提示缺少xxx-dll" tabindex="-1"><a class="header-anchor" href="#提示缺少xxx-dll" aria-hidden="true">#</a> 提示缺少<code>xxx.dll</code></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意，系统并没有那么容易出问题，出现此问题可能是软件不完整导致的</p><p>请检查一下你是不是直接把<code>lx-music-desktop.exe</code>直接从压缩包里拖出来了或者没解压完整</p><p>安装版请尝试重新覆盖安装</p><p>绿色版请全部解压后运行</p><p>如果仍然不能运行，请再看下面</p></div><p>这个是电脑缺少某些 dll 导致的，正常的系统是没有这个问题的，可以尝试如下几个解决办法：</p><ul><li><p>以管理员权限打开<code>cmd</code>，输入<code>sfc /scannow</code>回车等待检查完成重启电脑</p></li><li><p>若上面的方法<strong>修复、重启</strong>电脑后仍然不行，就自行百度弹出的<strong>错误信息</strong>看下别人是怎么解决的</p></li></ul><h2 id="mac-os-无法安装或启动软件" tabindex="-1"><a class="header-anchor" href="#mac-os-无法安装或启动软件" aria-hidden="true">#</a> MAC OS 无法安装或启动软件</h2><h3 id="提示-lx-music-desktop-已损坏" tabindex="-1"><a class="header-anchor" href="#提示-lx-music-desktop-已损坏" aria-hidden="true">#</a> 提示 lx-music-desktop 已损坏</h3><p>这是因为软件没有签名，被系统阻止运行</p><p>在终端里输入 <code>sudo xattr -rd com.apple.quarantine /Applications/lx-music-desktop.app</code>，然后输入你的电脑密码即可</p><p>还可以参考：</p>',13),p={href:"http://www.pc6.com/edu/168719.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/for641/article/details/104811538",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"提示无法验证此开发者",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提示无法验证此开发者","aria-hidden":"true"},"#"),l(" 提示无法验证此开发者")],-1),_=e("ol",null,[e("li",null,[e("p",null,"打开系统偏好设置。")]),e("li",null,[e("p",null,"点击安全性与隐私。")]),e("li",null,[e("p",null,"通用选项。")]),e("li",null,[e("p",null,"点击选择下方的‘任何来源’。")])],-1),x=e("p",null,"还可以参考：",-1),f={href:"https://jingyan.baidu.com/article/2a138328b4a9eb464a134ff8.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/weixin_44137575/article/details/115752063",target:"_blank",rel:"noopener noreferrer"};function b(g,w){const a=s("ExternalLinkIcon");return i(),o("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[l("http://www.pc6.com/edu/168719.html"),t(a)])]),e("li",null,[e("a",h,[l("https://blog.csdn.net/for641/article/details/104811538"),t(a)])])]),u,_,x,e("ul",null,[e("li",null,[e("a",f,[l("https://jingyan.baidu.com/article/2a138328b4a9eb464a134ff8.html"),t(a)])]),e("li",null,[e("a",m,[l("https://blog.csdn.net/weixin_44137575/article/details/115752063"),t(a)])])])])}const v=n(d,[["render",b],["__file","install-failed.html.vue"]]);export{v as default};
