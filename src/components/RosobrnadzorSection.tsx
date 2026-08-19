import React, { useState } from 'react';
import { ROSOBRNADZOR_DATA } from '../data/rosobrnadzorData';
import { DRIVER_PREPARATION_TARIFFS } from '../data/autoschoolData';
import {
  Building2,
  Users,
  FileText,
  GraduationCap,
  UserCheck,
  Award,
  Wrench,
  DollarSign,
  CreditCard,
  UserPlus,
  Globe,
  Coffee,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  MapPin,
  User,
} from 'lucide-react';

export const RosobrnadzorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('main');

  // Exact 14 subsections according to Order No. 1493 (Items 6-20)
  const tabs = [
    { id: 'main', num: '1', title: 'Основные сведения', icon: Building2 },
    { id: 'struct', num: '2', title: 'Структура и органы управления', icon: Users },
    { id: 'docs', num: '3', title: 'Документы', icon: FileText },
    { id: 'education', num: '4', title: 'Образование', icon: GraduationCap },
    { id: 'leadership', num: '5', title: 'Руководство', icon: UserCheck },
    { id: 'ped_staff', num: '6', title: 'Педагогический состав', icon: User },
    { id: 'facilities', num: '7', title: 'МТО и доступная среда', icon: Wrench },
    { id: 'paid_services', num: '8', title: 'Платные образовательные услуги', icon: DollarSign },
    { id: 'finance', num: '9', title: 'Финансово-хозяйственная деятельность', icon: CreditCard },
    { id: 'vacancies', num: '10', title: 'Вакантные места для приема (перевода)', icon: UserPlus },
    { id: 'scholarships', num: '11', title: 'Стипендии и меры поддержки', icon: Award },
    { id: 'international', num: '12', title: 'Международное сотрудничество', icon: Globe },
    { id: 'catering', num: '13', title: 'Организация питания в ОО', icon: Coffee },
    { id: 'standards', num: '14', title: 'Образовательные стандарты и требования', icon: BookOpen },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Федеральный закон № 273-ФЗ • Приказ Рособрнадзора № 1493
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight" itemProp="header">
            Сведения об образовательной организации
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
            Официальный раздел раскрытия обязательной информации в соответствии с Федеральным законом от 29.12.2012 № 273-ФЗ «Об образовании в РФ» и Приказом Рособрнадзора от 04.08.2023 № 1493.
          </p>
        </div>

        {/* 14-Tab Navigation & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold px-1 mb-2">
              Обязательные подразделы:
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between gap-3 min-h-[44px] ${
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
            {/* 1. Основные сведения (п. 7) */}
            {activeTab === 'main' && (
              <div className="space-y-5" itemProp="commonInfo">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    1. Основные сведения
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о наименовании, дате создания, учредителе, адресах, режиме работы, лицензии и реквизитах.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Полное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="orgName">
                      {ROSOBRNADZOR_DATA.common.fullName}
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Сокращенное наименование:</div>
                    <div className="font-bold text-white text-sm" itemProp="shortOrgName">
                      {ROSOBRNADZOR_DATA.common.shortName}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">Дата создания:</div>
                      <div className="text-white font-medium">1973 год (Всероссийское общество автомобилистов)</div>
                      <div className="text-xs text-slate-400 mt-0.5">Внесено в ЕГРЮЛ: 20 января 2003 г.</div>
                    </div>
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">Учредитель:</div>
                      <div className="text-white font-medium" itemProp="founder">
                        {ROSOBRNADZOR_DATA.common.founder}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Юридический адрес:</div>
                    <div className="text-white" itemProp="legalAddress">
                      {ROSOBRNADZOR_DATA.common.legalAddress}
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-national-red uppercase font-bold mb-1">
                      Места осуществления образовательной деятельности (пп. «ж» п. 7):
                    </div>
                    <div className="space-y-2 mt-1 text-slate-200">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                        <div>
                          <strong>Учебные кабинеты (теория):</strong> {ROSOBRNADZOR_DATA.common.classroomAddress}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-national-red shrink-0 mt-0.5" />
                        <div>
                          <strong>Учебная площадка / автодром (практика):</strong> {ROSOBRNADZOR_DATA.common.autodromeAddress}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Лицензия на образовательную деятельность:</div>
                    <div className="text-white font-semibold">
                      Реестровая выписка {ROSOBRNADZOR_DATA.common.licenseNumber}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Орган, выдавший лицензию: {ROSOBRNADZOR_DATA.common.licenseAuthority} (Статус: {ROSOBRNADZOR_DATA.common.licenseStatus})
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Государственная аккредитация:</div>
                    <div className="text-slate-300">
                      {ROSOBRNADZOR_DATA.common.accreditationStatus}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded bg-surface-card border border-white/10">
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">Режим и график работы:</div>
                      <div className="text-white text-xs space-y-1" itemProp="workTime">
                        <div>{ROSOBRNADZOR_DATA.common.workSchedule}</div>
                        <div className="text-slate-400 text-xs">Вождение: {ROSOBRNADZOR_DATA.common.practiceSchedule}</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-surface-card border border-white/10 space-y-2">
                      <div>
                        <div className="text-xs text-slate-400 uppercase font-bold mb-0.5">Контакты:</div>
                        <a
                          href={`tel:${ROSOBRNADZOR_DATA.common.phoneClean}`}
                          className="text-national-red font-extrabold text-sm block hover:underline"
                          itemProp="telephone"
                        >
                          {ROSOBRNADZOR_DATA.common.phone}
                        </a>
                      </div>
                      <div className="text-xs text-slate-300" itemProp="e-mail">
                        Email: <strong className="text-white">{ROSOBRNADZOR_DATA.common.email}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Legal Requisites Table */}
                  <div className="p-4 rounded bg-surface-card border border-white/10 mt-2">
                    <div className="text-xs text-white font-bold uppercase mb-2">Реквизиты организации:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div><span className="text-slate-400">ИНН:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.inn}</strong></div>
                      <div><span className="text-slate-400">КПП:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.kpp}</strong></div>
                      <div><span className="text-slate-400">ОГРН:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.ogrn}</strong></div>
                      <div><span className="text-slate-400">ОКПО:</span> <strong className="text-white">{ROSOBRNADZOR_DATA.common.legalRequisites.okpo}</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Структура и органы управления (п. 8) */}
            {activeTab === 'struct' && (
              <div className="space-y-5" itemProp="structOrgUprav">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    2. Структура и органы управления образовательной организацией
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения об органах управления и руководителе образовательного подразделения.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  {ROSOBRNADZOR_DATA.structure.governingBodies.map((item, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10">
                      <div className="text-xs text-national-red uppercase font-bold mb-0.5">{item.status}</div>
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      {item.person && (
                        <div className="text-white font-semibold text-xs mt-1">Руководитель / Ответственный: {item.person}</div>
                      )}
                      {item.competence && (
                        <div className="text-slate-400 text-xs mt-1">{item.competence}</div>
                      )}
                    </div>
                  ))}
                  <div className="p-3 rounded bg-surface-card border border-white/10 text-slate-400 text-xs">
                    Филиалы и представительства у образовательной организации отсутствуют.
                  </div>
                </div>
              </div>
            )}

            {/* 3. Документы (п. 9) */}
            {activeTab === 'docs' && (
              <div className="space-y-5" itemProp="docFiles">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    3. Документы
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Учредительные документы, лицензия, заключения надзорных органов и локальные нормативные акты.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-card border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white uppercase">Официальные документы организации:</div>
                  <p className="text-slate-400">
                    Документы утверждены руководителем образовательной организации. Заверенные копии, учебные планы и локальные нормативные акты доступны для ознакомления в учебной части автошколы.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {ROSOBRNADZOR_DATA.documentsList.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded bg-surface-card border border-white/10 hover:border-national-red transition-all flex items-start justify-between gap-3 text-left group min-h-[44px]"
                    >
                      <div className="flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-national-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold mb-0.5">{doc.category}</div>
                          <div className="text-white font-semibold text-xs leading-snug group-hover:text-national-red transition-colors">
                            {doc.title}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-xs font-bold text-slate-300 shrink-0 uppercase border border-white/10 flex items-center gap-1">
                        {doc.fileType}
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </span>
                    </a>
                  ))}
                </div>

                <div className="p-3.5 rounded bg-surface-card border border-white/10 text-xs text-slate-300">
                  <strong>Предписания органов государственного контроля (надзора):</strong> Невыполненных предписаний надзорных органов не имеется.
                </div>
              </div>
            )}

            {/* 4. Образование (п. 10) */}
            {activeTab === 'education' && (
              <div className="space-y-5" itemProp="education">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    4. Образование
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о реализуемых программах профессионального обучения, учебных планах, формах и сроках обучения.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-1">
                  <div><strong>Уровень образования:</strong> Профессиональное обучение / Дополнительное образование</div>
                  <div><strong>Форма обучения:</strong> Очная (в оборудованных учебных аудиториях и на автодроме)</div>
                  <div><strong>Язык образования:</strong> Русский (в соответствии со ст. 14 ФЗ № 273-ФЗ)</div>
                  <div><strong>Государственная аккредитация:</strong> {ROSOBRNADZOR_DATA.common.accreditationStatus}</div>
                  <div><strong>Численность обучающихся:</strong> Обучение за счет бюджетных средств не ведется (100% по договорам за счет физ./юр. лиц).</div>
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
                      <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1 border-t border-white/5">
                        <div>Теория: <strong className="text-white">{prog.theoryHours} ч.</strong></div>
                        <div>Практика: <strong className="text-white">{prog.practiceHours} ч.</strong></div>
                        <div>Форма: <strong className="text-white">{prog.form}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Руководство (п. 11) */}
            {activeTab === 'leadership' && (
              <div className="space-y-5" itemProp="leadership">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    5. Руководство
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о руководителе образовательной организации и его заместителях.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-extrabold text-white text-base">Кудинов Владислав Викторович</h4>
                      <span className="px-2.5 py-0.5 rounded bg-national-red/20 text-national-red font-bold text-xs">
                        Председатель Мостовского РО ВОА (Руководитель)
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div><span className="text-slate-400">Должность:</span> Единоличный руководитель организации и образовательного процесса</div>
                      <div><span className="text-slate-400">Контактный телефон:</span> <a href={`tel:${ROSOBRNADZOR_DATA.common.phoneClean}`} className="text-white hover:text-national-red font-bold">{ROSOBRNADZOR_DATA.common.phone}</a></div>
                      <div><span className="text-slate-400">Электронная почта:</span> <a href={`mailto:${ROSOBRNADZOR_DATA.common.email}`} className="text-white hover:text-national-red font-bold">{ROSOBRNADZOR_DATA.common.email}</a></div>
                    </div>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-extrabold text-white text-base">Круц Павел Викторович</h4>
                      <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold text-xs">
                        Заведующий учебной частью, преподаватель
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div><span className="text-slate-400">Должность:</span> Организация учебного процесса, преподаватель дисциплин ПДД</div>
                      <div><span className="text-slate-400">Контактный телефон:</span> {ROSOBRNADZOR_DATA.common.phone}</div>
                      <div><span className="text-slate-400">Электронная почта:</span> {ROSOBRNADZOR_DATA.common.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Педагогический состав (п. 12) */}
            {activeTab === 'ped_staff' && (
              <div className="space-y-5" itemProp="pedStaff">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    6. Педагогический состав
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Персональный состав педагогических работников с указанием уровня образования, квалификации и стажа.
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
                          <span className="text-slate-400">Квалификация и переподготовка:</span> {member.qualification}
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

                      <div className="flex gap-6 pt-2 border-t border-white/5 text-xs">
                        <div>Общий стаж: <strong className="text-white">{member.totalExperience}</strong></div>
                        <div>Педагогический стаж: <strong className="text-white">{member.teachingExperience}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. МТО и доступная среда (п. 13) */}
            {activeTab === 'facilities' && (
              <div className="space-y-5" itemProp="materEnvir">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    7. Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о классах, автодроме, транспорте и условиях для лиц с ОВЗ.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">1. Оборудованные учебные кабинеты:</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">{ROSOBRNADZOR_DATA.common.classroomAddress}</strong>.
                    </p>
                    <p className="text-slate-400">
                      Оснащение: мультимедийные проекторы, электрифицированные стенды по ПДД РФ, учебные тренажеры первой помощи «Максим», наглядные макеты узлов, деталей и механизмов ТС, автоматизированные места для сдачи тестов.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">2. Закрытый учебный автодром (объект практических занятий):</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">{ROSOBRNADZOR_DATA.common.autodromeAddress}</strong>.
                    </p>
                    <p className="text-slate-400">
                      Асфальтобетонное покрытие, ограждение по периметру, наклонный участок (эстакада) по ГОСТ, освещение, учебные переносные дорожные знаки и разметка.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">3. Учебный транспортный парк:</div>
                    <p className="text-slate-400">
                      Lada Granta FL (2023 г.), Datsun on-DO (2022 г.), Lada Kalina (2021 г.), грузовой автомобиль ГАЗ-3309 (2020 г., без гидроусилителя), учебные мотоциклы. Все ТС оснащены сертифицированными дублирующими педалями и системами видеорегистрации ГИБДД.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">4. Условия доступности для инвалидов и лиц с ОВЗ:</div>
                    <p className="text-slate-400">
                      Официальный сайт адаптирован для лиц с нарушениями зрения (ГОСТ Р 52872). Доступ в учебные помещения первого этажа обеспечен безбарьерной средой. Обучение лиц с ОВЗ осуществляется при наличии медицинского допуска к управлению ТС.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 8. Платные образовательные услуги (п. 14) */}
            {activeTab === 'paid_services' && (
              <div className="space-y-5" itemProp="paidEduServices">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    8. Платные образовательные услуги
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Положение об оказании платных услуг, образцы договоров и утвержденный прейскурант.
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
                        <div className="text-xs text-slate-400">{t.duration} • {t.theoryHours} + {t.practiceHours}</div>
                      </div>
                      <span className="font-extrabold text-national-red text-base">
                        {t.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. Финансово-хозяйственная деятельность (п. 15) */}
            {activeTab === 'finance' && (
              <div className="space-y-5" itemProp="finances">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    9. Финансово-хозяйственная деятельность
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Финансовое обеспечение образовательной деятельности осуществляется исключительно по договорам об оказании платных образовательных услуг за счет средств физических и (или) юридических лиц.
                  </p>
                  <p className="text-slate-400">
                    Бюджетные ассигнования федерального бюджета, бюджетов субъектов РФ и местных бюджетов не выделяются.
                  </p>
                </div>
              </div>
            )}

            {/* 10. Вакантные места для приема (п. 16) */}
            {activeTab === 'vacancies' && (
              <div className="space-y-5" itemProp="vacantSpots">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    10. Вакантные места для приема (перевода) обучающихся
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

            {/* 11. Стипендии и меры поддержки (п. 17) */}
            {activeTab === 'scholarships' && (
              <div className="space-y-5" itemProp="scholarships">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    11. Стипендии и меры поддержки обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Выплата стипендий и предоставление мер социальной поддержки обучающимся локальными нормативными актами автошколы не предусмотрены.
                  </p>
                  <p className="text-slate-400">
                    Общежитие, интернат и жилые помещения для обучающихся не предоставляются. Плата за проживание в общежитии не взимается.
                  </p>
                  <p className="text-white font-semibold">
                    Автошкола предоставляет внутреннюю поэтапную оплату курса без участия банков.
                  </p>
                </div>
              </div>
            )}

            {/* 12. Международное сотрудничество (п. 18) */}
            {activeTab === 'international' && (
              <div className="space-y-5" itemProp="internationalCoop">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    12. Международное сотрудничество
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300">
                  Заключенных и планируемых к заключению договоров с иностранными и (или) международными организациями по вопросам образования и науки образовательная организация не имеет.
                </div>
              </div>
            )}

            {/* 13. Организация питания в ОО (п. 19) */}
            {activeTab === 'catering' && (
              <div className="space-y-5" itemProp="cateringAndHealth">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    13. Организация питания в образовательной организации
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    В соответствии с расписанием учебных занятий (не более 4 академических часов в день) организация горячего питания не предусмотрена. В учебных классах организован постоянный питьевой режим (бутилированная вода).
                  </p>
                  <p className="text-slate-400">
                    Охрана здоровья обучающихся включает соблюдение санитарно-гигиенических норм, регулярное проветривание аудиторий, наличие укомплектованных аптечек первой помощи и вводный инструктаж по охране труда и пожарной безопасности.
                  </p>
                </div>
              </div>
            )}

            {/* 14. Образовательные стандарты и требования (п. 20) */}
            {activeTab === 'standards' && (
              <div className="space-y-5" itemProp="eduStandards">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-extrabold text-xl text-white uppercase">
                    14. Образовательные стандарты и требования
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-3">
                  <p>
                    Подготовка водителей транспортных средств осуществляется в соответствии с Примерными программами профессионального обучения водителей транспортных средств соответствующих категорий и подкатегорий, утвержденными Министерством просвещения Российской Федерации (Приказ Минпросвещения России от 08.11.2021 № 808).
                  </p>
                  <div className="p-3 rounded bg-surface-card border border-white/10 text-slate-300 space-y-1">
                    <div><strong>Нормативная база:</strong> Приказ Минпросвещения РФ от 08.11.2021 № 808</div>
                    <div><strong>Согласование:</strong> Учебно-материальная база согласована с УГИБДД ГУ МВД России по Краснодарскому краю (Заключение № 23-418).</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
