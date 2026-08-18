import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VEHICLES_FLEET } from '../data/autoschoolData';
import { ShieldCheck, CheckCircle2, Car, ArrowRight } from 'lucide-react';

interface FleetShowroomProps {
  onSelectCar: (carName: string) => void;
}

export const FleetShowroom: React.FC<FleetShowroomProps> = ({ onSelectCar }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCar = VEHICLES_FLEET[selectedIdx];

  return (
    <section id="fleet" className="max-w-7xl mx-auto px-4 py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-white/10 text-xs font-bold uppercase tracking-wider text-national-red mb-3">
          <Car className="w-3.5 h-3.5" />
          Учебный автопарк ВОА
        </div>
        <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-3">
          Наш Автопарк
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Ухоженные, технически исправные автомобили с дублирующими педалями, кондиционерами и сертификацией ГИБДД.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        {/* Left Column: Fixed Safety Card + Animated Car Specs Card */}
        <div className="order-2 lg:order-1 lg:col-span-4 space-y-6">
          {/* Static Safety Card (не меняется) */}
          <div className="dashboard-card p-6 rounded-xl group">
            <div className="flex items-center gap-2.5 mb-4">
              <ShieldCheck className="w-5 h-5 text-national-red" />
              <h3 className="font-bold text-white text-base tracking-wide uppercase">Безопасность</h3>
            </div>
            <div className="tech-line mb-4" />
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                <span>Сертифицированные дублирующие педали тормоза и сцепления</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                <span>Аудио- и видеорегистрация для сдачи экзамена в ГИБДД</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                <span>Регулярное техобслуживание перед каждым выездом</span>
              </li>
            </ul>
          </div>

          {/* Animated Active Car Specs Card */}
          <div className="dashboard-card p-6 rounded-xl relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-national-red text-xs uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-national-red animate-pulse" />
                    {activeCar.category}
                  </p>
                  <span className="px-2 py-0.5 rounded bg-national-red/20 text-national-red text-[11px] font-extrabold border border-national-red/30">
                    {activeCar.transmission}
                  </span>
                </div>

                <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight">
                  {activeCar.name}
                </h3>

                <div className="tech-line" />

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-slate-400 uppercase text-[10px] mb-1">Двигатель</p>
                    <p className="text-white font-bold">{activeCar.engine}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase text-[10px] mb-1">Оснащение</p>
                    <p className="text-white font-bold">Дубль-педали</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCar.description}
                </p>

                <button
                  onClick={() => onSelectCar(activeCar.name)}
                  className="w-full py-3 rounded-sm bg-national-red text-white font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-national-red/30"
                >
                  <span>Выбрать для обучения</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Center Stage: Animated Main Car Image */}
        <div className="order-1 lg:order-2 lg:col-span-8 relative flex items-center justify-center p-4 min-h-[380px] sm:min-h-[460px] overflow-hidden">
          {/* Ambient Red Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-national-red/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

          {/* Animated Car Image with smooth slide & scale transition */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCar.id}
                src={activeCar.image}
                alt={activeCar.name}
                initial={{ opacity: 0, scale: 0.94, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.04, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-2xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Selector (Tilt Cards) */}
      <div className="flex justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 px-2">
        {VEHICLES_FLEET.map((car, idx) => (
          <button
            key={car.id}
            onClick={() => setSelectedIdx(idx)}
            className={`tilt-card relative w-36 sm:w-44 h-24 sm:h-28 rounded-lg overflow-hidden shrink-0 group cursor-pointer focus:outline-none transition-all p-2 flex flex-col justify-between ${
              selectedIdx === idx
                ? 'border-2 border-national-red shadow-[0_0_20px_rgba(227,30,36,0.4)] bg-surface-card scale-105'
                : 'border border-white/10 bg-surface-card/60 hover:border-national-red/50'
            }`}
          >
            <div className="w-full h-14 sm:h-16 flex items-center justify-center">
              <img
                src={car.image}
                alt={car.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between w-full pt-1 border-t border-white/5">
              <span className={`text-[11px] uppercase font-bold tracking-wider ${
                selectedIdx === idx ? 'text-national-red' : 'text-slate-300'
              }`}>
                {car.name.split(' ')[0]}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">{car.transmission}</span>
            </div>

            {selectedIdx === idx && (
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-national-red rounded-full shadow-[0_0_6px_#E31E24]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
