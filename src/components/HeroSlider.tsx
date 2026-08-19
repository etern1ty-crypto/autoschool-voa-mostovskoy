import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, MapPin, Award, ArrowRight, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenBooking: () => void;
  onScrollToPricing: () => void;
}

interface Slide {
  id: number;
  badge: string;
  badgeIcon: React.ElementType;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 0,
    badge: 'Новый учебный автопарк',
    badgeIcon: Car,
    title: 'Надежные автомобили',
    highlight: 'для комфортного обучения',
    description: 'Наш автопарк укомплектован автомобилями Lada Granta, Datsun on-DO, Lada Kalina и грузовым ГАЗ-3309. Все машины оборудованы сертифицированными дублирующими педалями и системами видеофиксации для экзамена ГИБДД.',
    image: '/images/fleet/lada-granta.jpg',
    imageAlt: 'Учебный автомобиль Lada Granta автошколы ВОА',
    features: [
      'Дублирующие педали и видеокамеры ГАИ',
      'Новый ухоженный автопарк (МКПП)',
      'Регулярное ТО перед каждым выездом',
    ],
    buttonText: 'Выбрать автомобиль',
  },
  {
    id: 1,
    badge: 'Собственный учебный автодром',
    badgeIcon: MapPin,
    title: 'Просторный автодром',
    highlight: 'без очередей и помех',
    description: 'Отрабатывайте все экзаменационные упражнения на нашей закрытой асфальтированной площадке по ул. Кирова 1Д: эстакада с уклоном, параллельная парковка, заезд в бокс под 90° и змейка. Вы будете чувствовать габариты машины на 100% уверенно.',
    image: '/images/slider/autodrome.jpg',
    imageAlt: 'Учебный автодром автошколы ВОА',
    features: [
      'Собственная площадка (ул. Кирова, 1Д)',
      'Точная разметка по ГОСТ ГИБДД',
      'Эстакада с регулируемым въездом',
    ],
    buttonText: 'Записаться на автодром',
  },
  {
    id: 2,
    badge: 'Гарантия и сопровождение',
    badgeIcon: Award,
    title: 'Сдавайте экзамен в ГИБДД',
    highlight: 'на своем учебном авто',
    description: 'Мы сопровождаем каждого ученика от первого занятия до получения водительского удостоверения в ГАИ. Сдача практического экзамена проходит на том же автомобиле и автодроме, к которому вы привыкли во время учебы.',
    image: '/images/slider/exam-success.jpg',
    imageAlt: 'Успешная сдача экзамена на права в автошколе ВОА',
    features: [
      'Организованная подача машины в ГАИ',
      'Преподаватели со стажем более 15 лет',
      'Честная рассрочка 0% без переплат',
    ],
    buttonText: 'Начать обучение',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking, onScrollToPricing }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advancing slider with 6.5s interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      id="hero"
      className="relative min-h-[640px] lg:min-h-[720px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-6 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Badges Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">Набор в группу:</span> Прейскурант с 01.01.2026
          </div>

          {/* Slide Navigation Progress Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800 backdrop-blur-md">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  current === idx
                    ? 'text-slate-950 bg-amber-400 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>0{idx + 1}. {idx === 0 ? 'Автопарк' : idx === 1 ? 'Автодром' : 'Экзамен в ГАИ'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Slider Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-5"
              >
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <BadgeIcon className="w-4 h-4 text-amber-400" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                  {activeSlide.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                    {activeSlide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {activeSlide.description}
                </p>

                {/* Key Checklist Features */}
                <div className="space-y-2.5 pt-2">
                  {activeSlide.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-display font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                  >
                    <span>{activeSlide.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onScrollToPricing}
                    className="px-6 py-4 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 font-semibold text-sm transition-all"
                  >
                    Прайс и рассрочка 0%
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl p-2 sm:p-4 backdrop-blur-xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      current === 0 ? 'object-contain bg-white p-4' : 'object-cover'
                    }`}
                  />

                  {/* Overlay Gradient on photo slides */}
                  {current !== 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>ВОА Мостовской</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Control Arrows */}
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex items-center gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === i ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Предыдущий слайд"
                    className="p-2 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Следующий слайд"
                    className="p-2 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
