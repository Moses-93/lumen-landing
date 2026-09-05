"use client";

import { useTransition } from "react";
import { usePathname, useRouter, locales, type Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const languageNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  pl: "Polski",
  cs: "Čeština",
  de: "Deutsch",
};

/**
 * Dropdown component to switch current language between supported locales.
 *
 * Updates the routing locale seamlessly while retaining the active pathname.
 */
export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Lang");

  /**
   * Handles user selection of a new locale.
   *
   * Args:
   *     nextLocale: The selected locale identifier.
   */
  const handleLocaleChange = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-flex items-center" id="language-switcher-container">
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <div className="relative flex items-center">
        <span className="text-text-muted text-xs mr-2 select-none" aria-hidden="true">
          🌐
        </span>
        <select
          id="language-select"
          aria-label="Language selection"
          disabled={isPending}
          value={currentLocale}
          onChange={(e) => handleLocaleChange(e.target.value as Locale)}
          className="appearance-none bg-abyss-card border border-border-subtle hover:border-insight/40 rounded-full px-3 py-1.5 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-insight cursor-pointer transition-colors pr-6 disabled:opacity-50"
        >
          {locales.map((loc) => (
            <option key={loc} value={loc} className="bg-abyss text-text-primary">
              {t(loc) || languageNames[loc]}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-2 text-text-muted text-[10px]"
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
    </div>
  );
}
