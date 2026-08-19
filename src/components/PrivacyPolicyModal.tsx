import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/autoschoolData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-[#0c0f0f] border border-white/10 shadow-2xl p-6 sm:p-8 text-white flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 border-b border-white/10 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Федеральный закон № 152-ФЗ
          </div>
          <h3 className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
            Политика конфиденциальности
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Положение об обработке и защите персональных данных пользователей сайта.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs text-slate-300 leading-relaxed pr-2">
          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">1. Общие положения</h4>
            <p>
              Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые {SCHOOL_INFO.name} (далее — Оператор).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">2. Состав обрабатываемых данных</h4>
            <p>
              Оператор может обрабатывать следующие персональные данные Пользователя:
            </p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-200">
              <li>Фамилия, имя, отчество;</li>
              <li>Номер контактного телефона;</li>
              <li>Адрес электронной почты (при указании);</li>
              <li>Выбранная программа обучения / категория ТС.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">3. Цели обработки персональных данных</h4>
            <p>
              Персональные данные обрабатываются исключительно в целях:
            </p>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-200">
              <li>Консультирования по вопросам зачисления на курсы подготовки водителей;</li>
              <li>Оформления договора об оказании платных образовательных услуг;</li>
              <li>Обратной связи и информирования о расписании и стоимости занятий.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">4. Порядок сбора, хранения и передачи</h4>
            <p>
              Безопасность персональных данных обеспечивается реализацией правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований законодательства РФ в области защиты информации.
            </p>
            <p className="mt-1">
              Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства (передача сведений в ФИС ФРДО и ГИБДД при выпуске из автошколы).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs mb-1">5. Срок действия согласия и контакты</h4>
            <p>
              Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на адрес: <strong className="text-white">{SCHOOL_INFO.email}</strong> с пометкой «Отзыв согласия на обработку персональных данных».
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};
