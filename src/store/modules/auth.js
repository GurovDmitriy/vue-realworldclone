import auth from "@/api/auth"
import { setItemLS } from "@/helpers/persistanceStorage"

export const getterTypes = {
  getCurrentUser: "[auth] getCurrentUser",
  getIsLoggedIn: "[auth] getIsLoggedIn",
  getIsAnonymous: "[auth] getIsAnonymous",
  getIsAdmin: "[auth] getIsAdmin",
}

export const mutationTypes = {
  setCurrentUserStart: "[auth] setCurrentUserStart",
  setCurrentUserSuccess: "[auth] setCurrentUserSuccess",
  setCurrentUserFailure: "[auth] setCurrentUserFailure",

  updateCurrentUserStart: "[auth] updateCurrentUserStart",
  updateCurrentUserSuccess: "[auth] updateCurrentUserSuccess",
  updateCurrentUserFailure: "[auth] updateCurrentUserFailure",

  logoutStart: "[auth] logoutStart",
  logoutSuccess: "[auth] logoutSuccess",
  logoutFailure: "[auth] logoutFailure",
}

export const actionTypes = {
  fetchCurrentUser: "[auth] fetchCurrentUser",
  updateCurrentUser: "[auth] updateCurrentUser",
  register: "[auth] register",
  login: "[auth] login",
  logout: "[auth] logout",
}

const state = () => ({
  currentUser: {
    email: "admin@admin.com",
    firstName: "Russel",
    id: 1,
    image: "https://i.pravatar.cc/100?img=1",
    lastName: "Crooks",
    role: "admin",
    userName: "Admin",
  },
  isLoggedIn: null,
  isSubmitting: false,
  isLoading: false,
  errors: null,
})

const getters = {
  [getterTypes.getCurrentUser]: (state) => {
    return state.currentUser
  },

  [getterTypes.getIsLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn)
  },

  [getterTypes.getIsAnonymous]: (state) => {
    return state.isLoggedIn === false
  },

  [getterTypes.getIsAdmin]: (state) => {
    if (state.currentUser) return state.currentUser.role === "admin"
    return null
  },
}

const mutations = {
  [mutationTypes.setCurrentUserStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.currentUser = null
    state.isLoggedIn = null
    state.errors = null
  },

  [mutationTypes.setCurrentUserSuccess](state, payload) {
    state.currentUser = payload
    state.isLoggedIn = true
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.setCurrentUserFailure](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.updateCurrentUserStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.currentUser = null
    state.isLoggedIn = true
    state.errors = null
  },

  [mutationTypes.updateCurrentUserSuccess](state, payload) {
    state.currentUser = payload
    state.isLoggedIn = true
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.updateCurrentUserFailure](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.logoutStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.isLoggedIn = null
    state.errors = null
  },

  [mutationTypes.logoutSuccess](state) {
    state.currentUser = {}
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.logoutFailure](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.register]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const res = await auth.register(payload)
      const accessToken = res.data.accessToken
      const userId = res.data.user.id
      const data = res.data.user

      setItemLS("credential", { accessToken, userId })

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      throw err
    }
  },

  async [actionTypes.login]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const res = await auth.login(payload)
      const accessToken = res.data.accessToken
      const userId = res.data.user.id
      const data = res.data.user

      setItemLS("credential", { accessToken, userId })

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      throw err
    }
  },

  async [actionTypes.fetchCurrentUser]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const res = await auth.getUser(payload)
      const data = res.data

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      throw err
    }
  },

  async [actionTypes.updateCurrentUser]({ commit }, payload) {
    commit(mutationTypes.updateCurrentUserStart)

    try {
      const res = await auth.updateUser(payload)
      const data = res.data
      delete data.password

      commit(mutationTypes.updateCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.updateCurrentUserFailure, err)
      throw err
    }
  },

  [actionTypes.logout]({ commit }) {
    commit(mutationTypes.logoutStart)

    try {
      setItemLS("credential", "")

      commit(mutationTypes.logoutSuccess)
    } catch (err) {
      commit(mutationTypes.logoutFailure, err)
      throw err
    }
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
