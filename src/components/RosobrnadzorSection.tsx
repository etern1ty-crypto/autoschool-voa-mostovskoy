import React, { useState } from 'react';
import { ROSOBRNADZOR_DATA } from '../data/rosobrnadzorData';
import { DRIVER_PREPARATION_TARIFFS } from '../data/autoschoolData';
import {
  Building2,
  Users,
  FileText,
  GraduationCap,
  UserCheck,
  Wrench,
  DollarSign,
  CreditCard,
  UserPlus,
  Eye,
  Globe,
  Coffee,
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

export const RosobrnadzorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('main');

  const tabs = [
    { id: 'main', num: '1', title: 'Основные сведения', icon: Building2 },
    { id: 'struct', num: '2', title: 'Структура и органы управления', icon: Users },
    { id: 'docs', num: '3', title: 'Документы и лицензии', icon: FileText },
    { id: 'education', num: '4', title: 'Образование и программы', icon: GraduationCap },
    { id: 'staff', num: '5', title: 'Руководство и педагоги', icon: UserCheck },
    { id: 'facilities', num: '6', title: 'Материально-техническая база', icon: Wrench },
    { id: 'services', num: '7', title: 'Платные образовательные услуги', icon: DollarSign },
    { id: 'finance', num: '8', title: 'Финансово-хозяйственная деятельность', icon: CreditCard },
    { id: 'vacancies', num: '9', title: 'Вакантные места для приема', icon: UserPlus },
    { id: 'accessibility', num: '10', title: 'Доступная среда', icon: Eye },
    { id: 'international', num: '11', title: 'Международное сотрудничество', icon: Globe },
    { id: 'catering', num: '12', title: 'Организация питания и охрана здоровья', icon: Coffee },
    { id: 'scholarships', num: '13', title: 'Стипендии и меры поддержки', icon: Award },
  ];

  return (
    <section
      id="rosobrnadzor"
      className="py-12 sm:py-20 bg-[#080A0F] relative border-b border-white/5"
      itemScope
      itemType="http://obrnadzor.gov.ru/microdata"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Федеральный закон № 273-ФЗ • Приказ Рособрнадзора № 831
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight" itemProp="header">
            Сведения об образовательной организации
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
            Официальный раздел раскрытия обязательной информации в соответствии с законодательством Российской Федерации в сфере образования.
          </p>
        </div>

        {/* 13-Tab Navigation & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-1 mb-2">
              Обязательные разделы:
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-national-red text-white shadow-lg shadow-national-red/30'
                      : 'bg-surface-card text-slate-300 border border-white/10 hover:border-national-red/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">
                      {tab.num}. {tab.title}
                    </span>
                  </div>
                  {isActive ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:col-span-8 dashboard-card rounded-xl p-5 sm:p-8 border-white/10">
            {/* 1. Основные сведения */}
            {activeTab === 'main' && (
              <div className="space-y-5" itemProp="commonInfo">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    1. Основные сведения
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Общая информация о наименовании, учредителе, адресах и реквизитах организации.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Полное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="orgName">
                      {ROSOBRNADZOR_DATA.common.fullName}
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Сокращенное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="shortOrgName">
                      {ROSOBRNADZOR_DATA.common.shortName}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Дата создания организации:</div>
                      <div className="text-white font-medium">1973 год (ВДОАМ — Всероссийское общество автомобилистов)</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Внесено в ЕГРЮЛ: 20 января 2003 г.</div>
                    </div>
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Учредитель:</div>
                      <div className="text-white font-medium" itemProp="founder">
                        {ROSOBRNADZOR_DATA.common.founder}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Юридический адрес:</div>
                    <div className="text-white" itemProp="legalAddress">
                      {ROSOBRNADZOR_DATA.common.legalAddress}
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-[10px] text-national-red uppercase font-bold mb-1">
                      Места осуществления образовательной деятельности:
                    </div>
                    <div className="space-y-1.5 mt-1 text-slate-200">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
                        <div>
                          <strong>Учебные классы (теория):</strong> {ROSOBRNADZOR_DATA.common.classroomAddress}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
                        <div>
                          <strong>Закрытый учебный автодром (практика):</strong> {ROSOBRNADZOR_DATA.common.autodromeAddress}{' '}
                          <span className="text-national-red font-bold">(Площадь: {ROSOBRNADZOR_DATA.common.autodromeArea})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Режим и график работы:</div>
                      <div className="text-white text-xs space-y-1" itemProp="workTime">
                        <div>{ROSOBRNADZOR_DATA.common.workSchedule}</div>
                        <div className="text-slate-400 text-[11px]">Вождение: {ROSOBRNADZOR_DATA.common.practiceSchedule}</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-surface-card border border-white/10 space-y-2">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Контакты:</div>
                        <a
                          href={`tel:${ROSOBRNADZOR_DATA.common.phoneClean}`}
                          className="text-national-red font-extrabold text-sm block hover:underline"
                          itemProp="telephone"
                        >
                          {ROSOBRNADZOR_DATA.common.phone}
                        </a>
                      </div>
                      <div className="text-[11px] text-slate-300" itemProp="e-mail">
                        Email: <strong className="text-white">{ROSOBRNADZOR_DATA.common.email}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Legal Requisites Table */}
                  <div className="p-4 rounded bg-surface-card border border-white/10 mt-2">
                    <div className="text-xs text-white font-bold uppercase mb-2">Реквизиты организации:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                      <div><span className="text-slate-400">ИНН:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.inn}</strong></div>
                      <div><span className="text-slate-400">КПП:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.kpp}</strong></div>
                      <div><span className="text-slate-400">ОГРН:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.ogrn}</strong></div>
                      <div><span className="text-slate-400">ОКПО:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.okpo}</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Структура и органы управления */}
            {activeTab === 'struct' && (
              <div className="space-y-5" itemProp="structOrgUprav">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    2. Структура и органы управления образовательной организацией
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Органы управления действуют в соответствии с законодательством РФ и Уставом ВОА.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  {ROSOBRNADZOR_DATA.structure.governingBodies.map((item, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10">
                      <div className="text-[10px] text-national-red uppercase font-bold mb-0.5">{item.status}</div>
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      {item.person && (
                        <div className="text-white font-semibold text-xs mt-1">Руководитель: {item.person}</div>
                      )}
                      {item.competence && (
                        <div className="text-slate-400 text-xs mt-1">{item.competence}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Документы */}
            {activeTab === 'docs' && (
              <div className="space-y-5" itemProp="docFiles">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    3. Документы и лицензии
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Учредительные, лицензионные и локальные нормативные акты организации.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {ROSOBRNADZOR_DATA.documentsList.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded bg-surface-card border border-white/10 hover:border-national-red transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-national-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">{doc.category}</div>
                          <div className="text-white font-semibold text-xs leading-snug group-hover:text-national-red transition-colors">
                            {doc.title}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-bold text-slate-300 shrink-0 uppercase border border-white/10">
                        {doc.fileType}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Образование */}
            {activeTab === 'education' && (
              <div className="space-y-5" itemProp="education">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    4. Образование и реализуемые программы
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Информация об уровне образования, формах и нормативных сроках обучения.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-1">
                  <div><strong>Уровень образования:</strong> Профессиональное обучение / Дополнительное образование</div>
                  <div><strong>Форма обучения:</strong> Очная (в учебных аудиториях и на автодроме)</div>
                  <div><strong>Язык образования:</strong> Русский</div>
                </div>

                <div className="space-y-3">
                  {ROSOBRNADZOR_DATA.programs.map((prog, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-national-red/20 text-national-red border border-national-red/30 text-xs font-bold">
                          {prog.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          Срок: <strong className="text-white">{prog.duration}</strong> ({prog.totalHours} ч.)
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm">{prog.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{prog.description}</p>
                      <div className="flex flex-wrap gap-4 text-[11px] text-slate-400 pt-1 border-t border-white/5">
                        <div>Теория: <strong className="text-white">{prog.theoryHours} ч.</strong></div>
                        <div>Практика: <strong className="text-white">{prog.practiceHours} ч.</strong></div>
                        <div>Форма: <strong className="text-white">{prog.form}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Руководство и педагогический состав */}
            {activeTab === 'staff' && (
              <div className="space-y-5" itemProp="pedStaff">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    5. Руководство и педагогический состав
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о квалификации, образовании и опыте работы преподавателей и инструкторов.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {ROSOBRNADZOR_DATA.staff.map((member, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-extrabold text-white text-sm sm:text-base">{member.name}</h4>
                        <span className="text-national-red font-bold text-xs">{member.role}</span>
                      </div>

                      <div className="space-y-1 text-slate-300">
                        <div>
                          <span className="text-slate-400">Образование:</span> <strong>{member.education}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400">Квалификация:</span> {member.qualification}
                        </div>
                        <div>
                          <span className="text-slate-400">Преподаваемые дисциплины:</span>
                          <ul className="list-disc list-inside mt-1 text-slate-200 space-y-0.5">
                            {member.subjects.map((sub, sIdx) => (
                              <li key={sIdx}>{sub}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-6 pt-2 border-t border-white/5 text-[11px]">
                        <div>Общий стаж: <strong className="text-white">{member.totalExperience}</strong></div>
                        <div>Педагогический стаж: <strong className="text-white">{member.teachingExperience}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Материально-техническое обеспечение */}
            {activeTab === 'facilities' && (
              <div className="space-y-5" itemProp="materEnvir">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    6. Материально-техническое обеспечение и оснащенность
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения об аудиториях, автодроме, учебных ТС и средствах обучения.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">1. Оборудованные учебные кабинеты:</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">пгт. Мостовской, ул. Красная, д. 88</strong>.
                    </p>
                    <p className="text-slate-400">
                      Оснащение: мультимедийные проекторы, электрифицированные стенды по ПДД РФ, учебные тренажеры первой помощи «Максим», наглядные макеты узлов, деталей и механизмов ТС, специализированные рабочие места для решения билетов.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">2. Закрытый учебный автодром:</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">пгт. Мостовской, ул. Кирова, д. 1Д</strong>.
                    </p>
                    <p className="text-slate-400">
                      Площадь: <strong className="text-national-red font-bold">2 га (20 000 кв. м)</strong>. Асфальтобетонное покрытие, глухое ограждение по периметру, эстакада с наклонным участком (продольный уклон по ГОСТ), освещение для вечерних занятий, комплект переносных дорожных знаков и стоек для отработки упражнений.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">3. Учебный транспортный парк:</div>
                    <p className="text-slate-400">
                      Легковые автомобили Lada Granta FL (2023 г.), Datsun on-DO (2022 г.), Lada Kalina (2021 г.), грузовой автомобиль ГАЗ-3309 (2020 г., без гидроусилителя), учебные мотоциклы. Все ТС оснащены сертифицированными дублирующими педалями и комплексами видеорегистрации ГИБДД.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Платные образовательные услуги */}
            {activeTab === 'services' && (
              <div className="space-y-5" itemProp="paidEduServices">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    7. Платные образовательные услуги
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Положение об оказании платных услуг и утвержденный прейскурант от 01.01.2026 г.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  {DRIVER_PREPARATION_TARIFFS.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between p-3.5 rounded bg-surface-card border border-white/10"
                    >
                      <div>
                        <div className="font-bold text-white text-sm">{t.title}</div>
                        <div className="text-[11px] text-slate-400">{t.duration} • {t.theoryHours} + {t.practiceHours}</div>
                      </div>
                      <span className="font-extrabold text-national-red text-base">
                        {t.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Финансово-хозяйственная деятельность */}
            {activeTab === 'finance' && (
              <div className="space-y-5" itemProp="finances">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    8. Финансово-хозяйственная деятельность
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Финансовое обеспечение образовательной деятельности осуществляется исключительно по договорам об образовании за счет средств физических и (или) юридических лиц.
                  </p>
                  <p className="text-slate-400">
                    Бюджетные ассигнования федерального бюджета, бюджетов субъектов РФ и местных бюджетов не выделяются.
                  </p>
                </div>
              </div>
            )}

            {/* 9. Вакантные места для приема */}
            {activeTab === 'vacancies' && (
              <div className="space-y-5" itemProp="vacantSpots">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    9. Вакантные места для приема (перевода) обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Набор в учебные группы по всем категориям («А», «В», «С», переподготовка) ведется на постоянной круглогодичной основе.
                  </p>
                  <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                    Вакантные места для приема по договорам об образовании за счет средств физических/юридических лиц: имеются во все формируемые группы.
                  </div>
                </div>
              </div>
            )}

            {/* 10. Доступная среда */}
            {activeTab === 'accessibility' && (
              <div className="space-y-5" itemProp="accessibleEnvironment">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    10. Доступная среда
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Официальный сайт автошколы адаптирован для лиц с нарушениями зрения в соответствии с ГОСТ Р 52872-2012 «Интернет-ресурсы. Требования доступности для инвалидов по зрению». Кнопка переключения расположена в верхней панели сайта.
                  </p>
                  <p className="text-slate-400">
                    Обучение лиц с ограниченными возможностями здоровья осуществляется при наличии соответствующего медицинского заключения об отсутствии противопоказаний к управлению ТС.
                  </p>
                </div>
              </div>
            )}

            {/* 11. Международное сотрудничество */}
            {activeTab === 'international' && (
              <div className="space-y-5" itemProp="internationalCoop">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    11. Международное сотрудничество
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300">
                  Заключенных и планируемых к заключению договоров с иностранными и (или) международными организациями по вопросам образования и науки организация не имеет.
                </div>
              </div>
            )}

            {/* 12. Организация питания и охрана здоровья */}
            {activeTab === 'catering' && (
              <div className="space-y-5" itemProp="cateringAndHealth">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    12. Организация питания и охрана здоровья обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    В соответствии с расписанием занятий (не более 4 академических часов в день) организация горячего питания не предусмотрена. В учебных классах организован питьевой режим (бутилированная вода).
                  </p>
                  <p className="text-slate-400">
                    Охрана здоровья обучающихся включает соблюдение санитарно-гигиенических норм, регулярное проветривание аудиторий, наличие аптечек первой помощи и инструктаж по технике безопасности.
                  </p>
                </div>
              </div>
            )}

            {/* 13. Стипендии и меры поддержки */}
            {activeTab === 'scholarships' && (
              <div className="space-y-5" itemProp="scholarships">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    13. Стипендии и меры поддержки обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Выплата стипендий и предоставление общежития, интерната или иных мер социальной поддержки обучающимся локальными нормативными актами автошколы не предусмотрены.
                  </p>
                  <p className="text-slate-400">
                    Автошкола предоставляет внутреннюю беспроцентную рассрочку оплаты обучения 0% на весь период курса.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
