import { getStrCamelCase } from "@/helpers/utils"

export default {
  methods: {
    createFieldDefault() {
      const userId = this.getCurrentUser.id
      const time = Date.now()
      const like = []

      return {
        userId,
        time,
        like,
      }
    },

    createTags() {
      const tags = this.field.tags.split(",")
      return tags.map((item) => getStrCamelCase(item))
    },
  },
}
