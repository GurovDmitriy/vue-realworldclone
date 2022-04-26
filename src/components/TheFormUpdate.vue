<template>
  <AppForm
    class="form-update"
    :data-item="config.form"
    novalidate="true"
    @submitForm="updateFeed"
  >
    <template #default>
      <fieldset class="form-update__fieldset">
        <legend class="form-update__legend visually-hidden">Update Feed</legend>
        <label class="form-update__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          v-model="field.title"
          class="form-update__input form-update__input--title"
          :data-item="config.input.title"
          @blur="setCheckField('title', 'feed')"
        />
        <label class="form-update__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          v-model="field.preview"
          class="form-update__input form-update__input--about"
          :data-item="config.input.about"
          @blur="setCheckField('preview', 'feed')"
        />
        <label class="form-update__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          v-model="field.tags"
          class="form-update__input form-update__input--tags"
          :data-item="config.input.tags"
          @blur="setCheckField('tags', 'feed')"
        />
        <AppInputTextarea
          v-model="field.content"
          class="form-update__input form-update__input--content"
          :data-item="config.input.content"
          @blur="setCheckField('content', 'feed')"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppFormErrors
        v-if="getIsVisibleFormErrors"
        :data-item="errorsForm"
        class="form-register__errors"
      />
      <div class="form-update__box-btn">
        <AppButton
          class="form-update__btn form-update__btn--reset"
          :data-item="config.btn.reset"
          :disabled="getIsSubmittingForm"
          @clickBtn="resetField"
          >Reset</AppButton
        >
        <AppButton
          class="form-update__btn form-update__btn--create"
          :data-item="config.btn.update"
          :disabled="getIsSubmittingForm"
          >Update</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import AppForm from "~/components/AppForm"
import AppInput from "~/components/AppInput"
import AppInputTextarea from "~/components/AppInputTextarea"
import AppFormErrors from "~/components/AppFormErrors"
import AppButton from "~/components/AppButton"

import { mapGetters, mapState } from "vuex"
import { getStrKebabCase } from "~/helpers/utils"
import FormCreateFeed from "~/mixins/formCreateFeed"
import FormReset from "~/mixins/formReset"
import FormValidation from "~/mixins/formValidation"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  name: "TheFormUpdate",

  components: {
    AppInputTextarea,
    AppForm,
    AppInput,
    AppFormErrors,
    AppButton,
  },

  mixins: [FormCreateFeed, FormReset, FormValidation],

  data() {
    return {
      config: {
        form: {
          method: "POST",
          action: "",
        },

        input: {
          title: {
            name: "title",
            type: "text",
            placeholder: "Title",
            id: "title-field",
            maxlength: 100,
            required: true,
          },

          about: {
            name: "about",
            type: "text",
            placeholder: "About",
            id: "about-field",
            maxlength: 100,
            required: true,
          },

          content: {
            name: "content",
            placeholder: "Content",
            id: "content-field",
            required: true,
            maxlength: 500,
          },

          tags: {
            name: "tags",
            type: "text",
            placeholder: "Tags",
            id: "tags-field",
            maxlength: 100,
            required: false,
          },
        },

        btn: {
          reset: { type: "button" },
          update: { type: "submit" },
        },
      },

      field: {
        title: "",
        preview: "",
        content: "",
        tags: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
    }),

    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getIsSubmittingForm: ({ auth }) => auth.isSubmitting,
    }),
  },

  mounted() {
    this.setField()
  },

  methods: {
    async updateFeed() {
      if (!this.getIsValidForm("feed")) return false
      if (this.getIsSubmittingForm) return false

      const field = this.field
      const fieldDefault = this.createFieldDefault()
      const tags = { tags: this.createTags() }
      const idFeed = this.getFeed.id

      const feedNew = Object.assign({}, field, fieldDefault, tags, {
        id: idFeed,
      })

      const slugFeed = getStrKebabCase(feedNew.title)
      await this.$store.dispatch(actionTypesFeed.updateFeed, feedNew)

      return this.$router.push({ path: `/feed/${slugFeed}` })
    },

    setField() {
      const feed = { ...this.getFeed }
      const tags = feed.tags.join(", ")

      this.field = Object.assign({}, this.field, feed, { tags })
    },
  },
}
</script>

<style lang="scss">
.form-update {
  margin-bottom: $space-xxl;
}

.form-update__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-update__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
