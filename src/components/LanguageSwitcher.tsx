/**
 * Language Switcher — nút chuyển đổi ngôn ngữ trên Navbar.
 *
 * Hiển thị cờ quốc gia (emoji) + mã ngôn ngữ.
 * Click → toggle giữa 'en' và 'vi'.
 * Style glassmorphism nhất quán với design hiện tại.
 */
import { useLanguage } from '../hooks/useLanguage';

const LOCALE_CONFIG = {
  en: { flag: '🇬🇧', label: 'EN' },
  vi: { flag: '🇻🇳', label: 'VI' },
} as const;

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const nextLocale = locale === 'en' ? 'vi' : 'en';
  const current = LOCALE_CONFIG[locale];

  const handleToggle = () => {
    setLocale(nextLocale);
  };

  return (
    <button
      id="language-switcher"
      onClick={handleToggle}
      aria-label={`Switch to ${LOCALE_CONFIG[nextLocale].label}`}
      title={`Switch to ${LOCALE_CONFIG[nextLocale].label}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.375rem',
        minWidth: '5rem',
        padding: '0.4rem 0.75rem',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        cursor: 'pointer',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>{current.flag}</span>
      <span>{current.label}</span>
    </button>
  );
}
