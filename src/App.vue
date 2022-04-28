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

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss"></style>
