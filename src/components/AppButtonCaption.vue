<template>
  <div class="refresh">
    <p class="refresh__error">{{ dataItem.message }}</p>
    <AppButtonIcon
      :data-item="dataItem"
      class="refresh__button-icon"
      @clickBtn="emitClickBtn"
    >
      <template #icon>
        <AppIcon :icon-name="dataItem.iconName">
          <IconArrowClockwise />
        </AppIcon>
      </template>
      <template #default>{{ dataItem.btnText }}</template>
    </AppButtonIcon>
  </div>
</template>

<script>
import AppButtonIcon from "@/components/AppButtonIcon"
import AppIcon from "@/components/AppIcon"
import IconArrowClockwise from "@/components/icons/IconArrowClockwise"

export default {
  name: "AppButtonCaption",

  components: {
    AppButtonIcon,
    AppIcon,
    IconArrowClockwise,
  },

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        message: "Something went wrong",
        btnText: "Refresh",
        iconName: "arrow-clockwise",
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
