<template>
  <header class="header">
    <h1 class="header__caption visually-hidden">Real World Clone</h1>
    <TheNavbar class="header__navbar" />
  </header>
</template>

<style lang="scss">
.header {
  @include container;

  margin-bottom: $space-s;
  padding-top: $space-s;
}
</style>
