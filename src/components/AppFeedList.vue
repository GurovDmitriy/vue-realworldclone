<template>
  <ul class="feed-list">
    <AppFeedListItem
      v-for="item in dataItem"
      :key="item.feedId"
      :data-item="item"
      class="feed-list__item"
      @toggleLike="emitToggleLike"
    />
  </ul>
</template>

<script>
import AppFeedListItem from "@/components/AppFeedListItem"

export default {
  name: "AppFeedList",

  components: {
    AppFeedListItem,
  },

  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          feedId: 1,

          author: {
            pathLink: "/",
            userName: "Unknown",
            image: "",
            width: 38,
            height: 38,
            alt: "placeholder",
            placeholder: "placeholder-avatar.png",
            time: 1031974583,
          },

          btnLike: {
            like: [],
            count: 0,
            isActive: false,
            type: "button",
            iconName: "heart-fill",
          },

          content: {
            title: "Nothing here yet...",
            preview: "Nothing here yet...",
          },

          tags: ["no-tags"],

          pathFeed: "/feed/Nothing-here-yet",
        },
      ],
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
.feed-list {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>
