<template>
  <section class="column-wrapper-main-left">
    <h3 class="column-wrapper-main-left__caption visually-hidden">Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-main-left__filter-bar"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getDataFeedList"
      class="column-wrapper-main-left__feed-list"
      @toggleLike="toggleLike($event)"
    />
    <AppPlaceholderFeedList
      v-if="getIsLoadingFeedList"
      :data-item="placeholderCount"
      class="column-wrapper-main-left__placeholder"
    />
    <AppButtonCaption
      v-if="getErrorsFeedList"
      :data-item="config.btn.refresh"
      class="column-wrapper-main-left__refresh"
      @clickBtn="fetchFeedList"
    />
    <AppPlaceholderContent
      v-if="getIsVisiblePlaceholderContent"
      class="column-wrapper-main-left__no-content"
    />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main__paginator-list"
      :data-item="getDataPaginator"
    />
    <AppPlaceholderPaginator
      v-if="getIsLoadingFeedCount"
      class="main__placeholder-paginator"
    />
  </section>
</template>

<script>
import AppFilterBar from "~/components/AppFilterBar"
import AppFeedList from "~/components/AppFeedList"
import AppPlaceholderFeedList from "~/components/AppPlaceholderFeedList"
import AppButtonCaption from "~/components/AppButtonCaption"
import AppPlaceholderContent from "~/components/AppPlaceholderContent"
import AppPaginatorList from "~/components/AppPaginatorList"
import AppPlaceholderPaginator from "~/components/AppPlaceholderPaginator"

import { mapState, mapGetters } from "vuex"
import CreateFeedList from "~/mixins/dataFeedList"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { getArrRange, isNotEmptyArr, isNotEmptyObj } from "~/helpers/utils"
import { paginator } from "~/helpers/vars"

export default {
  name: "TheColumnWrapperMainLeft",

  components: {
    AppFilterBar,
    AppFeedList,
    AppPlaceholderFeedList,
    AppButtonCaption,
    AppPlaceholderContent,
    AppPaginatorList,
    AppPlaceholderPaginator,
  },

  mixins: [CreateFeedList],

  transitions: {
    name: "elements",
    mode: "out-in",
  },

  data() {
    return {
      filterBar: [{ content: "Global Feed", path: "/", isActive: false }],
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

    // filterBar start
    getDataFilterBar() {
      const bars = [...this.filterBar]

      setBars(this.getBarItemCurrentUser, this.getBarItemTag)

      function setBars(...args) {
        args.forEach((item) => {
          if (item) bars.push(item)
        })
      }

      const data = bars.map((item) => {
        item.isActive = this.$route.path === item.path
        return item
      })

      return data
    },

    getBarItemCurrentUser() {
      if (isNotEmptyObj(this.getCurrentUser)) {
        return {
          content: "Your Feed",
          path: "/your",
        }
      }
      return null
    },

    getBarItemTag() {
      if (this.$route.params.tag) {
        return {
          content: `# ${this.$route.params.tag}`,
          path: this.$route.path,
        }
      }
      return null
    },
    // filterBar end

    // paginator start
    getDataPaginator() {
      const delim = paginator.feedList.main
      const countItem = this.getFeedCount[this.getFilter] || 1
      const countPages = getArrRange(1, Math.ceil(countItem / delim))

      const query = this.$route.query
      const queryPage = this.$route.query.page

      return countPages.map((item, index) => {
        let isActive = null

        if (index === 0 && !isNotEmptyObj(query)) {
          isActive = true
        } else {
          isActive = queryPage === item || queryPage === 1
        }

        return {
          page: item,
          pathPage: this.$route.path,
          isActive,
        }
      })
    },

    getFilter() {
      if (this.$route.path === "/your" && isNotEmptyObj(this.getCurrentUser)) {
        return this.getCurrentUser.userName
      } else {
        return this.$route.params.tag || "total"
      }
    },
    // paginator end

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
.column-wrapper-main-left__feed-list {
  margin-bottom: $space-l;
}

.column-wrapper-main-left__refresh {
  color: $var-color-default;
}
</style>
