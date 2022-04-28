<template>
  <main class="main-editor">
    <h2 class="main-editor__caption">New Feed</h2>
    <TheFormEditor class="main-editor__form-editor" />
  </main>
</template>

<script>
import TheFormEditor from "@/components/TheFormEditor"

export default {
  name: "PageEditor",

  components: {
    TheFormEditor,
  },
}
</script>

<style lang="scss">
.main-editor {
  @include container;
}

.main-editor__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
