export const mutationTypes = {
  setFeedListStart: "[feedList] setFeedListStart",
  setFeedListSuccess: "[feedList] setFeedListSuccess",
  setFeedListFailure: "[feedList] setFeedListFailure",

  toggleLikeFeedListStart: "[feedList] toggleLikeFeedListStart",
  toggleLikeFeedListSuccess: "[feedList] toggleLikeFeedListSuccess",
  toggleLikeFeedListFailure: "[feedList] toggleLikeFeedListFailure",
}

export const actionTypes = {
  fetchFeedList: "[feedList] fetchFeedList",
  toggleLikeFeed: "[feedList] toggleLikeFeed",
}

export const state = () => ({
  feedList: [],
  isLoadingFeedList: false,
  errorsFeedList: null,

  toggleLike: [],
  isLoadingToggleLike: false,
  errorsToggleLike: null,
})

const mutations = {
  [mutationTypes.setFeedListStart](state) {
    state.isLoadingFeedList = true
    state.feedList = null
    state.errorsFeedList = null
  },

  [mutationTypes.setFeedListSuccess](state, payload) {
    state.feedList = payload
    state.isLoadingFeedList = false
  },

  [mutationTypes.setFeedListFailure](state, payload) {
    state.errorsFeedList = payload
    state.isLoadingFeedList = false
  },

  [mutationTypes.toggleLikeFeedListStart](state) {
    state.isLoadingToggleLike = true
    state.errorsToggleLike = null
  },

  [mutationTypes.toggleLikeFeedListSuccess](state, payload) {
    state.feedList[payload.indexFeed].like = payload.likeResult
    state.isLoadingToggleLike = false
  },

  [mutationTypes.toggleLikeFeedListFailure](state, payload) {
    state.errorsToggleLike = payload
    state.isLoadingToggleLike = false
  },
}

const actions = {
  async [actionTypes.fetchFeedList]({ commit }, payload) {
    commit(mutationTypes.setFeedListStart)

    try {
      const data = await this.$api.feedList.getFeedList(payload)

      commit(mutationTypes.setFeedListSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedListFailure, err)
      throw err
    }
  },

  async [actionTypes.toggleLikeFeed]({ commit }, payload) {
    commit(mutationTypes.toggleLikeFeedListStart)

    try {
      const data = await this.$api.feed.toggleLikeFeed(payload)

      commit(mutationTypes.toggleLikeFeedListSuccess, {
        ...payload,
        likeResult: data.like,
      })
      return data
    } catch (err) {
      commit(mutationTypes.toggleLikeFeedListFailure, err)
      throw err
    }
  },
}

export default {
  mutations,
  actions,
}
