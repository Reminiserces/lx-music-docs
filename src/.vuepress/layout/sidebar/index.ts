import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/desktop/': [
    { text: '常见问题', icon: 'question', link: '/desktop/document/' },
    { text: '主页', icon: 'home', link: '/' },
    { text: '仓库', icon: 'github', link: 'https://github.com/lyswhut/lx-music-desktop' },
    'changLog.md',
    'hotkey.md',
    'scheme-url.md',
    'run-params.md',
    'license.md',
    'use-source.md',
  ],
  '/desktop/document/': [
    { text: '返回', icon: 'question', link: '/desktop/' },
    { text: '通用', icon: 'common', prefix: 'common/', children: 'structure', collapsible: true },
    { text: '下载', icon: 'download', prefix: 'download/', children: 'structure', collapsible: true },
    { text: '播放', icon: 'play', prefix: 'play/', children: 'structure', collapsible: true },
    { text: '安装', icon: 'package', prefix: 'install/', children: 'structure', collapsible: true },
    { text: '自定义源', icon: 'diy', prefix: 'source/', children: 'structure', collapsible: true },
    { text: '本地列表', icon: 'local', prefix: 'list/', children: 'structure', collapsible: true },
    { text: '外部歌单', icon: 'songlist', prefix: 'songlist/', children: 'structure', collapsible: true },
    { text: '桌面歌词', icon: 'lyric', prefix: 'desktop-lyric/', children: 'structure', collapsible: true },
    { text: '同步与备份', icon: 'sync', prefix: 'sync-backup/', children: 'structure', collapsible: true },
    { text: '界面显示异常', icon: 'screen', prefix: 'screen-abnormal/', children: 'structure', collapsible: true },
    { text: '其他问题', icon: 'other', prefix: 'other/', children: 'structure', collapsible: true },
    'data-path',
  ],
  '/mobile/': [
    { text: '常见问题', icon: 'question', link: '/mobile/document/' },
    { text: '主页', icon: 'home', link: '/' },
    { text: '仓库', icon: 'github', link: 'https://github.com/lyswhut/lx-music-mobile' },
    'update.md',
    'statusbar-lyric.md',
    'license.md',
    'use-source.md',
  ],
  '/mobile/document/': [
    { text: '返回', icon: 'question', link: '/mobile/' },
    { text: '通用', icon: 'common', prefix: 'common/', children: 'structure', collapsible: true },
    { text: '下载', icon: 'download', prefix: 'download/', children: 'structure', collapsible: true },
    { text: '播放', icon: 'play', prefix: 'play/', children: 'structure', collapsible: true },
    { text: '本地列表', icon: 'local', prefix: 'list/', children: 'structure', collapsible: true },
    { text: '外部歌单', icon: 'songlist', prefix: 'songlist/', children: 'structure', collapsible: true },
    { text: '同步与备份', icon: 'sync', prefix: 'sync-backup/', children: 'structure', collapsible: true },
    { text: '其他问题', icon: 'other', prefix: 'other/', children: 'structure', collapsible: true },
    'data-path.md',
  ],
})
