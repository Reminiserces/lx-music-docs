import{_ as r,W as a,X as t,Y as i,Z as e,$ as c,a2 as s,a1 as o,E as d}from"./framework-bcad4379.js";const n={},p=i("h2",{id:"lx-music数据库说明",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#lx-music数据库说明","aria-hidden":"true"},"#"),e(" LX Music数据库说明")],-1),u=i("div",{class:"custom-container danger"},[i("p",{class:"custom-container-title"},"警告"),i("p",null,"乱修改数据库可能导致数据丢失，请谨慎")],-1),_=o('<h2 id="数据库结构" tabindex="-1"><a class="header-anchor" href="#数据库结构" aria-hidden="true">#</a> 数据库结构</h2><p>lx.data.db</p><ul><li>db_info</li><li>download_list<br> 下载列表</li><li>lyric<br> 歌词数据</li><li>music_info_other_source<br> 换源歌曲数据</li><li>music_url<br> 音乐链接数据</li><li>my_list<br> 列表信息数据</li><li>my_list_music_info<br> 列表歌曲数据</li><li>my_list_music_info_order<br> 列表歌曲id</li><li>sqlite_sequence</li></ul><h3 id="lyric" tabindex="-1"><a class="header-anchor" href="#lyric" aria-hidden="true">#</a> lyric</h3><p>歌词数据</p><p>id: 歌曲id</p><p>source: 歌词状态，可能为</p><ul><li>raw(未更改)</li><li>edited(已更改)</li></ul><p>type: 歌词类型，可能为</p><ul><li>lyric(普通lrc歌词)</li><li>tlyric(翻译歌词)</li><li>rlyric(罗马音歌词)</li><li>lxlyric(逐字歌词)</li></ul><p>text: 经过base64编码的歌词文本</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>除了lxlrc项之外其他歌词全部遵循lrc语法</p><p>lxlrc的语法为</p><p>[句子时间点]&lt;该字对于该句子的开始时间,该字持续时间&gt;</p></div><h3 id="music-info-other-source" tabindex="-1"><a class="header-anchor" href="#music-info-other-source" aria-hidden="true">#</a> music_info_other_source</h3><p>换源歌曲信息</p><p>source_id: 要换源的歌曲</p><p>id: 换源目标歌曲</p><p>source: 换源目标歌曲源</p><p>name: 歌曲名</p><p>singer: 歌手</p><p>meta: 歌曲meta信息</p><p>order: 顺序</p><h3 id="music-url" tabindex="-1"><a class="header-anchor" href="#music-url" aria-hidden="true">#</a> music_url</h3><p>id: 歌曲id，源_id_品质</p><p>url: 歌曲URL</p>',24);function h(m,f){const l=d("RouterLink");return a(),t("div",null,[p,u,i("p",null,[e("存储位置： "),c(l,{to:"/desktop/document/data-path.html"},{default:s(()=>[e("数据目录")]),_:1}),e(" / lxDatas / lx.data.db")]),_])}const b=r(n,[["render",h],["__file","db-info.html.vue"]]);export{b as default};
