<template>
  <main class="main-settings">
    <h2 class="main-settings__caption">Your Settings</h2>
    <TheFormSettings class="main-settings__form-settings" />
  </main>
</template>

<script>
import TheFormSettings from "@/components/TheFormSettings"

export default {
  name: "PageSettings",

  components: {
    TheFormSettings,
  },
}
</script>

<style lang="scss">
.main-settings {
  @include container;
}

.main-settings__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
