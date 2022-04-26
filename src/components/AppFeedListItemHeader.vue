<template>
  <div class="feed-list-item-header">
    <AppAuthor
      :data-item="dataItem.author"
      class="feed-list-item-header__author"
    />
    <AppButtonIcon
      :data-item="dataItem.btnLike"
      :is-active="dataItem.btnLike.isActive"
      class="feed-list-item-header__button-icon"
      @clickBtn="emitToggleLike"
      >{{ dataItem.btnLike.count }}</AppButtonIcon
    >
  </div>
</template>

<script>
import AppAuthor from "~/components/AppAuthor"
import AppButtonIcon from "~/components/AppButtonIcon"

export default {
  name: "AppFeedListItemHeader",

  components: {
    AppAuthor,
    AppButtonIcon,
  },

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emitToggleLike() {
      this.$emit("toggleLike", this.dataItem.feedId)
    },
  },
}
</script>

<style lang="scss">
.feed-list-item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: $space-s;
}

.feed-list-item-header__author {
  max-width: 70%;
  margin-right: $space-m;
}
</style>
