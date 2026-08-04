import React, { useState } from 'react';
import { Award, CheckCircle2, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SELF_EVALUATION_DATA } from '../data/portfolioData';

export const SelfEvaluation: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);

  const triggerConfetti = () => {
    setCelebrated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4F46E5', '#9333EA', '#10B981', '#F59E0B', '#3B82F6'],
    });
  };

  return (
    <section id="autovaloracion" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Evaluación del Módulo • 60% Ponderación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Autovaloración
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Análisis cualitativo y cuantitativo del nivel de compromiso, participación y calidad de los aprendizajes alcanzados.
          </p>
        </div>

        {/* Two Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Autovaloración Cualitativa */}
          <div className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {SELF_EVALUATION_DATA.qualitative.title}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    Compromiso, constancia e integración
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {SELF_EVALUATION_DATA.qualitative.content.split('\n\n').map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Desempeño académico satisfactorio en el módulo</span>
            </div>
          </div>

          {/* Card 2: Autovaloración Cuantitativa */}
          <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-500/30 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xl shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {SELF_EVALUATION_DATA.quantitative.title}
                    </h3>
                    <p className="text-xs text-emerald-300 font-semibold">
                      Calificación asignada
                    </p>
                  </div>
                </div>

                <button
                  onClick={triggerConfetti}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{celebrated ? '¡Felicitaciones!' : 'Ver logro'}</span>
                </button>
              </div>

              {/* Score Display */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center space-y-4">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {SELF_EVALUATION_DATA.quantitative.score}{' '}
                  <span className="text-xl font-bold text-emerald-400">puntos</span>
                </div>

                {/* Progress Bar (97.5%) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-200">
                    <span>Avance / Cumplimiento:</span>
                    <span className="text-emerald-400 font-bold">
                      {SELF_EVALUATION_DATA.quantitative.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-indigo-700/50">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-all duration-1000"
                      style={{
                        width: `${SELF_EVALUATION_DATA.quantitative.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Justification Text */}
              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
                {SELF_EVALUATION_DATA.quantitative.content}
              </p>
            </div>

            <div className="pt-4 border-t border-indigo-800/60 text-xs text-indigo-300 flex items-center justify-between">
              <span>Módulo: Innovación y Tecnología</span>
              <span className="font-bold text-emerald-400">Ponderación: 60 %</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
