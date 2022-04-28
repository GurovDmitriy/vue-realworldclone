import tag from "@/api/tag"

export const mutationTypes = {
  setTagsPopularStart: "[tag] setTagsPopularStart",
  setTagsPopularSuccess: "[tag] setTagsPopularSuccess",
  setTagsPopularFailure: "[tag] setTagsPopularFailure",
}

export const actionTypes = {
  fetchTagsPopular: "[tag] fetchTagsPopular",
}

export const state = () => ({
  tagsPopular: [],
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setTagsPopularStart](state) {
    state.isLoading = true
    state.tagsPopular = null
    state.errors = null
  },

  [mutationTypes.setTagsPopularSuccess](state, payload) {
    state.tagsPopular = payload
    state.isLoading = false
  },

  [mutationTypes.setTagsPopularFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchTagsPopular]({ commit }) {
    commit(mutationTypes.setTagsPopularStart)

    try {
      const res = await tag.getTagsPopular()
      const data = res.data

      commit(mutationTypes.setTagsPopularSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setTagsPopularFailure, err)
      throw err
    }
  },
}

export default {
  mutations,
  actions,
}
