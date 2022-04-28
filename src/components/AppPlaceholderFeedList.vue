<template>
  <ul class="placeholder-feed-list">
    <AppPlaceholderFeedListItem
      v-for="item in dataItem"
      :key="item"
      class="placeholder-feed-list__item"
    />
  </ul>
</template>

<script>
import AppPlaceholderFeedListItem from "@/components/AppPlaceholderFeedListItem"

export default {
  name: "AppPlaceholderFeedList",

  components: {
    AppPlaceholderFeedListItem,
  },

  props: {
    dataItem: {
      type: Number,
      required: false,
      default: 10,
    },
  },
}
</script>

<style lang="scss">
.placeholder-feed-list {
  display: block;
  margin: 0;
  margin-bottom: $space-l;
  padding: 0;

  list-style: none;
}
</style>
