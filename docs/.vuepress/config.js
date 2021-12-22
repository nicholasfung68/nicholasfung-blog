module.exports = {
  title: 'Kadima',
  description: 'Nicholas Fung的博客',
  head: [ // 注入到当前页面的HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/handinhand.png' }], // 增加一个自定义的favicon（网页标签的图标）
  ],
  base: '/', // 这是部署到github相关的配置
  docsDir: 'docs',
  markdown: {
    lineNumbers: false // 代码块不显示行号
  },
  themeConfig: {
    smoothScroll: true,
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '文章', link: '/blogs/demo.md' },
      { text: 'github', link: 'https://github.com/nicholasfung68' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
}
