import axios from "@/api/axios"

const getFeedCountTotal = () => {
  return axios.get("/feedCountTotal")
}

const getFeedCountByTag = () => {
  return axios.get("/feedCountByTag")
}

const getFeedCountByUser = () => {
  return axios.get("/feedCountByUser")
}

const getFeedCountByLike = () => {
  return axios.get("/feedCountByLike")
}

export default {
  getFeedCountTotal,
  getFeedCountByTag,
  getFeedCountByUser,
  getFeedCountByLike,
}
