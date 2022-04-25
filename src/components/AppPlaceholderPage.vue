<template>
  <div class="placeholder-page">
    <p class="placeholder-page__caption"><slot name="default">Page</slot></p>
    <p class="placeholder-page__message">
      <slot name="message">It's not all here...</slot>
    </p>
  </div>
</template>

<style lang="scss">
.placeholder-page {
  @include container;

  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.placeholder-page__caption {
  @include caption-h2;

  margin-bottom: $space-m;

  color: $var-color-default;
  text-align: center;
}

.placeholder-page__message {
  @include text-small;

  margin-bottom: $space-s;

  color: $var-color-default;
  text-align: center;
}
</style>
