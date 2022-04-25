<template>
  <form
    class="form"
    :action="dataItem.action"
    :method="dataItem.method"
    @submit.prevent="emitSubmitForm"
  >
    <div class="form__box-body"><slot name="default"></slot></div>
    <div class="form__box-btn"><slot name="box-btn"></slot></div>
  </form>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        action: "",
        method: "POST",
      }),
    },
  },

  methods: {
    emitSubmitForm() {
      this.$emit("submitForm")
    },
  },
}
</script>

<style lang="scss">
.form {
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form__box-body {
  margin-bottom: $space-l;
}

.form fieldset {
  margin: 0;
  padding: 0;

  border: none;
}

.form legend {
  margin: 0;
  padding: 0;

  border: none;
}
</style>
