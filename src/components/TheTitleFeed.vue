<template>
  <div class="title-feed">
    <AppPlaceholderFeedUser
      v-if="getIsLoadingUser"
      class="title-feed__placeholder"
    />
    <template v-if="getIsVisibleTitleFeed">
      <h2 class="title-feed__caption">{{ getFeed.title }}</h2>
      <AppAuthor :data-item="getDataAuthor" class="title-feed__author" />
      <div v-if="getIsVisibleBtn" class="title-feed__box-btn">
        <AppButtonIcon
          :data-item="config.btn.delete"
          class="title-feed__btn title-feed__btn--delete"
          @clickBtn="deleteFeed"
        >
          <template #icon>
            <AppIcon :icon-name="config.btn.delete.iconName">
              <IconTrashFill />
            </AppIcon>
          </template>
          <template #default>Delete</template>
        </AppButtonIcon>
        <AppButtonIcon
          :data-item="config.btn.edit"
          class="title-feed__btn title-feed__btn--edit"
          @clickBtn="editFeed"
        >
          <template #icon>
            <AppIcon :icon-name="config.btn.edit.iconName">
              <IconPencilFill />
            </AppIcon>
          </template>
          <template #default>Edit</template>
        </AppButtonIcon>
      </div>
    </template>
  </div>
</template>

<script>
import AppPlaceholderFeedUser from "@/components/AppPlaceholderFeedUser"
import AppAuthor from "@/components/AppAuthor"
import AppButtonIcon from "@/components/AppButtonIcon"
import AppIcon from "@/components/AppIcon"
import IconPencilFill from "@/components/icons/IconPencilFill"
import IconTrashFill from "@/components/icons/IconTrashFill"

import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "@/store/modules/feed"
import { isNotEmptyObj } from "@/helpers/utils"

export default {
  name: "TheTitleFeed",

  components: {
    AppPlaceholderFeedUser,
    AppAuthor,
    AppButtonIcon,
    AppIcon,
    IconPencilFill,
    IconTrashFill,
  },

  data() {
    return {
      config: {
        btn: {
          edit: {
            type: "button",
            iconName: "pencil-fill",
          },

          delete: {
            type: "button",
            iconName: "trash-fill",
          },
        },

        imgAuthor: {
          width: 38,
          height: 38,
          placeholder: "placeholder-avatar.png",
        },
      },
    }
  },

  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getIsLoadingFeed: ({ feed }) => feed.isLoading,
      getErrorsFeed: ({ feed }) => feed.errors,

      getUser: ({ user }) => user.user,
      getIsLoadingUser: ({ user }) => user.isLoading,
      getErrorsUser: ({ user }) => user.errors,

      getCurrentUser: ({ auth }) => auth.currentUser,
      getIsLoadingCurrentUser: ({ auth }) => auth.isLoading,
      getErrorsCurrentUser: ({ auth }) => auth.errors,
    }),

    getDataAuthor() {
      const pathLink = `/users/${this.getUser.userName}`

      return Object.assign({}, this.getUser, {
        pathLink,
        time: this.getFeed.time,
        width: this.config.imgAuthor.width,
        height: this.config.imgAuthor.height,
        alt: this.getUser.userName,
        placeholder: this.config.imgAuthor.placeholder,
      })
    },

    getIsOwnerFeed() {
      const dataCurrentUser = this.getCurrentUser
      const dataFeed = this.getFeed

      if (dataCurrentUser && dataFeed) {
        return dataFeed.userId === dataCurrentUser.id
      }
      return false
    },

    getIsVisibleBtn() {
      return this.getIsOwnerFeed
    },

    getIsVisibleTitleFeed() {
      return isNotEmptyObj(this.getUser) && isNotEmptyObj(this.getFeed)
    },
  },

  methods: {
    editFeed() {
      if (!this.getIsOwnerFeed) return false

      return this.$router.push({ name: "PageUpdate" })
    },

    async deleteFeed() {
      if (!this.getIsOwnerFeed) return false

      const currentUserName = this.getCurrentUser.userName
      const idFeed = this.getFeed.id

      await this.$store.dispatch(actionTypesFeed.deleteFeed, idFeed)
      return this.$router.push({
        name: "PageUser",
        params: { user: currentUserName },
      })
    },
  },
}
</script>

<style lang="scss">
.title-feed {
  @include container;
}

.title-feed__caption {
  @include caption-h2;

  margin-bottom: $space-s;

  color: $var-color-light-accent;
}

.title-feed__author {
  margin-bottom: $space-s;
}

.title-feed__author .author__name {
  color: $var-color-light-accent;
}

.title-feed__author .author__time-feed {
  color: $var-color-light-accent;
}

.title-feed__box-btn {
  display: flex;
  flex-wrap: wrap;
}

.title-feed__btn {
  margin-right: $space-s;

  color: $var-color-light-accent;

  border-color: $var-color-light-accent;

  &:last-child {
    margin-right: 0;
  }
}
</style>
