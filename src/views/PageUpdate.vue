<template>
  <main class="main-update">
    <h2 class="main-update__caption">New Feed</h2>
    <TheFormUpdate class="main-update__form-update" />
  </main>
</template>

<script>
import TheFormUpdate from "~/components/TheFromUpdate"

export default {
  name: "PageUpdate",

  components: {
    TheFormUpdate,
  },

  // middleware: ["auth", "update"],
}
</script>

<style lang="scss">
.main-update {
  @include container;
}

.main-update__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
