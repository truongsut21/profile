/**
 * English translations for the portfolio website.
 * This is the DEFAULT locale.
 *
 * Structure mirrors section components for easy lookup.
 */
import type { Translations } from './types';

export const en: Translations = {
  // ── Navbar ──
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    cta: 'Get In Touch',
    explore: 'Explore',
  },

  // ── Hero Section ──
  hero: {
    name: 'Do Van Truong',
    subtitle:
      'Front-end Developer with 3 years of experience building web applications using ReactJS and Next.js. Skilled in developing CRM systems and enterprise management platforms, focused on performance, optimizing user experience, and product quality.',
    cta: 'Explore',
  },

  // ── About Section ──
  about: {
    label: '/ OVERVIEW',
    heading: 'Continuously learning and optimizing user experience.',
    bio1: 'Front-end Developer with 3 years of experience building web applications using ReactJS and Next.js. Skilled in developing CRM systems and enterprise management platforms, focused on performance, optimizing user experience, and product quality.',
    bio2: 'Proactively researching and applying AI to improve productivity and software development efficiency, while continuously adopting new technologies to create modern products that meet user needs.',
    education: {
      label: 'Education',
      school: 'Ho Chi Minh City University of Industry',
      degree: 'Software Engineering — GPA 3.3/4',
    },
  },

  // ── Experience Section ──
  experience: {
    label: '/ JOURNEY',
    heading: 'Work Experience',
    present: 'Present',
    items: [
      {
        company: 'Vietnix',
        role: 'Fullstack Developer',
        period: '05/2024 - Present',
        location: 'Ho Chi Minh City',
        highlights: [
          'Built a real-time marketing campaign tracking and analytics system with ReactJS, Redux, Antd, Tailwind Css, WebSocket, ReChart, NodeJS, and RESTful API, enabling managers to easily monitor campaign performance and make quick decisions.',
          'Developed an internal management system with ReactJS, Redux, Antd, and RESTful API, supporting 120 employees in managing work and customer information.',
          'Built an AI-powered Facebook account management platform that automatically collects data, publishes and creates content using AI with Next.js, Antd, Tailwind Css, NodeJS, Proxy, PostgreSQL, Playwright, OpenAI API, and Vector Database, reducing manual content processing time by over 70%.',
          'Built a competitor monitoring system with NextJS, Redux, NodeJS, Playwright, PostgreSQL, and BullMQ, supporting website change surveillance, update history storage, and helping managers quickly detect important changes from competitors.',
          'Implemented CI/CD pipeline with Git and Docker, supporting automated deployment.',
          'Experienced with AI Coding Agent (Antigravity) combined with skills and rules to ensure clean, logic-correct, and highly reusable code.',
          'Managed and optimized enterprise websites for better user experience with caching and lazy loading. Maintained website uptime above 99%.',
          'Optimized Google PageSpeed scores above 90 for over 30 client websites.',
          'Coordinated with BA, Tester, and Marketing teams to analyze requirements, propose solutions, design data structures, and implement problem-solving approaches.',
        ],
      },
      {
        company: 'Chuta',
        role: 'Fullstack Developer',
        period: '02/2023 - 04/2024',
        location: 'Ho Chi Minh City',
        highlights: [
          'Built a room rental management application with ReactJS, Tailwind Css, Redux, Antd, ReChart, NodeJS, and RESTful API.',
          'Planned and assigned tasks to team members.',
          'Integrated APIs from partner companies to synchronize data and automate operational processes.',
          'Implemented CI/CD pipeline with Git and Docker.',
          'Analyzed customer requirements and translated them into features aligned with business goals.',
        ],
      },
    ],
  },

  // ── Skills Section ──
  skills: {
    label: '/ EXPERTISE',
    heading: 'Technical Skills',
  },

  // ── Projects Section ──
  projects: {
    label: '/ PROJECTS',
    heading: 'Personal Projects',
    viewGithub: 'View GitHub',
    viewDemo: 'View Demo',
    showMore: 'Show more',
    showLess: 'Show less',
    items: [
      {
        title: 'Delivery & Logistics System — Bengo',
        category: 'Fullstack',
        period: '01/2026 - 05/2026',
        description:
          'Developed a logistics management system for managers and drivers using ReactJS, React Native, NodeJS, and PostgreSQL. Supports real-time order status updates, driver profile management, GPS tracking, Google Maps integration, AWS S3 file storage, and RESTful API for web/mobile applications.',
        badges: ['ReactJS', 'React Native', 'NodeJS', 'PostgreSQL', 'Google Maps', 'AWS S3'],
        screenshots: ['/pj1_1.jpg', '/pj1_2.jpg', '/pj1_3.jpg'],
      },
      {
        title: 'AI-integrated Task Management System — Ontask',
        category: 'Fullstack',
        period: '02/2024 - 05/2024',
        description:
          'Developed a real-time task management system with ReactJS, Antd, Tailwind, NodeJS, WebSocket, AWS S3, and PostgreSQL, featuring AI-powered task assignment suggestions, direct messaging on each task, and optimized user experience. Achieved a perfect 10/10 score in graduation thesis.',
        badges: ['ReactJS', 'Antd', 'Tailwind', 'NodeJS', 'WebSocket', 'AWS S3', 'PostgreSQL'],
        screenshots: ['/pj2_1.png', '/pj2_2.png', '/pj2_3.jpg'],
      },
      {
        title: 'Portfolio Landing Page',
        category: 'Frontend',
        period: '06/2026 - 06/2026',
        description:
          'Built a personal portfolio landing page with ReactJS, Tailwind CSS, and Vercel, leveraging AI for modern interface design. Optimized SEO and achieved a perfect 100 score across all Google PageSpeed metrics.',
        badges: ['ReactJS', 'Tailwind CSS', 'Vercel', 'AI', 'SEO'],
        screenshots: ['/pj3_1.jpg', '/pj3_2.jpg'],
      },
    ],
  },

  // ── Contact Section ──
  contact: {
    label: '/ CONTACT',
    heading: 'Contact',
    infoTitle: 'Contact Information',
    infoDesc:
      "Don't hesitate to reach out for collaboration, project discussions, or simply to say hello.",
    connectGithub: 'Connect on GitHub',
    copy: 'Copy',
    copied: 'Copied!',
    callNow: 'Call Now',
    formTitle: 'Send Message',
    nameLabel: 'Full Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email or Phone',
    emailPlaceholder: 'example@gmail.com / 0901234567',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    submit: 'Send Message',
    sending: 'Sending message...',
    success: 'Thank you! Your message has been sent successfully.',
    errorEmpty: 'Please fill in all fields.',
    errorFailed: 'Failed to send message. Please try again or copy the email directly.',
    copyEmail: 'Copy Email',
  },
};
