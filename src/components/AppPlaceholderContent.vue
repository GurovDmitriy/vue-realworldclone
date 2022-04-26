<template>
  <div class="placeholder-content">
    <p class="placeholder-content__caption">
      <slot name="default">No content</slot>
    </p>
    <p class="placeholder-content__message">
      <slot name="message">nothing here yet...</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "AppPlaceholderContent",
}
</script>

<style lang="scss">
.placeholder-content {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.placeholder-content__caption {
  margin-bottom: $space-m;

  color: $var-color-default;
}

.placeholder-content__message {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
}
</style>
