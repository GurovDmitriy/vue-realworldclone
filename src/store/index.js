import Vue from "vue"
import Vuex from "vuex"

import auth from "/store/modules/auth"
import feed from "/store/modules/feed"
import feedCount from "/store/modules/feedCount"
import feedList from "/store/modules/feedList"
import tag from "/store/modules/tag"
import user from "/store/modules/user"

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
