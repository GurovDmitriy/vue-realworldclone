import { getStrKebabCase } from "@/helpers/utils"
import { actionTypes as actionTypesFeedList } from "@/store/modules/feedList"
import { placeholder } from "@/helpers/vars"

export default {
  data() {
    return {
      placeholderCount: placeholder.feedList.main,

      config: {
        feedList: {
          imgAuthor: {
            width: 38,
            height: 38,
          },
          btnLike: {
            type: "button",
            iconName: "heart-fill",
          },
        },

        btn: {
          refresh: {
            message: "Something went wrong",
            btnText: "Refresh",
            iconName: "arrow-clockwise",
          },
        },
      },
    }
  },

  computed: {
    getDataFeedList() {
      const currentUserId = this.getCurrentUser ? this.getCurrentUser.id : null
      const config = this.config

      const data = this.getFeedList.map((item) => {
        const author = getAuthor(item)
        const btnLike = getBtnLike(item)
        const content = getContent(item)
        const titleFeed = getStrKebabCase(item.title)
        const pathFeed = `/feed/${titleFeed}`
        const tags = getTags(item)

        return {
          feedId: item.id,
          author,
          btnLike,
          content,
          tags,
          pathFeed,
        }
      })

      function getAuthor(item) {
        const pathLink = `/users/${item.userName}`

        return {
          pathLink,
          userName: item.userName,
          image: item.image,
          width: config.feedList.imgAuthor.width,
          height: config.feedList.imgAuthor.height,
          alt: item.userName,
          placeholder: "placeholder-avatar.png",
          time: item.time,
        }
      }

      function getBtnLike(item) {
        const count = item.like.length
        const isActive =
          item.like.findIndex((item) => item === currentUserId) !== -1

        return {
          like: item.like,
          count,
          isActive,
          type: config.feedList.btnLike.type,
          iconName: config.feedList.btnLike.iconName,
        }
      }

      function getContent(item) {
        return {
          title: item.title,
          preview: item.preview,
        }
      }

      function getTags(item) {
        return item.tags.map((item) => {
          const path = `/tags/${item}`

          return {
            content: item,
            path,
          }
        })
      }

      return data
    },
  },

  methods: {
    async fetchFeedList() {
      try {
        await this.$store.dispatch(actionTypesFeedList.fetchFeedList)
      } catch (err) {
        this.$router.push({ name: "PageError", params: { error: err } })
      }
    },

    async toggleLike(feedId) {
      try {
        if (!this.getIsLoggedIn) return this.$router.push({ name: "PageLogin" })
        if (this.getIsLoadingToggleLike) return false

        const userId = this.getCurrentUser.id
        const index = this.getFeedList.findIndex((item) => item.id === feedId)
        const like = this.getFeedList[index].like

        const getNewLike = () => {
          if (like.findIndex((item) => item === userId) === -1) {
            return [...like, userId]
          } else {
            return like.filter((item) => item !== userId)
          }
        }

        const likeNew = getNewLike()

        await this.$store.dispatch(actionTypesFeedList.toggleLikeFeed, {
          id: feedId,
          indexFeed: index,
          data: { like: likeNew },
        })
      } catch (err) {
        this.$router.push({ name: "PageError", params: { error: err } })
      }
    },
  },
}
