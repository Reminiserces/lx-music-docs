import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/download/': 'structure',
  '/document/desktop/': [
    {
      text: '常见问题 | 安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '常见问题 | 自定义源',
      icon: 'diy',
      prefix: 'diy-source/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '常见问题 | 播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '常见问题 | 界面显示异常',
      icon: 'screen',
      prefix: 'screen-abnormal/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '常见问题 | v1',
      icon: 'question',
      prefix: 'v1/',
      link: 'v1/',
      children: [
        {
          text: '常见问题 | 列表和歌单',
          icon: 'songlist',
          prefix: 'list/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '常见问题 | 桌面歌词',
          icon: 'lyric',
          prefix: 'lyric/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '常见问题 | 同步和备份',
          icon: 'sync',
          prefix: 'sync-backup/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '常见问题 | 其他问题',
          icon: 'other',
          prefix: 'other/',
          children: 'structure',
          collapsable: true,
        },
      ],
      collapsable: true,
    },
    {
      text: '常见问题 | v2',
      icon: 'question',
      prefix: 'v2/',
      link: 'v2/',
      children: 'structure',
      collapsable: true,
    },
    'data-path.md',
    'hotkey.md',
    'scheme-url.md',
    'run-params.md',
    'license.md',
    'use-source.md',
  ],
  '/document/mobile/': [
    {
      text: '常见问题 | 安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsable: true,
    },
  ],
})
