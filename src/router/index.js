import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "@/views/PageHome.vue"
// import store from "@/store"
// import { actionTypes as actionTypesAuth } from "@/store/modules/auth"
// import { getItemLS } from "@/helpers/persistanceStorage"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
    // beforeEnter: auth,
  },

  {
    path: "/editor",
    name: "PageEditor",
    component: () =>
      import(/* webpackChunkName: "PageEditor" */ "../views/PageEditor.vue"),

    // beforeEnter: auth,
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

// middleware

// const auth = async (to, from, next) => {
//   // const userId = getItemLS("userId")
//   console.log("middle")
//   const test = false

//   if (test) {
//     // await store.dispatch(actionTypesAuth.fetchCurrentUser, userId)
//     // next()
//   } else {
//     await store.dispatch(actionTypesAuth.logout)
//     next({ name: "PageLogin" })
//   }
// }

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
