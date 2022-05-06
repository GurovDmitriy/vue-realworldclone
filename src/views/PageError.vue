<template>
  <div class="error">
    <p class="error__caption">Error</p>
    <p class="error__status">{{ error.statusCode }}</p>
    <p class="error__message">{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  name: "PageError",

  props: {
    error: {
      type: Object,
      required: false,
      default: () => ({
        message: "Error: unknown error",
        statusCode: "000",
      }),
    },
  },
}
</script>

<style lang="scss">
.error {
  @include container;

  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.error__caption {
  @include caption-h2;

  margin-bottom: $space-m;

  color: $var-color-default;
  text-align: center;
}

.error__message {
  @include text-small;

  margin-bottom: $space-s;

  color: $var-color-default;
  text-align: center;
}

.error__status {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  text-align: center;
}

.error__status-text {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  text-align: center;
}
</style>
