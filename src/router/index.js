import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "@/views/PageHome.vue"
import store from "@/store"
import { actionTypes as actionTypesAuth } from "@/store/modules/auth"
import { getItemLS } from "@/helpers/persistanceStorage"

const auth = async (to, from, next) => {
  const credential = getItemLS("credential")
  let userId = null
  let user = null

  if (credential && credential.userId) {
    userId = credential.userId
  }

  if (userId) {
    user = await store.dispatch(actionTypesAuth.fetchCurrentUser, userId)
  }

  if (user) {
    next()
  } else {
    await store.dispatch(actionTypesAuth.logout)
    next({ name: "PageLogin" })
  }
}

const guest = async (to, from, next) => {
  let credential = getItemLS("credential")
  let userId = null
  let user = null

  if (credential && credential.userId) {
    userId = credential.userId
  }

  if (userId) {
    user = await store.dispatch(actionTypesAuth.fetchCurrentUser, userId)
  }

  if (user) {
    next()
  } else {
    await store.dispatch(actionTypesAuth.logout)
    next()
  }
}

const logged = async (to, from, next) => {
  const credential = getItemLS("credential")
  let userId = null
  let user = null

  if (credential && credential.userId) {
    userId = credential.userId
  }

  if (userId) {
    user = await store.dispatch(actionTypesAuth.fetchCurrentUser, userId)
  }

  if (user) {
    next({ name: "PageHome" })
  } else {
    await store.dispatch(actionTypesAuth.logout)
    next()
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,

    beforeEnter: guest,
  },

  {
    path: "/editor",
    name: "PageEditor",
    component: () =>
      import(/* webpackChunkName: "PageEditor" */ "@/views/PageEditor.vue"),

    beforeEnter: auth,
  },

  {
    path: "/feed/:feed",
    name: "PageFeed",
    component: () =>
      import(/* webpackChunkName: "PageFeed" */ "@/views/PageFeed.vue"),

    beforeEnter: guest,
  },

  {
    path: "/settings",
    name: "PageSettings",
    component: () =>
      import(/* webpackChunkName: "PageSettings" */ "@/views/PageSettings.vue"),

    beforeEnter: auth,
  },

  {
    path: "/update",
    name: "PageUpdate",
    component: () =>
      import(/* webpackChunkName: "PageUpdate" */ "@/views/PageUpdate.vue"),

    beforeEnter: auth,
  },

  {
    path: "/tag/:tag",
    name: "PageTag",
    component: () =>
      import(/* webpackChunkName: "PageTag" */ "@/views/PageTag.vue"),

    beforeEnter: guest,
  },

  {
    path: "/users/:user",
    name: "PageUser",
    component: () =>
      import(/* webpackChunkName: "PageUser" */ "@/views/PageUser.vue"),
  },

  {
    path: "/users/:user/favorites",
    name: "PageUserFavorites",
    component: () =>
      import(
        /* webpackChunkName: "PageUserFavorites" */ "@/views/PageUserFavorites.vue"
      ),

    beforeEnter: guest,
  },

  {
    path: "/login",
    name: "PageLogin",
    component: () =>
      import(/* webpackChunkName: "PageLogin" */ "@/views/PageLogin.vue"),

    beforeEnter: logged,
  },

  {
    path: "/register",
    name: "PageRegister",
    component: () =>
      import(/* webpackChunkName: "PageRegister" */ "@/views/PageRegister.vue"),

    beforeEnter: logged,
  },

  {
    path: "/your",
    name: "PageYour",
    component: () =>
      import(/* webpackChunkName: "PageYour" */ "@/views/PageYour.vue"),

    beforeEnter: auth,
  },

  {
    path: "/test",
    name: "PageTest",
    component: () =>
      import(/* webpackChunkName: "PageTest" */ "@/views/PageTest.vue"),

    beforeEnter: guest,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
