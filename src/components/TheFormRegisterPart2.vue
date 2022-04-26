<template>
  <fieldset class="form-register-part-2__fieldset">
    <legend class="form-register-part-2__legend visually-hidden">
      User Avatar Data
    </legend>
    <label
      class="form-register-part-2__label visually-hidden"
      for="first-name-field"
      >First name</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--first-name"
      :data-item="config.input.firstName"
      :value="dataItem.firstName"
      @input="emitInputUser($event, 'firstName')"
      @blur="emitBlurField('firstName')"
    />
    <label
      class="form-register-part-2__label visually-hidden"
      for="last-name-field"
      >Last name</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--last-name"
      :data-item="config.input.lastName"
      :value="dataItem.lastName"
      @input="emitInputUser($event, 'lastName')"
      @blur="emitBlurField('lastName')"
    />
    <label
      class="form-register-part-2__label visually-hidden"
      for="avatar-field"
      >Avatar</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--avatar"
      :data-item="config.input.image"
      :value="dataItem.image"
      @input="emitInputUser($event, 'image')"
      @blur="emitBlurField('image')"
    />
  </fieldset>
</template>

<script>
import AppInput from "@/components/AppInput"

export default {
  name: "TheFormRegisterPart2",

  components: {
    AppInput,
  },

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      config: {
        input: {
          firstName: {
            name: "firstname",
            type: "text",
            placeholder: "First name",
            id: "firstname-field",
            required: true,
            maxlength: 100,
          },

          lastName: {
            name: "lastname",
            type: "text",
            placeholder: "Last name",
            id: "lastname-field",
            required: true,
            maxlength: 100,
          },

          image: {
            name: "avatar",
            type: "url",
            placeholder: "Avatar",
            id: "avatar-field",
            required: true,
            maxlength: 100,
          },
        },
      },
    }
  },

  methods: {
    emitInputUser(value, nameField) {
      this.$emit("inputUser", { value, nameField })
    },

    emitBlurField(nameField) {
      this.$emit("blurField", nameField)
    },
  },
}
</script>

<style lang="scss">
.form-register-part-2__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-register-part-2__fieldset {
  margin: 0;
  margin-bottom: $space-l;
  padding: 0;

  border: none;
}

.form-register-part-2__legend {
  margin: 0;
  padding: 0;
}
</style>
