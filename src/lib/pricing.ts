const DEFAULT_LOCALE = "en-US";

const INR_LAKH_TOKEN = /^Rs\s*([0-9]+(?:\.[0-9]+)?)L$/i;
const USD_THOUSAND_TOKEN = /^\$([0-9]+(?:\.[0-9]+)?)k(\+)?$/i;

export function getUserLocale(): string {
  if (typeof navigator !== "undefined") {
    const [preferredLocale] = navigator.languages ?? [];
    return preferredLocale ?? navigator.language ?? DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}

export function formatCurrencyForLocale(amount: number, currency: string, locale: string = getUserLocale()): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatKnownPriceToken(token: string, locale: string): string | null {
  const inrLakhMatch = token.match(INR_LAKH_TOKEN);
  if (inrLakhMatch) {
    const lakhValue = Number(inrLakhMatch[1]);
    if (Number.isNaN(lakhValue)) {
      return null;
    }

    return formatCurrencyForLocale(lakhValue * 100000, "INR", locale);
  }

  const usdThousandMatch = token.match(USD_THOUSAND_TOKEN);
  if (usdThousandMatch) {
    const thousandValue = Number(usdThousandMatch[1]);
    if (Number.isNaN(thousandValue)) {
      return null;
    }

    const hasPlus = Boolean(usdThousandMatch[2]);
    const formatted = formatCurrencyForLocale(thousandValue * 1000, "USD", locale);
    return hasPlus ? `${formatted}+` : formatted;
  }

  return null;
}

export function localizePriceCopy(text: string, locale: string = getUserLocale()): string {
  return text
    .replace(/(\$[0-9]+(?:\.[0-9]+)?k)\s*-\s*(\$[0-9]+(?:\.[0-9]+)?k\+?)/gi, (full, left, right) => {
      const localizedLeft = formatKnownPriceToken(left, locale);
      const localizedRight = formatKnownPriceToken(right, locale);

      if (!localizedLeft || !localizedRight) {
        return full;
      }

      return `${localizedLeft}-${localizedRight}`;
    })
    .replace(/Rs\s*[0-9]+(?:\.[0-9]+)?L|\$[0-9]+(?:\.[0-9]+)?k\+?/gi, (token) => {
      return formatKnownPriceToken(token, locale) ?? token;
    });
}

export function localizePriceValue<T>(value: T, locale: string = getUserLocale()): T {
  if (typeof value === "string") {
    return localizePriceCopy(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizePriceValue(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).map(([key, item]) => {
      return [key, localizePriceValue(item, locale)];
    });

    return Object.fromEntries(entries) as T;
  }

  return value;
}
