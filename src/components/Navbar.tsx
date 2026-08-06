import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ChevronDown,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { PRACTICES, STUDENT_INFO } from '../data/portfolioData';
import portfolioPdf from '../data/Trabajo_Zule.pdf';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPractice: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenPractice,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practicesDropdownOpen, setPracticesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setPracticesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-slate-800/80 py-3'
          : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50 py-4'
      }`}
    >
      {/* Scroll Progress Bar at very top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Student Identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform shrink-0">
            Z
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
              Innovación y Tecnología
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest flex items-center gap-1">
              <span>{STUDENT_INFO.name}</span> • <span>Educación Superior</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => scrollToSection('inicio')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Inicio
          </button>

          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Sobre mí
          </button>

          {/* Prácticas Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPracticesDropdownOpen(!practicesDropdownOpen)}
              onMouseEnter={() => setPracticesDropdownOpen(true)}
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
            >
              Prácticas
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${practicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {practicesDropdownOpen && (
              <div
                onMouseLeave={() => setPracticesDropdownOpen(false)}
                className="absolute top-full left-0 w-80 mt-1 py-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[75vh] overflow-y-auto"
              >
                <div className="px-4 py-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 mb-1 flex items-center justify-between">
                  <span>9 Prácticas del Módulo</span>
                  <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded text-[10px] font-bold">
                    60% Valor
                  </span>
                </div>
                {PRACTICES.map((practice) => (
                  <button
                    key={practice.id}
                    onClick={() => {
                      setPracticesDropdownOpen(false);
                      onOpenPractice(practice.id);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-indigo-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 group"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 text-white"
                      style={{ backgroundColor: practice.accentColor }}
                    >
                      {practice.numberStr}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                        {practice.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {practice.shortDescription}
                      </p>
                    </div>
                  </button>
                ))}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 px-3">
                  <button
                    onClick={() => scrollToSection('practicas')}
                    className="w-full text-center py-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Ver cuadrícula de todas las prácticas →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('linea-de-tiempo')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Evolución
          </button>

          <button
            onClick={() => scrollToSection('reflexion-final')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Reflexión
          </button>

          <button
            onClick={() => scrollToSection('recursos')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Recursos
          </button>

          <button
            onClick={() => scrollToSection('autovaloracion')}
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Autovaloración
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Botón Destacado: Descargar Portafolio PDF */}
          <a
            href={portfolioPdf}
            download="Portafolio_Zulema_Vicente_Paca.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar Portafolio PDF</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('practicas')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg flex items-center justify-between"
            >
              <span>Prácticas (9 Actividades)</span>
              <span className="text-xs bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                60 %
              </span>
            </button>

            {/* Submenu for practices in mobile */}
            <div className="pl-4 space-y-1 my-1 border-l-2 border-indigo-200 dark:border-indigo-900">
              {PRACTICES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPractice(p.id);
                  }}
                  className="w-full text-left py-1.5 px-2 text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-600 truncate block"
                >
                  {p.numberStr}. {p.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('linea-de-tiempo')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Evolución
            </button>
            <button
              onClick={() => scrollToSection('reflexion-final')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Reflexión final
            </button>
            <button
              onClick={() => scrollToSection('recursos')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('autovaloracion')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Autovaloración
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href={portfolioPdf}
              download="Portafolio_Zulema_Vicente_Paca.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-900 text-white text-sm font-semibold rounded-xl shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Descargar portafolio PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
