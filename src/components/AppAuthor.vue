<template>
  <div class="author">
    <RouterLink class="author__img-box" :to="{ path: dataItem.pathLink }">
      <AppImage class="author__img" :data-item="dataItem" />
    </RouterLink>
    <div class="author__info-box">
      <RouterLink class="author__name" :to="{ path: dataItem.pathLink }">
        {{ dataItem.userName }}
      </RouterLink>
      <time class="author__time-feed" :datetime="dataItem.time">
        {{ dataItem.time | dateFormatBase }}
      </time>
    </div>
  </div>
</template>

<script>
import AppImage from "@/components/AppImage"

export default {
  name: "AppAuthor",

  components: {
    AppImage,
  },

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        time: 1031974583,
        pathLink: "/",
        userName: "Author",
        image: "placeholder-avatar.png",
        width: 38,
        height: 38,
        alt: "placeholder",
        placeholder: "placeholder-avatar.png",
      }),
    },
  },
}
</script>

<style lang="scss">
.author {
  display: flex;
}

.author__img-box {
  display: block;
  width: 38px;
  margin-right: $space-s;
}

.author__img {
  display: block;
  width: 100%;
  height: auto;

  line-height: 0;

  border-radius: 50%;
}

.author__name {
  display: block;
  margin-bottom: 0;

  color: $var-color-primary;
  line-height: 1;
  text-decoration: none;
}

.author__time-feed {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  font-weight: $font-weight-light;
  line-height: 1;
}
</style>
