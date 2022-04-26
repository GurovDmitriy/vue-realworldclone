<template>
  <main class="main-user">
    <AppHero class="main-user__hero">
      <TheTitleUser />
    </AppHero>
    <h2 class="main-user__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main-user__column-wrapper-user" />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main-user__paginator-list"
      :data-item="getDataPaginator"
    />
    <AppPlaceholderPaginator
      v-if="getIsLoadingFeedCount"
      class="main__placeholder-paginator"
    />
  </main>
</template>

<script>
import AppHero from "@/components/AppHero"
import TheColumnWrapperUser from "@/components/TheColumnWrapperUser"
import AppPaginatorList from "@/components/AppPaginatorList"
import AppPlaceholderPaginator from "@/components/AppPlaceholderPaginator"

import { mapState } from "vuex"
import { actionTypes as actionTypesUser } from "@/store/modules/user"
import { actionTypes as actionTypesFeedList } from "@/store/modules/feedList"
import { actionTypes as actionTypesFeedCount } from "@/store/modules/feedCount"
import { paginator } from "@/helpers/vars"
// import { getIsValidParamsUser } from "@/helpers/validateHook"
import DataPaginator from "@/mixins/dataPaginator"

export default {
  name: "PageUser",

  components: {
    AppHero,
    TheColumnWrapperUser,
    AppPaginatorList,
    AppPlaceholderPaginator,
  },

  mixins: [DataPaginator],

  // async validate({ params, store }) {
  //   const userPayload = `userName=${params.user}`
  //   const user = await store.dispatch(actionTypesUser.fetchUser, userPayload)

  //   return getIsValidParamsUser(params.user, user)
  // },

  computed: {
    ...mapState({
      getFeedCount: ({ feedCount }) => feedCount.feedCount,
      getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
    }),
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        const userName = this.$route.params.user
        const pageNum = this.$route.query.page || 1
        const itemPerPage = paginator.feedList.main

        const userPayload = `userName=${userName}`
        const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${itemPerPage}`

        await Promise.allSettled([
          this.$store.dispatch(actionTypesUser.fetchUser, userPayload),
          this.$store.dispatch(
            actionTypesFeedList.fetchFeedList,
            feedListPayload
          ),
          this.$store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
        ])

        // return {
        //   userName,
        // }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss">
.main-user {
  @include container;

  padding-bottom: $space-l;
}
</style>
