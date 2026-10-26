// Dates as shown on the site ("25 October 2026") and for search engines ("2026-10-25")
export const longDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
