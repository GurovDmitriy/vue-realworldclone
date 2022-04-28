export default {
  mounted() {
    this.fieldDefault = { ...this.field }
  },

  methods: {
    resetField() {
      this.field = { ...this.fieldDefault }
    },
  },
}
