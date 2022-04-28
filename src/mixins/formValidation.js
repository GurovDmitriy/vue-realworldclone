import { getClone, isNotEmptyObj } from "@/helpers/utils"
import { forms } from "@/helpers/vars"
import checkField from "@/helpers/checkField"

export default {
  data() {
    return {
      errorsForm: {},
    }
  },

  computed: {
    getIsVisibleFormErrors() {
      return isNotEmptyObj(this.errorsForm)
    },
  },

  methods: {
    setCheckField(nameField, nameForm) {
      const value = this.field[nameField]
      let messages = []
      let caption = ""

      if (nameForm === "sign") {
        switch (nameField) {
          case "userName":
            setData("checkFieldUserName")
            break
          case "email":
            setData("checkFieldEmail")
            break
          case "password":
            setData("checkFieldPassword")
            break
          case "firstName":
            setData("checkFieldFirstName")
            break
          case "lastName":
            setData("checkFieldLastName")
            break
          case "image":
            setData("checkFieldUrl")
            break
          case "title":
            setData("checkFieldTitleFeed")
            break
        }
      }

      if (nameForm === "feed") {
        switch (nameField) {
          case "title":
            setData("checkFieldTitleFeed")
            break
          case "preview":
            setData("checkFieldAboutFeed")
            break
          case "tags":
            setData("checkFieldTagFeed")
            break
          case "content":
            setData("checkFieldContentFeed")
            break
        }
      }

      function setData(nameMethod) {
        messages = checkField[nameMethod](value)
        caption = forms[nameForm][nameField].message.caption
      }

      this.setErrorsForm(nameField, caption, messages)
      if (!messages.length) this.removeErrorsForm(nameField)
    },

    setErrorsForm(nameField, caption, messages) {
      const data = {}

      data[nameField] = { caption: "", messages: [] }
      data[nameField].caption = caption
      data[nameField].messages = getClone(messages)

      const errorsClone = getClone(this.errorsForm)

      this.errorsForm = Object.assign({}, errorsClone, data)
    },

    removeErrorsForm(nameField) {
      const data = getClone(this.errorsForm)
      delete data[nameField]

      this.errorsForm = data
    },

    getIsValidForm(formName) {
      for (const key in this.field) {
        this.setCheckField(key, formName)
      }

      return !isNotEmptyObj(this.errorsForm)
    },
  },
}
