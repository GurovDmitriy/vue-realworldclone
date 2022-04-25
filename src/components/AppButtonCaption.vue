<template>
  <div class="refresh">
    <p class="refresh__error">{{ dataItem.message }}</p>
    <AppButtonIcon
      :data-item="dataItem"
      class="refresh__button-icon"
      @clickBtn="emitClickBtn"
      >{{ dataItem.btnText }}</AppButtonIcon
    >
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        message: "Something went wrong",
        btnText: "Refresh",
        iconName: "arrow-clockwise",
        iconDesc: "refresh",
      }),
    },
  },

  methods: {
    emitClickBtn() {
      this.$emit("clickBtn")
    },
  },
}
</script>

<style lang="scss">
.refresh__error {
  @include text-small;

  margin-bottom: 0;

  color: inherit;
  font-weight: $font-weight-light;
}

.refresh__btn {
  @include text-small;

  padding: $space-s;

  color: inherit;
  font-weight: $font-weight-light;
  line-height: 1;

  background: none;
  border: 1px solid currentcolor;
  border-radius: 4px;
}

.refresh__button-icon {
  color: inherit;

  border-color: currentcolor;
}
</style>
