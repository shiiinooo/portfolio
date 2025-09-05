export interface Skill {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  links: { demo: string; code: string };
  status: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  socialLinks: SocialLink[];
}
