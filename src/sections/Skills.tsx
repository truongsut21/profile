interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['ReactJS', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Redux', 'Antd'],
  },
  {
    title: 'Backend & Database',
    skills: ['NodeJS', 'PostgreSQL', 'Redis', 'RESTful API', 'Playwright'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'Figma', 'Antigravity'],
  },
  {
    title: 'AI',
    skills: ['RAG', 'Embeddings', 'LLM'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        <span className="section-label">/ NĂNG LỰC</span>
        <h2
          className="display-heading"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.05',
          }}
        >
          Kỹ Năng Chuyên Môn
        </h2>
      </div>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {SKILL_GROUPS.map((group, idx) => (
          <div
            key={idx}
            className="liquid-glass"
            style={{
              borderRadius: '1rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Category Title */}
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--foreground)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                paddingBottom: '0.75rem',
              }}
            >
              {group.title}
            </h3>

            {/* Badges Container */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
              }}
            >
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
