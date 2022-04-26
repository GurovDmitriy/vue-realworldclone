<template>
  <ul class="tags-list">
    <AppTagsListItem
      v-for="item in dataItem"
      :key="item.tag"
      :data-item="item"
      class="tags-list__tags-list-item"
    />
  </ul>
</template>

<script>
import AppTagsListItem from "~/components/AppTagsListItem"

export default {
  name: "AppTagsList",

  components: {
    AppTagsListItem,
  },
}
</script>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          content: "no-tag",
          path: "/tags/no-content",
        },
      ],
    },
  },
}
</script>

<style lang="scss">
.tags-list {
  display: flex;
  flex-wrap: wrap;

  margin: 0 ($space-xxs * -1);
  padding: 0;

  list-style: none;
}
</style>
