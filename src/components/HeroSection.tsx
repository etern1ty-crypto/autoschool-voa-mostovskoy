import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onScrollToFleet: () => void;
  onScrollToPricing: () => void;
}

const slides = [
  {
    image: '/images/slider/autodrome.jpg',
    tag: 'Собственный автодром',
    caption: 'Технологичная площадка для комфортных первых шагов и уверенной отработки упражнений ГИБДД.',
  },
  {
    image: '/images/classroom/classroom-overview.jpg',
    tag: 'Учебные аудитории',
    caption: 'Оборудованные классы с интерактивными стендами ПДД, устройством авто и медицинскими тренажерами.',
  },
  {
    image: '/images/slider/exam-success.jpg',
    tag: 'Гарантия и сдача в ГАИ',
    caption: '96.4% наших учеников сдают экзамен в ГИБДД с первой попытки на знакомых автомобилях автошколы.',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToFleet,
  onScrollToPricing,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[640px] md:min-h-[760px] flex items-center justify-center overflow-hidden mb-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </AnimatePresence>

        {/* Deep dark cinematic overlays */}
        <div className="absolute inset-0 bg-[#080A0F]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F]/80 via-transparent to-[#080A0F]/80" />

        {/* 4. Slide Bottom Caption without pill/round border and without blinking circle */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-national-red text-xs font-extrabold uppercase tracking-widest mb-1">
              {slides[current].tag}
            </div>
            <p className="text-sm md:text-base text-slate-200 font-medium leading-snug drop-shadow-md">
              {slides[current].caption}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10">
        {/* State Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-surface-card/90 border border-white/10 text-xs font-bold uppercase tracking-wider mb-6 text-slate-300 shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-national-red" />
          <span>Мостовское районное отделение ВОА • С 1973 года</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight drop-shadow-2xl uppercase leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-national-red via-red-500 to-white">
            Учитесь на лучших
          </span>
          <br />
          автомобилях Мостовского
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Официальная государственная программа подготовки водителей. Современный автопарк, закрытый автодром без очередей и честная беспроцентная рассрочка 0%.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToFleet}
            className="w-full sm:w-auto bg-national-red text-white px-8 py-4 rounded-sm font-extrabold uppercase tracking-wider text-xs hover:bg-red-700 transition-all hover:shadow-[0_0_30px_rgba(227,30,36,0.6)] transform hover:-translate-y-1 duration-200"
          >
            Смотреть автопарк
          </button>
          <button
            onClick={onScrollToPricing}
            className="w-full sm:w-auto bg-surface-card/90 border border-white/10 hover:border-national-red text-white px-8 py-4 rounded-sm font-extrabold uppercase tracking-wider text-xs transition-all hover:bg-white/5"
          >
            Прейскурант и рассрочка 0%
          </button>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
            className="p-2 rounded bg-black/40 border border-white/10 text-white hover:bg-national-red transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === i ? 'w-8 bg-national-red' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Следующий слайд"
            className="p-2 rounded bg-black/40 border border-white/10 text-white hover:bg-national-red transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Kinetic Red Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 kinetic-gradient z-20" />
    </section>
  );
};
