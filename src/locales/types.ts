/**
 * Translation type definitions.
 *
 * Tách ra file riêng để tránh circular dependency giữa en.ts ↔ index.ts.
 */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  period: string;
  description: string;
  badges: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    cta: string;
    explore: string;
  };
  hero: {
    name: string;
    subtitle: string;
    cta: string;
  };
  about: {
    label: string;
    heading: string;
    bio1: string;
    bio2: string;
    education: {
      label: string;
      school: string;
      degree: string;
    };
  };
  experience: {
    label: string;
    heading: string;
    present: string;
    items: ExperienceItem[];
  };
  skills: {
    label: string;
    heading: string;
  };
  projects: {
    label: string;
    heading: string;
    viewGithub: string;
    viewDemo: string;
    showMore: string;
    showLess: string;
    items: ProjectItem[];
  };
  contact: {
    label: string;
    heading: string;
    infoTitle: string;
    infoDesc: string;
    connectGithub: string;
    copy: string;
    copied: string;
    callNow: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    errorEmpty: string;
    errorFailed: string;
    copyEmail: string;
  };
}
