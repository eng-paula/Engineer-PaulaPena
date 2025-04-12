export interface PortfolioContent {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    language: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    backgroundImage: string
  };
  about: {
    title: string;
    content: string;
    skills: string[];
    backgroundImage: string;
    sp_language: string[];

  };
  projects: {
    title: string;
    list: {
      title: string;
      description: string;
      tech: string[];
      link: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    social: {
      title: string;
      link: string;
    }[];
  };
}