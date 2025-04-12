import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { en } from './locales/en';
import { es } from './locales/es';

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const content = language === 'en' ? en : es;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar content={content.nav} onLanguageChange={toggleLanguage} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
    </div>
  );
}

export default App;