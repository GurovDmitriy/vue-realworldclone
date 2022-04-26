<template>
  <li class="filter-bar-item">
    <RouterLink
      :to="{ path: dataItem.path }"
      class="filter-bar-item__link"
      :class="getClassActive"
      >{{ dataItem.content }}</RouterLink
    >
  </li>
</template>

<script>
export default {
  name: "AppFilterBarItem",

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getClassActive() {
      return {
        "filter-bar-item__link--active": this.dataItem.isActive,
      }
    },
  },
}
</script>

<style lang="scss">
.filter-bar-item {
  margin-bottom: -2px;
}

.filter-bar-item__link {
  display: block;
  padding: $space-s;

  color: $var-color-default;
  text-decoration: none;

  border-bottom: 2px solid transparent;

  &--active {
    color: $var-color-east-side;

    border-bottom: 2px solid $var-color-east-side;
  }

  &:hover {
    color: $var-color-default;
  }
}
</style>
