<template>
  <section class="column-wrapper-feed">
    <h3 class="column-wrapper-feed__caption visually-hidden">Article</h3>
    <AppLoading v-if="getIsLoadingFeed" class="column-wrapper-feed__loading" />
    <AppFeed
      v-if="getFeed"
      :data-item="getDataFeed"
      class="column-wrapper-feed__feed"
    />
  </section>
</template>

<script>
import AppFeed from "@/components/AppFeed"
import AppLoading from "@/components/AppLoading"

import { mapState } from "vuex"

export default {
  name: "TheColumnWrapperFeed",

  components: {
    AppLoading,
    AppFeed,
  },

  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getIsLoadingFeed: ({ feed }) => feed.isLoading,
      getErrorsFeed: ({ feed }) => feed.errors,
    }),

    getDataFeed() {
      const tags = this.getFeed.tags.map((item) => {
        return {
          content: item,
          path: `/tags/${item}`,
        }
      })

      return {
        content: this.getFeed.content,
        tags,
      }
    },
  },
}
</script>
