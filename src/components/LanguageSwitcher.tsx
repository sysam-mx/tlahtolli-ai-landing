'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { locales, type Locale } from '@/i18n/config';

const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === locale) return;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-100 p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleSwitch(loc)}
          disabled={isPending}
          className={`
            rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200
            ${
              loc === locale
                ? 'bg-tlahtolli-secondary text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
            }
            ${isPending ? 'opacity-50 cursor-wait' : 'cursor-pointer'}
          `}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
