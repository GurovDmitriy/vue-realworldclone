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
import AppHero from "@/components/AppHero"
import TheTitle from "@/components/TheTitle"
import TheColumnWrapperMain from "@/components/TheColumnWrapperMain"

import { getterTypes as getterTypesAuth } from "@/store/modules/auth"
import { actionTypes as actionTypesTag } from "@/store/modules/tag"
import { actionTypes as actionTypesFeedList } from "@/store/modules/feedList"
import { actionTypes as actionTypesFeedCount } from "@/store/modules/feedCount"
import { paginator } from "@/helpers/vars"

export default {
  name: "PageYour",

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
  },

  methods: {
    async fetchData() {
      try {
        const userName =
          this.$store.getters[getterTypesAuth.getCurrentUser].userName
        const pageNum = this.$route.query.page || 1
        const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${paginator.feedList.main}`

        await Promise.allSettled([
          this.$store.dispatch(actionTypesTag.fetchTagsPopular),
          this.$store.dispatch(
            actionTypesFeedList.fetchFeedList,
            feedListPayload
          ),
          this.$store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
        ])
      } catch (err) {
        this.$router.push({ name: "PageError", params: { error: err } })
      }
    },
  },
}
</script>

<style lang="scss">
.main-your {
  @include container;

  padding-bottom: $space-l;
}
</style>
