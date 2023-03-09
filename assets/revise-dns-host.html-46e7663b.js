import{_ as e,N as o,O as i,a7 as d}from"./framework-fb9db6e1.js";const c={},p=d('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>改完 DNS 或 HOST 后可能需要重启软件或电脑才会生效</p></div><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2><p>DNS 修改方法(7~8 为可选操作):</p><ol><li><p><kbd>windows</kbd>+<kbd>e</kbd>打开资源管理器，在上方导航栏中输入控制面板然后回车（能打开控制面板就行）;</p></li><li><p>将右上角查看方式修改为大图标，找到<code>网络和共享中心</code>;</p></li><li><p>找到你正在使用的网络，点击连接后的蓝色字体<code>[一般为以太网 XXX 或者 WLAN(WIFI 名称)]</code>;</p></li><li><p>弹出的窗口中，点击属性，双击<code>internet 协议版本4(TCP/IPv4)</code>;</p></li><li><p>将<code>自动获得 DNS 地址</code>修改为<code>使用下面的DNS地址</code>;</p></li><li><p>首选服务器填写<code>8.8.8.8</code>备用服务器填写<code>223.6.6.6 </code>。</p></li><li><p><kbd>windows</kbd>+<kbd>r</kbd>输入 cmd 回车运行。</p></li><li><p>输入<code>ipconfig /flushdns</code>回车运行。</p></li></ol><p>HOST 修改方法:</p><ol><li><p>打开<code>C:\\WINDOWS\\system32\\drivers\\etc</code>;</p></li><li><p>用记事本打开里面的<code>hosts</code>文件（无后缀）;</p></li><li><p>在下面加上：</p><p><code> 97.64.37.235 ts.tempmusics.tk</code></p><p><code>97.64.37.235 tm.tempmusics.tk</code></p></li><li><p>保存</p></li></ol><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h2><p>没有MacOS电脑，欢迎PR</p><p>DNS 修改方法:</p><ol><li>不知道</li></ol><p>HOST 修改方法:</p><ol><li><p>打开系统偏好设置，选择Hosts</p></li><li><p>IP输入<code>97.64.37.235</code>，域名输入<code>ts.tempmusics.tk</code><br> IP输入<code>97.64.27.235</code>，域名输入<code>tm.tempmusics.tk</code></p></li><li><p>保存</p></li></ol>',12),l=[p];function s(t,n){return o(),i("div",null,l)}const r=e(c,[["render",s],["__file","revise-dns-host.html.vue"]]);export{r as default};
