<template>
  <li class="nav-list-item">
    <RouterLink :to="{ path: dataItem.path }" class="nav-list-item__link">{{
      dataItem.content
    }}</RouterLink>
  </li>
</template>

<script>
export default {
  name: "AppNavListItem",

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.nav-list-item__link {
  display: block;
  padding: $space-s;

  color: $var-color-default;
  text-decoration: none;

  &.router-link-exact-active {
    color: $var-color-main-brand;
  }

  &:hover {
    color: $var-color-main-brand;
  }
}
</style>
