<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-user__filter-bar"
    />
    <Transition name="elements">
      <AppFeedList
        v-if="getFeedList"
        :data-item="getDataFeedList"
        class="column-wrapper-user__feed-list"
        @toggleLike="toggleLike($event)"
      />
    </Transition>
    <AppPlaceholderFeedList
      v-if="getIsLoadingFeedList"
      :data-item="placeholderCount"
      class="column-wrapper-user__placeholder"
    />
    <AppButtonCaption
      v-if="getErrorsFeedList"
      :data-item="config.btn.refresh"
      class="column-wrapper-user__refresh"
      @clickBtn="fetchFeedList"
    />
    <AppPlaceholderContent
      v-if="getIsVisiblePlaceholderContent"
      class="column-wrapper-main-left__no-content"
    />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import CreateFeedList from "~/mixins/dataFeedList"
import { isNotEmptyArr } from "~/helpers/utils"

export default {
  transitions: {
    name: "elements",
    mode: "out-in",
  },

  mixins: [CreateFeedList],

  data() {
    return {
      filterBar: [
        {
          content: "My Feed",
          path: `/users/${this.$route.params.user}`,
          isActive: false,
        },
        {
          content: "Favorites Feed",
          path: `/users/${this.$route.params.user}/favorites`,
          isActive: false,
        },
      ],
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feedList }) => feedList.feedList,
      getIsLoadingFeedList: ({ feedList }) => feedList.isLoadingFeedList,
      getErrorsFeedList: ({ feedList }) => feedList.errorsFeedList,
      getFeedCount: ({ feedCount }) => feedCount.feedCount,
      getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
      getErrorsFeedCount: ({ feedCount }) => feedCount.errors,
      getIsLoadingToggleLike: ({ feedList }) => feedList.isLoadingToggleLike,
    }),

    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
      getIsLoggedIn: getterTypesAuth.getIsLoggedIn,
    }),

    getDataFilterBar() {
      return this.filterBar.map((item) => {
        const isActive = this.$route.path === item.path
        item.isActive = isActive

        return item
      })
    },

    getIsVisiblePlaceholderContent() {
      return (
        !isNotEmptyArr(this.getFeedList) &&
        !this.getIsLoadingFeedList &&
        !this.getIsLoadingFeedCount
      )
    },
  },

  methods: {
    fetchFeedList() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style lang="scss">
.column-wrapper-user {
  margin-bottom: $space-l;
}
</style>
