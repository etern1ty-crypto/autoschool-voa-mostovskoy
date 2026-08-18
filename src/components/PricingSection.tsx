import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCrm } from '../context/CrmContext';
import { Check, Clock, ArrowRight, Calculator, Percent } from 'lucide-react';

interface PricingSectionProps {
  onSelectTariff: (tariffName: string, price: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTariff }) => {
  const { tariffs, retraining, practice } = useCrm();
  const [activeTab, setActiveTab] = useState<'prep' | 'retrain' | 'practice'>('prep');

  // 0% Installment Calculator State
  const [calcCategory, setCalcCategory] = useState<string>('cat-b');
  const [calcMonths, setCalcMonths] = useState<number>(3);
  const [initialPayment, setInitialPayment] = useState<number>(15000);

  const selectedCalcTariff =
    tariffs.find((t) => t.id === calcCategory) || tariffs[1] || tariffs[0];
  const remainingAmount = Math.max(0, (selectedCalcTariff?.price || 70000) - initialPayment);
  const monthlyPayment = Math.round(remainingAmount / calcMonths);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section id="pricing" className="py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header (Без "2026") */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-extrabold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            Официальный прейскурант
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Стоимость обучения
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Фиксированная цена в договоре. Полный курс теории, практика на автодроме и в городе, расходы на ГСМ (бензин) включены без скрытых доплат.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1 bg-surface-card rounded-lg border border-white/10 max-w-lg mx-auto">
            <button
              onClick={() => setActiveTab('prep')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all relative ${
                activeTab === 'prep'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Подготовка (А, В, С)
            </button>
            <button
              onClick={() => setActiveTab('retrain')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all relative ${
                activeTab === 'retrain'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Переподготовка
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all relative ${
                activeTab === 'practice'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Доп. вождение
            </button>
          </div>
        </div>

        {/* Animated Tabs Container with Framer Motion */}
        <AnimatePresence mode="wait">
          {activeTab === 'prep' && (
            <motion.div
              key="prep"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {tariffs.map((tariff) => (
                <div
                  key={tariff.id}
                  className={`dashboard-card rounded-xl p-6 flex flex-col justify-between transition-all group ${
                    tariff.popular
                      ? 'border-national-red shadow-[0_0_25px_rgba(227,30,36,0.25)] scale-[1.02]'
                      : 'border-white/10 hover:border-national-red/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-extrabold text-xl text-white uppercase tracking-tight">
                        {tariff.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded bg-surface-card text-national-red text-[11px] font-bold border border-national-red/30">
                        {tariff.transmission}
                      </span>
                    </div>

                    <div className="font-extrabold text-3xl text-white mb-3">
                      {formatPrice(tariff.price)}
                    </div>

                    <div className="tech-line mb-4" />

                    <div className="space-y-1 text-xs text-slate-400 pb-3 mb-3 border-b border-white/5">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-national-red" />
                        <span>Срок обучения: <strong>{tariff.duration}</strong></span>
                      </div>
                      <div className="text-slate-300">{tariff.practiceHours}</div>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {tariff.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(tariff.title, tariff.price)}
                    className={`w-full py-3.5 rounded-sm font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      tariff.popular
                        ? 'bg-national-red text-white hover:bg-red-700 shadow-lg shadow-national-red/40'
                        : 'bg-surface-card text-white hover:bg-national-red border border-white/10'
                    }`}
                  >
                    <span>Записаться в группу</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'retrain' && (
            <motion.div
              key="retrain"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {retraining.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card rounded-xl p-6 border-white/10 hover:border-national-red/50 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-extrabold text-xl text-white uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <div className="font-extrabold text-3xl text-national-red mb-3">
                      {formatPrice(item.price)}
                    </div>
                    <div className="tech-line mb-4" />
                    <div className="text-xs text-slate-400 mb-4 pb-3 border-b border-white/5 space-y-1">
                      <div>Срок: <strong className="text-white">{item.duration}</strong></div>
                      <div>Объем: <strong className="text-white">{item.hours}</strong></div>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(item.title, item.price)}
                    className="w-full py-3.5 rounded-sm bg-surface-card text-white hover:bg-national-red font-bold text-xs uppercase tracking-wider border border-white/10 transition"
                  >
                    Подать заявку
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {practice.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card rounded-xl p-6 border-white/10 hover:border-national-red/50 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-extrabold text-xl text-white uppercase tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs text-slate-400 mb-3">{item.vehicleType}</div>

                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-extrabold text-3xl text-national-red">
                        {formatPrice(item.pricePerHour)}
                      </span>
                      <span className="text-slate-400 text-xs">/ 1 час (60 мин)</span>
                    </div>

                    <div className="tech-line mb-4" />

                    <ul className="space-y-2.5 mb-6">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(`Доп. вождение: ${item.title}`, item.pricePerHour)}
                    className="w-full py-3.5 rounded-sm bg-surface-card text-white hover:bg-national-red font-bold text-xs uppercase tracking-wider border border-white/10 transition"
                  >
                    Записаться на занятие
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 0% Installment Calculator */}
        <div className="mt-16 dashboard-card rounded-2xl p-6 sm:p-10 border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                Рассрочка 0% без банков
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Учитесь сейчас — платите частями
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Внутренняя честная рассрочка от автошколы ВОА. Без процентов, переплат и скрытых комиссий. Оплачивайте равными частями во время обучения.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Категория обучения:
                  </label>
                  <select
                    value={calcCategory}
                    onChange={(e) => setCalcCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-national-red transition-colors"
                  >
                    {tariffs.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} — {formatPrice(t.price)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-2 uppercase">
                    <span>Первый взнос:</span>
                    <motion.span
                      key={initialPayment}
                      initial={{ scale: 1.15, color: '#FFD700' }}
                      animate={{ scale: 1, color: '#E31E24' }}
                      transition={{ duration: 0.2 }}
                      className="font-black"
                    >
                      {formatPrice(initialPayment)}
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max={Math.max(15000, (selectedCalcTariff?.price || 70000) - 10000)}
                    step="5000"
                    value={initialPayment}
                    onChange={(e) => setInitialPayment(Number(e.target.value))}
                    className="w-full accent-national-red h-2 bg-surface-card rounded cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Срок рассрочки:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setCalcMonths(m)}
                        className={`py-2.5 rounded text-xs font-bold border uppercase transition-all duration-200 ${
                          calcMonths === m
                            ? 'bg-national-red text-white border-national-red shadow-[0_0_10px_rgba(227,30,36,0.3)] scale-[1.03]'
                            : 'bg-surface-card border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {m} месяца
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Output */}
            <div className="lg:col-span-6 bg-surface-card p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-extrabold">
                  Расчет ежемесячного платежа
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Полная стоимость курса:</span>
                    <motion.span
                      key={selectedCalcTariff?.price}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-bold text-white"
                    >
                      {formatPrice(selectedCalcTariff?.price || 70000)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Первый взнос:</span>
                    <motion.span
                      key={initialPayment}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-bold text-national-red"
                    >
                      {formatPrice(initialPayment)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Остаток к оплате:</span>
                    <motion.span
                      key={remainingAmount}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-bold text-white"
                    >
                      {formatPrice(remainingAmount)}
                    </motion.span>
                  </div>
                </div>

                <div className="tech-line my-4" />

                <div className="text-center py-2">
                  <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Платеж в месяц (0% переплат):</div>
                  <motion.div
                    key={`${monthlyPayment}-${calcMonths}-${calcCategory}-${selectedCalcTariff?.price}`}
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="font-extrabold text-4xl text-white"
                  >
                    ~ {formatPrice(monthlyPayment)} <span className="text-sm font-normal text-slate-400">/ мес</span>
                  </motion.div>
                </div>
              </div>

              <button
                onClick={() =>
                  onSelectTariff(`${selectedCalcTariff?.title || 'Обучение'} (Рассрочка)`, selectedCalcTariff?.price || 70000)
                }
                className="w-full py-4 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition shadow-lg shadow-national-red/30 mt-6 active:scale-[0.98]"
              >
                Оформить обучение в рассрочку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
