import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ClassroomSection: React.FC = () => {
  return (
    <section id="classroom" className="py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Учебные классы ВОА
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Аудитории и изучение ПДД
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Реальные фотографии наших учебных классов в пгт. Мостовской. Обучающие стенды, макеты перекрестков и интерактивные доски.
          </p>
        </div>

        {/* Real Classroom Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Card 1 */}
          <div className="dashboard-card rounded-xl overflow-hidden border-white/10 group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/images/classroom/classroom-overview.jpg"
                alt="Учебный класс автошколы ВОА Мостовской"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-national-red" />
                <span>Учебный класс № 1</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-extrabold text-lg text-white uppercase mb-2">
                Интерактивные стенды и рабочие места
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Стенды по дорожным знакам, разметке, медицинскому обеспечению и устройству автомобиля. Каждое учебное место оборудовано для решения билетов ПДД.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dashboard-card rounded-xl overflow-hidden border-white/10 group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/images/classroom/classroom-board.jpg"
                alt="Интерактивная доска и разбор дорожных ситуаций"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-national-red" />
                <span>Разбор экзаменационных маршрутов</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-extrabold text-lg text-white uppercase mb-2">
                Разбор реальных перекрестков и ситуаций
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Преподаватели подробно разбирают сложные перекрестки и экзаменационные маршруты ГИБДД, объясняя правила простым и понятным языком.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
