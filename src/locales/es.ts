import { PortfolioContent } from '../types';

export const es: PortfolioContent = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    language: 'EN',
  },
  hero: {
    greeting: "I'm Paula Peña",
    role: 'Ingeniera Topográfica',
    description: 'Creo soluciones elegantes para problemas complejos.',
    backgroundImage: 'public/Flowchart-and-color-bar.png',
  },
  
  about: {
    title: 'Sobre Mí',
    content: 'Soy Ingeniera Topográfica apasionada por las ciencias de la tierra y el ánalisis de datos geospaciales. He tenido la oportunidad de colaborar en diversos proyectos, incluyendo iniciativas con organizaciones internacionales como la ONU.',
    skills: ['Python', 'PostreSQL', 'MySQL','AWS', 'Power BI', 'Tableau', 'ArcGIS', 'QGIS', 'AutoCAD','Node.js', 'TopCon', 'Leica'],
    backgroundImage: '/Flowchart-and-color-bar.png',
    sp_language: ['Inglés','Español','Portugues'],

  },
  projects: {
    title: 'Proyectos',
    list: [
      {
        title: 'Modelo de Predicción Climática',
        description: 'Predicción climática a lo largo de un periodo de 50 años utilizando imágenes satelitales y algoritmos de aprendizaje automático.',
        tech: ['Python', 'Scikit', 'Google Earth Engine', 'Modis'],
        link: 'https://github.com/eng-paula/climatePrediction',
      },
      {
        title: 'Análisis del Potencial Eólico',
        description: 'Análisis del potencial eólico utilizando datos del modelo WRF y Python para el procesamiento y visualización de datos.',
        tech: ['WRF', 'Python', 'Linux Shell'],
        link: 'https://github.com/eng-paula/windPotential',
      },
      {
        title: 'Análisis de Minería Ilegal',
        description: 'Análisis de minería ilegal utilizando bases de datos y visualización geoespacial mediante mapas.',
        tech: ['PostgreSQL', 'SQL', 'Python', 'ArcGIS'],
        link: 'https://github.com/eng-paula/ilegalMining',
      },
      {
        title: 'Portal de Seguridad Universitaria',
        description: 'Geohurtos se estableció como una medida de seguridad en la Universidad del Valle en Cali.',
        tech: ['ArcGIS', 'SQL', 'AWS'],
        link: 'https://github.com/eng-paula/GEOHURTOS',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    description: 'Trabajemos juntos! Mantente en contacto.',
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
      },]
  },
};