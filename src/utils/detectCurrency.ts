export type Currency = 'mxn' | 'usd';

const TIMEZONE_CURRENCY_MAP: Record<string, Currency> = {
  'America/Mexico_City': 'mxn',
  'America/Cancun': 'mxn',
  'America/Merida': 'mxn',
  'America/Monterrey': 'mxn',
  'America/Matamoros': 'mxn',
  'America/Mazatlan': 'mxn',
  'America/Chihuahua': 'mxn',
  'America/Ojinaga': 'mxn',
  'America/Hermosillo': 'mxn',
  'America/Tijuana': 'mxn',
  'America/Bahia_Banderas': 'mxn',
};

const DEFAULT_CURRENCY: Currency = 'usd';

export function detectCurrency(timezone?: string | null): Currency {
  const tz = timezone ?? getBrowserTimezone();
  if (!tz) return DEFAULT_CURRENCY;
  return TIMEZONE_CURRENCY_MAP[tz] ?? DEFAULT_CURRENCY;
}

function getBrowserTimezone(): string | null {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return null;
  }
}
