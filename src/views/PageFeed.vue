<template>
  <main class="main-feed">
    <AppHero class="main-feed__hero">
      <TheTitleFeed class="main-feed__title-feed" />
    </AppHero>
    <h2 class="main-feed__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperFeed class="main-feed__column-wrapper-feed" />
  </main>
</template>

<script>
import AppHero from "@/components/AppHero"
import TheTitleFeed from "@/components/TheTitleFeed"
import TheColumnWrapperFeed from "@/components/TheColumnWrapperFeed"

import { actionTypes as actionTypesFeed } from "@/store/modules/feed"
import { actionTypes as actionTypesUser } from "@/store/modules/user"
import { getStrFromKebabCase } from "@/helpers/utils"

export default {
  name: "PageFeed",

  components: {
    AppHero,
    TheTitleFeed,
    TheColumnWrapperFeed,
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        const feedTitle = getStrFromKebabCase(this.$route.params.feed)

        const feedPayload = `title=${feedTitle}`
        await this.$store.dispatch(actionTypesFeed.fetchFeed, feedPayload)

        const userPayload = `id=${this.$store.state.feed.feed.userId}`
        await this.$store.dispatch(actionTypesUser.fetchUser, userPayload)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss">
.main-feed {
  @include container;

  padding-bottom: $space-l;
}
</style>
