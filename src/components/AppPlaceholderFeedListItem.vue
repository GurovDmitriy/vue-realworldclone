<template>
  <li class="placeholder-feed-list-item">
    <div class="placeholder-feed-list-item__header">
      <div class="placeholder-feed-list-item__avatar"></div>
      <div class="placeholder-feed-list-item__name"></div>
    </div>
    <div class="placeholder-feed-list-item__main"></div>
  </li>
</template>

<style lang="scss">
.placeholder-feed-list-item {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-amethyst-smoke;
}

.placeholder-feed-list-item__header {
  display: flex;
  align-items: center;

  margin-bottom: $space-s;
}

.placeholder-feed-list-item__avatar {
  width: 38px;
  height: 38px;

  margin-right: $space-s;

  background-color: $var-color-amethyst-smoke;
  border-radius: 50%;
}

.placeholder-feed-list-item__name {
  width: 100%;
  max-width: 80px;
  height: 28px;

  background-color: $var-color-amethyst-smoke;
  border-radius: 10px;
}

.placeholder-feed-list-item__main {
  width: 100%;
  max-width: 400px;
  height: 50px;

  background-color: $var-color-amethyst-smoke;
  border-radius: 10px;
}
</style>
