import React, { useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  CheckCircle2,
  Sparkles,
  Maximize2,
  FileText,
  Video,
  Headphones,
  Folder,
  Image as ImageIcon,
  Presentation,
  BookOpen,
} from 'lucide-react';
import { Practice, PracticeLink, PracticeImage } from '../types/portfolio';
import { PRACTICES } from '../data/portfolioData';

interface PracticeModalProps {
  practiceId: number | null;
  onClose: () => void;
  onSelectPractice: (id: number) => void;
  onOpenLightbox: (img: PracticeImage) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  practiceId,
  onClose,
  onSelectPractice,
  onOpenLightbox,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!practiceId) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && practiceId > 1) onSelectPractice(practiceId - 1);
      if (e.key === 'ArrowRight' && practiceId < 9) onSelectPractice(practiceId + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [practiceId, onClose, onSelectPractice]);

  if (!practiceId) return null;

  const currentPractice = PRACTICES.find((p) => p.id === practiceId);
  if (!currentPractice) return null;

  const totalPractices = PRACTICES.length;
  const prevPracticeId = currentPractice.id > 1 ? currentPractice.id - 1 : null;
  const nextPracticeId =
    currentPractice.id < totalPractices ? currentPractice.id + 1 : null;

  // Helper for link icon
  const getLinkIcon = (type: PracticeLink['type']) => {
    switch (type) {
      case 'drive':
        return <Folder className="w-4 h-4 text-amber-500" />;
      case 'presentation':
        return <Presentation className="w-4 h-4 text-orange-500" />;
      case 'canva':
        return <ImageIcon className="w-4 h-4 text-sky-500" />;
      case 'video':
        return <Video className="w-4 h-4 text-rose-500" />;
      case 'podcast':
        return <Headphones className="w-4 h-4 text-purple-500" />;
      case 'document':
        return <FileText className="w-4 h-4 text-blue-500" />;
      default:
        return <ExternalLink className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in zoom-in-95 duration-200">
        {/* Sticky Header */}
        <div
          className="sticky top-0 z-20 px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-between"
          style={{ borderTop: `4px solid ${currentPractice.accentColor}` }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="text-xs font-extrabold px-3 py-1 rounded-full text-white shrink-0"
              style={{ backgroundColor: currentPractice.accentColor }}
            >
              Práctica {currentPractice.numberStr}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">
              {currentPractice.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 ml-2"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar (e.g. Práctica 4 de 9) */}
        <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span>Avance del módulo:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">
              Práctica {currentPractice.id} de {totalPractices}
            </span>
          </div>
          <div className="w-32 sm:w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(currentPractice.id / totalPractices) * 100}%`,
                backgroundColor: currentPractice.accentColor,
              }}
            />
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Tools Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Herramientas empleadas:
            </span>
            {currentPractice.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Section: Descripción de la actividad */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Descripción de la actividad
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              {currentPractice.fullDescription}
            </p>
          </div>

          {/* Optional Team / Story Box */}
          {currentPractice.team && (
            <div className="bg-purple-50/70 dark:bg-purple-950/30 p-4 sm:p-5 rounded-2xl border border-purple-200/80 dark:border-purple-800/60 space-y-3">
              <div className="flex items-center gap-2 text-purple-900 dark:text-purple-200 font-bold text-sm">
                <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Equipo de trabajo: {currentPractice.team.groupName}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {currentPractice.team.members.map((member, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-purple-800 dark:text-purple-300 font-medium border border-purple-200 dark:border-purple-800/60"
                  >
                    • {member}
                  </span>
                ))}
              </div>
              {currentPractice.chosenStory && (
                <div className="pt-2 border-t border-purple-200/60 dark:border-purple-800/40 text-xs text-purple-900 dark:text-purple-300">
                  <span className="font-bold">Historia elegida: </span>
                  {currentPractice.chosenStory}
                </div>
              )}
            </div>
          )}

          {/* Section: Mi Aporte */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Mi aporte personal
            </h3>
            <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-indigo-50/50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-indigo-100 dark:border-slate-800 space-y-3">
              <p>{currentPractice.myContribution}</p>

              {currentPractice.highlights && (
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentPractice.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section: Interactive Links / Resources if present */}
          {currentPractice.links && currentPractice.links.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Enlaces y Recursos Interactivos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPractice.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {getLinkIcon(link.type)}
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                        {link.label}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Section: Capturas de Pantalla / Evidencias con Lightbox */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                Evidencias y Capturas
              </h3>
              <span className="text-xs text-slate-400">
                (Haz clic en la imagen para ampliar)
              </span>
            </div>

            {/* Visual Code Comments Marker for Zulema */}
            {/* 
              ============================================================
              ZULEMA: Puedes cambiar las imágenes sustituyendo la propiedad 'src'
              en /src/data/portfolioData.ts por tus capturas reales.
              ============================================================
            */}

            <div className={`grid gap-4 ${currentPractice.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {currentPractice.images.map((img) => (
                <div
                  key={img.id}
                  onClick={() => onOpenLightbox(img)}
                  className="group relative bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-semibold text-xs">
                      <Maximize2 className="w-4 h-4" />
                      <span>Ampliar imagen</span>
                    </div>
                  </div>
                  <div className="p-3 text-xs text-slate-600 dark:text-slate-300 font-medium bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700/50">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Reflexión */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Reflexión y conexión pedagógica
            </h3>
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic">
              “{currentPractice.reflection}”
            </div>
          </div>
        </div>

        {/* Sticky Footer Navigation */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => prevPracticeId && onSelectPractice(prevPracticeId)}
            disabled={!prevPracticeId}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              prevPracticeId
                ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                : 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 border border-slate-200/50 dark:border-slate-800 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
          >
            Volver a todas las prácticas
          </button>

          <button
            onClick={() => nextPracticeId && onSelectPractice(nextPracticeId)}
            disabled={!nextPracticeId}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              nextPracticeId
                ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                : 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 border border-slate-200/50 dark:border-slate-800 cursor-not-allowed'
            }`}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
