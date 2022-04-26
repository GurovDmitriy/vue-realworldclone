<template>
  <ul class="paginator-list">
    <AppPaginatorListItem
      v-for="item in dataItem"
      :key="item.page"
      :data-item="item"
      class="paginator-list__item"
    />
  </ul>
</template>

<script>
import AppPaginatorListItem from "@/components/AppPaginatorListItem"

export default {
  name: "AppPaginatorList",

  components: {
    AppPaginatorListItem,
  },

  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          page: 1,
          path: "/",
          isActive: false,
        },
      ],
    },

    pathPage: {
      type: String,
      required: false,
      default: "/",
    },
  },
}
</script>

<style lang="scss">
.paginator-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0 ($space-xs * -1);
  padding: 0;

  list-style: none;
}

.paginator-list__item {
  margin: 0 $space-xs;
}
</style>
