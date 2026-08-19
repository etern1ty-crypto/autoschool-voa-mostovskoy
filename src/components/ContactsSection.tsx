import React, { useEffect, useRef } from 'react';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from 'lucide-react';

interface ContactsSectionProps {
  onOpenBooking: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onOpenBooking }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (container) {
      container.innerHTML = '';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A030fb4e1f6367cc6c8f079911f84e66b16063b2a8a7e96c29e531d02781c388c&width=100%25&height=100%25&lang=ru_RU&scroll=true';
      container.appendChild(script);

      return () => {
        if (container) {
          container.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <section id="contacts" className="py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Адреса и связь
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Контакты автошколы
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-2xl">
            Центральный офис, учебные классы и закрытый учебный автодром Мостовского отделения ВОА.
          </p>
        </div>

        {/* Unified 2-Column Responsive Layout with Matching Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Essential Contacts & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between dashboard-card rounded-2xl p-6 sm:p-8 space-y-6 border-white/10">
            <div className="space-y-6">
              {/* Primary Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-national-red shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Главный офис и классы:</div>
                  <div className="font-bold text-white text-base sm:text-lg mt-0.5">{SCHOOL_INFO.primaryAddress}</div>
                  <div className="text-xs text-slate-400 mt-1">Автодром: {SCHOOL_INFO.autodromeAddress}</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">График работы:</div>
                  <div className="font-semibold text-white text-sm mt-0.5">{SCHOOL_INFO.workHours}</div>
                  <div className="text-xs text-national-red font-medium mt-1">Вождение: {SCHOOL_INFO.practiceHours}</div>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center shrink-0 text-national-red shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Прямой телефон:</div>
                  <a
                    href={`tel:${SCHOOL_INFO.phoneClean}`}
                    className="font-extrabold text-white text-xl sm:text-2xl hover:text-national-red transition-colors block mt-0.5"
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Консультации и запись в учебные группы</div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/${SCHOOL_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent('Здравствуйте! Хочу записаться на обучение в автошколу ВОА Мостовской.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-sm bg-national-red hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-national-red/30"
              >
                <span>Записаться онлайн</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Yandex Constructor Map Matching Left Column Height */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="dashboard-card rounded-2xl p-2 border-white/10 overflow-hidden flex-1 flex flex-col min-h-[420px] lg:min-h-[500px]">
              <div
                ref={mapContainerRef}
                className="w-full flex-1 rounded-xl overflow-hidden min-h-[400px] lg:h-full [&>div]:w-full [&>div]:h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
