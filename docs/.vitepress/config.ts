const sidebar = {
  '/': [
    {
      text: '通用',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/',
        },
      ],
    },
    {
      text: '导航',
    },
    {
      text: '反馈',
    },
    {
      text: '数据录入',
    },
    {
      text: '数据展示',
    },
    {
      text: '布局',
    },
  ],
};
const config = {
  title: '🔨  Smarty-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    siteTitle: 'Hello World',
    demoblock: {
      root: {
        'view-source': 'View source',
        'hide-source': 'Hide source',
        'edit-in-editor': 'Edit in Playground',
        'edit-on-github': 'Edit on GitHub',
        'copy-code': 'Copy code',
        'copy-success': 'Copy success',
        'copy-error': 'Copy error',
      },
      zh: {
        'view-source': '查看源代码',
        'hide-source': '隐藏源代码',
        'edit-in-editor': '在 Playground 中编辑',
        'edit-on-github': '在 Github 中编辑',
        'copy-code': '复制代码',
        'copy-success': '复制成功',
        'copy-error': '复制失败',
      },
    },
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
    appearance: 'dark',
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      // md.use(demoBlockPlugin);
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom',
      });
    },
  },
};

export default config;
