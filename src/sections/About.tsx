import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        paddingTop: '8rem',
        paddingBottom: '8rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* 2-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
        className="grid-desktop-2"
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span className="section-label">{t.about.label}</span>
          <h2
            className="display-heading"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.05',
              maxWidth: '24ch',
            }}
          >
            {t.about.heading}
          </h2>
        </div>

        {/* Right Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            justifyContent: 'space-between',
          }}
        >
          {/* Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              color: 'var(--muted-foreground)',
              fontSize: '1rem',
              lineHeight: '1.6',
            }}
          >
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
          </div>

          {/* Education Card */}
          <div
            className="liquid-glass"
            style={{
              borderRadius: '1rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '1.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
                fontWeight: 600,
              }}
            >
              {t.about.education.label}
            </span>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--foreground)',
                lineHeight: '1.2',
              }}
            >
              {t.about.education.school}
            </h3>
            <p
              style={{
                color: 'var(--muted-foreground)',
                fontSize: '0.875rem',
                lineHeight: '1.5',
              }}
            >
              {t.about.education.degree}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                color: 'var(--foreground)',
              }}
            >
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                TOEIC 550
              </span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--muted-foreground)',
                }}
              >
                11/2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
