import{_ as e,N as i,O as a,a3 as n}from"./framework-5a0deb52.js";const d={},l=n(`<h2 id="添加本地歌曲方式方式" tabindex="-1"><a class="header-anchor" href="#添加本地歌曲方式方式" aria-hidden="true">#</a> 添加本地歌曲方式方式：</h2><h3 id="右击列表名称-选择添加本地歌曲" tabindex="-1"><a class="header-anchor" href="#右击列表名称-选择添加本地歌曲" aria-hidden="true">#</a> 右击列表名称，选择<strong>添加本地歌曲</strong></h3><h3 id="格式支持状态" tabindex="-1"><a class="header-anchor" href="#格式支持状态" aria-hidden="true">#</a> 格式支持状态：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>支持的本地音乐格式：

  1.mp3
  2.flac
  3.ogg
  4.wav

兼容的本地音乐格式：
含义：可以导入，但是不可以离线播放的格式
在播放时会匹配在线源的音频，如果匹配失败会报错source not found
  1.wma
  2.m4a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地音乐歌词及封面相关" tabindex="-1"><a class="header-anchor" href="#本地音乐歌词及封面相关" aria-hidden="true">#</a> 本地音乐歌词及封面相关：</h2><h3 id="歌词相关" tabindex="-1"><a class="header-anchor" href="#歌词相关" aria-hidden="true">#</a> 歌词相关：</h3><ol><li><p>软件在播放本地音乐时会自动匹配与歌曲文件相同目录下的同名lrc歌词</p></li><li><p>如没有，软件会尝试匹配音频文件中嵌入的歌词</p></li><li><p>如果还是没有，则会在线搜索匹配的歌词</p></li></ol><h3 id="封面相关" tabindex="-1"><a class="header-anchor" href="#封面相关" aria-hidden="true">#</a> 封面相关</h3><ol><li><p>软件会尝试匹配本地音频文件中的封面</p></li><li><p>如没有，则会在线搜索进行封面匹配</p></li></ol>`,9),r=[l];function s(c,t){return i(),a("div",null,r)}const o=e(d,[["render",s],["__file","local-music.html.vue"]]);export{o as default};
