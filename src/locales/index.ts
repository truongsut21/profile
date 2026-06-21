/**
 * Locale system entry point.
 *
 * Re-exports types from types.ts and provides the locale loader.
 */
import { en } from './en';

// Re-export all types from types.ts
export type { Translations, ExperienceItem, ProjectItem } from './types';

export type Locale = 'en' | 'vi';

export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'vi'] as const;

export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Lazy-load locales to keep the initial bundle lean.
 * EN is always bundled (default); VI is loaded only when needed.
 */
export async function loadLocale(locale: Locale): Promise<import('./types').Translations> {
  if (locale === 'en') {
    return en;
  }

  const { vi } = await import('./vi');
  return vi;
}

// Synchronous export for initial render with default locale
export { en };
