import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DRIVER_PREPARATION_TARIFFS,
  RETRAINING_PROGRAMS,
  PRACTICE_SERVICES,
} from '../data/autoschoolData';
import { Check, Clock, ArrowRight, Calculator, FileText, AlertCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectTariff: (tariffName: string, price: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTariff }) => {
  const [activeTab, setActiveTab] = useState<'prep' | 'retrain' | 'practice'>('prep');

  // Installment Calculator State
  const [calcCategory, setCalcCategory] = useState<string>('cat-b');
  const [calcMonths, setCalcMonths] = useState<number>(3);
  const [initialPayment, setInitialPayment] = useState<number>(15000);

  const selectedCalcTariff =
    DRIVER_PREPARATION_TARIFFS.find((t) => t.id === calcCategory) || DRIVER_PREPARATION_TARIFFS[1];
  const remainingAmount = Math.max(0, selectedCalcTariff.price - initialPayment);
  const monthlyPayment = Math.round(remainingAmount / calcMonths);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section id="pricing" className="py-10 sm:py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-extrabold uppercase tracking-wider mb-2 sm:mb-3">
            <FileText className="w-3.5 h-3.5" />
            Программы обучения
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Стоимость обучения
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-1.5 sm:mt-2">
            Стоимость образовательных услуг утверждается приказом руководителя и фиксируется в договоре. Оплата теоретического и практического курса, возможность внесения платежей частями.
          </p>

          {/* GSM / Fuel disclosure banner */}
          <div className="mt-4 p-3 rounded-lg bg-surface-card border border-white/10 text-xs text-slate-300 flex items-center justify-center gap-2 max-w-xl mx-auto text-left">
            <AlertCircle className="w-4 h-4 text-national-red shrink-0" />
            <span>
              Расходы на горюче-смазочные материалы (ГСМ) оплачиваются отдельно в соответствии с условиями договора об оказании образовательных услуг.
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8 p-1 bg-surface-card rounded-lg border border-white/10 max-w-lg mx-auto">
            <button
              onClick={() => setActiveTab('prep')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center cursor-pointer ${
                activeTab === 'prep'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Подготовка
            </button>
            <button
              onClick={() => setActiveTab('retrain')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center cursor-pointer ${
                activeTab === 'retrain'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Переподготовка
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex-1 py-3 px-3 rounded text-xs uppercase font-extrabold tracking-wider transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Доп. вождение
            </button>
          </div>
        </div>

        {/* Animated Tabs */}
        <AnimatePresence mode="wait">
          {activeTab === 'prep' && (
            <motion.div
              key="prep"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {DRIVER_PREPARATION_TARIFFS.map((tariff) => (
                <div
                  key={tariff.id}
                  className={`dashboard-card rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                    tariff.popular
                      ? 'border-national-red shadow-[0_0_20px_rgba(227,30,36,0.25)]'
                      : 'border-white/10 hover:border-national-red/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-extrabold text-lg sm:text-xl text-white uppercase tracking-tight">
                        {tariff.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded bg-surface-card text-national-red text-xs font-bold border border-national-red/30">
                        {tariff.transmission}
                      </span>
                    </div>

                    <div className="font-extrabold text-2xl sm:text-3xl text-white mb-2 sm:mb-3">
                      {formatPrice(tariff.price)}
                    </div>

                    <div className="tech-line mb-3 sm:mb-4" />

                    <div className="space-y-1 text-xs text-slate-400 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/5">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-national-red" />
                        <span>Срок обучения: <strong>{tariff.duration}</strong></span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {tariff.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(tariff.title, tariff.price)}
                    className={`w-full min-h-[44px] py-3.5 rounded-sm font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tariff.popular
                        ? 'bg-national-red text-white hover:bg-red-700 shadow-lg shadow-national-red/40'
                        : 'bg-surface-card text-white hover:bg-national-red border border-white/10'
                    }`}
                  >
                    <span>Узнать порядок записи</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'retrain' && (
            <motion.div
              key="retrain"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {RETRAINING_PROGRAMS.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card rounded-xl p-5 sm:p-6 border-white/10 hover:border-national-red/50 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <div className="font-extrabold text-2xl sm:text-3xl text-national-red mb-2 sm:mb-3">
                      {formatPrice(item.price)}
                    </div>
                    <div className="tech-line mb-3 sm:mb-4" />
                    <div className="text-xs text-slate-400 mb-3 pb-2.5 border-b border-white/5 space-y-1">
                      <div>Срок: <strong className="text-white">{item.duration}</strong></div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(item.title, item.price)}
                    className="w-full min-h-[44px] py-3.5 rounded-sm bg-surface-card text-white hover:bg-national-red font-bold text-xs uppercase tracking-wider border border-white/10 transition flex items-center justify-center cursor-pointer"
                  >
                    Узнать порядок записи
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {PRACTICE_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card rounded-xl p-5 sm:p-6 border-white/10 hover:border-national-red/50 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white uppercase tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs text-slate-400 mb-2">{item.vehicleType}</div>

                    <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                      <span className="font-extrabold text-2xl sm:text-3xl text-national-red">
                        {formatPrice(item.pricePerHour)}
                      </span>
                      <span className="text-slate-400 text-xs">/ 1 час</span>
                    </div>

                    <div className="tech-line mb-3 sm:mb-4" />

                    <ul className="space-y-2 mb-5">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTariff(`Доп. вождение: ${item.title}`, item.pricePerHour)}
                    className="w-full min-h-[44px] py-3.5 rounded-sm bg-surface-card text-white hover:bg-national-red font-bold text-xs uppercase tracking-wider border border-white/10 transition flex items-center justify-center cursor-pointer"
                  >
                    Записаться на занятие
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Installment Calculator */}
        <div className="mt-8 sm:mt-12 dashboard-card rounded-2xl p-5 sm:p-8 border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                Поэтапная оплата курса
              </div>
              <h3 className="font-extrabold text-xl sm:text-3xl text-white uppercase tracking-tight">
                Оплата обучения частями
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Поэтапная оплата вносится в кассу автошколы ВОА равными долями в период прохождения курса.
              </p>

              <div className="space-y-3.5 sm:space-y-4 pt-1">
                <div>
                  <label htmlFor="calc-category" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Программа обучения:
                  </label>
                  <select
                    id="calc-category"
                    value={calcCategory}
                    onChange={(e) => setCalcCategory(e.target.value)}
                    className="w-full px-3.5 py-3 rounded bg-surface-card border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-national-red transition-colors"
                  >
                    {DRIVER_PREPARATION_TARIFFS.map((t) => (
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
                    max={selectedCalcTariff.price - 10000}
                    step="5000"
                    value={initialPayment}
                    onChange={(e) => setInitialPayment(Number(e.target.value))}
                    aria-label="Размер первого взноса"
                    className="w-full accent-national-red h-2 bg-surface-card rounded cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Срок поэтапной оплаты:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setCalcMonths(m)}
                        className={`min-h-[44px] py-2.5 rounded text-xs font-bold border uppercase transition-all duration-200 flex items-center justify-center cursor-pointer ${
                          calcMonths === m
                            ? 'bg-national-red text-white border-national-red shadow-[0_0_10px_rgba(227,30,36,0.3)] scale-[1.02]'
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
            <div className="lg:col-span-6 bg-surface-card p-5 sm:p-6 rounded-xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-extrabold">
                  Примерный расчет взносов в кассу
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Стоимость обучения:</span>
                    <motion.span
                      key={selectedCalcTariff.price}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-bold text-white"
                    >
                      {formatPrice(selectedCalcTariff.price)}
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
                    <span className="text-slate-400">Остаток:</span>
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

                <div className="tech-line my-3" />

                <div className="text-center py-1">
                  <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Ежемесячный взнос в кассу:</div>
                  <motion.div
                    key={`${monthlyPayment}-${calcMonths}-${calcCategory}`}
                    initial={{ opacity: 0, scale: 0.9, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-black text-3xl sm:text-4xl text-white tracking-tight"
                  >
                    {formatPrice(monthlyPayment)}
                    <span className="text-xs text-slate-400 font-normal"> / месяц</span>
                  </motion.div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 mt-4">
                <button
                  onClick={() =>
                    onSelectTariff(
                      `${selectedCalcTariff.title}`,
                      selectedCalcTariff.price
                    )
                  }
                  className="w-full min-h-[44px] py-3.5 rounded-sm bg-national-red hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-national-red/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Узнать порядок записи</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
