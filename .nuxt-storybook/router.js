import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe2825fc = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _682d5782 = () => interopDefault(import('..\\pages\\createblog.vue' /* webpackChunkName: "pages/createblog" */))
const _3a0f89c2 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _415408fa = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _17801bc3 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _2c167239 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _6f2480cf = () => interopDefault(import('..\\pages\\test2.vue' /* webpackChunkName: "pages/test2" */))
const _61bc2a2d = () => interopDefault(import('..\\pages\\userprofile.vue' /* webpackChunkName: "pages/userprofile" */))
const _84bcbb50 = () => interopDefault(import('..\\pages\\dashboard\\charts.vue' /* webpackChunkName: "pages/dashboard/charts" */))
const _74169c76 = () => interopDefault(import('..\\pages\\blogs\\_blogid\\index.vue' /* webpackChunkName: "pages/blogs/_blogid/index" */))
const _f03ada7e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _fe2825fc,
    name: "blogs"
  }, {
    path: "/createblog",
    component: _682d5782,
    name: "createblog"
  }, {
    path: "/dashboard",
    component: _3a0f89c2,
    name: "dashboard"
  }, {
    path: "/reset-password",
    component: _415408fa,
    name: "reset-password"
  }, {
    path: "/signin",
    component: _17801bc3,
    name: "signin"
  }, {
    path: "/signup",
    component: _2c167239,
    name: "signup"
  }, {
    path: "/test2",
    component: _6f2480cf,
    name: "test2"
  }, {
    path: "/userprofile",
    component: _61bc2a2d,
    name: "userprofile"
  }, {
    path: "/dashboard/charts",
    component: _84bcbb50,
    name: "dashboard-charts"
  }, {
    path: "/blogs/:blogid",
    component: _74169c76,
    name: "blogs-blogid"
  }, {
    path: "/",
    component: _f03ada7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
