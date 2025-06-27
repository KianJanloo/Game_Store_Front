type FormatOptions = {
  currency?: "IRT" | "USD"
  locale?: "fa-IR" | "en-US"
  withSuffix?: boolean
}

export function splitNumber(
  number: number,
  options: FormatOptions = { currency: "IRT", locale: "fa-IR", withSuffix: true }
): string {
  const { currency = "IRT", locale = "fa-IR", withSuffix = true } = options
  const formatted = number.toLocaleString(locale)
  if (withSuffix) {
    return currency === "IRT" ? `${formatted} تومان` : `$${formatted}`
  }
  return formatted
}
