<template>
  <RouterLink :to="{ path: '/' }" class="logo">RWC</RouterLink>
</template>

<script>
export default {
  name: "AppLogo",
}
</script>

<style lang="scss">
.logo {
  @include caption-h3;

  color: $var-color-east-side;
  text-decoration: none;

  &:hover {
    color: $var-color-default;
  }
}
</style>
