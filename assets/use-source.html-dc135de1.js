import{_ as s,W as t,X as d,Y as e,Z as n,$ as o,a1 as r,E as i}from"./framework-bcad4379.js";const l={},c=e("h4",{id:"环境要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境要求","aria-hidden":"true"},"#"),n(" 环境要求")],-1),u=e("ul",null,[e("li",null,"Node.js 16+")],-1),p=e("h4",{id:"项目环境准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目环境准备","aria-hidden":"true"},"#"),n(" 项目环境准备")],-1),h=e("strong",null,"安装 Node.js 环境（如已安装请跳过）:",-1),_={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"node -v",-1),k=e("strong",null,"安装 Android 开发环境:",-1),v={href:"https://reactnative.dev/docs/environment-setup",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[e("strong",null,"拉取代码:"),n(" 克隆本仓库代码")],-1),f=e("li",null,[e("strong",null,"安装依赖:"),n(" 在项目根目录打开命令行，执行命令："),e("code",null,"npm install"),n("，若此命令执行的过程中报错可以尝试百度报错内容找解决方法 ，或在此处贴出报错日志一起讨论解决")],-1),b=e("li",null,[n("使用 Android Studio 打开项目根目录下的"),e("code",null,"android"),n("文件夹，加载一遍"),e("code",null,"gradle")],-1),x=r(`<h4 id="项目启动步骤" tabindex="-1"><a class="header-anchor" href="#项目启动步骤" aria-hidden="true">#</a> 项目启动步骤</h4><ol><li>启动模拟器或连接真实设备</li><li><strong>启动开发服务器:</strong> 在项目根目录打开命令行，执行命令：<code>npm run ar</code>，若开发服务器意外停止了，可以执行<code>npm start</code>重新启 动</li><li><strong>开发:</strong> 修改项目下的 JS 即可实时看到修改后的效果</li></ol><h4 id="native-开发" tabindex="-1"><a class="header-anchor" href="#native-开发" aria-hidden="true">#</a> Native 开发</h4><p>使用 Android Studio 打开项目根目录下的<code>android</code>文件夹，即可在 Android Studio 内进行安卓代码的开发与调试</p><h4 id="构建安装包" tabindex="-1"><a class="header-anchor" href="#构建安装包" aria-hidden="true">#</a> 构建安装包</h4><p>首先生成安卓签名文件，然后将你的签名文件放在<code>android/app/</code>，然后在<code>android/</code>新建<code>keystore.properties</code>文件，填入你的签名 信息：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">storeFile</span><span class="token punctuation">=</span>
<span class="token key attr-name">storePassword</span><span class="token punctuation">=</span>
<span class="token key attr-name">keyAlias</span><span class="token punctuation">=</span>
<span class="token key attr-name">keyPassword</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后在<code>android/</code>执行命令<code>./gradlew assembleRelease</code>，构建的安装包在<code>android/app/build/outputs/apk/release/</code></p>`,8);function N(y,A){const a=i("ExternalLinkIcon");return t(),d("div",null,[c,u,p,e("ol",null,[e("li",null,[h,n(" 下载"),e("a",_,[n("Node.js"),o(a)]),n("安装结束后，打开命令行输入"),m,n("将会 输出 Node.js 的版本号即表示已安装完成")]),e("li",null,[k,n(" 若你没有安装有安装 Android 开发环境，可以看环境准备 的"),e("a",v,[n("React Native CLI Quickstart"),o(a)]),n("说明")]),g,f,b]),x])}const j=s(l,[["render",N],["__file","use-source.html.vue"]]);export{j as default};
