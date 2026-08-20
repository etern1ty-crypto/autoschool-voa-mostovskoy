import React, { useEffect } from 'react';
import { X, Car, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/autoschoolData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTariff?: string;
  onOpenPrivacyPolicy?: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTariff = 'Категория «В»',
  onOpenPrivacyPolicy,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0f0f] border border-national-red/40 shadow-2xl p-6 sm:p-8 text-white">
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно записи"
          className="absolute top-5 right-5 p-2 rounded bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-2">
              <Car className="w-3.5 h-3.5" />
              Запись и консультации
            </div>
            <h3 id="booking-modal-title" className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
              Связь с учебной частью
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Выбранная программа: <strong className="text-white">{initialTariff}</strong>
            </p>
          </div>

          <div className="tech-line" />

          <p className="text-xs text-slate-300 leading-relaxed">
            Для записи в учебную группу и заключения договора свяжитесь с учебной частью по телефону или посетите учебный класс автошколы:
          </p>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-start gap-3">
              <Phone className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-400 font-bold uppercase text-xs">Телефон учебной части:</div>
                <a href={`tel:${SCHOOL_INFO.phoneClean}`} className="text-white font-bold text-base hover:text-national-red transition">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-start gap-3">
              <Mail className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-400 font-bold uppercase text-xs">Электронная почта:</div>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="text-white font-bold text-sm hover:text-national-red transition">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-400 font-bold uppercase text-xs">Адрес учебного класса и приёма документов:</div>
                <div className="text-white font-semibold text-xs mt-0.5">{SCHOOL_INFO.primaryAddress}</div>
              </div>
            </div>

            <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-start gap-3">
              <Clock className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-400 font-bold uppercase text-xs">График работы:</div>
                <div className="text-white text-xs mt-0.5">{SCHOOL_INFO.workHours}</div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <a
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="flex-1 min-h-[44px] rounded-sm bg-national-red hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-national-red/30"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-5 rounded-sm bg-surface-card border border-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Закрыть
            </button>
          </div>

          {onOpenPrivacyPolicy && (
            <div className="pt-2 text-center text-xs text-slate-500">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPrivacyPolicy();
                }}
                className="hover:underline hover:text-slate-300 cursor-pointer"
              >
                Политика обработки персональных данных (152-ФЗ)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
