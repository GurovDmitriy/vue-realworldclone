<template>
  <li class="paginator-list-item">
    <RouterLink
      class="paginator-list-item__link"
      :class="getClassActive"
      :to="{
        path: dataItem.pathPage,
        query: { page: dataItem.page },
      }"
      >{{ dataItem.page }}</RouterLink
    >
  </li>
</template>

<script>
export default {
  name: "AppPaginatorListItem",

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getClassActive() {
      return {
        "paginator-list-item__link--active": this.dataItem.isActive,
      }
    },
  },
}
</script>

<style lang="scss">
.paginator-list-item__link {
  @include text-small;

  display: block;
  padding: $space-s $space-m;

  color: $var-color-default;
  line-height: 1;
  text-decoration: none;

  background-color: $var-color-light-accent;
  border-radius: 4px;

  &--active {
    color: $var-color-white;

    background-color: $var-color-main-brand;
  }

  &:hover {
    color: $var-color-white;

    background-color: $var-color-main-brand;
  }
}

.paginator-list-item__link.nuxt-link-exact-active {
  color: $var-color-white;

  background-color: $var-color-main-brand;
}
</style>
