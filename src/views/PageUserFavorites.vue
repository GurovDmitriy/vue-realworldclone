<template>
  <main class="main-user-favorites">
    <AppHero class="main-user-favorites__hero">
      <TheTitleUser class="main-user-favorites__title-user" />
    </AppHero>
    <h2 class="main-user-favorites__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main-user-favorites__column-wrapper-user" />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main-user-favorites__paginator-list"
      :data-item="getDataPaginator"
    />
    <AppPlaceholderPaginator
      v-if="getIsLoadingFeedCount"
      class="main__placeholder-paginator"
    />
  </main>
</template>

<script>
import AppHero from "~/components/AppHero"
import TheTitleUser from "~/components/TheTitleUser"
import TheColumnWrapperUser from "~/components/TheColumnWrapperUser"
import AppPaginatorList from "~/components/AppPaginatorList"
import AppPlaceholderPaginator from "~/components/AppPlaceholderPaginator"

// import { mapState } from "vuex"
// import { actionTypes as actionTypesUser } from "~/store/user"
// import { actionTypes as actionTypesFeedList } from "~/store/feedList"
// import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
// import { paginator } from "~/helpers/vars"
// import { getIsValidParamsUser } from "~/helpers/validateHook"
// import DataPaginator from "~/mixins/dataPaginator"

export default {
  name: "PageUserFavorites",

  components: {
    AppHero,
    TheTitleUser,
    TheColumnWrapperUser,
    AppPaginatorList,
    AppPlaceholderPaginator,
  },

  // mixins: [DataPaginator],
  // layout: "user",

  // async validate({ params, store }) {
  //   const userPayload = `userName=${params.user}`
  //   const user = await store.dispatch(actionTypesUser.fetchUser, userPayload)

  //   return getIsValidParamsUser(params.user, user)
  // },

  // async asyncData({ params, query, store, error }) {
  //   try {
  //     const userName = params.user
  //     const pageNum = query.page || 1
  //     const itemPerPage = paginator.feedList.main

  //     const userPayload = `userName=${userName}`
  //     await store.dispatch(actionTypesUser.fetchUser, userPayload)

  //     const feedListPayload = `like_like=${store.state.user.user.id}&_page=${pageNum}&_limit=${itemPerPage}`

  //     await Promise.allSettled([
  //       store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
  //       store.dispatch(actionTypesFeedCount.fetchFeedCount, "like"),
  //     ])

  //     return {
  //       userName,
  //     }
  //   } catch (err) {
  //     error(err)
  //   }
  // },

  // computed: {
  //   ...mapState({
  //     getFeedCount: ({ feedCount }) => feedCount.feedCount,
  //     getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
  //   }),
  // },

  // watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-user-favorites {
  @include container;

  padding-bottom: $space-l;
}
</style>
