import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xouerta's blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '关于', link: '/about' },
      {
        text: '前端基础',
        items: [
          { text: "html", link: "/learn/frontpage/html" },
          { text: "css", link: "/learn/frontpage/css1" },
          { text: "js", link: "/learn/frontpage/js1" },
        ]
      },
      {
        text: '框架学习',
        items:[
          { text: "vue", link: "/learn/flameworks/vue" },
          { text: "react", link: "/learn/flameworks/react" },
          { text: "vitepress", link: "/learn/flameworks/vitepress" },
        ]
      },
      {
        text: '后端学习',
        items:[
          { text: "node服务端", link: "/learn/flameworks/vue" },
        ]
      },
      {
        text: 'SSR学习',
        items:[
          { text: "SSR", link: "/learn/ssr/ssr" },
        ]
      },
    ],

    sidebar: [
      {        text: '导航',
        items: [
          { text: '回到主页', link: '/index' },
          { text: '前端学习', link: '/learn/frontpage/html' },
          { text: '前端框架学习', link: '/learn/flameworks/main' },
          { text: 'SSR实战', link: '/learn/ssr/ssr' },
          { text: '后端学习', link: '/learn/backend/backmain' },
          { text: '白日梦编程以及胡思乱想', link: '/others/daydream/daydreamain' },
          { text: '雪花片片--一些随笔', link: '/others/snowflake/snowmain' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
