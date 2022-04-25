<template>
  <div class="hero">
    <slot name="default">Title</slot>
  </div>
</template>

<style lang="scss">
.hero {
  margin-bottom: $space-l;
  padding-top: $space-l;
  padding-bottom: $space-l;

  background-color: $var-color-east-side;
}
</style>
