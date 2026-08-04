import React from 'react';
import {
  User,
  UserCheck,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  Laptop,
  Cpu,
  Share2,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

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
            <div className="relative w-full max-w-md bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-900 rounded-3xl p-6 sm:p-8 shadow-2xl text-white border border-indigo-500/20 overflow-hidden group">
              {/* Decorative Lighting Effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none" />

              {/* Graphic Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-indigo-800/60 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-indigo-300/80 bg-indigo-900/60 px-2.5 py-1 rounded-full border border-indigo-700/50">
                  IA & EdTech • Univalle
                </span>
              </div>

              {/* Composition Center Graphics */}
              <div className="space-y-6 relative z-10">
                <div className="relative bg-indigo-900/40 rounded-2xl p-5 border border-indigo-700/50 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white shadow-md">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Laptop & Aula Virtual</h4>
                        <p className="text-xs text-indigo-200">Innovación Educativa</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/50">
                      9/9 Prácticas
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                    <div className="bg-slate-900/60 p-2 rounded-xl border border-indigo-800/40">
                      <Cpu className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                      <span className="text-[10px] text-slate-300 block">IA Generativa</span>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-xl border border-indigo-800/40">
                      <Layers className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                      <span className="text-[10px] text-slate-300 block">Diseño UX/UI</span>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-xl border border-indigo-800/40">
                      <Share2 className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                      <span className="text-[10px] text-slate-300 block">Co-creación</span>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="bg-gradient-to-r from-purple-900/60 to-indigo-900/60 rounded-2xl p-4 border border-purple-500/30 backdrop-blur-md flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/30 text-purple-300 flex items-center justify-center text-xl shrink-0 font-extrabold border border-purple-400/30">
                    60%
                  </div>
                  <div>
                    <p className="text-xs text-purple-200 font-medium">Evaluación del Módulo</p>
                    <p className="text-xs text-white/90 leading-tight">
                      Evidencias de aprendizaje continuo y autovaloración reflexiva.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-1">
                  <p className="text-[11px] text-indigo-300 italic">
                    “Conectando la tecnología con el sentido humano en la educación”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
