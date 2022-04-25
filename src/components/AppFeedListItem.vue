<template>
  <li class="feed-list-item">
    <AppFeedListItemHeader
      :data-item="dataItem"
      class="feed-list-item__header"
      @toggleLike="emitToggleLike"
    />
    <AppFeedListItemPreview
      :data-item="dataItem.content"
      class="feed-list-item__preview"
    />
    <AppFeedListItemFooter
      :data-item="dataItem"
      class="feed-list-item__footer"
    />
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emitToggleLike(feedId) {
      this.$emit("toggleLike", feedId)
    },
  },
}
</script>

<style lang="scss">
.feed-list-item {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-amethyst-smoke;
}

.feed-list-item__preview {
  margin-bottom: $space-m;
}
</style>
