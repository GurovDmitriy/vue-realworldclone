import axios from "@/api/axios"
import { isNotEmptyStr } from "@/helpers/utils"

const getUser = (payload) => {
  if (isNotEmptyStr(payload)) {
    const query = `?${payload}`
    return axios.$get(`/userList${query}`)
  }

  return {}
}

export default {
  getUser,
}
