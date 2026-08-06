/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Portafolio Académico Digital - Zulema Vicente Paca
 * Módulo: Innovación y Tecnología de la Educación Superior
 * Universidad Privada del Valle - Facultad de Postgrado - Cochabamba
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { PracticesGrid } from './components/PracticesGrid';
import { PracticeModal } from './components/PracticeModal';
import { Timeline } from './components/Timeline';
import { FinalReflection } from './components/FinalReflection';
import { SelfEvaluation } from './components/SelfEvaluation';
import { ResourcesLibrary } from './components/ResourcesLibrary';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { PracticeImage } from './types/portfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedPracticeId, setSelectedPracticeId] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<PracticeImage | null>(null);

  // Sync dark mode class with <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleExplorePractices = () => {
    const el = document.getElementById('practicas');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleViewReflection = () => {
    const el = document.getElementById('reflexion-final');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenPractice={(id) => setSelectedPracticeId(id)}
      />

      {/* Main Page Content Sections */}
      <main>
        {/* Sección 1: Hero / Portada */}
        <Hero
          onExplorePractices={handleExplorePractices}
          onViewReflection={handleViewReflection}
        />

        {/* Sección 2: Sobre mí */}
        <AboutMe />

        {/* Sección 3: Recorrido de las 9 Prácticas */}
        <PracticesGrid
          onSelectPractice={(id) => setSelectedPracticeId(id)}
        />

        {/* Sección 4: Línea de tiempo / Evolución */}
        <Timeline
          onOpenPractice={(id) => setSelectedPracticeId(id)}
        />

        {/* Sección 5: Reflexión final */}
        <FinalReflection />

        {/* Sección 6: Autovaloración (Cualitativa y Cuantitativa) */}
        <SelfEvaluation />

        {/* Sección 7: Biblioteca de Recursos */}
        <ResourcesLibrary />
      </main>

      {/* Sección 8: Cierre y Pie de página */}
      <Footer />

      {/* Interactive Modals */}
      <PracticeModal
        practiceId={selectedPracticeId}
        onClose={() => setSelectedPracticeId(null)}
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onOpenLightbox={(img) => setLightboxImage(img)}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
