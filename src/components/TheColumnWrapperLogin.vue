<template>
  <section class="column-wrapper-login">
    <h3 class="column-wrapper-login__caption">Sign in</h3>
    <TheFormLogin class="column-wrapper-login__form" />
  </section>
</template>

<script>
import TheFormLogin from "@/components/TheFormLogin"

export default {
  name: "TheColumnWrapperLogin",

  components: {
    TheFormLogin,
  },
}
</script>

<style lang="scss">
.column-wrapper-login__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
