import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, GraduationCap, Sparkles } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="cierre" className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Closing Quote Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-4 p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-800/50 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/80 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reflexión Final del Módulo</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white italic leading-relaxed">
            “La tecnología es importante, pero lo que realmente transforma la educación es el propósito, la creatividad y las personas.”
          </p>
        </div>

        {/* Student & Academic Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800 items-center text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 font-bold text-lg">
              <GraduationCap className="w-5 h-5" />
              <span>{STUDENT_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400">
              {STUDENT_INFO.role} • {STUDENT_INFO.email}
            </p>
            <p className="text-xs text-slate-400">
              {STUDENT_INFO.degree}
            </p>
          </div>

          <div className="text-center space-y-1 text-xs text-slate-400">
            <p className="font-semibold text-slate-200">{STUDENT_INFO.university}</p>
            <p>{STUDENT_INFO.faculty} • Sede {STUDENT_INFO.campus}</p>
            <p className="pt-1 text-indigo-400 font-medium">
              Docente: {STUDENT_INFO.teacher}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center gap-3">
            <button
              onClick={scrollToTop}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Volver al inicio</span>
              <ArrowUp className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-slate-500">
              Fecha de entrega: {STUDENT_INFO.deliveryDate}
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-800/60 text-xs text-slate-500 flex items-center justify-center gap-1">
          <span>Portafolio Académico Digital</span>
          <span>•</span>
          <span>Innovación y Tecnología de la Educación Superior</span>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
