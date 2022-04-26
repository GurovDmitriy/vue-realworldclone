import Vue from "vue"
import Vuex from "vuex"

import auth from "/store/modules/modules/auth"
import feed from "/store/modules/modules/feed"
import feedCount from "/store/modules/modules/feedCount"
import feedList from "/store/modules/modules/feedList"
import tag from "/store/modules/modules/tag"
import user from "/store/modules/modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    feedCount,
    feedList,
    tag,
    user,
  },
})
