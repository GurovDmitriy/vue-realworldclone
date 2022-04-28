import axios from "@/api/axios"

const getTagsPopular = () => {
  return axios.get("/tagsPopular")
}

export default {
  getTagsPopular,
}
