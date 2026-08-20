import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Award, Car, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigateRosobrnadzor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onNavigateRosobrnadzor,
}) => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: '/images/slider/autodrome.jpg',
      title: 'Собственная закрытая учебная площадка',
      badge: 'Закрытая учебная площадка ВОА',
    },
    {
      image: '/images/classroom/classroom-overview.jpg',
      title: 'Оборудованные учебные аудитории',
      badge: 'Интерактивные стенды и разбор билетов ПДД',
    },
    {
      image: '/images/slider/exam-success.jpg',
      title: 'Учебные автомобили Lada Granta, Datsun, ГАЗ',
      badge: 'Дублирующие педали и видеорегистрация',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative min-h-[580px] sm:min-h-[660px] md:min-h-[740px] flex items-center justify-center overflow-hidden mb-6 sm:mb-12">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt="Автошкола ВОА Мостовской"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[#080A0F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F]/70 via-transparent to-[#080A0F]/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-14 sm:pt-16 pb-12 flex flex-col items-center">
        {/* State Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-card/90 border border-white/10 text-xs font-bold uppercase tracking-wider mb-5 text-slate-300 shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-national-red shrink-0" />
          <span>Мостовское районное отделение ВОА</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.08] mb-5 sm:mb-6 drop-shadow-md max-w-3xl">
          Обучение вождению в автошколе ВОА Мостовской
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed drop-shadow">
          Подготовка водителей категорий <strong className="text-white">«А», «В», «С»</strong> и профессиональная переподготовка. Собственная закрытая учебная площадка, оборудованный учебный автопарк и опытные преподаватели.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 min-h-[44px] px-8 py-4 rounded-sm bg-national-red hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-national-red/30 cursor-pointer"
          >
            <span>Связаться с учебной частью</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateRosobrnadzor}
            className="w-full sm:w-auto flex-1 min-h-[44px] px-6 py-4 rounded-sm bg-surface-card/90 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/10 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-national-red" />
            <span>Сведения об организации</span>
          </button>
        </div>

        {/* Key Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14 w-full text-left">
          <div className="dashboard-card p-3.5 sm:p-4 rounded-xl border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase mb-1">
              <Award className="w-4 h-4 text-national-red" />
              <span>Лицензия</span>
            </div>
            <p className="text-xs text-slate-400">Действующая лицензия МОН КК</p>
          </div>

          <div className="dashboard-card p-3.5 sm:p-4 rounded-xl border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase mb-1">
              <Car className="w-4 h-4 text-national-red" />
              <span>Автопарк</span>
            </div>
            <p className="text-xs text-slate-400">Granta, Datsun, Kalina, ГАЗ</p>
          </div>

          <div className="dashboard-card p-3.5 sm:p-4 rounded-xl border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase mb-1">
              <CheckCircle2 className="w-4 h-4 text-national-red" />
              <span>Поэтапно</span>
            </div>
            <p className="text-xs text-slate-400">Оплата частями на весь курс</p>
          </div>

          <div className="dashboard-card p-3.5 sm:p-4 rounded-xl border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-national-red" />
              <span>Экзамен</span>
            </div>
            <p className="text-xs text-slate-400">Организованная сдача в ГИБДД</p>
          </div>
        </div>
      </div>
    </section>
  );
};
