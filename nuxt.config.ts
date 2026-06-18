export default defineNuxtConfig({
  compatibilityDate: '2026-06-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],

  app: {
    head: {
      titleTemplate: '%s · editava',
      title: 'Editorial AI personas with verified sources',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'editava — editorial AI personas studio. Patient teachers, sharp critics, structural analysts, cycle-aware observers. Powered by CoreProse Editorial Intelligence.' },
        { property: 'og:site_name', content: 'editava' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'editava — Editorial AI personas with verified sources' },
        { property: 'og:description', content: 'Patient teachers, sharp critics, structural analysts, cycle-aware observers — for AI, tech, and crypto editorial work.' },
        { property: 'og:url', content: 'https://personas.coreprose.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'canonical', href: 'https://personas.coreprose.com' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  content: {
    // Blog posts live under content/blog/*.md
    documentDriven: false,
    highlight: {
      theme: 'github-dark',
    },
  },

  runtimeConfig: {
    public: {
      kbFeedUrl: 'https://www.coreprose.com/api/public/kb-feed',
      coreproseUrl: 'https://www.coreprose.com',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/personas/ada', '/personas/marek', '/personas/jules', '/personas/sven', '/blog'],
    },
  },
})
