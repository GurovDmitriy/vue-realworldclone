<template>
  <div class="feed-list-item-footer">
    <NuxtLink
      :to="{
        path: dataItem.pathFeed,
      }"
      class="feed-list-item-footer__read-more"
      >Read more...</NuxtLink
    >
    <AppTagsList
      :data-item="dataItem.tags"
      class="feed-list-item-footer__tags-list"
    />
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.feed-list-item-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.feed-list-item-footer__read-more {
  @include text-small;

  margin-right: $space-m;

  color: $var-color-default;
  font-weight: $font-weight-light;
  text-decoration: none;
}

.feed-list-item-footer__tags-list {
  align-content: flex-end;
  align-self: flex-end;
  max-width: 50%;
}
</style>
