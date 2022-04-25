<template>
  <div class="placeholder-user">
    <div class="placeholder-user__img"></div>
    <span class="placeholder-user__username">Username</span>
    <span class="placeholder-user__name">Full Name</span>
  </div>
</template>

<style lang="scss">
.placeholder-user {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.placeholder-user__img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: $space-m;

  background-color: $var-color-amethyst-smoke;
  border-radius: 50%;
  opacity: 0.2;
}

.placeholder-user__username {
  @include caption-h3;

  margin-bottom: $space-s;

  color: $var-color-amethyst-smoke;
  text-align: center;

  background-color: $var-color-amethyst-smoke;
  border-radius: 6px;
  opacity: 0.2;
}

.placeholder-user__name {
  @include text-small;

  margin-bottom: $space-m;

  color: $var-color-amethyst-smoke;
  text-align: center;

  background-color: $var-color-amethyst-smoke;
  border-radius: 6px;
  opacity: 0.2;
}
</style>
