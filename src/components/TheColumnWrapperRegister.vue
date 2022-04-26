<template>
  <section class="column-wrapper-register">
    <h3 class="column-wrapper-register__caption">Sign up</h3>
    <TheFormRegister class="column-wrapper-register__form" />
  </section>
</template>

<script>
import TheFormRegister from "@/components/TheFormRegister"

export default {
  name: "TheColumnWrapperRegister",

  components: {
    TheFormRegister,
  },
}
</script>

<style lang="scss">
.column-wrapper-register__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
