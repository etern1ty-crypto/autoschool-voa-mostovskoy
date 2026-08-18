import React, { useState } from 'react';
import { SCHOOL_INFO, DRIVER_PREPARATION_TARIFFS } from '../data/autoschoolData';
import { FileText, Users, Building, DollarSign, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export const RosobrnadzorSection: React.FC = () => {
  const [openTab, setOpenTab] = useState<string>('main');

  const tabs = [
    { id: 'main', title: '1. Основные сведения', icon: Building },
    { id: 'struct', title: '2. Структура и органы управления', icon: Users },
    { id: 'docs', title: '3. Документы и Лицензии', icon: FileText },
    { id: 'education', title: '4. Образование и программы', icon: BookOpen },
    { id: 'staff', title: '5. Руководство и педагоги', icon: Users },
    { id: 'facilities', title: '6. Материально-техническая база', icon: Building },
    { id: 'services', title: '7. Платные образовательные услуги', icon: DollarSign },
  ];

  return (
    <section
      id="rosobrnadzor"
      className="py-20 bg-[#080A0F] relative border-b border-white/5"
      itemScope
      itemType="http://obrnadzor.gov.ru/microdata"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header (Надпись "Приказ Рособрнадзора № 831" убрана по ТЗ) */}
        <div className="mb-12">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight" itemProp="header">
            Сведения об образовательной организации
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-3xl">
            Официальный раздел раскрытия информации в соответствии с требованиями Федерального закона «Об образовании в РФ» № 273-ФЗ.
          </p>
        </div>

        {/* Tab Selector & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab Buttons */}
          <div className="lg:col-span-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setOpenTab(tab.id)}
                  className={`w-full text-left p-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition flex items-center justify-between gap-3 ${
                    openTab === tab.id
                      ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                      : 'bg-surface-card text-slate-300 border border-white/10 hover:border-national-red/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.title}</span>
                  </div>
                  {openTab === tab.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 dashboard-card rounded-xl p-6 sm:p-8 border-white/10">
            {/* 1. Основные сведения */}
            {openTab === 'main' && (
              <div className="space-y-5" itemProp="commonInfo">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Основные сведения
                </h3>
                <div className="grid grid-cols-1 gap-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Полное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="orgName">{SCHOOL_INFO.name}</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Сокращенное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="shortOrgName">{SCHOOL_INFO.shortName}</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Место нахождения:</div>
                    <div className="text-white" itemProp="address">{SCHOOL_INFO.primaryAddress}</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Режим и график работы:</div>
                    <div className="text-white" itemProp="workTime">{SCHOOL_INFO.workHours}</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10 flex flex-wrap gap-6">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1">Контактный телефон:</div>
                      <div className="text-national-red font-bold text-sm" itemProp="telephone">{SCHOOL_INFO.phone}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1">Электронная почта:</div>
                      <div className="text-national-red font-bold text-sm" itemProp="e-mail">{SCHOOL_INFO.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Структура */}
            {openTab === 'struct' && (
              <div className="space-y-5" itemProp="structOrgUprav">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Структура и органы управления
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Управление Автошколой осуществляется в соответствии с законодательством Российской Федерации и Уставом Общероссийской общественной организации «Всероссийское общество автомобилистов» (ВОА).
                </p>
                <div className="p-4 rounded bg-surface-card border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase mb-1">Орган управления:</div>
                  <div className="font-bold text-white text-sm">Совет Мостовского районного отделения ВОА</div>
                  <div className="text-xs text-slate-400 mt-1">Руководитель отделения / Председатель: действует на основании Устава ВОА</div>
                </div>
              </div>
            )}

            {/* 3. Документы */}
            {openTab === 'docs' && (
              <div className="space-y-4" itemProp="docFiles">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Документы и нормативные акты
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-national-red" />
                      <div>
                        <div className="font-bold text-white" itemProp="license">{SCHOOL_INFO.license}</div>
                        <div className="text-[10px] text-slate-400">Бессрочная лицензия на образовательную деятельность</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Действует</span>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-national-red" />
                      <div>
                        <div className="font-bold text-white" itemProp="gibddConclusion">{SCHOOL_INFO.gibddConclusion}</div>
                        <div className="text-[10px] text-slate-400">Заключение ГИБДД о соответствии учебно-материальной базы</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Действует</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Образование */}
            {openTab === 'education' && (
              <div className="space-y-4" itemProp="education">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Образовательные программы
                </h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="font-bold text-white">Программа подготовки водителей ТС категории «В» (Легковые авто)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Очная форма, язык: русский. Объем: 134ч теории + 56ч практики.</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="font-bold text-white">Программа подготовки водителей ТС категории «А» (Мотоциклы)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Очная форма. Объем: 130ч теории + 18ч практики.</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="font-bold text-white">Программа подготовки водителей ТС категории «С» (Грузовые автомобили ГАЗ-3309)</div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Педагоги */}
            {openTab === 'staff' && (
              <div className="space-y-4" itemProp="pedStaff">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Руководство и педагогический состав
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Все преподаватели теории имеют высшее профессиональное педагогическое образование. Инструкторы вождения аттестованы ГИБДД и имеют водительский стаж от 10 до 25 лет.
                </p>
              </div>
            )}

            {/* 6. База */}
            {openTab === 'facilities' && (
              <div className="space-y-4" itemProp="materEnvir">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Материально-техническое обеспечение
                </h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="font-bold text-white">Учебные классы:</div>
                    <div className="text-[11px] text-slate-400 mt-1">Мультимедийные проекторы, стенды по ПДД, тренажеры «Максим», макеты узлов и деталей ТС.</div>
                  </div>
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="font-bold text-white">Закрытый учебный автодром:</div>
                    <div className="text-[11px] text-slate-400 mt-1">Площадь более 0.3 га, асфальтобетонное покрытие, ограждение по периметру, эстакада с уклоном.</div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Платные услуги */}
            {openTab === 'services' && (
              <div className="space-y-4" itemProp="paidEduServices">
                <h3 className="font-extrabold text-xl text-white uppercase pb-2 border-b border-white/5">
                  Прейскурант платных образовательных услуг с 01.01.2026 г.
                </h3>
                <div className="space-y-2 text-xs">
                  {DRIVER_PREPARATION_TARIFFS.map((t) => (
                    <div key={t.id} className="flex items-center justify-between p-3 rounded bg-surface-card border border-white/10">
                      <span className="font-bold text-white">{t.title}</span>
                      <span className="font-extrabold text-national-red text-sm">{t.price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
