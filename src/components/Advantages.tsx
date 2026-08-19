import React from 'react';
import { MapPin, Percent, DollarSign, Award, ShieldCheck, Clock } from 'lucide-react';

export const Advantages: React.FC = () => {
  const items = [
    {
      icon: MapPin,
      title: 'Собственный закрытый автодром',
      desc: 'Закрытая асфальтированная площадка (ул. Кирова, 1Д) с эстакадой и разметкой ГИБДД. Без очередей и посторонних машин.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Percent,
      title: 'Честная рассрочка 0%',
      desc: 'Внутренняя рассрочка от автошколы без банков, процентов и скрытых комиссий. Первый взнос от 10 000 ₽.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: DollarSign,
      title: 'Прозрачная стоимость',
      desc: 'Стоимость обучения фиксируется в договоре. Полная подготовка документов, закрытый автодром и организованная сдача в ГИБДД.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Award,
      title: 'Инструкторы со стажем 10+ лет',
      desc: 'Спокойные, вежливые и терпеливые мастера производственного обучения. Учим водить безопасно и без стресса.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: ShieldCheck,
      title: 'Лицензия и вычет 13%',
      desc: 'Официальное образовательное учреждение ВОА. Возможность вернуть 13% от стоимости обучения через налоговый вычет.',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      icon: Clock,
      title: 'Удобный график занятий',
      desc: 'Теория очно в утренних и вечерних группах в учебных классах. Практика на автодроме и в городе с 07:00 до 21:00.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            Почему выбирают автошколу ВОА
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Обучение вождению по государственным стандартам
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Мостовское отделение ВОА — надежная автошкола с многолетней историей и высоким процентом сдачи экзаменов в ГИБДД.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.bg}`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
