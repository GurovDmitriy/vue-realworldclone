<template>
  <div class="picture">
    <picture class="picture__picture">
      <source
        v-for="item in getImageParams"
        :key="item.id"
        :type="item.type"
        :media="`(min-width: ${item.viewport}px)`"
        :srcset="item.src"
      />

      <img
        :src="getSrc"
        :alt="dataItem.alt"
        :width="dataItem.width"
        :height="dataItem.height"
        class="picture__img"
      />
    </picture>
  </div>
</template>

<script>
import { isNotEmptyArr, isOuterSrc } from "~/helpers/utils"

export default {
  name: "AppPicturePlugin",

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        src: "placeholder-image.png",
        srcSource: ["placeholder-image.png"],
        alt: "placeholder",
        width: 100,
        height: 100,
        viewport: [1000, 600, 0],
        retina: [3, 2, 1],
        format: ["webp", "png"],
      }),
    },
  },

  computed: {
    getSrc() {
      switch (isOuterSrc(this.dataItem.src)) {
        case true:
          return this.dataItem.src

        case false:
          return require(`~/assets/images/${this.dataItem.src}`)

        default:
          return null
      }
    },

    getImageParams() {
      return [
        {
          // id
          // type
          // viewport,
          // src,
        },
      ]
    },

    getSrcSource() {
      if (
        isNotEmptyArr(this.dataItem.srcSource) &&
        isOuterSrc(this.dataItem.srcSource[0])
      ) {
        return [...this.dataItem.srcSource]
      } else if (
        isNotEmptyArr(this.dataItem.srcSource) &&
        isOuterSrc(this.dataItem.srcSource[0]) === false
      ) {
        return this.dataItem.srcSource.map((item) =>
          require(`~/assets/images/${item}`)
        )
      } else {
        return null
      }
    },

    getSrcFullStr() {
      const data = {
        //
      }

      // this.dataConfig.retina.forEach((item, index) => {
      //   const src = this.dataItem.srcSource[index]
      //   const resize = item * 100
      //   const format = this.dataConfig.format[index]

      //   const str = `${src}?resize&size=${resize}&format=${format} ${item}x`
      //   srcArr.push(str)
      // })

      return data
    },
  },
}
</script>
