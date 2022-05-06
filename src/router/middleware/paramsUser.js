import store from "@/store"
import { actionTypes as actionTypesUser } from "@/store/modules/user"
import { isNotEmptyObj } from "@/helpers/utils"

export default async function paramsUser({ to, next }) {
  const user = to.params.user
  const userPayload = `userName=${user}`
  const reg = /^[0-9]+$/g
  const error = {
    message: "Error: user not found",
    statusCode: "404",
  }

  if (reg.test(user)) {
    return next({
      name: "PageError",
      params: { error },
    })
  }

  const res = await store.dispatch(actionTypesUser.fetchUser, userPayload)

  if (!isNotEmptyObj(res)) {
    return next({
      name: "PageError",
      params: { error },
    })
  }

  return next()
}
