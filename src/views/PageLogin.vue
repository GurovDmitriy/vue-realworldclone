<template>
  <main class="main-login">
    <h2 class="main-login__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperLogin class="main-login__column-wrapper" />
  </main>
</template>

<script>
import TheColumnWrapperLogin from "~/components/TheColumnWrapperLogin"

export default {
  name: "PageLogin",

  components: {
    TheColumnWrapperLogin,
  },

  // middleware: ["guest"],
}
</script>

<style lang="scss">
.main-login {
  @include container;

  padding-bottom: $space-l;
}
</style>
