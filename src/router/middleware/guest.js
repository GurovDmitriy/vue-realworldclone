import { getterTypes as getterTypesAuth } from "@/store/modules/auth"

export default function guest({ next, store }) {
  if (store.getters[getterTypesAuth.getIsLoggedIn]) {
    return next({
      name: "PageHome",
    })
  } else {
    return next()
  }
}
