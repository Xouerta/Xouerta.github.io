// docs/.vitepress/config.js

const base = '/Xouerta.github.io/';

export default {
    base,
    // 站点级选项
    title: "Xouerta的博客", // 网站标题
    description: "Xouterta博客网站", // 网站描述

    themeConfig: {
        nav: [
            { text: '关于', link: '/about' },
            {
                text: '前端基础',
                items: [
                    { text: "html", link: "/learn/frontpage/html" },
                    { text: "css", link: "/learn/frontpage/css" },
                    { text: "js", link: "/learn/frontpage/js" },
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
        sidebar: {
            "/learn/frontpage/html/": {
                text: "html",
                items: [
                    { text: "html", link: "/bigFrontEnd/html/" },
                    { text: "html1", link: "/bigFrontEnd/html/html1" },
                    { text: "html2", link: "bigFrontEnd/html/html2" },
                ],
            },
            "/bigFrontEnd/css/": {
                text: "css",
                items: [
                    { text: "css1", link: "/bigFrontEnd/css/css1" },
                    { text: "css2", link: "/bigFrontEnd/css/css2" },
                ],
            },
            "/bigFrontEnd/js/": {
                text: "js",
                items: [
                    { text: "js1", link: "/bigFrontEnd/js/js1" },
                    { text: "js2", link: "/bigFrontEnd/js/js2" },
                ],
            },
        },
    },
};
