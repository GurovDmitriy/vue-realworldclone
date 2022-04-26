<template>
  <li class="form-errors-item">
    <p class="form-errors-item__caption">{{ dataItem.caption }}</p>
    <ul class="form-errors-item__list">
      <li
        v-for="(message, index) in dataItem.messages"
        :key="`${message}-${index}`"
        class="form-errors-item__list-item"
      >
        {{ message }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "AppFormErrorsItem",

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.form-errors-item__caption {
  margin-bottom: 0;
}

.form-errors-item__list {
  margin: 0;
  padding: 0;
  padding-left: $space-l;

  list-style: none;
}
</style>
