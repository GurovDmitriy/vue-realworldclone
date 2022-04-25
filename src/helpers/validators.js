function getCheckRequired(value, message) {
  return value ? false : message
}

function getCheckStr(value, message) {
  return typeof value === "string" && !Number(value) ? false : message
}

function getCheckNum(value, message) {
  return typeof value === "string" && Number(value) ? false : message
}

function getCheckRange(value, min, max, minMessage, maxMessage) {
  if (value.length < min) return minMessage
  if (value.length > max) return maxMessage
  return false
}

function getCheckEmail(value, message) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return reg.test(value) === true ? false : message
}

function getCheckUrl(value, message) {
  const reg = /(?:https?:\/\/)(.*?)\/(.+?)(?:\/|\?|#|$|\n)\w*/

  return reg.test(value) === true ? false : message
}

function getCheckStrTag(value, message) {
  const check = value.split(",").filter((item) => Number(item))

  return check.length === 0 ? false : message
}

function getCheckRangeTag(value, min, max, message) {
  const check = value
    .split(",")
    .filter((item) => item.length < min || item.length > max)

  return check.length === 0 ? false : message
}

export default {
  getCheckRequired,
  getCheckStr,
  getCheckNum,
  getCheckEmail,
  getCheckRange,
  getCheckUrl,
  getCheckStrTag,
  getCheckRangeTag,
}
