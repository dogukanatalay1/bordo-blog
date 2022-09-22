import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53242156 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _fceae4da = () => interopDefault(import('..\\pages\\createblog.vue' /* webpackChunkName: "pages/createblog" */))
const _8ad3b51a = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _6650784e = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _33bb1f17 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _4851758d = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _fedc7a0a = () => interopDefault(import('..\\pages\\test2.vue' /* webpackChunkName: "pages/test2" */))
const _60421b59 = () => interopDefault(import('..\\pages\\userprofile.vue' /* webpackChunkName: "pages/userprofile" */))
const _4c7dfaf8 = () => interopDefault(import('..\\pages\\dashboard\\charts.vue' /* webpackChunkName: "pages/dashboard/charts" */))
const _981bf2bc = () => interopDefault(import('..\\pages\\blogs\\_blogid\\index.vue' /* webpackChunkName: "pages/blogs/_blogid/index" */))
const _cd605626 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _53242156,
    name: "blogs"
  }, {
    path: "/createblog",
    component: _fceae4da,
    name: "createblog"
  }, {
    path: "/dashboard",
    component: _8ad3b51a,
    name: "dashboard"
  }, {
    path: "/reset-password",
    component: _6650784e,
    name: "reset-password"
  }, {
    path: "/signin",
    component: _33bb1f17,
    name: "signin"
  }, {
    path: "/signup",
    component: _4851758d,
    name: "signup"
  }, {
    path: "/test2",
    component: _fedc7a0a,
    name: "test2"
  }, {
    path: "/userprofile",
    component: _60421b59,
    name: "userprofile"
  }, {
    path: "/dashboard/charts",
    component: _4c7dfaf8,
    name: "dashboard-charts"
  }, {
    path: "/blogs/:blogid",
    component: _981bf2bc,
    name: "blogs-blogid"
  }, {
    path: "/",
    component: _cd605626,
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
