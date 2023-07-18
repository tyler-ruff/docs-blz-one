import { defineConfig } from 'vitepress'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../public',
  vite: {
    plugins: [vue(), ssr()]
  },
  title: "Blazed One Docs",
  description: "Blazed One Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
