import React from 'react';
import { BookOpen, Quote, Sparkles, Heart, Lightbulb } from 'lucide-react';
import { FINAL_REFLECTION_DATA } from '../data/portfolioData';

export const FinalReflection: React.FC = () => {
  return (
    <section id="reflexion-final" className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Síntesis y Aprendizajes Clave</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {FINAL_REFLECTION_DATA.title}
          </h2>
        </div>

        {/* Highlighted Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Lightbulb className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              {FINAL_REFLECTION_DATA.quotes[0]}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              {FINAL_REFLECTION_DATA.quotes[1]}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              {FINAL_REFLECTION_DATA.quotes[2]}
            </p>
          </div>
        </div>

        {/* Full Reflection Text Body */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Reflexión General Integradora
            </p>
          </div>

          {FINAL_REFLECTION_DATA.paragraphs.map((p, idx) => (
            <p key={idx} className="text-justify">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
