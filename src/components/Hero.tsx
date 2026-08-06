import React from 'react';
import {
  User,
  UserCheck,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';
import heroImage from '../images/foto.png';

interface HeroProps {
  onExplorePractices: () => void;
  onViewReflection: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePractices,
  onViewReflection,
}) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-purple-50/40 to-white dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-900 transition-colors"
    >
      {/* Soft Background Accent Spheres */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, intro, metadata badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Academic Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{STUDENT_INFO.university} • {STUDENT_INFO.faculty}</span>
            </div>

            {/* Main Titles */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Mi recorrido por la{' '}
                <span className="text-indigo-600 dark:text-indigo-400">
                  innovación
                </span>{' '}
                y la{' '}
                <span className="text-purple-600 dark:text-purple-400">
                  tecnología educativa
                </span>
              </h1>
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Portafolio de evidencias, experiencias y aprendizajes
              </p>
            </div>

            {/* Introductory Text */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Un recorrido de exploración, aprendizaje y creatividad a través de nueve prácticas que fortalecieron mis competencias y me permitieron conectar la tecnología con el componente humano de la educación superior.
            </p>

            {/* Metadata Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Estudiante</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{STUDENT_INFO.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Docente</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{STUDENT_INFO.teacher}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Fecha de entrega</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{STUDENT_INFO.deliveryDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Valor de la actividad</p>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{STUDENT_INFO.gradePercentage} de la nota final</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExplorePractices}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explorar Prácticas</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <button
                onClick={onViewReflection}
                className="px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold rounded-full border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Ver Reflexión Final</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-indigo-500/20">
              <img
                src={heroImage}
                alt="Ilustración de innovación y tecnología en la educación superior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
