<template>
  <main class="main-tags">
    <AppHero class="main-tags__hero">
      <TheTitle class="main-tags__title" />
    </AppHero>
    <h2 class="main-tags__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main-tags__column-wrapper-main" />
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
// import { getIsValidParamsTag } from "@/helpers/validateHook"

export default {
  name: "PageTag",

  components: {
    AppHero,
    TheTitle,
    TheColumnWrapperMain,
  },

  // async validate({ params }) {
  //   const res = await fetch(
  //     `http://localhost:3005/feeds?tags_like=${params.tag}`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //   const data = await res.json()

  //   return getIsValidParamsTag(params.tag, data)
  // },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        const tag = this.$route.params.tag
        const page = this.$route.query.page || 1
        const itemPerPage = paginator.feedList.main
        const feedListPayload = `tags_like=${tag}&_page=${page}&_limit=${itemPerPage}`

        await Promise.allSettled([
          this.$store.dispatch(actionTypesTag.fetchTagsPopular),
          this.$store.dispatch(
            actionTypesFeedList.fetchFeedList,
            feedListPayload
          ),
          this.$store.dispatch(actionTypesFeedCount.fetchFeedCount, "tag"),
        ])

        // return {
        //   tag,
        // }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss">
.main-tags {
  @include container;

  padding-bottom: $space-l;
}
</style>
