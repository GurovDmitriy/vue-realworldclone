<template>
  <div class="title-user">
    <AppPlaceholderUser
      v-if="getIsLoadingUser"
      class="title-user__placeholder"
    />
    <template v-if="getIsVisibleTitleUser">
      <AppImage class="title-user__img" :data-item="getDataImage" />
      <h2 class="title-user__username">{{ getUser.userName }}</h2>
      <p class="title-user__name">{{ getFullNameUser }}</p>
    </template>
  </div>
</template>

<script>
import AppPlaceholderUser from "@/components/AppPlaceholderUser"
import AppImage from "@/components/AppImage"

import { mapState } from "vuex"
import { isNotEmptyObj } from "@/helpers/utils"

export default {
  name: "TheTitleUser",

  components: {
    AppPlaceholderUser,
    AppImage,
  },

  data() {
    return {
      config: {
        imgAuthor: {
          width: 100,
          height: 100,
          placeholder: "placeholder-avatar.png",
        },
      },
    }
  },

  computed: {
    ...mapState({
      getUser: ({ user }) => user.user,
      getIsLoadingUser: ({ user }) => user.isLoading,
      getErrorsUser: ({ user }) => user.errors,
    }),

    getFullNameUser() {
      if (!this.getUser) return "Loading..."

      const firstName = this.getUser.firstName
      const lastName = this.getUser.lastName

      return `${firstName} ${lastName}`
    },

    getDataImage() {
      return Object.assign({}, this.getUser, {
        width: this.config.imgAuthor.width,
        height: this.config.imgAuthor.height,
        alt: this.getUser.userName,
        placeholder: this.config.imgAuthor.placeholder,
      })
    },

    getIsVisibleTitleUser() {
      return isNotEmptyObj(this.getUser) && !this.getIsLoadingUser
    },
  },
}
</script>

<style lang="scss">
.title-user {
  @include container;
}

.title-user__img {
  display: block;
  width: 100px;
  height: auto;
  margin: 0 auto;
  margin-bottom: $space-m;

  border-radius: 50%;
}

.title-user__username {
  @include caption-h3;

  margin-bottom: $space-s;

  color: $var-color-light-accent;
  text-align: center;
}

.title-user__name {
  @include text-small;

  margin-bottom: $space-m;

  color: $var-color-light-accent;
  text-align: center;
}
</style>
