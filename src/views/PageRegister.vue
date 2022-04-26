<template>
  <main class="main-register">
    <h2 class="main-register__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperRegister class="main-register__column-wrapper" />
  </main>
</template>

<script>
import TheColumnWrapperRegister from "@/components/TheColumnWrapperRegister"

export default {
  name: "PageRegister",

  components: {
    TheColumnWrapperRegister,
  },

  // middleware: ["guest"],
}
</script>

<style lang="scss">
.main-register {
  @include container;

  padding-bottom: $space-l;
}
</style>
