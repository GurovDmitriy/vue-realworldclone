import { getterTypes as getterTypesAuth } from "@/store/modules/auth"

export default function auth({ next, store }) {
  if (!store.getters[getterTypesAuth.getIsLoggedIn]) {
    return next({ name: "PageLogin" })
  } else {
    return next()
  }
}
