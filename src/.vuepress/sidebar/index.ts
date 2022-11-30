import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/document/desktop/': [
    {
      text: 'v1.x.x',
      icon: 'question',
      prefix: 'v1/',
      children: [
        {
          text: '列表和歌单',
          icon: 'songlist',
          prefix: 'list/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '桌面歌词',
          icon: 'lyric',
          prefix: 'lyric/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '同步和备份',
          icon: 'sync',
          prefix: 'sync-backup/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '其他问题',
          icon: 'other',
          prefix: 'other/',
          children: 'structure',
          collapsable: true,
        },
      ],
      collapsable: true,
    },
    {
      text: 'v2.x.x',
      icon: 'question',
      prefix: 'v2/',
      children: [
        {
          text: '列表和歌单',
          icon: 'songlist',
          prefix: 'list/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '桌面歌词',
          icon: 'lyric',
          prefix: 'lyric/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '同步和备份',
          icon: 'sync',
          prefix: 'sync-backup/',
          children: 'structure',
          collapsable: true,
        },
        {
          text: '其他问题',
          icon: 'other',
          prefix: 'other/',
          children: 'structure',
          collapsable: true,
        },
        'changLog.md',
        'localMusic.md',
      ],
      collapsable: true,
    },
    {
      text: '播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '界面显示异常',
      icon: 'screen',
      prefix: 'screen-abnormal/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '自定义源',
      icon: 'diy',
      prefix: 'diy-source/',
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
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list-songlist/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsable: true,
    },
    'data-path.md',
    'update.md',
    'statusbar-lyric.md',
    'license.md',
    'use-source.md',
  ],
})
