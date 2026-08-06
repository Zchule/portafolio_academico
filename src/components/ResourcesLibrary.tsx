import React, { useState } from 'react';
import {
  Folder,
  FileText,
  Video,
  Headphones,
  Presentation,
  Bot,
  ExternalLink,
  BookOpen,
  Filter,
  LucideIcon,
  Image as ImageIcon,
  Music,
  Shield,
} from 'lucide-react';
import { RESOURCES_DATA, PRACTICES } from '../data/portfolioData';
import { ResourceItem } from '../types/portfolio';

const ICON_MAP: Record<string, LucideIcon> = {
  Folder,
  FileText,
  Video,
  Headphones,
  Presentation,
  Bot,
  Image: ImageIcon,
  Music,
  Shield,
  BookOpen,
};

type CategoryFilter =
  | 'Todos'
  | 'Presentaciones'
  | 'Videos'
  | 'Podcast'
  | 'Documentos'
  | 'Herramientas';

const CATEGORIES: CategoryFilter[] = [
  'Todos',
  'Presentaciones',
  'Videos',
  'Podcast',
  'Documentos',
  'Herramientas',
];

export const ResourcesLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Todos');

  const filteredResources =
    activeCategory === 'Todos'
      ? RESOURCES_DATA
      : RESOURCES_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="recursos" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-100 dark:border-sky-900 text-sky-700 dark:text-sky-300 text-[10px] font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Repositorio Digital y Enlaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Biblioteca de Recursos
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Explora las presentaciones, videos, podcasts, documentos y herramientas desarrolladas y consultadas en el módulo.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-semibold mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res: ResourceItem) => {
            const IconComp = ICON_MAP[res.iconName] || ExternalLink;
            const practice = PRACTICES.find((p) => p.id === res.practiceId);

            return (
              <div
                key={res.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                      {res.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {res.description}
                  </p>

                  {practice && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 px-2.5 py-1 rounded-full">
                      Práctica {practice.numberStr} · {practice.title}
                    </span>
                  )}
                </div>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 font-semibold text-xs border border-slate-200/80 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 group-hover:border-indigo-300 dark:group-hover:border-indigo-600"
                >
                  <span>Abrir recurso</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
