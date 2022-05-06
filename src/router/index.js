import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "@/views/PageHome.vue"
import store from "@/store"

import auth from "@/router/middleware/auth"
import guest from "@/router/middleware/guest"
import paramsUser from "@/router/middleware/paramsUser"
import middlewarePipeline from "@/router/middlewarePipeline"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },

  {
    path: "/editor",
    name: "PageEditor",
    component: () =>
      import(/* webpackChunkName: "PageEditor" */ "@/views/PageEditor.vue"),

    meta: {
      middleware: [auth],
    },
  },

  {
    path: "/feed/:feed",
    name: "PageFeed",
    component: () =>
      import(/* webpackChunkName: "PageFeed" */ "@/views/PageFeed.vue"),
  },

  {
    path: "/settings",
    name: "PageSettings",
    component: () =>
      import(/* webpackChunkName: "PageSettings" */ "@/views/PageSettings.vue"),

    meta: {
      middleware: [auth],
    },
  },

  {
    path: "/update",
    name: "PageUpdate",
    component: () =>
      import(/* webpackChunkName: "PageUpdate" */ "@/views/PageUpdate.vue"),

    meta: {
      middleware: [auth],
    },
  },

  {
    path: "/tags/:tag",
    name: "PageTag",
    component: () =>
      import(/* webpackChunkName: "PageTag" */ "@/views/PageTag.vue"),
  },

  {
    path: "/users/:user",
    name: "PageUser",
    component: () =>
      import(/* webpackChunkName: "PageUser" */ "@/views/PageUser.vue"),

    meta: {
      middleware: [paramsUser],
    },
  },

  {
    path: "/users/:user/favorites",
    name: "PageUserFavorites",
    component: () =>
      import(
        /* webpackChunkName: "PageUserFavorites" */ "@/views/PageUserFavorites.vue"
      ),
  },

  {
    path: "/login",
    name: "PageLogin",
    component: () =>
      import(/* webpackChunkName: "PageLogin" */ "@/views/PageLogin.vue"),

    meta: {
      middleware: [guest],
    },
  },

  {
    path: "/register",
    name: "PageRegister",
    component: () =>
      import(/* webpackChunkName: "PageRegister" */ "@/views/PageRegister.vue"),

    meta: {
      middleware: [guest],
    },
  },

  {
    path: "/your",
    name: "PageYour",
    component: () =>
      import(/* webpackChunkName: "PageYour" */ "@/views/PageYour.vue"),

    meta: {
      middleware: [auth],
    },
  },

  {
    path: "/test",
    name: "PageTest",
    component: () =>
      import(/* webpackChunkName: "PageTest" */ "@/views/PageTest.vue"),
  },

  {
    path: "/error",
    name: "PageError",
    component: () =>
      import(/* webpackChunkName: "PageError" */ "@/views/PageError.vue"),

    props: true,
  },

  {
    path: "*",
    redirect: { name: "PageError" },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
