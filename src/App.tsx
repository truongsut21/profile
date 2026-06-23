import './index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import videoPoster from './assets/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31-start.webp';

function App() {
  const handleBeginJourney = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
      }}
    >
      {/* ── Video Background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={videoPoster}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* ── Dark Vignette Overlay ── */}
      <div className="video-overlay" />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Content Container (above video) ── */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Section 3 — Hero */}
        <Hero onBeginJourney={handleBeginJourney} />

        {/* Section 4 — About & Education */}
        <About />

        {/* Section 5 — Work Experience */}
        <Experience />

        {/* Section 6 — Technical Arsenal */}
        <Skills />

        {/* Section 7 — Personal Projects */}
        <Projects />

        {/* Section 8 — Contact Details & Form */}
        <Contact />
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
