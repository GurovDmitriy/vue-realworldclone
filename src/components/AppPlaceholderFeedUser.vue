<template>
  <div class="placeholder-feed-user">
    <span class="placeholder-feed-user__caption">Caption</span>
    <div class="placeholder-feed-user__author"></div>
  </div>
</template>

<script>
export default {
  name: "AppPlaceholderFeedUser",
}
</script>

<style lang="scss">
.placeholder-feed-user__caption {
  @include caption-h2;

  margin-bottom: $space-s;

  color: $var-color-light-accent;

  background-color: $var-color-light-accent;
  border-radius: 6px;
  opacity: 0.2;
}

.placeholder-feed-user__author {
  width: 38px;
  height: 38px;

  background-color: $var-color-light-accent;
  border-radius: 50%;
  opacity: 0.2;
}
</style>
