import React from 'react';
import { X } from 'lucide-react';
import { PracticeImage } from '../types/portfolio';

interface LightboxModalProps {
  image: PracticeImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
}) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10 flex flex-col max-h-[92vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <p className="text-xs sm:text-sm font-semibold text-slate-200 truncate pr-4">
            {image.alt}
          </p>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 overflow-auto flex items-center justify-center bg-black/60 flex-1">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        <div className="p-4 bg-slate-900 text-xs sm:text-sm text-slate-300 font-medium text-center border-t border-slate-800">
          {image.caption}
        </div>
      </div>
    </div>
  );
};
