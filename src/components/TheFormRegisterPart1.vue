<template>
  <fieldset class="form-register-part-1__fieldset">
    <legend class="form-register-part-1__legend visually-hidden">
      User Personal Data
    </legend>
    <label
      class="form-register-part-1__label visually-hidden"
      for="username-field"
      >Username</label
    >
    <AppInput
      class="form-register-part-1__input form-register-part-1__input--username"
      :data-item="config.input.userName"
      :value="dataItem.userName"
      @input="emitInputUser($event, 'userName')"
      @blur="emitBlurField('userName')"
    />
    <label class="form-register-part-1__label visually-hidden" for="email-field"
      >Email</label
    >
    <AppInput
      class="form-register-part-1__input form-register-part-1__input--email"
      :data-item="config.input.email"
      :value="dataItem.email"
      @input="emitInputUser($event, 'email')"
      @blur="emitBlurField('email')"
    />
    <label
      class="form-register-part-1__label visually-hidden"
      for="password-field"
      >Password</label
    >
    <AppInput
      class="form-register-part-1__input form-register-part-1__input--password"
      :data-item="config.input.password"
      :value="dataItem.password"
      @input="emitInputUser($event, 'password')"
      @blur="emitBlurField('password')"
    />
  </fieldset>
</template>

<script>
import AppInput from "~/components/AppInput"

export default {
  name: "TheFormRegisterPart1",

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
          userName: {
            name: "username",
            type: "text",
            placeholder: "Username",
            id: "username-field",
            required: true,
            maxlength: 100,
          },

          email: {
            name: "email",
            type: "email",
            placeholder: "Email",
            id: "email-field",
            required: true,
            maxlength: 100,
          },

          password: {
            name: "password",
            type: "password",
            placeholder: "Password",
            id: "password-field",
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
.form-register-part-1__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-register-part-1__fieldset {
  margin: 0;
  margin-bottom: $space-l;
  padding: 0;

  border: none;
}

.form-register-part-1__legend {
  margin: 0;
  padding: 0;
}
</style>
