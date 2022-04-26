<template>
  <AppForm
    class="form-login"
    :data-item="config.form"
    novalidate="true"
    @submitForm="login"
  >
    <template #default>
      <fieldset class="form-login__fieldset">
        <legend class="form-login__legend visually-hidden">Login</legend>
        <label class="form-login__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="field.email"
          class="form-login__input form-login__input--email"
          :data-item="config.input.email"
          @blur="setCheckField('email', 'sign')"
        />
        <label class="form-login__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="field.password"
          class="form-login__input form-login__input--password"
          :data-item="config.input.password"
          @blur="setCheckField('password', 'sign')"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppFormErrors
        v-if="getIsVisibleFormErrors"
        :data-item="errorsForm"
        class="form-register__errors"
      />
      <AppButton
        class="form-login__btn form-login__btn--login"
        :data-item="config.btn.login"
        :disabled="getIsSubmittingForm"
        >Login</AppButton
      >
    </template>
  </AppForm>
</template>

<script>
import AppForm from "~/components/AppForm"
import AppInput from "~/components/AppInput"
import AppFormErrors from "~/components/AppFormErrors"
import AppButton from "~/components/AppButton"

import { mapState } from "vuex"
import FormValidation from "~/mixins/formValidation"
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  name: "TheFormLogin",

  components: {
    AppForm,
    AppInput,
    AppFormErrors,
    AppButton,
  },

  mixins: [FormValidation],

  data() {
    return {
      config: {
        form: {
          method: "POST",
          action: "",
        },

        input: {
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

        btn: {
          login: { type: "submit" },
        },
      },

      field: {
        email: "",
        password: "",
      },
    }
  },

  computed: {
    ...mapState({
      getIsSubmittingForm: ({ auth }) => auth.isSubmitting,
    }),
  },

  methods: {
    async login() {
      if (!this.getIsValidForm("sign")) return false
      if (this.getIsSubmittingForm) return false

      await this.$store.dispatch(actionTypesAuth.login, this.field)
      return this.$router.push({ path: "/" })
    },
  },
}
</script>

<style lang="scss">
.form-login {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}

.form-login__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-login__fieldset {
  margin: 0;
  margin-bottom: $space-l;
  padding: 0;

  border: none;
}

.form-login__legend {
  margin: 0;
  padding: 0;
}

.form-login__btn {
  &--login {
    margin-left: auto;
  }
}
</style>
