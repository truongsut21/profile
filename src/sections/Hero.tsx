interface HeroProps {
  onBeginJourney: () => void;
}

export default function Hero({ onBeginJourney }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        height: '100vh',
        width: '100%',
      }}
    >
      {/* Heading 1 */}
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(3rem, 8vw, 6rem)', // Responsively handles text-5xl to text-8xl scale
          lineHeight: '0.95',
          letterSpacing: '-0.03em',
          maxWidth: '80rem', // max-w-7xl
          fontWeight: 400,
          color: 'var(--foreground)',
        }}
      >
        AI writes faster.{' '}
        <em
          className="not-italic"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Thinking stays priceless
        </em>
      </h1>

      {/* Subtext */}
      <p
        style={{
          color: 'var(--muted-foreground)',
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          maxWidth: '42rem', // max-w-2xl
          marginTop: '2rem',
          lineHeight: '1.625',
          fontFamily: 'var(--font-body)',
        }}
      >
        I am Do Van Truong, a Fullstack Developer specializing in building high-performance web architectures, automating workflows, and integrating intelligent AI-driven systems to deliver fluid, user-centric interfaces.
      </p>

      {/* CTA Button */}
      <button
        className="liquid-glass"
        onClick={onBeginJourney}
        style={{
          borderRadius: '9999px',
          padding: '1.25rem 3.5rem', // px-14, py-5
          fontSize: '0.75rem', // text-xs
          textTransform: 'uppercase',
          letterSpacing: '0.15em', // tracking-widest
          marginTop: '3rem',
          color: 'var(--foreground)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Begin Journey
      </button>
    </section>
  );
}
