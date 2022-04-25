// get

export function getClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// getArr

export function getArrRange(start, end) {
  if (!start || typeof start !== "number") return
  if (!end || typeof end !== "number") return

  return [...Array(end).keys()].map((el) => el + start)
}

// getStr

export function getStrKebabCase(str) {
  if (!str || typeof str !== "string") return null

  return str.split(" ").join("-")
}

export function getStrCamelCase(str) {
  if (!str || typeof str !== "string") return null

  const strArr = str.trim().split(" ")

  strArr.forEach((item, index, arr) => {
    if (index > 0) arr[index] = item[0].toUpperCase() + item.slice(1)
  })

  return strArr.join("")
}

export function getStrFromKebabCase(str) {
  if (!str || typeof str !== "string") return null

  return str.split("-").join(" ")
}

export function getStrCapitalized(str) {
  if (!str || typeof str === "string") return null

  return `${str[0]}${str.slice(1)}`
}

// is

// isOuter

export function isOuterSrc(value) {
  if (!value || typeof value !== "string") return null

  return /^http/.test(value)
}

// isNotEmpty

export function isNotEmptyStr(value) {
  if (!value || typeof value !== "string") return null

  return value !== ""
}

export function isNotEmptyObj(value) {
  if (!value || typeof value !== "object") return null

  return Object.keys(value).length > 0
}

export function isNotEmptyArr(value) {
  if (!value || !Array.isArray(value)) return null

  return value.length > 0
}
