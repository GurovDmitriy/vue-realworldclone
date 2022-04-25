export const getItemLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    return null
  }
}

export const setItemLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (err) {
    return null
  }
}
