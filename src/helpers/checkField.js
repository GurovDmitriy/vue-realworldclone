import { forms } from "@/helpers/vars"
import validators from "@/helpers/validators"

function getArrMessagesValidation(...checks) {
  const data = []

  checks.forEach((item) => {
    if (item) {
      data.push(item)
    }
  })

  return data
}

function checkFieldUserName(value) {
  const formName = "sign"
  const fieldName = "userName"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldEmail(value) {
  const formName = "sign"
  const fieldName = "email"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  const email = validators.getCheckEmail(
    value,
    forms[formName][fieldName].message.format
  )

  return getArrMessagesValidation(required, type, range, email)
}

function checkFieldPassword(value) {
  const formName = "sign"
  const fieldName = "password"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, range)
}

function checkFieldFirstName(value) {
  const formName = "sign"
  const fieldName = "firstName"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldLastName(value) {
  const formName = "sign"
  const fieldName = "lastName"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldUrl(value) {
  const formName = "sign"
  const fieldName = "image"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  const url = validators.getCheckUrl(
    value,
    forms[formName][fieldName].message.format
  )

  return getArrMessagesValidation(required, type, range, url)
}

function checkFieldTitleFeed(value) {
  const formName = "feed"
  const fieldName = "title"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldAboutFeed(value) {
  const formName = "feed"
  const fieldName = "preview"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldTagFeed(value) {
  const formName = "feed"
  const fieldName = "tags"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStrTag(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRangeTag(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.range
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldContentFeed(value) {
  const formName = "feed"
  const fieldName = "content"

  const required = validators.getCheckRequired(
    value,
    forms[formName][fieldName].message.required
  )

  const type = validators.getCheckStr(
    value,
    forms[formName][fieldName].message.type
  )

  const range = validators.getCheckRange(
    value,
    forms[formName][fieldName].config.min,
    forms[formName][fieldName].config.max,
    forms[formName][fieldName].message.min,
    forms[formName][fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

export default {
  checkFieldUserName,
  checkFieldEmail,
  checkFieldPassword,
  checkFieldFirstName,
  checkFieldLastName,
  checkFieldUrl,
  checkFieldTitleFeed,
  checkFieldAboutFeed,
  checkFieldTagFeed,
  checkFieldContentFeed,
}
