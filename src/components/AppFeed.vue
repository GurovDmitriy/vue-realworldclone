<template>
  <div class="feed">
    <p class="feed__content">{{ dataItem.content }}</p>
    <AppTagsList
      :data-item="dataItem.tags"
      class="feed-list-item-footer__tags-list"
    />
  </div>
</template>

<script>
import AppTagsList from "@/components/AppTagsList"

export default {
  name: "AppFeed",

  components: {
    AppTagsList,
  },

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        content: "Nothing here yet...",
        tags: [
          {
            content: "no-tag",
            path: "/tags/no-content",
          },
        ],
      }),
      // validator: (value) => {
      //   return Array.isArray(value.tags)
      // },
    },
  },
}
</script>

<style lang="scss">
.feed {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-light-accent;
}

.feed__preview {
  margin-bottom: $space-m;
}
</style>
