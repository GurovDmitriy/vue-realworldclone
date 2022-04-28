import feed from "@/api/feed"

export const mutationTypes = {
  setFeedStart: "[feed] setFeedStart",
  setFeedSuccess: "[feed] setFeedSuccess",
  setFeedFailure: "[feed] setFeedFailure",

  deleteFeedStart: "[feed] deleteFeedStart",
  deleteFeedSuccess: "[feed] deleteFeedSuccess",
  deleteFeedFailure: "[feed] deleteFeedFailure",
}

export const actionTypes = {
  fetchFeed: "[feed] fetchFeed",
  createFeed: "[feed] createFeed",
  updateFeed: "[feed] updateFeed",
  deleteFeed: "[feed] deleteFeed",
}

export const state = () => ({
  feed: {},
  isLoading: false,
  isSubmitting: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedStart](state) {
    state.isLoading = true
    state.isSubmitting = true
    state.feed = null
    state.errors = null
  },

  [mutationTypes.setFeedSuccess](state, payload) {
    state.feed = payload
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.setFeedFailure](state, payload) {
    state.errors = payload
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.deleteFeedStart](state) {
    state.isLoading = true
    state.isSubmitting = true
    state.errors = null
  },

  [mutationTypes.deleteFeedSuccess](state) {
    state.feed = null
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.deleteFeedFailure](state, payload) {
    state.errors = payload
    state.isSubmitting = false
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const res = await feed.getFeed(payload)
      const data = res.data

      commit(mutationTypes.setFeedSuccess, data[0])
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      // throw err
    }
  },

  async [actionTypes.createFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const res = await feed.createFeed(payload)
      const data = res.data

      commit(mutationTypes.setFeedSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      // throw err
    }
  },

  async [actionTypes.updateFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const res = await feed.updateFeed(payload)
      const data = res.data

      commit(mutationTypes.setFeedSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      // throw err
    }
  },

  async [actionTypes.deleteFeed]({ commit }, payload) {
    commit(mutationTypes.deleteFeedStart)

    try {
      const res = await feed.deleteFeed(payload)
      const data = res.data

      commit(mutationTypes.deleteFeedSuccess, data)
    } catch (err) {
      commit(mutationTypes.deleteFeedFailure, err)
      // throw err
    }
  },
}

export default {
  mutations,
  actions,
}
