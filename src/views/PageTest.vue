<template>
  <main class="main">
    <AppHero class="main__hero">
      <TheTitle class="main__title" />
    </AppHero>
  </main>
</template>

<script>
import AppHero from "~/components/AppHero"
import TheTitle from "~/components/TheTitle"

export default {
  name: "PageTest",

  components: {
    AppHero,
    TheTitle,
  },

  // layout: "test",
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-bottom: $space-l;
}
</style>
