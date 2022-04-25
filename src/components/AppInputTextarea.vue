<template>
  <textarea
    v-bind="$attrs"
    :id="dataItem.id"
    :value="value"
    :name="dataItem.name"
    :placeholder="dataItem.placeholder"
    :maxlength="dataItem.maxlength"
    :required="dataItem.required"
    class="textarea"
    v-on="getListeners"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: "",
    },

    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        name: "",
        placeholder: "Placeholder",
        id: "",
        maxlength: 500,
        required: false,
      }),
    },
  },

  computed: {
    getListeners() {
      const input = this.emitValue
      const focus = this.emitFocus
      const blur = this.emitBlur

      return {
        ...this.$listeners,
        input,
        focus,
        blur,
      }
    },
  },

  methods: {
    emitValue(evt) {
      const value = evt.target.value
      this.$emit("input", value)
    },

    emitFocus(value) {
      this.focused = true
      this.$emit("focus", value)
    },

    emitBlur(value) {
      this.focused = false
      this.$emit("blur", value)
    },
  },
}
</script>

<style lang="scss">
.textarea {
  display: block;
  width: 100%;
  height: 200px;
  min-height: 100px;
  max-height: 300px;
  padding: $space-m $space-l;

  border: 1px solid $var-color-default;
  border-radius: 4px;

  resize: vertical;

  &::placeholder {
    color: $var-color-default;
  }
}
</style>
