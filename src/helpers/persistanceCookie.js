export const setItemCO = (cookie, key, data) => {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.set(key, data, options)
  } catch (err) {
    return null
  }
}

export const removeItemCO = (cookie, key, data) => {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.remove(key, data, options)
  } catch (err) {
    return null
  }
}
