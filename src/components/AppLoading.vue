<template>
  <p class="loading">
    <slot name="default">Loading...</slot>
  </p>
</template>

<style lang="scss">
.loading {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  font-weight: $font-weight-light;
}
</style>
