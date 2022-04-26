<template>
  <img
    class="image"
    :src="getImage"
    :width="dataItem.width"
    :height="dataItem.height"
    :alt="dataItem.alt"
  />
</template>

<script>
import { isOuterSrc } from "~/helpers/utils"

export default {
  name: "AppImage",

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        image: "placeholder-image.png",
        width: 100,
        height: 100,
        alt: "placeholder",
        placeholder: "placeholder-image.png",
      }),
    },
  },

  computed: {
    getImage() {
      const pathImage = this.dataItem.image
      const placeholder = this.dataItem.placeholder

      switch (isOuterSrc(pathImage)) {
        case true:
          return pathImage

        case false:
          return require(`~/assets/images/${pathImage}`)

        default:
          return require(`~/assets/images/${placeholder}`)
      }
    },
  },
}
</script>

<style lang="scss">
.image {
  display: block;
  width: 100%;
  height: auto;

  line-height: 0;
}
</style>
