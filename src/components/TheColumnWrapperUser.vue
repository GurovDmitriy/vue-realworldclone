<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-user__filter-bar"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getDataFeedList"
      class="column-wrapper-user__feed-list"
      @toggleLike="toggleLike($event)"
    />
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
import AppFilterBar from "@/components/AppFilterBar"
import AppFeedList from "@/components/AppFeedList"
import AppPlaceholderFeedList from "@/components/AppPlaceholderFeedList"
import AppButtonCaption from "@/components/AppButtonCaption"
import AppPlaceholderContent from "@/components/AppPlaceholderContent"

import { mapState, mapGetters } from "vuex"
import { getterTypes as getterTypesAuth } from "@/store/modules/auth"
import CreateFeedList from "@/mixins/dataFeedList"
import { isNotEmptyArr } from "@/helpers/utils"

export default {
  name: "TheColumnWrapperUser",

  components: {
    AppFilterBar,
    AppFeedList,
    AppPlaceholderFeedList,
    AppButtonCaption,
    AppPlaceholderContent,
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
      console.log("refresh")
    },
  },
}
</script>

<style lang="scss">
.column-wrapper-user {
  margin-bottom: $space-l;
}
</style>
