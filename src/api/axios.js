import axios from "axios"
import { getItemLS } from "@/helpers/persistanceStorage"

axios.defaults.baseURL = "http://localhost:3005"

axios.interceptors.request.use((config) => {
  const credential = getItemLS("credential")
  let token = null

  if (credential && credential.accessToken) {
    token = getItemLS("credential").accessToken
  }

  const authorizationToken = token ? `Bearer ${token}` : ""
  config.headers.Authorization = authorizationToken
  return config
})

export default axios

// axios.onError((error) => {
//   if (error.response.status === 401) {
//     store.dispatch(actionTypesAuth.logout)
//   }
// })
