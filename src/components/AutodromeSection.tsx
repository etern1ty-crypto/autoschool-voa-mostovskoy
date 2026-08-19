import React from 'react';
import { ArrowRight, Navigation, Maximize2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/autoschoolData';

interface AutodromeSectionProps {
  onOpenBooking: () => void;
}

export const AutodromeSection: React.FC<AutodromeSectionProps> = ({ onOpenBooking }) => {
  const exercises = [
    { title: 'Эстакада (Горка)', desc: 'Остановка и трогание на подъеме без отката назад.' },
    { title: 'Параллельная парковка', desc: 'Заезд задним ходом в ограниченное парковочное пространство.' },
    { title: 'Заезд в бокс (90°)', desc: 'Маневрирование и точная постановка автомобиля задним ходом.' },
    { title: 'Змейка и разворот', desc: 'Чувство габаритов авто и плавное управление в узких коридорах.' },
  ];

  return (
    <section id="autodrome" className="py-10 sm:py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Autodrome Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-surface-card shadow-2xl relative group">
              <img
                src="/images/slider/autodrome.jpg"
                alt="Учебный автодром автошколы ВОА Мостовской"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs font-extrabold text-white flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-national-red" />
                <span>Учебная площадка ВОА</span>
              </div>
            </div>
          </div>

          {/* Autodrome Info */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              Экзаменационная площадка ВОА
            </div>

            <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Собственный закрытый автодром
            </h2>

            <div className="tech-line" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Практические занятия проходят на собственной закрытой асфальтированной учебной площадке ВОА по адресу: <strong className="text-white">{SCHOOL_INFO.autodromeAddress}</strong>. Просторная территория, точная разметка по стандартам ГИБДД, освещение, эстакада и учебные знаки гарантируют уверенную подготовку без очередей.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {exercises.map((ex, idx) => (
                <div key={idx} className="dashboard-card p-3 sm:p-3.5 rounded-lg border-white/10">
                  <div className="flex items-center gap-2 font-bold text-white text-xs uppercase mb-0.5 sm:mb-1">
                    <span className="w-5 h-5 rounded bg-national-red/20 text-national-red flex items-center justify-center text-xs font-extrabold">
                      {idx + 1}
                    </span>
                    <span>{ex.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">{ex.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto min-h-[44px] bg-national-red text-white px-6 py-3.5 rounded-sm font-extrabold uppercase tracking-wider text-xs hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-national-red/30"
              >
                <span>Записаться на автодром</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
