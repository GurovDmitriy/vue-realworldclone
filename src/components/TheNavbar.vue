<template>
  <nav class="navbar">
    <h2 class="navbar__caption visually-hidden">Navigation</h2>
    <div class="navbar__container">
      <AppLogo class="navbar__logo" />
      <AppBurger class="navbar__burger" @clickBtn="toggleMenu" />
      <template v-if="getIsVisibleNavList">
        <AppNavList
          :data-item="getNavList"
          :class="getClassActiveNavList"
          class="navbar__nav-list"
        />
      </template>
      <AppLoading v-else>Loading...</AppLoading>
    </div>
  </nav>
</template>

<script>
import AppLogo from "~/components/AppLogo"
import AppBurger from "~/components/AppBurger"
import AppNavList from "~/components/AppNavList"
import AppLoading from "~/components/AppLoading"

import { mapGetters, mapState } from "vuex"
import { getterTypes as getterTypesAuth } from "~/store/auth"

export default {
  name: "TheNavbar",

  components: {
    AppLogo,
    AppBurger,
    AppNavList,
    AppLoading,
  },

  data() {
    return {
      navList: {
        default: [
          { content: "Home", path: "/" },
          { content: "Sign in", path: "/login" },
          { content: "Sign up", path: "/register" },
        ],

        logged: [
          { content: "Home", path: "/" },
          { content: "New Feed", path: "/editor" },
          { content: "Settings", path: "/settings" },
        ],
      },

      isShowMenu: false,
    }
  },

  computed: {
    ...mapGetters({
      getIsAnonymous: getterTypesAuth.getIsAnonymous,
      getIsLoggedIn: getterTypesAuth.getIsLoggedIn,
      getCurrentUser: getterTypesAuth.getCurrentUser,
    }),

    ...mapState({
      getIsLoadingCurrentUser: ({ auth }) => auth.isLoading,
    }),

    getNavList() {
      const listLogged = this.navList.logged
      const listDefault = this.navList.default
      const listUser = this.getNavLinkUser

      switch (this.getIsLoggedIn) {
        case true:
          return [...listLogged, listUser]
        default:
          return [...listDefault]
      }
    },

    getNavLinkUser() {
      if (!this.getIsAnonymous && !this.getIsLoadingCurrentUser) {
        return {
          content: `${this.getCurrentUser.userName}`,
          path: `/users/${this.getCurrentUser.userName}`,
        }
      }

      if (this.getIsLoadingCurrentUser) {
        return {
          content: "Loading...",
          path: this.$route.path,
        }
      }

      return null
    },

    getClassActiveNavList() {
      return {
        "navbar__nav-list--active": this.isShowMenu,
      }
    },

    getIsVisibleNavList() {
      if (this.getIsLoadingCurrentUser && !this.getIsLoggedIn) return false
      return true
    },
  },

  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    },
  },
}
</script>
<style lang="scss">
.navbar__container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.navbar__burger {
  display: block;

  @media (min-width: $min-width-tablet) {
    display: none;
  }
}

.navbar__nav-list {
  display: none;
  width: 100%;
  margin: 0;

  &--active {
    display: block;
  }

  @media (min-width: $min-width-tablet) {
    display: flex;

    width: auto;
    margin: 0 ($space-s * -1);
  }
}
</style>
