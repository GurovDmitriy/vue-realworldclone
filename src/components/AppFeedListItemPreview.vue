<template>
  <div class="feed-list-item-preview">
    <h4 class="feed-list-item-preview__caption">
      {{ dataItem.title }}
    </h4>
    <p class="feed-list-item-preview__description">
      {{ dataItem.preview }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppFeedListItemPreview",

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.feed-list-item-preview__caption {
  @include caption-h3;

  margin-bottom: 0;
}

.feed-list-item-preview__description {
  margin-bottom: 0;

  color: $var-color-default;
}
</style>
