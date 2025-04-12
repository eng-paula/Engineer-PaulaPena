import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    language: 'ES',
  },
  hero: {
    greeting: "I'm Paula Peña",
    role: 'Topographical / Geomatics Engineer',
    description: 'I develop precise and efficient solutions for land surveying, mapping, and geospatial analysis.',
    backgroundImage: 'public/Flowchart-and-color-bar.png',
  },
  about: {
    title: 'About Me',
    content: 'I am a Geomatics Engineer with a strong passion for Earth sciences and geospatial data analysis. I have had the opportunity to collaborate on various projects, including initiatives with international organizations such as the UN.',
    skills: ['Python', 'PostreSQL', 'MySQL','AWS', 'Power BI', 'Tableau', 'ArcGIS', 'QGIS', 'AutoCAD','Node.js', 'TopCon', 'Leica'],
    backgroundImage: 'https://www.intusinc.com/wp-content/uploads/2019/08/geomatics-design.jpg',
    sp_language: ['English','Spanish','Portuguese'],

  },
  projects: {
    title: 'Projects',
    list: [
      {
        title: 'Climate Prediction Model',
        description: 'Climate prediction over a 50-year period using satellite imagery and machine learning algorithms.',
        tech: ['Python', 'Scikit', 'Google Earth Engine', 'Modis'],
        link: 'https://github.com/eng-paula/climatePrediction',
      },
      {
        title: 'Wind Potential Analysis',
        description: 'Analysis of wind potential using WRF model data and Python for data processing and visualization.',
        tech: ['WRF', 'Python', 'Linux Shell'],
        link: 'https://github.com/eng-paula/windPotential',
      },
      {
        title: 'Ilegal Mining Analysis',
        description: 'Analysis of illegal mining using databases and geospatial visualization through maps.',
        tech: ['PostgreSQL', 'SQL', 'Python', 'ArcGIS'],
        link: 'https://github.com/eng-paula/ilegalMining',
      },
      {
        title: 'University Security Portal',
        description: 'Geohurtos was established as a security measure at Universidad del Valle in Cali.',
        tech: ['ArcGIS', 'SQL', 'AWS'],
        link: 'https://github.com/eng-paula/GEOHURTOS',
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: "Let's work together! Feel free to reach out.",
    email: 'ing.paulamap@gmail.com',
    social: [
      {
        title: 'GitHub',
        link: 'https://github.com/eng-paula',
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/paula-p-005819238/',
      },
      {
        title: 'YouTube',
        link: 'https://www.youtube.com/@eng_map',
      },
    ],
  },
};