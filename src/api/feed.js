import axios from "@/api/axios"
import { isNotEmptyStr, isNotEmptyObj } from "@/helpers/utils"

const getFeed = (payload) => {
  const query = isNotEmptyStr(payload) ? `?${payload}` : ""

  return axios.$get(`/feeds${query}`)
}

const createFeed = (payload) => {
  if (!isNotEmptyObj(payload)) return null

  return axios.$post("/feeds", payload)
}

const updateFeed = (payload) => {
  if (!isNotEmptyObj(payload)) return null

  return axios.$patch(`/feeds/${payload.id}`, payload)
}

const deleteFeed = (payload) => {
  if (!payload || typeof payload !== "number") return null

  return axios.$delete(`/feeds/${payload}`)
}

const toggleLikeFeed = (payload) => {
  if (!isNotEmptyObj(payload)) return null

  return axios.$patch(`/feeds/${payload.id}`, payload.data)
}

export default {
  getFeed,
  createFeed,
  updateFeed,
  deleteFeed,
  toggleLikeFeed,
}
