import React from 'react';
import {
  User,
  Palette,
  Sparkles,
  Layers,
  Bot,
  Shield,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { ABOUT_ME_DATA, STUDENT_INFO } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar & Profile Identity Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-3xl blur-md opacity-30 dark:opacity-40" />

              <div className="relative bg-slate-50 dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-900 via-indigo-700 to-purple-600 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shrink-0">
                    ZV
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {STUDENT_INFO.name}
                    </h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                      Diseñadora UX/UI
                    </p>
                    <p className="text-sm dark:text-indigo-400 font-semibold">
                      ING. INDUSTRIAL Y DE SISTEMAS
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {STUDENT_INFO.university}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Maestría en Educación Superior V4</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Sede Cochabamba, Bolivia</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Especialista en Experiencia de Usuario</span>
                  </div>
                </div>

                <div className="p-3.5 bg-indigo-50/80 dark:bg-indigo-950/50 rounded-2xl border border-indigo-100 dark:border-indigo-900/60">
                  <p className="text-xs text-indigo-900 dark:text-indigo-200 italic font-medium leading-relaxed">
                    “Diseño digital centrado en las personas, facilitando procesos e impulsando el componente humano en la innovación.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Me Details & Skill Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900 text-purple-700 dark:text-purple-300 text-[10px] font-bold uppercase tracking-widest">
              <User className="w-3.5 h-3.5" />
              <span>Perfil Académico y Profesional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {ABOUT_ME_DATA.title}
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {ABOUT_ME_DATA.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Visual Tags */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Áreas de Enfoque e Integración
              </p>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_ME_DATA.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all cursor-default shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
