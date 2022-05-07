<template>
  <li class="tags-list-item">
    <RouterLink :to="{ path: dataItem.path }" class="tags-list-item__link">{{
      dataItem.content
    }}</RouterLink>
  </li>
</template>

<script>
import { isNotEmptyStr } from "@/helpers/utils"

export default {
  name: "AppTagsListItem",

  props: {
    dataItem: {
      type: Object,
      required: true,
      validator: (value) => {
        return isNotEmptyStr(value.content)
      },
    },
  },
}
</script>

<style lang="scss">
.tags-list-item {
  margin: 0 $space-xxs;
  margin-bottom: $space-xs;
}

.tags-list-item__link {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-light-shades;
  line-height: 1;
  text-transform: lowercase;
  text-decoration: none;

  background-color: $var-color-default;
  border-radius: 50px;

  &:hover {
    background-color: $var-color-main-brand;
  }
}
</style>
