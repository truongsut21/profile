/**
 * Language Context — quản lý state ngôn ngữ cho toàn bộ app.
 *
 * - Đọc `?lang=` từ URL khi mount
 * - Validate locale (chỉ chấp nhận 'en' | 'vi')
 * - Fallback về DEFAULT_LOCALE nếu thiếu hoặc invalid
 * - Cập nhật URL (history.replaceState) khi chuyển ngôn ngữ — không reload
 * - Cập nhật `<html lang="">` cho SEO
 */
import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import {
  type Locale,
  type Translations,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  en,
  loadLocale,
} from '../locales';

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Parse `?lang=` from the current URL. Returns null if missing or invalid. */
function getLocaleFromURL(): Locale | null {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');

  if (lang && SUPPORTED_LOCALES.includes(lang as Locale)) {
    return lang as Locale;
  }

  return null;
}

/** Update the URL `?lang=` param without triggering a page reload. */
function syncLocaleToURL(locale: Locale): void {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url.toString());
}

/** Update `<html lang="">` for SEO and accessibility. */
function syncHTMLLang(locale: Locale): void {
  document.documentElement.lang = locale === 'vi' ? 'vi' : 'en';
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const initialLocale = getLocaleFromURL() ?? DEFAULT_LOCALE;
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations>(en);

  // Load translations whenever locale changes
  useEffect(() => {
    let cancelled = false;

    loadLocale(locale).then((t) => {
      if (!cancelled) {
        setTranslations(t);
      }
    });

    syncHTMLLang(locale);
    syncLocaleToURL(locale);

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    if (!SUPPORTED_LOCALES.includes(newLocale)) {
      throw new Error(`Unsupported locale: "${newLocale}". Supported: ${SUPPORTED_LOCALES.join(', ')}`);
    }
    setLocaleState(newLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
