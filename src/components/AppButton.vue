<template>
  <button
    class="button"
    :type="dataItem.type"
    :disabled="disabled"
    @click="emitClickBtn"
  >
    <slot name="default">Click</slot>
  </button>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        type: "button",
      }),
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
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
.button {
  display: block;
  padding: $space-m $space-l;

  color: $var-color-gray-nurse;

  background: none;
  background-color: $var-color-east-side;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
}
</style>
