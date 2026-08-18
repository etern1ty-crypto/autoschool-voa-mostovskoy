import React, { useState } from 'react';
import { VEHICLES_FLEET } from '../data/autoschoolData';
import { Car, ShieldCheck, Gauge, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';

interface FleetSectionProps {
  onSelectCar: (carName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectCar }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'B' | 'C'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filteredFleet = VEHICLES_FLEET.filter((car) => {
    if (activeCategory === 'B') return car.category.includes('В');
    if (activeCategory === 'C') return car.category.includes('С');
    return true;
  });

  return (
    <section id="fleet" className="py-20 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Car className="w-3.5 h-3.5" />
              Собственный автопарк
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Автомобили автошколы ВОА
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
              Все учебные машины оснащены сертифицированными дублирующими педалями, видеорегистраторами ГИБДД и проходят регулярное техническое обслуживание перед каждым выездом.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === 'ALL'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Все авто
            </button>
            <button
              onClick={() => setActiveCategory('B')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === 'B'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Категория «В» (Легковые)
            </button>
            <button
              onClick={() => setActiveCategory('C')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === 'C'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Категория «С» (Грузовой)
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map((car) => (
            <div
              key={car.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Vehicle Image on White Clean Background */}
                <div className="relative bg-white p-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-white border border-white/10">
                    {car.transmission}
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white shadow-sm">
                    {car.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {car.description}
                  </p>

                  <div className="space-y-1.5 pb-4 mb-4 border-b border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-amber-400" />
                      <span>Двигатель: <strong className="text-white">{car.engine}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Дублирующие педали: <strong>Установлены</strong></span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {car.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCar(car.name)}
                  className="w-full py-3 rounded-xl bg-slate-800 text-white hover:bg-amber-400 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Записаться на этот авто</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
