import { isNotEmptyArr } from "@/helpers/utils"

export default async function paramsTag({ to, next }) {
  const tag = to.params.tag
  const reg = /^[0-9]+$/g
  const error = {
    message: "Error: tag not found",
    statusCode: "404",
  }

  if (reg.test(tag)) {
    return next({
      name: "PageError",
      params: { error },
    })
  }

  const res = await fetch(`http://localhost:3005/feeds?tags_like=${tag}`, {
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
