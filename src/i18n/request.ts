import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { locales, defaultLocale, type Locale } from './config';

function detectLocaleFromAcceptLanguage(header: string): Locale | null {
  const candidates = header
    .split(',')
    .map((entry) => {
      const [lang, q] = entry.trim().split(';q=');
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of candidates) {
    const exact = locales.find((l) => l === lang);
    if (exact) return exact;
    const base = lang.split('-')[0];
    const baseMatch = locales.find((l) => l === base);
    if (baseMatch) return baseMatch;
  }
  return null;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  let locale: Locale = defaultLocale;

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    locale = cookieLocale as Locale;
  } else {
    const headerStore = await headers();
    const acceptLang = headerStore.get('accept-language') || '';
    locale = detectLocaleFromAcceptLanguage(acceptLang) || defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
