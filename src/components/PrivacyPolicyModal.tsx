import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/autoschoolData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-[#0c0f0f] border border-white/10 shadow-2xl p-6 sm:p-8 text-white flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть политику конфиденциальности"
          className="absolute top-5 right-5 p-2 rounded bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 border-b border-white/10 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Федеральный закон № 152-ФЗ «О персональных данных»
          </div>
          <h3 id="privacy-policy-title" className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
            Политика в отношении обработки персональных данных
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Оператор: {SCHOOL_INFO.name} (рег. № в реестре Роскомнадзора: 12-0244092).
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs text-slate-300 leading-relaxed pr-2">
          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">1. Общие положения</h4>
            <p>
              Настоящая Политика составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки и защиты персональных данных, осуществляемый {SCHOOL_INFO.name} (далее — Оператор).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">2. Порядок обработки персональных данных</h4>
            <p>
              Официальный сайт носит информационно-справочный характер и не производит сбор, хранение или автоматизированную передачу персональных данных пользователей по сети Интернет.
            </p>
            <p className="mt-1">
              Обработка персональных данных осуществляется исключительно в неавтоматизированном виде при личном обращении гражданина в учебную часть автошколы и заключении письменного договора об оказании платных образовательных услуг.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">3. Цели обработки</h4>
            <p>
              Персональные данные субъектов обрабатываются исключительно в целях:
            </p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-200">
              <li>Заключения и исполнения договора об оказании платных образовательных услуг;</li>
              <li>Организации учебного процесса профессионального обучения водителей ТС;</li>
              <li>Выдачи свидетельств о профессии водителя и передачи сведений в государственные информационные системы (ФИС ФРДО, ГИБДД МВД РФ) в порядке, установленном законодательством РФ.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">4. Реквизиты и контакты Оператора</h4>
            <div className="p-3 rounded bg-surface-card border border-white/10 text-slate-300 space-y-1 mt-1">
              <div><strong>Оператор:</strong> {SCHOOL_INFO.fullName}</div>
              <div><strong>Юридический адрес:</strong> {SCHOOL_INFO.legalAddress}</div>
              <div><strong>Учебная часть:</strong> {SCHOOL_INFO.primaryAddress}</div>
              <div><strong>Телефон:</strong> {SCHOOL_INFO.phone}</div>
              <div><strong>Email:</strong> {SCHOOL_INFO.email}</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] px-6 py-2.5 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
