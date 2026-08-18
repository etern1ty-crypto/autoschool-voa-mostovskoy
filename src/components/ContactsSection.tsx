import React, { useEffect, useRef } from 'react';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from 'lucide-react';

interface ContactsSectionProps {
  onOpenBooking: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onOpenBooking }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aed8b6f43fa1f4a2df29936a4aea383db22e096600a872d6f6ae2c09b63b8914a&width=100%25&height=100%25&lang=ru_RU&scroll=true';
      mapContainerRef.current.appendChild(script);
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
            Центральный офис, учебные классы и закрытый автодром Мостовского отделения ВОА.
          </p>
        </div>

        {/* 2-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards + WhatsApp Button */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              {/* 1. Main Address */}
              <div className="dashboard-card p-4 sm:p-5 rounded-xl border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-national-red/10 border border-national-red/30 flex items-center justify-center text-national-red shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-national-red uppercase font-bold tracking-wider">
                    Основной адрес (Офис и учебные классы):
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base mt-0.5">
                    {SCHOOL_INFO.primaryAddress}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Центр посёлка, удобный подъезд и парковка</div>
                </div>
              </div>

              {/* 2. Secondary Address (Autodrome) */}
              <div className="dashboard-card p-4 sm:p-5 rounded-xl border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface-card border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-national-red" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Учебный автодром (Практика):
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base mt-0.5">
                    {SCHOOL_INFO.autodromeAddress}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Собственная закрытая асфальтированная площадка</div>
                </div>
              </div>

              {/* 3. Phone */}
              <div className="dashboard-card p-4 sm:p-5 rounded-xl border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-national-red/10 border border-national-red/30 flex items-center justify-center text-national-red shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Телефон для записи и консультаций:
                  </div>
                  <a
                    href={`tel:${SCHOOL_INFO.phoneClean}`}
                    className="text-white hover:text-national-red font-black text-lg sm:text-xl block mt-0.5 transition"
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                  <div className="text-[11px] text-slate-400">Нажмите для прямого звонка с телефона</div>
                </div>
              </div>

              {/* 4. Hours */}
              <div className="dashboard-card p-4 sm:p-5 rounded-xl border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface-card border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Режим работы офиса:
                  </div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    {SCHOOL_INFO.workHours}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Вождение: <strong className="text-white">{SCHOOL_INFO.practiceHours}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Redesigned Premium WhatsApp Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/79183278999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 to-emerald-900/40 border border-emerald-500/40 text-white hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-sm uppercase tracking-wider text-emerald-300 group-hover:text-white transition">
                      Написать в WhatsApp
                    </div>
                    <div className="text-[11px] text-emerald-400/80">
                      Быстрый ответ инструктора онлайн • Без звонков
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Equal-height Yandex Map + Quick Action Callout */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Map Frame sizing exactly with left column */}
            <div className="dashboard-card rounded-xl overflow-hidden border-white/10 flex-1 min-h-[380px] relative">
              <div ref={mapContainerRef} className="w-full h-full min-h-[380px]" />
              <div className="absolute top-3 left-3 bg-[#080A0F]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs text-white max-w-xs shadow-xl pointer-events-none">
                <div className="font-extrabold text-national-red uppercase text-[11px]">пгт. Мостовской</div>
                <div className="text-slate-200 text-xs font-bold mt-0.5">ул. Красная, д. 88</div>
                <div className="text-slate-400 text-[10px] mt-0.5">Автодром: ул. Первомайская, 109</div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-card border border-national-red/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-white text-sm uppercase">Остались вопросы по обучению?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Оставьте заявку, и мы перезвоним в течение 10 минут.</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition shadow-lg shadow-national-red/30 shrink-0"
              >
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
