import dotenv from 'dotenv';
dotenv.config();

export default {
  target: 'static',
  server: {
    port: 4000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'osu!activity',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'All we care about is PP. Displays all PP plays from a bunch of french mania players.' },
    ],
    link: [
      { rel: 'icon', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/icons/favicon-16x16.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
    services: {
      firestore: true,
      database: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
  ],

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['relativeTime', 'utc']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  hooks: {
    generate: {
      async done(builder) {
        const appModule = await import('./.nuxt/firebase/app.js')
        const { session } = await appModule.default(
          builder.options.firebase.config,
          {
            res: null,
          }
        )
        try {
          session.database().goOffline()
        } catch (e) { }
        try {
          session.firestore().terminate()
        } catch (e) { }
      },
    },
  },
}
