import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Vietnix',
    role: 'Fullstack Developer',
    period: '05/2024 - Present',
    location: 'Ho Chi Minh City',
    highlights: [
      'Developed a real-time data visualization web application using Next.js, NestJS, and PostgreSQL, enabling operational monitoring, analytics dashboards, and live data tracking for business analysis.',
      'Built and maintained the company website using PHP and WordPress, ensuring stable, secure, and reliable operation.',
      'Improved Google PageSpeed from ~30 to 90+ using lazy loading, CDN, and caching optimization.',
      'Build a tool that leverages RAG, Embeddings, Function Calling, and LLMs to answer questions based on enterprise documents, reducing document search time by 40% and providing intelligent recommendations.',
      'Apply Embeddings to build a semantic search feature.',
      'Researched and implemented performance optimization solutions for websites.',
      'Collaborated with DevOps on system deployment and incident handling.',
      'Worked closely with the Marketing team to build landing pages.',
    ],
  },
  {
    company: 'Chuta',
    role: 'Frontend Engineer',
    period: '02/2023 - 04/2024',
    location: 'Ho Chi Minh City',
    highlights: [
      'Developed a responsive rental management web platform using ReactJS, TypeScript, and Tailwind CSS.',
      'Conducted UI/UX layout optimizations based on user analytics, leading to a measurable increase in conversion rates and user engagement.',
      'Integrated multiple third-party APIs to automate workflows, synchronize real-time data, and resolve technical issues.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}
      >
        <span className="section-label">/ PATHWAY</span>
        <h2
          className="display-heading"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.05',
          }}
        >
          Work Experience
        </h2>
      </div>

      {/* Timeline Layout */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          position: 'relative',
        }}
      >
        {/* Left vertical track line (visible on larger screen, decorative) */}
        <div
          className="hidden-mobile"
          style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)',
          }}
        />

        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '2.5rem',
              position: 'relative',
            }}
            className="flex-col-mobile"
          >
            {/* Dot & Icon marker */}
            <div
              className="hidden-mobile"
              style={{
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(4px)',
                flexShrink: 0,
              }}
            >
              <Briefcase size={16} style={{ color: 'var(--foreground)' }} />
            </div>

            {/* Experience Card */}
            <div
              className="liquid-glass"
              style={{
                flexGrow: 1,
                borderRadius: '1rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: 'var(--foreground)',
                      lineHeight: '1.1',
                    }}
                  >
                    {exp.company}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      opacity: 0.9,
                      marginTop: '0.25rem',
                      display: 'inline-block',
                    }}
                  >
                    {exp.role}
                  </span>
                </div>

                {/* Badges / Meta info */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    color: 'var(--muted-foreground)',
                  }}
                  className="align-start-mobile"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Duty Bullet Points */}
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  paddingLeft: '1.25rem',
                  color: 'var(--muted-foreground)',
                  fontSize: '0.925rem',
                  lineHeight: '1.6',
                }}
              >
                {exp.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    style={{
                      listStyleType: 'square',
                    }}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
