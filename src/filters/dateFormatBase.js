import { format } from "date-fns"

export function dateFormatBase(date) {
  const dateFormat = format(new Date(date), "MMMM dd, yyyy")
  return dateFormat
}
