import React, { useState } from 'react';
import {
  UserCheck,
  Users,
  MessageSquare,
  Compass,
  Heart,
  Sparkles,
  BookOpen,
  Send,
  Share2,
  ArrowRight,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import { TIMELINE_STEPS } from '../data/portfolioData';

const ICON_MAP: Record<string, LucideIcon> = {
  UserCheck,
  Users,
  MessageSquare,
  Compass,
  Heart,
  Sparkles,
  BookOpen,
  Send,
  Share2,
};

interface TimelineProps {
  onOpenPractice: (id: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onOpenPractice }) => {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);

  const selectedStep = TIMELINE_STEPS.find((s) => s.id === selectedStepId) || TIMELINE_STEPS[0];

  return (
    <section id="linea-de-tiempo" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/80 border border-purple-100 dark:border-purple-900 text-purple-700 dark:text-purple-300 text-[10px] font-bold uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Progreso Continuo • 9 Etapas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mi evolución durante el módulo
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Un recorrido cronológico a través de nueve hitos que marcaron mi desarrollo profesional y pedagógico.
          </p>
        </div>

        {/* Timeline Horizontal / Desktop Stepper */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 relative z-10">
            {TIMELINE_STEPS.map((step) => {
              const IconComp = ICON_MAP[step.iconName] || Sparkles;
              const isSelected = step.id === selectedStepId;

              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStepId(step.id)}
                  className={`flex flex-col items-center text-center group p-2.5 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-2 border-indigo-600 shadow-md scale-105'
                      : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-sm mb-2 transition-transform group-hover:scale-110 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                    Etapa {step.stageNumber}
                  </span>
                  <span
                    className={`text-xs font-bold leading-tight line-clamp-2 mt-0.5 ${
                      isSelected
                        ? 'text-indigo-900 dark:text-indigo-200'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Focus Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-indigo-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-indigo-700/60 pb-4">
              <span className="text-xs font-bold font-mono uppercase bg-indigo-800/80 px-3 py-1 rounded-full text-indigo-200 border border-indigo-600/50">
                Etapa {selectedStep.stageNumber} de 9
              </span>
              <span className="text-xs font-semibold text-purple-300">
                Práctica N.º 0{selectedStep.practiceId}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {selectedStep.title}
            </h3>

            <p className="text-indigo-100 text-base sm:text-lg italic leading-relaxed bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
              “{selectedStep.quote}”
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-indigo-300 block">Práctica vinculada:</span>
                <span className="text-sm font-bold text-white">
                  {selectedStep.practiceTitle}
                </span>
              </div>

              <button
                onClick={() => onOpenPractice(selectedStep.practiceId)}
                className="px-5 py-2.5 bg-white text-indigo-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Ver la práctica {selectedStep.practiceId}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
