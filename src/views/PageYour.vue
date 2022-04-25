<template>
  <main class="main-your">
    <AppHero class="main-your__hero">
      <TheTitle class="main-your__title" />
    </AppHero>
    <h2 class="main-your__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main-your__column-wrapper" />
  </main>
</template>

<script>
import AppHero from "~/components/AppHero"
import TheTitle from "~/components/TheTitle"
import TheColumnWrapperMain from "~/components/TheColumnWrapperMain"

// import { getterTypes as getterTypesAuth } from "~/store/auth"
// import { actionTypes as actionTypesTag } from "~/store/tag"
// import { actionTypes as actionTypesFeedList } from "~/store/feedList"
// import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
// import { paginator } from "~/helpers/vars"

export default {
  name: "PageYour",

  component: {
    AppHero,
    TheTitle,
    TheColumnWrapperMain,
  },

  // middleware: ["auth"],

  // async asyncData({ query, store, error }) {
  //   try {
  //     const userName = store.getters[getterTypesAuth.getCurrentUser].userName
  //     const pageNum = query.page || 1
  //     const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${paginator.index}`

  //     await Promise.allSettled([
  //       store.dispatch(actionTypesTag.fetchTagsPopular),
  //       store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
  //       store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
  //     ])
  //   } catch (err) {
  //     error(err)
  //   }
  // },

  // watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-your {
  @include container;

  padding-bottom: $space-l;
}
</style>
