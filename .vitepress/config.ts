import process from 'node:process'
import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItMathjax3 from 'markdown-it-mathjax3'

import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
// import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'

import { generateSidebar } from 'vitepress-sidebar'
import { discordLink, githubRepoLink, siteDescription, siteName, targetDomain } from '../metadata'
import { creatorNames, creatorUsernames } from './creators'
import { sidebar } from './docsMetadata.json'

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  lang: 'zh-CN',
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#ffffff',
    }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
    ['link', {
      rel: 'icon',
      href: '/logo.svg',
      type: 'image/svg+xml',
    }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    ['meta', {
      name: 'author',
      content: creatorNames.join(', '),
    }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          ['markdown', 'knowledge-base', '知识库', 'vitepress', 'obsidian', 'notebook', 'notes', ...creatorUsernames].join(', '),
      },
    ],

    ['meta', {
      property: 'og:title',
      content: siteName,
    }],
    [
      'meta',
      {
        property: 'og:image',
        content: `${targetDomain}/og.png`,
      },
    ],
    ['meta', {
      property: 'og:description',
      content: siteDescription,
    }],
    ['meta', {
      property: 'og:site_name',
      content: siteName,
    }],

    ['meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    }],
    ['meta', {
      name: 'twitter:creator',
      content: creatorUsernames.join(', '),
    }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${targetDomain}/og.png`,
      },
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-NG03TTB5MJ' },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NG03TTB5MJ');`,
    ],

    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#927baf',
      },
    ],
    ['link', {
      rel: 'manifest',
      href: '/site.webmanifest',
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#603cba',
    }],
  ],
  themeConfig: {
    outline: { label: '页面大纲', level: 'deep' },
    darkModeSwitchLabel: '切换主题',
    editLink: {
      pattern: `${githubRepoLink}/tree/main/:path`,
      text: '编辑本页面',
    },
    socialLinks: [
      { icon: 'github', link: githubRepoLink },
      { icon: 'discord', link: discordLink },
    ],
    footer: {
      message: '用 <span style="color: #e25555;">&#9829;</span> 撰写',
      copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> © 2022-PRESENT jackiexiao <br/> <a class="footer-cc-link" target="_blank" href="https://beian.miit.gov.cn/">粤ICP备2022122081号-1</a>',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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

        // Add title ang tags field in frontmatter to search
        // You can exclude a page from search by adding search: false to the page's frontmatter.
        _render(src, env, md) {
          // without `md.render(src, env)`, the some information will be missing from the env.
          let html = md.render(src, env)
          let tagsPart = ''
          let headingPart = ''
          let contentPart = ''
          let fullContent = ''
          const sortContent = () => [headingPart, tagsPart, contentPart] as const
          let { frontmatter, content } = env

          if (!frontmatter)
            return html

          if (frontmatter.search === false)
            return ''

          contentPart = content ||= src

          const headingMatch = content.match(/^#{1} .*/m)
          const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== undefined)

          if (hasHeading) {
            const headingEnd = headingMatch.index! + headingMatch[0].length
            headingPart = content.slice(0, headingEnd)
            contentPart = content.slice(headingEnd)
          }
          else if (frontmatter.title) {
            headingPart = `# ${frontmatter.title}`
          }

          const tags = frontmatter.tags
          if (tags && Array.isArray(tags) && tags.length)
            tagsPart = `Tags: #${tags.join(', #')}`

          fullContent = sortContent().filter(Boolean).join('\n\n')

          html = md.render(fullContent, env)

          return html
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/笔记/' },
      { text: '最近更新', link: '/toc' },
    ],
    // sidebar,
    sidebar: generateSidebar([
      {
        documentRootPath: '笔记',
        // scanStartPath: null,
        resolvePath: '/笔记/',
        // useTitleFromFileHeading: true,
        collapsed: true,
        collapseDepth: 2,
        includeRootIndexFile: true, // 包含根目录下的 index 文件, 默认显示为 index
        useTitleFromFrontmatter: true, // 这样可以使用 frontmatter 中的 title 字段作为标题(而不是 index)
        excludeFiles: ['c-css.md'],
        excludeFolders: ['隐藏'],
      },
      // {
      //   documentRootPath: '独立开发者手册',
      //   // scanStartPath: null,
      //   resolvePath: '/独立开发者手册/',
      //   collapsed: true,
      //   collapseDepth: 2,
      //   // useFolderLinkFromIndexFile: 点击文件夹名称的时候,会跳转到文件夹下的 index 文件
      //   // 如果你只想让你的文件夹名称只能展开或者关闭,而不是链接到什么地方,请不要用这个选项, 比如 vitepress 官网就是这样的
      //   // useFolderLinkFromIndexFile: true,
      //   includeRootIndexFile: true, // 包含根目录下的 index 文件, 默认显示为 index
      //   useTitleFromFrontmatter: true, // 这样可以使用 frontmatter 中的 title 字段作为标题(而不是 index)
      //   // 目前看来排序的最佳方案是这个, 不需要花很多精力维护.没有数字排序的会被自动隐藏. 另外文件夹名称中也要添加数字排序
      //   // sortMenusOrderNumericallyFromTitle: true,
      //   // prefixSeparator: '.',
      //   // removePrefixAfterOrdering: true,
      //   // excludeFiles: ['package.json.md', 'helpful-links.md'],
      //   // excludeFolders: ['examples', 'vitepress-how-to'],
      // },
    ]),
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote)
      md.use(MarkdownItMathjax3)
      md.use(BiDirectionalLinks({
        dir: process.cwd(),
      }))
      md.use(UnlazyImages(), {
        imgElementTag: 'NolebaseUnlazyImg',
      })
      md.use(InlineLinkPreviewElementTransform, {
        tag: 'VPNolebaseInlineLinkPreview',
      })
    },
  },
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
})
