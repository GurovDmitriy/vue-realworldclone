<template>
  <div class="column-wrapper-main">
    <TheColumnWrapperMainLeft
      class="column-wrapper-main__column column-wrapper-main__column--left"
    />
    <TheColumnWrapperMainRight
      class="column-wrapper-main__column column-wrapper-main__column--right"
    />
  </div>
</template>

<script>
import TheColumnWrapperMainLeft from "~/components/TheColumnWrapperMainLeft"
import TheColumnWrapperMainRight from "~/components/TheColumnWrapperMainRight"

export default {
  name: "TheColumnWrapperMain",

  components: {
    TheColumnWrapperMainLeft,
    TheColumnWrapperMainRight,
  },
}
</script>

<style lang="scss">
.column-wrapper-main {
  @media (min-width: $min-width-tablet) {
    display: flex;
    justify-content: space-between;
  }
}

.column-wrapper-main__column--left {
  margin-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    width: 70%;
    margin-right: $space-xl;
    margin-bottom: 0;
  }
}

.column-wrapper-main__column--right {
  @media (min-width: $min-width-tablet) {
    width: 30%;
  }
}
</style>
