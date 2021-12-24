module.exports = {
  title: 'Kadima',
  description: 'Nicholas Fung的博客',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo/handinhand.png' }],
  ],
  base: '/',
  docsDir: 'docs',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    search: false,
    smoothScroll: true,
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/notes/index.md' },
      { text: 'github', link: 'https://github.com/nicholasfung68' }
    ],
    sidebar: getSidebar(),
    sidebarDepth: 2
  }
}

function getSidebar() {
  const sideBarArr = [
    {
      title: '网络',
      children: [
        { title: 'network', path: '/notes/network/http.md' }
      ]
    },
    {
      title: '浏览器',
      children: [
        { title: 'browser', path: '/notes/browser/browser.md' }
      ]
    },
    {
      title: '算法',
      children: [
        { title: 'algorithm', path: '/notes/algorithm/algorithm.md' }
      ]
    },
    {
      title: 'Vue',
      children: [
        { title: 'Vue路由解耦', path: '/notes/vue/vue-routing-decoupling.md' },
        { title: '亿点点Vue知识', path: '/notes/vue/some-vue-knowledges.md' },
      ]
    },
    // {
    //   title: '面试',
    //   children: [
    //     { title: 'interview', path: '/notes/interview/interview.md' }
    //   ]
    // }
  ]

  for (item of sideBarArr) {
    item.collapsable = false
  }

  return sideBarArr
}
