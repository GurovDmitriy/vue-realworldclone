<template>
  <AppForm
    class="form-settings"
    :data-item="config.form"
    novalidate="true"
    @submitForm="updateSettings"
  >
    <template #default>
      <fieldset class="form-settings__fieldset">
        <legend class="form-settings__legend visually-hidden">User Data</legend>
        <label class="form-settings__label visually-hidden" for="avatar-field"
          >Avatar</label
        >
        <AppInput
          v-model="field.image"
          class="form-settings__input form-settings__input--avatar"
          :data-item="config.input.image"
          @blur="setCheckField('image', 'sign')"
        />
        <label class="form-settings__label visually-hidden" for="username-field"
          >Username</label
        >
        <AppInput
          v-model="field.userName"
          class="form-settings__input form-settings__input--username"
          :data-item="config.input.userName"
          @blur="setCheckField('userName', 'sign')"
        />
        <label class="form-settings__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="field.email"
          class="form-settings__input form-settings__input--email"
          :data-item="config.input.email"
          @blur="setCheckField('email', 'sign')"
        />
        <label class="form-settings__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="field.password"
          class="form-settings__input form-settings__input--password"
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
      <div class="form-settings__box-btn">
        <AppButton
          class="form-settings__btn form-settings__btn--logout"
          :data-item="config.btn.logout"
          :disabled="getIsSubmittingForm"
          @clickBtn="logout"
          >Logout</AppButton
        >
        <AppButton
          class="form-settings__btn form-settings__btn--update"
          :data-item="config.btn.update"
          :disabled="getIsSubmittingForm"
          >Update</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import AppForm from "@/components/AppForm"
import AppInput from "@/components/AppInput"
import AppFormErrors from "@/components/AppFormErrors"
import AppButton from "@/components/AppButton"

import { mapGetters, mapState } from "vuex"
import FormValidation from "@/mixins/formValidation"
import {
  getterTypes as getterTypesAuth,
  actionTypes as actionTypesAuth,
} from "@/store/modules/auth"

export default {
  name: "TheFormSettings",

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
          image: {
            name: "avatar",
            type: "url",
            placeholder: "Avatar",
            id: "avatar-field",
            maxlength: 100,
            required: false,
          },

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

        btn: {
          logout: { type: "button" },
          update: { type: "submit" },
        },
      },

      field: {
        image: "",
        userName: "",
        email: "",
        password: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
    }),

    ...mapState({
      getIsSubmittingForm: ({ auth }) => auth.isSubmitting,
    }),
  },

  mounted() {
    this.setField()
  },

  methods: {
    setField() {
      this.field = Object.assign({}, this.field, this.getCurrentUser)
    },

    async updateSettings() {
      try {
        if (!this.getIsValidForm("sign")) return false
        if (this.getIsSubmittingForm) return false

        await this.$store.dispatch(
          actionTypesAuth.updateCurrentUser,
          this.field
        )
        this.field.password = ""
      } catch (err) {
        this.$router.push({ name: "PageError", params: { error: err } })
      }
    },

    async logout() {
      try {
        if (this.getIsSubmittingForm) return false

        await this.$store.dispatch(actionTypesAuth.logout)
        return this.$router.push({ name: "PageLogin" })
      } catch (err) {
        this.$router.push({ name: "PageError", params: { error: err } })
      }
    },
  },
}
</script>

<style lang="scss">
.form-settings {
  margin-bottom: $space-xxl;
}

.form-settings__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-settings__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
