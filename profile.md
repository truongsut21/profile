Create a high-end, single-page portfolio website for a Front-end Developer using React + Vite + Tailwind CSS + TypeScript + Lucide React icons. The design must be ultra-minimalist, cinematic, and use a glassmorphic/liquid-glass visual language.

---
1. GLOBAL CONFIGURATION & STYLING

Video Background:
- Fullscreen <video> element with autoPlay, loop, muted, playsInline.
- Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
- Positioned absolute inset-0 w-full h-full object-cover z-0.
- A subtle dark vignette overlay (e.g., bg-black/40) to ensure high readability of overlay elements.

Fonts:
- Import from Google Fonts: 'Instrument Serif' (display font) and 'Inter' (body font with weights 400/500/600).
- CSS variables: --font-display: 'Instrument Serif', serif and --font-body: 'Inter', sans-serif.
- The document body uses var(--font-body), headings use inline fontFamily: "'Instrument Serif', serif".

Color Theme (Dark cinematic palette):
- --background: 201 100% 13% (Deep navy blue)
- --foreground: 0 0% 100% (White)
- --muted-foreground: 240 4% 66% (Muted gray)
- --primary: 0 0% 100%
- --primary-foreground: 0 0% 4%
- --secondary: 0 0% 10%
- --muted: 0 0% 10%
- --accent: 0 0% 10%
- --border: 0 0% 18%
- --input: 0 0% 18%

Liquid Glass Effect (.liquid-glass class):
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

Animations:
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }

---
2. NAVIGATION BAR (Fixed top, z-50, backdrop blur)
- Logo: "Do Van Truong®" (® as <sup className="text-xs">), text-3xl tracking-tight, Instrument Serif font, text-foreground.
- Nav links (hidden on mobile, md:flex): Home, About, Experience, Skills, Projects, Reach Us (text-xs uppercase tracking-widest, text-muted-foreground with hover:text-foreground transition).
- CTA button: "Liên hệ ngay" styled with .liquid-glass, rounded-full, px-6, py-2.5, text-xs uppercase, tracking-wider, hover:scale-[1.03].

---
3. HERO SECTION (Fullscreen backdrop video, vertically centered)
- Position relative, z-10, flex column, centered, text-center, px-6, h-screen.
- H1: "Where dreams rise through the silence." — text-5xl sm:text-7xl md:text-8xl, leading-[0.95], tracking-[-2.46px], max-w-7xl, font-normal, Instrument Serif. Wrap the words "dreams" and "through the silence." in <em className="not-italic text-muted-foreground"> for visual contrast. Apply class "animate-fade-rise".
- Subtext: text-muted-foreground text-sm sm:text-base max-w-2xl mt-8 leading-relaxed. Use the text: "I am Do Van Truong, a Front-end Developer building high-performance architectures and intelligent systems. Amid the digital noise, I engineer speed, absolute focus, and fluid interfaces." Apply class "animate-fade-rise-delay".
- CTA button: "Liên hệ ngay", .liquid-glass class, rounded-full, px-14, py-5, text-xs uppercase, tracking-widest, mt-12, hover:scale-[1.03] cursor-pointer. Apply class "animate-fade-rise-delay-2".

---
4. ABOUT & EDUCATION SECTION (Minimal layout)
- Divide into a two-column grid on desktop.
- Left column: Section title "/ OVERVIEW" in small mono text, and a display heading: "Engineering performance, automating complexity."
- Right column: Paragraphs displaying his professional profile:
  - Front-end Developer with 2.5 years of experience specializing in frontend development, building and optimizing modern web applications and interfaces.
  - Successfully optimized 30+ websites to achieve Google PageSpeed scores above 95, improving overall speed and organic performance.
  - Education card utilizing .liquid-glass containing: "Industrial University of Ho Chi Minh City" — Information Technology, GPA 3.3/4, TOEIC 550, Graduated 11/2024.

---
5. WORK EXPERIENCE SECTION (Timeline layout using .liquid-glass cards)
- Section header: "/ PATHWAY" and display heading: "Work Experience".
- Chronological layout presenting his career path with technology icons (represented as minimalist Lucide React icons or badges with .liquid-glass styling):

  * Company: Company X (05/2024 - Present)
    - Role: Front-end Developer
    - Location: Ho Chi Minh City
    - Bullet points outlining duties:
      - Developed a real-time data visualization web application using Next.js, NestJS, and PostgreSQL, enabling operational monitoring, analytics dashboards, and live data tracking.
      - Built and maintained the company website using PHP and WordPress, ensuring stable, secure, and reliable operation.
      - Improved Google PageSpeed from ~30 to 90+ using lazy loading, CDN, and caching optimization.
      - Built an AI Agent chatbot using RAG, Embeddings, and Function Calling, reducing internal lookup times by 40%.
      - Researched optimization solutions and collaborated with DevOps on deployments.

  * Company: Chuta (02/2023 - 04/2024)
    - Role: Frontend Engineer
    - Location: Ho Chi Minh City
    - Bullet points outlining duties:
      - Developed a rental management web application using ReactJS and Tailwind CSS.
      - Optimized UX/UI layouts based on analytics, improving experience and conversion rates.
      - Integrated third-party APIs to synchronize data and automate workflows.

---
6. TECHNICAL ARSENAL SECTION (Grid layout of skills)
- Section header: "/ CAPABILITIES" and display heading: "Technical Skills".
- Group technologies into distinct categories inside elegant .liquid-glass cards:
  - Frontend: ReactJS, Next.js, Tailwind CSS, JavaScript (Use corresponding modern, sleek UI badge representations).
  - Backend & Database: Node.js, PHP, MySQL, PostgreSQL.
  - AI & Automation: RAG, Embeddings, LLMs.
  - DevOps & Tools: Docker, Git, Figma.a

---
7. PERSONAL PROJECTS SECTION (Sleek cards with external links or github icons)
- Section header: "/ WORKS" and display heading: "Featured Creations".
- Display 2 major projects as minimalist, cinematic cards using the liquid-glass style:

  * Project 1: Real-Time Task Management System | Fullstack (02/2024 - 05/2024)
    - Description: Built using Next.js, NestJS, and WebSockets. Features instant task assignment and active chat functionality. Achieved a perfect graduation thesis score of 10/10.
    - Badges: Next.js, NestJS, WebSocket.

  * Project 2: Mobile Delivery Application System | Fullstack (11/2025 - 02/2026)
    - Description: Developed a real-time delivery system using React Native, Next.js, and NestJS. Integrated WebSockets for instant order updates, Google Maps API for live geolocation tracking/distance calculation, and OpenAI for intelligent order creation.
    - Badges: React Native, Next.js, NestJS, OpenAI.

---
8. CONTACT SECTION (Minimal form & details)
- Section header: "/ INQUIRIES" and display heading: "Reach Us".
- Display contact coordinates on one side:
  - Email: dotruongxxx@gmail.com (Include a "Copy" icon button using Lucide to quickly copy to clipboard).
  - Phone: 033456xxx
  - Github: https://github.com/truongsut21 (Rendered as an elegant minimalist link button).
- Simple contact form on the other side using .liquid-glass styled inputs (Name, Email, Message) and a minimalist "Send Message" button.

---
9. LAYOUT & EXTRA DETAILS
- No decorative bright blobs or colorful radial background gradients.
- Keep background completely clean and dark navy blue (background CSS variable). The depth and focus must rely entirely on the cinematic video background, subtle blur overlays, borders, and typography.
- Make all layouts responsive, looking equally stunning on mobile viewports.