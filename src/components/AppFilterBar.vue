<template>
  <ul class="filter-bar">
    <AppFilterBarItem
      v-for="item in dataItem"
      :key="item.content"
      :data-item="item"
      class="filter-bar__item"
    />
  </ul>
</template>

<script>
import AppFilterBarItem from "@/components/AppFilterBarItem"

export default {
  name: "AppFilterBar",

  components: {
    AppFilterBarItem,
  },

  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          content: "Global Feed",
          path: "/",
          isActive: false,
        },
      ],
    },
  },
}
</script>

<style lang="scss">
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  list-style: none;

  border-bottom: 2px solid $var-color-light-accent;
}

.filter-bar__item--active {
  background-color: green;
}
</style>
