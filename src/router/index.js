import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "../views/PageHome.vue"

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
      import(/* webpackChunkName: "PageEditor" */ "../views/PageEditor.vue"),
  },

  {
    path: "/feed/:feed",
    name: "PageFeed",
    component: () =>
      import(/* webpackChunkName: "PageFeed" */ "../views/PageFeed.vue"),
  },

  {
    path: "/settings",
    name: "PageSettings",
    component: () =>
      import(
        /* webpackChunkName: "PageSettings" */ "../views/PageSettings.vue"
      ),
  },

  {
    path: "/update",
    name: "PageUpdate",
    component: () =>
      import(/* webpackChunkName: "PageUpdate" */ "../views/PageUpdate.vue"),
  },

  {
    path: "/tag/:tag",
    name: "PageTag",
    component: () =>
      import(/* webpackChunkName: "PageTag" */ "../views/PageTag.vue"),
  },

  {
    path: "/user/:user",
    name: "PageUser",
    component: () =>
      import(/* webpackChunkName: "PageUser" */ "../views/PageUser.vue"),
  },

  {
    path: "/user/:user/favorites",
    name: "PageUserFavorites",
    component: () =>
      import(
        /* webpackChunkName: "PageUserFavorites" */ "../views/PageUserFavorites.vue"
      ),
  },

  {
    path: "/login",
    name: "PageLogin",
    component: () =>
      import(/* webpackChunkName: "PageLogin" */ "../views/PageLogin.vue"),
  },

  {
    path: "/register",
    name: "PageRegister",
    component: () =>
      import(
        /* webpackChunkName: "PageRegister" */ "../views/PageRegister.vue"
      ),
  },

  {
    path: "/your",
    name: "PageYour",
    component: () =>
      import(/* webpackChunkName: "PageYour" */ "../views/PageYour.vue"),
  },

  {
    path: "/test",
    name: "PageTest",
    component: () =>
      import(/* webpackChunkName: "PageTest" */ "../views/PageTest.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
