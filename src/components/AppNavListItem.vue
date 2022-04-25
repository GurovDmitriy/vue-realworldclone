<template>
  <li class="nav-list-item">
    <NuxtLink :to="{ path: dataItem.path }" class="nav-list-item__link">{{
      dataItem.content
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
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

  &.nuxt-link-exact-active {
    color: $var-color-east-side;
  }

  &:hover {
    color: $var-color-east-side;
  }
}
</style>
