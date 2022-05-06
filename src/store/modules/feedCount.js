import feedCount from "@/api/feedCount"

export const mutationTypes = {
  setFeedCountStart: "[feedCount] setFeedCountStart",
  setFeedCountSuccess: "[feedCount] setFeedCountSuccess",
  setFeedCountFailure: "[feedCount] setFeedCountFailure",
}

export const actionTypes = {
  fetchFeedCount: "[feedCount] fetchFeedCount",
}

const state = () => ({
  feedCount: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedCountStart](state) {
    state.isLoading = true
    state.feedCount = null
    state.errors = null
  },

  [mutationTypes.setFeedCountSuccess](state, payload) {
    state.feedCount = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedCountFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchFeedCount]({ commit }, payload) {
    commit(mutationTypes.setFeedCountStart)

    try {
      let res = null
      let data = null

      switch (payload) {
        case "tag":
          res = await feedCount.getFeedCountByTag()
          data = res.data
          break
        case "user":
          res = await feedCount.getFeedCountByUser()
          data = res.data
          break
        case "like":
          res = await feedCount.getFeedCountByLike()
          data = res.data
          break
        default:
          res = await feedCount.getFeedCountTotal()
          data = res.data
      }

      commit(mutationTypes.setFeedCountSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedCountFailure, err)
      throw err
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
