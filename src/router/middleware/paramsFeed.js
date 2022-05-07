import { isNotEmptyArr } from "@/helpers/utils"
import { getStrFromKebabCase } from "@/helpers/utils"

export default async function paramsFeed({ to, next }) {
  const feed = getStrFromKebabCase(to.params.feed)
  const reg = /^[0-9]+$/g
  const error = {
    message: "Error: feed not found",
    statusCode: "404",
  }

  if (reg.test(feed)) {
    return next({
      name: "PageError",
      params: { error },
    })
  }

  const res = await fetch(`http://localhost:3005/feeds?title_like=${feed}`, {
    method: "GET",
  })
  const data = await res.json()

  if (!isNotEmptyArr(data)) {
    return next({
      name: "PageError",
      params: { error },
    })
  }

  return next()
}
