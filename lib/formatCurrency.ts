/**
 * formatCurrency is a reusable Intl.NumberFormat instance
 * configured to format numbers as currency in Swedish Krona (SEK).
 *
 */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "SEK",
  style: "currency",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
