export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bordo-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/bootstrap.min.css', '@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/auth-next'
  ],

  /* ICON: <fa icon="iconadi" /> */
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //  baseURL: process.env.BROWSER_BASE_URL
    baseURL: 'https://bordo-blog.herokuapp.com/api/v1/'
  },

  server: {
    port: 3001
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          // login propertyName: 'access_token' denenebilir
          login: {
            url: 'user/login',
            method: 'post',
            //
            propertyName: 'access_token'
          },
          logout: false,
          user: {
            url: 'user/profile',
            method: 'get',
            propertyName: false
            //
            // appendToken: false
            //
            // property: false
          }
        },
        tokenRequired: true
      }
    },
    rewriteRedirects: false,
    redirect: {
      login: '/signin',
      logout: '/signin',
      home: '/',
      // user: 'user/profile',
      user: 'profile',
      callback: '/'
    },
    tokenType: 'Bearer',
    // storageTokenName: 'nuxt-auth-token'
    storageTokenName: 'auth._token.local'
    // storageTokenName: '_token_expiration.local'
  },

  env: {
    baseUrl: process.env.BROWSER_BASE_URL
    // BASE_URL: 'https://bordo-blog.herokuapp.com/api/v1/',
    // BROWSER_BASE_URL: 'https://bordo-blog.herokuapp.com/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
