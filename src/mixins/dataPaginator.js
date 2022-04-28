import { getArrRange, isNotEmptyObj } from "@/helpers/utils"
import { paginator } from "@/helpers/vars"

export default {
  computed: {
    getDataPaginator() {
      const filter = this.$route.params.user
      const countItem = this.getFeedCount[filter] || 1
      const delim = paginator.feedList.main
      const countPages = getArrRange(1, Math.ceil(countItem / delim))

      const query = this.$route.query
      const queryPage = this.$route.query.page

      return countPages.map((item, index) => {
        let isActive = null

        if (index === 0 && !isNotEmptyObj(query)) {
          isActive = true
        } else {
          isActive = queryPage === item || queryPage === 1
        }

        return {
          page: item,
          pathPage: this.$route.path,
          isActive,
        }
      })
    },
  },
}
