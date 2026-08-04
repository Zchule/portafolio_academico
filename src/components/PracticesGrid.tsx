import React from 'react';
import {
  Users,
  Layout,
  Smile,
  Search,
  HeartHandshake,
  Bot,
  Presentation,
  MessageCircleHeart,
  Gift,
  ArrowRight,
  Sparkles,
  LucideIcon,
} from 'lucide-react';
import { PRACTICES } from '../data/portfolioData';
import { Practice } from '../types/portfolio';

// Map icon strings to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Layout,
  Smile,
  Search,
  HeartHandshake,
  Bot,
  Presentation,
  MessageCircleHeart,
  Gift,
};

interface PracticesGridProps {
  onSelectPractice: (id: number) => void;
}

export const PracticesGrid: React.FC<PracticesGridProps> = ({
  onSelectPractice,
}) => {
  return (
    <section id="practicas" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evidencias del Módulo • 9 Actividades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prácticas del Módulo
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Explora cada una de las nueve evidencias desarrolladas durante el curso para conocer mis aportes, productos y reflexiones.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRACTICES.map((practice: Practice) => {
            const IconComponent = ICON_MAP[practice.iconName] || Sparkles;

            return (
              <div
                key={practice.id}
                onClick={() => onSelectPractice(practice.id)}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Top Colored Accent Bar on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 opacity-80 group-hover:opacity-100"
                  style={{ backgroundColor: practice.accentColor }}
                />

                <div className="space-y-4">
                  {/* Card Header: Number Badge + Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-black px-3 py-1 rounded-full text-white tracking-widest shadow-xs"
                      style={{ backgroundColor: practice.accentColor }}
                    >
                      {practice.numberStr}
                    </span>

                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${practice.accentColor}15`,
                        color: practice.accentColor,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {practice.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {practice.shortDescription}
                    </p>
                  </div>

                  {/* Tools Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {practice.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span
                    className="group-hover:underline transition-all flex items-center gap-1.5"
                    style={{ color: practice.accentColor }}
                  >
                    Ver práctica detallada
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                    style={{
                      backgroundColor: `${practice.accentColor}20`,
                      color: practice.accentColor,
                    }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
