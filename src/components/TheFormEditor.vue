<template>
  <AppForm
    class="form-editor"
    :data-item="config.form"
    novalidate="true"
    @submitForm="createFeed"
  >
    <template #default>
      <fieldset class="form-editor__fieldset">
        <legend class="form-editor__legend visually-hidden">Create Feed</legend>
        <label class="form-editor__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          v-model="field.title"
          class="form-editor__input form-editor__input--title"
          :data-item="config.input.title"
          @blur="setCheckField('title', 'feed')"
        />
        <label class="form-editor__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          v-model="field.preview"
          class="form-editor__input form-editor__input--about"
          :data-item="config.input.about"
          @blur="setCheckField('preview', 'feed')"
        />
        <label class="form-editor__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          v-model="field.tags"
          class="form-editor__input form-editor__input--tags"
          :data-item="config.input.tags"
          @blur="setCheckField('tags', 'feed')"
        />
        <AppInputTextarea
          v-model="field.content"
          class="form-editor__input form-editor__input--content"
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
      <div class="form-editor__box-btn">
        <AppButton
          class="form-editor__btn form-editor__btn--reset"
          :data-item="config.btn.reset"
          :disabled="getIsSubmittingForm"
          @clickBtn="resetField"
          >Reset</AppButton
        >
        <AppButton
          class="form-editor__btn form-editor__btn--create"
          :data-item="config.btn.create"
          :disabled="getIsSubmittingForm"
          >Create</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { getStrKebabCase } from "~/helpers/utils"
import FormCreateFeed from "~/mixins/formCreateFeed"
import FormReset from "~/mixins/formReset"
import FormValidation from "~/mixins/formValidation"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
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
          create: { type: "submit" },
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
      getIsSubmittingForm: ({ feed }) => feed.isSubmitting,
    }),
  },

  methods: {
    async createFeed() {
      if (!this.getIsValidForm("feed")) return false
      if (this.getIsSubmittingForm) return false

      const field = this.field
      const fieldDefault = this.createFieldDefault()
      const tags = { tags: this.createTags() }

      const feedNew = Object.assign({}, field, fieldDefault, tags)

      const slugFeed = getStrKebabCase(feedNew.title)
      await this.$store.dispatch(actionTypesFeed.createFeed, feedNew)

      return this.$router.push({ path: `/feed/${slugFeed}` })
    },
  },
}
</script>

<style lang="scss">
.form-editor {
  margin-bottom: $space-xxl;
}

.form-editor__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-editor__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
