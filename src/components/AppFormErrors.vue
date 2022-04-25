<template>
  <ul class="form-errors">
    <AppFormErrorsItem
      v-for="(item, index) in Object.keys(dataItem)"
      :key="`${item}-${index}`"
      :data-item="dataItem[item]"
      class="form-errors__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        userName: {
          caption: "userName",
          messages: ["is required", "min 4 symb"],
        },

        password: {
          caption: "password",
          messages: ["is required", "min 6 symb"],
        },
      }),
    },
  },
}
</script>

<style lang="scss">
.form-errors {
  @include text-small;

  margin: 0 auto;
  margin-bottom: $space-l;
  padding: 0;

  color: $var-color-default;
  line-height: 1.2;

  list-style: none;
}
</style>
