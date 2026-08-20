import React from 'react';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { MapPin, Phone, Clock, Mail, ArrowRight } from 'lucide-react';

interface ContactsSectionProps {
  onOpenBooking: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacts" className="py-12 sm:py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Адреса и связь
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Контакты автошколы
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm max-w-2xl">
            Учебные классы, учебная площадка и приём документов Мостовского отделения ВОА.
          </p>
        </div>

        {/* Unified 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Essential Contacts & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between dashboard-card rounded-2xl p-5 sm:p-8 space-y-6 border-white/10">
            <div className="space-y-5">
              {/* Primary Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-national-red shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-slate-400 font-bold uppercase tracking-wider">Адреса организации:</div>
                  <div className="text-white font-medium">
                    Учебные кабинеты (теория): <strong className="text-white">{SCHOOL_INFO.primaryAddress}</strong>
                  </div>
                  <div className="text-slate-300">
                    Учебная площадка (практика): <strong className="text-white">{SCHOOL_INFO.autodromeAddress}</strong>
                  </div>
                  <div className="text-slate-400 text-xs">
                    Юридический адрес: {SCHOOL_INFO.legalAddress}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="text-slate-400 font-bold uppercase tracking-wider">График работы:</div>
                  <div className="font-semibold text-white mt-0.5">{SCHOOL_INFO.workHours}</div>
                  <div className="text-slate-400 mt-0.5">Вождение: {SCHOOL_INFO.practiceHours}</div>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-national-red shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="text-slate-400 font-bold uppercase tracking-wider">Телефон учебной части:</div>
                  <a
                    href={`tel:${SCHOOL_INFO.phoneClean}`}
                    className="font-extrabold text-white text-lg sm:text-xl hover:text-national-red transition-colors block mt-0.5"
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${SCHOOL_INFO.phoneClean}`}
                className="w-full min-h-[44px] py-3.5 rounded-sm bg-surface-card border border-white/10 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-national-red" />
                <span>Позвонить: {SCHOOL_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="w-full min-h-[44px] py-3.5 rounded-sm bg-surface-card border border-white/10 text-slate-300 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-national-red" />
                <span>Написать: {SCHOOL_INFO.email}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full min-h-[44px] py-3.5 rounded-sm bg-national-red hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-national-red/30 cursor-pointer"
              >
                <span>Узнать порядок записи</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Sandboxed Yandex Map Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="dashboard-card rounded-2xl p-2 border-white/10 overflow-hidden flex-1 flex flex-col min-h-[380px] lg:min-h-[460px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A030fb4e1f6367cc6c8f079911f84e66b16063b2a8a7e96c29e531d02781c388c&amp;source=constructor"
                width="100%"
                height="100%"
                title="Карта расположения автошколы ВОА Мостовской (ул. Красная 88 и ул. Кооперативная 28)"
                className="w-full flex-1 rounded-xl border-0 min-h-[360px] lg:h-full"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
