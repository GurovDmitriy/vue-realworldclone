<template>
  <ul class="nav-list">
    <AppNavListItem
      v-for="item in dataItem"
      :key="item.content"
      :data-item="item"
      class="nav-list__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          content: "Home",
          path: "/",
        },
      ],
    },
  },
}
</script>

<style lang="scss">
.nav-list {
  display: block;
  padding: 0;

  text-align: center;

  list-style: none;

  @media (min-width: $min-width-tablet) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
