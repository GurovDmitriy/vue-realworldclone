import axios from "@/api/axios"
import { isNotEmptyStr } from "@/helpers/utils"

const getFeedList = (payload) => {
  const query = isNotEmptyStr(payload) ? `?${payload}` : ""

  return axios.$get(`/feedList${query}`)
}

export default {
  getFeedList,
}
