<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter"
import TheHeader from "@/components/TheHeader"
import { actionTypes as actionTypesAuth } from "./store/modules/auth"
import { getItemLS } from "./helpers/persistanceStorage"

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },

  mounted() {
    const credential = getItemLS("credential")
    let userId = null

    if (credential && credential.userId) {
      userId = credential.userId
      this.$store.dispatch(actionTypesAuth.fetchCurrentUser, userId)
    } else {
      this.$store.dispatch(actionTypesAuth.logout)
    }
  },
}
</script>

<style lang="scss"></style>
