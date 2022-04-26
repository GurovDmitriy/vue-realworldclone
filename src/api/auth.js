import axios from "@/api/axios"

const register = (payload) => {
  return axios.$post("/register", payload)
}

const login = (payload) => {
  return axios.$post("/login", payload)
}

const getUser = (payload) => {
  if (!payload) return null
  return axios.$get(`/userList/${payload}`)
}

const updateUser = (payload) => {
  return axios.$patch(`/users/${payload.id}`, payload)
}

export default {
  register,
  login,
  getUser,
  updateUser,
}
