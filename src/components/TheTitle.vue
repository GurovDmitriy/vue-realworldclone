<template>
  <div class="title">
    <p class="title__caption">Real World Clone</p>
    <p class="title__text">Template for learn Nuxt 2</p>
  </div>
</template>

<style lang="scss">
.title {
  @include container;
}

.title__caption {
  @include caption-h1;

  margin-bottom: $space-m;

  color: $var-color-white;
  text-align: center;
}

.title__text {
  color: $var-color-white;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
