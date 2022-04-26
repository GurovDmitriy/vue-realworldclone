<template>
  <ul class="placeholder-paginator">
    <li class="placeholder-paginator__item"></li>
    <li class="placeholder-paginator__item"></li>
    <li class="placeholder-paginator__item"></li>
  </ul>
</template>

<script>
export default {
  name: "AppPlaceholderPaginator",
}
</script>

<style lang="scss">
.placeholder-paginator {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0 ($space-xs * -1);
  padding: 0;

  list-style: none;
}

.placeholder-paginator__item {
  width: 32px;
  height: 27px;
  margin: 0 $space-xs;

  background-color: $var-color-amethyst-smoke;
  border-radius: 4px;
}
</style>
