import React from 'react';
import { X, Printer, Download, CheckCircle2, FileText, Award } from 'lucide-react';
import {
  STUDENT_INFO,
  PRACTICES,
  FINAL_REFLECTION_DATA,
  SELF_EVALUATION_DATA,
} from '../data/portfolioData';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] z-10">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold">
              Vista previa del Portafolio Académico en PDF
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Print Instruction Alert */}
        <div className="px-6 py-3 bg-indigo-50 dark:bg-indigo-950/60 border-b border-indigo-100 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
          <span>
            💡 En el cuadro de diálogo de impresión, selecciona <strong>"Guardar como PDF"</strong> para generar el documento oficial.
          </span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            Páginas optimizadas
          </span>
        </div>

        {/* PDF Document Preview Printable Area */}
        <div id="printable-portfolio" className="p-8 sm:p-12 overflow-y-auto space-y-10 bg-white text-slate-900 text-sm leading-relaxed flex-1">
          {/* Document Cover Header */}
          <div className="border-b-2 border-indigo-900 pb-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 uppercase tracking-widest font-mono">
              <span>{STUDENT_INFO.university}</span>
              <span>{STUDENT_INFO.faculty}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              PORTAFOLIO DE EVIDENCIAS Y APRENDIZAJES
            </h1>
            <p className="text-base font-bold text-indigo-800">
              Módulo: {STUDENT_INFO.module}
            </p>

            {/* Academic Info Table */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div>
                <p className="text-slate-500">Estudiante:</p>
                <p className="font-bold text-slate-900">{STUDENT_INFO.name}</p>
                <p className="text-slate-600">{STUDENT_INFO.degree}</p>
              </div>
              <div>
                <p className="text-slate-500">Docente:</p>
                <p className="font-bold text-slate-900">{STUDENT_INFO.teacher}</p>
                <p className="text-slate-600">Fecha de entrega: {STUDENT_INFO.deliveryDate}</p>
              </div>
            </div>
          </div>

          {/* Section: Resumen de las 9 Prácticas */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-indigo-200 pb-2">
              1. Resumen de las 9 Prácticas Desarrolladas
            </h2>

            <div className="space-y-4">
              {PRACTICES.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2"
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-indigo-900">
                      Práctica {p.numberStr}: {p.title}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      [{p.tools.join(', ')}]
                    </span>
                  </div>
                  <p className="text-xs text-slate-700">{p.shortDescription}</p>
                  <p className="text-xs italic text-slate-600">
                    <strong>Aporte:</strong> {p.myContribution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Reflexión Final */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-indigo-200 pb-2">
              2. Reflexión Final Integradora
            </h2>
            {FINAL_REFLECTION_DATA.paragraphs.map((para, i) => (
              <p key={i} className="text-xs text-slate-800 text-justify">
                {para}
              </p>
            ))}
          </div>

          {/* Section: Autovaloración */}
          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h2 className="text-lg font-bold text-indigo-900">
              3. Autovaloración del Módulo
            </h2>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900 mb-1">
                  {SELF_EVALUATION_DATA.qualitative.title}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {SELF_EVALUATION_DATA.qualitative.content}
                </p>
              </div>

              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 space-y-2">
                <p className="font-bold text-indigo-900">
                  {SELF_EVALUATION_DATA.quantitative.title}
                </p>
                <p className="text-2xl font-black text-indigo-900">
                  {SELF_EVALUATION_DATA.quantitative.score} puntos
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {SELF_EVALUATION_DATA.quantitative.content}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
