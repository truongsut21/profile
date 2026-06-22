import { useState, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Lightbox from '../components/Lightbox';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Expanded descriptions state
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleExpand = useCallback((idx: number) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  }, []);

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : lightboxImages.length - 1,
    );
  }, [lightboxImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev < lightboxImages.length - 1 ? prev + 1 : 0,
    );
  }, [lightboxImages.length]);

  return (
    <>
      <section
        id="projects"
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
          <span className="section-label">{t.projects.label}</span>
          <h2
            className="display-heading"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.05',
            }}
          >
            {t.projects.heading}
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}
          className="grid-desktop-2"
        >
          {t.projects.items.map((project, idx) => (
            <div
              key={idx}
              className="liquid-glass"
              style={{
                borderRadius: '1rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                gap: '1.5rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top metadata */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--muted-foreground)',
                }}
              >
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>

              {/* Title & Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'var(--foreground)',
                    lineHeight: '1.2',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '0.925rem',
                    lineHeight: '1.6',
                    ...(expandedProjects.has(idx)
                      ? {}
                      : {
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical' as const,
                          overflow: 'hidden',
                        }),
                  }}
                >
                  {project.description}
                </p>
                <button
                  onClick={() => toggleExpand(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted-foreground)',
                    cursor: 'pointer',
                    fontSize: '0.825rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  {expandedProjects.has(idx) ? t.projects.showLess : t.projects.showMore}
                </button>
              </div>

              {/* Screenshots Thumbnails */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="project-thumbnails">
                  {project.screenshots.map((src, sIdx) => (
                    <button
                      key={sIdx}
                      className="project-thumbnail-btn"
                      onClick={() => openLightbox(project.screenshots!, sIdx)}
                      aria-label={`View screenshot ${sIdx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} - screenshot ${sIdx + 1}`}
                        className="project-thumbnail-img"
                        loading="lazy"
                      />
                      <div className="project-thumbnail-overlay">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                          <path d="M11 8v6" />
                          <path d="M8 11h6" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Badges and Links */}
              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Badges list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        color: 'var(--muted-foreground)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {'github' in project && (project as { github?: string }).github && (
                    <a
                      href={(project as { github: string }).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--foreground)',
                        opacity: 0.7,
                        transition: 'opacity 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
                      title={t.projects.viewGithub}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {'demo' in project && (project as { demo?: string }).demo && (
                    <a
                      href={(project as { demo: string }).demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--foreground)',
                        opacity: 0.7,
                        transition: 'opacity 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
                      title={t.projects.viewDemo}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}
