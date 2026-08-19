import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VEHICLES_FLEET } from '../data/autoschoolData';
import { Car, ArrowRight } from 'lucide-react';

interface FleetShowroomProps {
  onSelectCar: (carName: string) => void;
}

export const FleetShowroom: React.FC<FleetShowroomProps> = ({ onSelectCar }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCar = VEHICLES_FLEET[selectedIdx];

  return (
    <section id="fleet" className="max-w-7xl mx-auto px-4 py-8 sm:py-16 relative">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-white/10 text-xs font-bold uppercase tracking-wider text-national-red mb-2 sm:mb-3">
          <Car className="w-3.5 h-3.5" />
          Учебный автопарк ВОА
        </div>
        <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">
          Наш Автопарк
        </h2>
        <p className="text-xs sm:text-base text-slate-400 max-w-2xl mx-auto">
          Ухоженные, технически исправные автомобили с сертифицированными дублирующими педалями и видеорегистрацией ГИБДД.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
        {/* Car Specs Card */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="dashboard-card p-5 sm:p-6 rounded-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-3.5 sm:space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-national-red text-xs uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-national-red animate-pulse" />
                    {activeCar.category}
                  </p>
                  <span className="px-2.5 py-0.5 rounded bg-national-red/20 text-national-red text-xs font-extrabold border border-national-red/30">
                    {activeCar.transmission}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
                  {activeCar.name}
                </h3>

                <div className="tech-line" />

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-slate-400 uppercase text-xs mb-0.5">Двигатель</p>
                    <p className="text-white font-bold">{activeCar.engine}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase text-xs mb-0.5">Оснащение</p>
                    <p className="text-white font-bold">Дубль-педали</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCar.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {activeCar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-national-red" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectCar(activeCar.name)}
                  className="w-full min-h-[44px] py-3.5 rounded-sm bg-national-red text-white font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-national-red/30"
                >
                  <span>Выбрать {activeCar.name} для обучения</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Center Stage: Compact Car Image */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative flex items-center justify-center p-2 sm:p-4 min-h-[220px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden">
          {/* Ambient Red Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-national-red/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

          {/* Animated Car Image */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCar.id}
                src={activeCar.image}
                alt={activeCar.name}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95, x: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.03, x: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg sm:max-w-xl object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Selector */}
      <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 px-1 snap-x snap-mandatory">
        {VEHICLES_FLEET.map((car, idx) => (
          <button
            key={car.id}
            onClick={() => setSelectedIdx(idx)}
            aria-label={`Выбрать автомобиль ${car.name}`}
            className={`tilt-card relative w-28 sm:w-40 h-20 sm:h-24 rounded-lg overflow-hidden shrink-0 group cursor-pointer focus:outline-none transition-all p-1.5 sm:p-2 flex flex-col justify-between snap-center ${
              selectedIdx === idx
                ? 'border-2 border-national-red shadow-[0_0_15px_rgba(227,30,36,0.4)] bg-surface-card scale-105'
                : 'border border-white/10 bg-surface-card/60 hover:border-national-red/50'
            }`}
          >
            <div className="w-full h-11 sm:h-14 flex items-center justify-center">
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between w-full pt-1 border-t border-white/5">
              <span className={`text-xs uppercase font-bold tracking-wider ${
                selectedIdx === idx ? 'text-national-red' : 'text-slate-300'
              }`}>
                {car.name.split(' ')[0]}
              </span>
              <span className="text-xs text-slate-400 font-semibold uppercase">{car.transmission}</span>
            </div>

            {selectedIdx === idx && (
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-national-red rounded-full shadow-[0_0_5px_#E31E24]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
