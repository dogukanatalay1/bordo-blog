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
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/scss/main.scss',
    '@/assets/scss/abstracts/_variables.scss'
  ],

  storybook: {
    // Options
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/TiptapVuetify' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/auth-next',
    'v-sanitize/nuxt',
    'bootstrap-vue/nuxt'
  ],
  sanitize: {
    /* options */
    // defaultOptions: {
    //   allowedTags: ['a', 'b'],
    //   allowedAttributes: {
    //     a: ['href']
    //   }
    // }
  },

  /* ICON: <fa icon="iconadi" /> */
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  // -
  // Runtime config allows passing dynamic config and environment variables to the nuxt context.
  publicRuntimeConfig: {
    // server and client both using
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    // server only, overrides publidRuntimeConfig
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //  baseURL: process.env.BROWSER_BASE_URL
    baseURL: 'https://bordo-blog.herokuapp.com/api/v1'
  },

  server: {
    port: 4000
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          required: true,
          type: 'bearer'
        },
        user: {
          property: ''
        },
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post'
          },
          tokenRequired: true,
          logout: { url: 'users/logout', method: 'delete' },
          user: {
            url: '/users/profile',
            method: 'get'
          }
        }
      }
    }
  },

  env: {
    baseUrl: process.env.BROWSER_BASE_URL
    // BASE_URL: 'https://bordo-blog.herokuapp.com/api/v1/',
    // BROWSER_BASE_URL: 'https://bordo-blog.herokuapp.com/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
  }
}
