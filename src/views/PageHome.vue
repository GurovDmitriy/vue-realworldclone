<template>
  <main class="main">
    <AppHero class="main__hero">
      <TheTitle class="main__title" />
    </AppHero>
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main__column-wrapper" />
  </main>
</template>

<script>
import AppHero from "@/components/AppHero"
import TheTitle from "@/components/TheTitle"
import TheColumnWrapperMain from "@/components/TheColumnWrapperMain"

import { actionTypes as actionTypesTag } from "@/store/modules/tag"
import { actionTypes as actionTypesFeedList } from "@/store/modules/feedList"
import { actionTypes as actionTypesFeedCount } from "@/store/modules/feedCount"
import { paginator } from "@/helpers/vars"

export default {
  name: "PageHome",

  components: {
    AppHero,
    TheTitle,
    TheColumnWrapperMain,
  },

  watch: {
    "$route.query"() {
      this.fetchData()
    },
  },

  mounted() {
    this.fetchData()
    console.log("feedList", this.$store.state)
  },

  methods: {
    async fetchData() {
      const pageNum = this.$route.query.page || 1
      const itemPerPage = paginator.feedList.main
      const feedListPayload = `_page=${pageNum}&_limit=${itemPerPage}`

      await Promise.allSettled([
        this.$store.dispatch(actionTypesTag.fetchTagsPopular),
        this.$store.dispatch(
          actionTypesFeedList.fetchFeedList,
          feedListPayload
        ),
        this.$store.dispatch(actionTypesFeedCount.fetchFeedCount, "total"),
      ])
    },
  },
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-bottom: $space-l;
}
</style>
