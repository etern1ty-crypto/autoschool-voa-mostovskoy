import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Car, Phone, User, MessageCircle } from 'lucide-react';
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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialTariff);
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTariff) {
      setCategory(initialTariff);
    }
  }, [initialTariff]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('7') || val.startsWith('8')) {
      val = val.substring(1);
    }
    let formatted = '+7';
    if (val.length > 0) formatted += ' (' + val.substring(0, 3);
    if (val.length >= 3) formatted += ') ' + val.substring(3, 6);
    if (val.length >= 6) formatted += '-' + val.substring(6, 8);
    if (val.length >= 8) formatted += '-' + val.substring(8, 10);
    setPhone(formatted);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу записаться на обучение в автошколу ВОА.\n` +
      `Программа: ${category}\n` +
      `Имя: ${name || 'Не указано'}\n` +
      `Телефон: ${phone || 'Не указан'}`
    );
    return `https://wa.me/79183278999?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных (152-ФЗ)');
      return;
    }
    setSubmitted(true);
    try {
      window.open(getWhatsAppLink(), '_blank');
    } catch (_) {}
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0f0f] border border-national-red/40 shadow-2xl p-6 sm:p-8 text-white">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight">
              Заявка принята!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Мы свяжемся с вами в течение 10 минут по номеру <strong className="text-national-red">{phone}</strong> для подтверждения записи и фиксации цены.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Открыть диалог в WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phoneClean}`}
                className="w-full py-2.5 rounded-sm bg-surface-card border border-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-national-red" />
                <span>Позвонить напрямую: {SCHOOL_INFO.phone}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2 text-slate-500 hover:text-slate-300 text-xs transition"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-2">
                <Car className="w-3.5 h-3.5" />
                Запись в автошколу ВОА
              </div>
              <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight">
                Записаться на обучение
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Зафиксируйте официальную цену и получите подробную консультацию.
              </p>
            </div>

            <div className="tech-line" />

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                Программа:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-national-red"
              >
                <option value="Категория «В»">Категория «В» (Легковые, МКПП)</option>
                <option value="Категория «А»">Категория «А» (Мотоциклы)</option>
                <option value="Категория «С»">Категория «С» (Грузовые ГАЗ)</option>
                <option value="Комбо «А» + «В»">Комбо «А» + «В»</option>
                <option value="Переподготовка с В на С">Переподготовка с «В» на «С»</option>
                <option value="Переподготовка с С на В">Переподготовка с «С» на «В»</option>
                <option value="20-ти часовая программа ПДД">20-ти часовая программа ПДД</option>
                <option value="Дополнительные часы вождения">Дополнительные часы вождения</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                Ваше имя:
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-national-red"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                Номер телефона:
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="+7 (918) 000-00-00"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full pl-10 pr-4 py-3 rounded bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-national-red"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* 152-FZ */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-white/20 bg-surface-card text-national-red accent-national-red"
                />
                <span className="text-[10px] text-slate-400 leading-tight">
                  Согласен на обработку персональных данных в соответствии с{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenPrivacyPolicy) onOpenPrivacyPolicy();
                    }}
                    className="text-national-red underline hover:text-white transition"
                  >
                    Политикой конфиденциальности (ФЗ-152)
                  </button>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition shadow-lg shadow-national-red/30 flex items-center justify-center gap-2 mt-2"
            >
              <span>Отправить заявку</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
