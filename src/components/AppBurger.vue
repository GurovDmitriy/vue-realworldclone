<template>
  <button class="burger" type="button" @click="emitClickBtn">
    <span class="burger__text visually-hidden">open/close menu</span>
  </button>
</template>

<script>
export default {
  name: "AppBurger",

  methods: {
    emitClickBtn() {
      this.$emit("clickBtn")
    },
  },
}
</script>

<style lang="scss">
.burger {
  position: relative;

  display: none;
  width: 30px;
  height: 30px;

  background: none;
  border: none;

  &::after {
    @extend %burger-bar;

    top: 5px;
  }

  &::before {
    @extend %burger-bar;

    bottom: 5px;
  }

  &:hover {
    cursor: pointer;
  }
}

%burger-bar {
  position: absolute;
  left: 50%;

  display: block;
  width: 100%;
  height: 4px;

  background-color: $var-color-east-side;
  transform: translate(-50%, 0%);

  content: "";
}
</style>
