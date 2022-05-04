import user from "@/api/user"

export const mutationTypes = {
  setUserStart: "[user] setUserStart",
  setUserSuccess: "[user] setUserSuccess",
  setUserFailure: "[user] setUserFailure",
}

export const actionTypes = {
  fetchUser: "[user] fetchUser",
}

const state = () => ({
  user: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setUserStart](state) {
    state.isLoading = true
    state.user = null
    state.errors = null
  },

  [mutationTypes.setUserSuccess](state, payload) {
    state.user = payload
    state.isLoading = false
  },

  [mutationTypes.setUserFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchUser]({ commit }, payload) {
    commit(mutationTypes.setUserStart)

    try {
      const res = await user.getUser(payload)
      const data = res.data

      commit(mutationTypes.setUserSuccess, data[0])
      return data[0]
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
      // throw err
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
