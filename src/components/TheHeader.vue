<template>
  <header class="header">
    <h1 class="header__caption visually-hidden">Real World Clone</h1>
    <TheNavbar class="header__navbar" />
  </header>
</template>

<script>
import TheNavbar from "~/components/TheNavbar"

export default {
  name: "TheHeader",

  components: {
    TheNavbar,
  },
}
</script>

<style lang="scss">
.header {
  @include container;

  margin-bottom: $space-s;
  padding-top: $space-s;
}
</style>
