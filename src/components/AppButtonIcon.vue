<template>
  <button
    class="button-icon"
    :class="getClassActive"
    :type="dataItem.type"
    :disabled="disabled"
    @click="emitClickBtn"
  >
    <span class="button-icon__icon">
      <slot name="icon"></slot>
    </span>
    <span class="button-icon__text"><slot name="default">Click</slot></span>
  </button>
</template>

<script>
export default {
  name: "AppButtonIcon",

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        type: "button",
      }),
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    getClassActive() {
      return {
        "button-icon--active": this.isActive,
      }
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
.button-icon {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-dark-accent;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-main-brand;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }

  &--active {
    color: $var-color-main-brand;
  }
}

.button-icon__icon {
  display: inline-block;
  width: 16px;
  height: 16px;

  margin-right: $space-xs;

  vertical-align: middle;
}

.button-icon__text {
  display: inline-block;
  margin: 0 auto;

  color: inherit;

  text-align: center;
  vertical-align: middle;
}
</style>
