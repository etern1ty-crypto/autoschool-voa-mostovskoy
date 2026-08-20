import React, { useState } from 'react';
import { ROSOBRNADZOR_DATA } from '../data/rosobrnadzorData';
import { DRIVER_PREPARATION_TARIFFS, RETRAINING_PROGRAMS } from '../data/autoschoolData';
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

  const tabs = [
    { id: 'main', num: '1', title: 'Основные сведения', icon: Building2 },
    { id: 'struct', num: '2', title: 'Структура и органы управления', icon: Users },
    { id: 'docs', num: '3', title: 'Документы', icon: FileText },
    { id: 'education', num: '4', title: 'Образование', icon: GraduationCap },
    { id: 'standards', num: '5', title: 'Образовательные стандарты и требования', icon: BookOpen },
    { id: 'leadership', num: '6', title: 'Руководство', icon: UserCheck },
    { id: 'ped_staff', num: '7', title: 'Педагогический состав', icon: User },
    { id: 'facilities', num: '8', title: 'МТО и доступная среда', icon: Wrench },
    { id: 'scholarships', num: '9', title: 'Стипендии и меры поддержки', icon: Award },
    { id: 'finance', num: '10', title: 'Финансово-хозяйственная деятельность', icon: CreditCard },
    { id: 'vacancies', num: '11', title: 'Вакантные места для приема (перевода)', icon: UserPlus },
    { id: 'paid_services', num: '12', title: 'Платные образовательные услуги', icon: DollarSign },
    { id: 'international', num: '13', title: 'Международное сотрудничество', icon: Globe },
    { id: 'catering', num: '14', title: 'Организация питания в ОО', icon: Coffee },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-white/20 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Федеральный закон № 273-ФЗ • Приказ Рособрнадзора № 1493
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight" itemProp="header">
            Сведения об образовательной организации
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
            Официальный раздел раскрытия обязательной информации в соответствии с Федеральным законом от 29.12.2012 № 273-ФЗ «Об образовании в РФ», Постановлением Правительства РФ от 20.10.2021 № 1802 и Приказом Рособрнадзора от 04.08.2023 № 1493.
          </p>
        </div>

        {/* 14-Tab Navigation & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold px-1 mb-2">
              Подразделы раздела:
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between gap-3 min-h-[44px] cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/30 shadow-md'
                      : 'bg-surface-card text-slate-300 border border-white/10 hover:border-white/20 hover:text-white'
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
                  <h3 className="font-bold text-lg text-white uppercase">
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
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">Дата государственной регистрации:</div>
                      <div className="text-white font-medium">20 января 2003 г. (ОГРН 1032335004052)</div>
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
                    <div className="text-xs text-slate-300 uppercase font-bold mb-1">
                      Места осуществления образовательной деятельности:
                    </div>
                    <div className="space-y-2 mt-1 text-slate-200">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Учебные кабинеты (теория):</strong> {ROSOBRNADZOR_DATA.common.classroomAddress}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Учебная площадка (практика):</strong> {ROSOBRNADZOR_DATA.common.autodromeAddress}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-surface-card border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Лицензия на осуществление образовательной деятельности:</div>
                    <div className="text-white font-semibold">
                      Реестровый номер {ROSOBRNADZOR_DATA.common.licenseNumber}
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
                          className="text-white font-bold text-sm block hover:underline"
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

            {/* 2. Структура и органы управления */}
            {activeTab === 'struct' && (
              <div className="space-y-5" itemProp="structOrgUprav">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    2. Структура и органы управления образовательной организацией
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения об органах управления организацией и структуре образовательного процесса.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  {ROSOBRNADZOR_DATA.structure.governingBodies.map((item, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10">
                      <div className="text-xs text-slate-400 uppercase font-bold mb-0.5">{item.status}</div>
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      {item.person && (
                        <div className="text-white font-semibold text-xs mt-1">{item.person}</div>
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

            {/* 3. Документы */}
            {activeTab === 'docs' && (
              <div className="space-y-5" itemProp="docFiles">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    3. Документы
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Учредительные документы, лицензия и локальные нормативные акты.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {ROSOBRNADZOR_DATA.documentsList.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded bg-surface-card border border-white/10 hover:border-white/30 transition-all flex items-start justify-between gap-3 text-left group min-h-[44px]"
                    >
                      <div className="flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold mb-0.5">{doc.category}</div>
                          <div className="text-white font-semibold text-xs leading-snug">
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

                <div className="p-3.5 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white uppercase">Ознакомление с локальными актами:</div>
                  <p className="text-slate-400">
                    Заверенные копии рабочих программ, учебных планов, календарных графиков и локальных актов предоставляются для ознакомления в учебной части по адресу: п. Мостовской, ул. Красная, 88.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Образование */}
            {activeTab === 'education' && (
              <div className="space-y-5" itemProp="education">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    4. Образование
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о реализуемых программах профессионального обучения, формах и сроках обучения.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-1">
                  <div><strong>Вид образования:</strong> Профессиональное обучение; Дополнительное образование</div>
                  <div><strong>Форма обучения:</strong> Очно-заочная</div>
                  <div><strong>Язык образования:</strong> Русский</div>
                  <div><strong>Код профессии по ОКПДТР:</strong> 11442 (Водитель автомобиля)</div>
                  <div><strong>Нормативная база:</strong> Приказ Минпросвещения России от 26.08.2020 № 438, Приказ Минобрнауки России от 26.12.2013 № 1408</div>
                  <div><strong>Государственная аккредитация:</strong> {ROSOBRNADZOR_DATA.common.accreditationStatus}</div>
                </div>

                <div className="space-y-3">
                  {ROSOBRNADZOR_DATA.programs.map((prog, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-200 border border-white/20 text-xs font-bold">
                          {prog.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          Срок: <strong className="text-white">{prog.duration}</strong>
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm">{prog.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{prog.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Образовательные стандарты и требования */}
            {activeTab === 'standards' && (
              <div className="space-y-5" itemProp="eduStandards">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    5. Образовательные стандарты и требования
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-3">
                  <p>
                    Федеральные государственные образовательные стандарты (ФГОС) для программ профессионального обучения водителей транспортных средств законодательством РФ не предусмотрены.
                  </p>
                  <p className="text-slate-400">
                    Образовательные программы профессионального обучения водителей транспортных средств разработаны на основании Примерных программ, утвержденных Приказом Министерства образования и науки Российской Федерации от 26.12.2013 № 1408, и Порядка организации и осуществления образовательной деятельности по основным программам профессионального обучения, утвержденного Приказом Минпросвещения России от 26.08.2020 № 438.
                  </p>
                </div>
              </div>
            )}

            {/* 6. Руководство */}
            {activeTab === 'leadership' && (
              <div className="space-y-5" itemProp="leadership">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    6. Руководство
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о руководителе организации и руководителе образовательного подразделения.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-base">Кудинов Владислав Викторович</h4>
                      <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold text-xs">
                        Председатель Мостовского РО КРО ООО «ВОА»
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div><span className="text-slate-400">Должность:</span> Руководитель организации</div>
                      <div><span className="text-slate-400">Телефон:</span> <a href={`tel:${ROSOBRNADZOR_DATA.common.phoneClean}`} className="text-white font-bold">{ROSOBRNADZOR_DATA.common.phone}</a></div>
                      <div><span className="text-slate-400">Email:</span> <a href={`mailto:${ROSOBRNADZOR_DATA.common.email}`} className="text-white font-bold">{ROSOBRNADZOR_DATA.common.email}</a></div>
                    </div>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-base">Круц Павел Викторович</h4>
                      <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold text-xs">
                        Директор образовательного подразделения «Автошкола»
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div><span className="text-slate-400">Должность:</span> Руководитель автошколы, организация учебного процесса</div>
                      <div><span className="text-slate-400">Телефон:</span> {ROSOBRNADZOR_DATA.common.phone}</div>
                      <div><span className="text-slate-400">Email:</span> {ROSOBRNADZOR_DATA.common.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Педагогический состав */}
            {activeTab === 'ped_staff' && (
              <div className="space-y-5" itemProp="pedStaff">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    7. Педагогический состав
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Сведения о педагогических работниках с указанием квалификации и стажа работы.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {ROSOBRNADZOR_DATA.staff.map((member, idx) => (
                    <div key={idx} className="p-4 rounded bg-surface-card border border-white/10 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm sm:text-base">{member.name}</h4>
                        <span className="text-slate-400 font-bold text-xs">{member.role}</span>
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

                      <div className="flex gap-6 pt-2 border-t border-white/5 text-xs">
                        <div>Общий стаж: <strong className="text-white">{member.totalExperience}</strong></div>
                        <div>Педагогический стаж: <strong className="text-white">{member.teachingExperience}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. МТО и доступная среда */}
            {activeTab === 'facilities' && (
              <div className="space-y-5" itemProp="materEnvir">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    8. Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">1. Оборудованные учебные кабинеты:</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">{ROSOBRNADZOR_DATA.common.classroomAddress}</strong>.
                    </p>
                    <p className="text-slate-400">
                      Оснащение: электрифицированные стенды по ПДД РФ, учебные тренажеры первой помощи, наглядные макеты узлов и деталей ТС, учебные места для решения билетов.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">2. Закрытая учебная площадка:</div>
                    <p className="text-slate-300">
                      Адрес: <strong className="text-white">{ROSOBRNADZOR_DATA.common.autodromeAddress}</strong>.
                    </p>
                    <p className="text-slate-400">
                      Асфальтобетонное покрытие, ограждение, наклонный участок (эстакада), учебные дорожные знаки и разметка для отработки экзаменационных элементов.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">3. Учебный транспорт:</div>
                    <p className="text-slate-400">
                      Учебные легковые автомобили (Lada Granta FL, Datsun on-DO, Lada Kalina), грузовой автомобиль (ГАЗ-3309) и учебные мотоциклы. ТС оборудованы сертифицированными дублирующими педалями и видеорегистрацией.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-2">
                    <div className="font-bold text-white text-sm">4. Электронные образовательные ресурсы:</div>
                    <ul className="space-y-1.5 text-slate-300">
                      {ROSOBRNADZOR_DATA.electronicResources.map((res, idx) => (
                        <li key={idx} className="p-2.5 rounded bg-white/5 border border-white/5">
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-white hover:underline flex items-center gap-1"
                          >
                            {res.title}
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                          <div className="text-slate-400 text-xs mt-0.5">{res.desc}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded bg-surface-card border border-white/10 space-y-1.5">
                    <div className="font-bold text-white text-sm">5. Условия доступности для инвалидов и лиц с ОВЗ:</div>
                    <p className="text-slate-400">
                      Сайт адаптирован для слабовидящих по ГОСТ Р 52872-2012. Обучение лиц с ОВЗ осуществляется в соответствии с медицинским заключением (форма № 003-В/у) и программами подготовки.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 9. Стипендии и меры поддержки */}
            {activeTab === 'scholarships' && (
              <div className="space-y-5" itemProp="scholarships">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    9. Стипендии и меры поддержки обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Выплата стипендий и меры социальной поддержки обучающимся не предусмотрены.
                  </p>
                  <p className="text-slate-400">
                    Общежитие и интернат для обучающихся отсутствуют.
                  </p>
                </div>
              </div>
            )}

            {/* 10. Финансово-хозяйственная деятельность */}
            {activeTab === 'finance' && (
              <div className="space-y-5" itemProp="finances">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    10. Финансово-хозяйственная деятельность
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Финансовое обеспечение образовательной деятельности осуществляется по договорам об оказании платных образовательных услуг за счет средств физических и (или) юридических лиц.
                  </p>
                  <p className="text-slate-400">
                    Бюджетные ассигнования федерального бюджета, бюджетов субъектов РФ и местных бюджетов не выделяются.
                  </p>
                </div>
              </div>
            )}

            {/* 11. Вакантные места для приема */}
            {activeTab === 'vacancies' && (
              <div className="space-y-5" itemProp="vacantSpots">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    11. Вакантные места для приема (перевода) обучающихся
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    Набор в учебные группы ведется на постоянной основе в течение года.
                  </p>
                  <div className="p-3 rounded bg-white/5 border border-white/10 text-slate-200 font-bold">
                    Вакантные места для приема по договорам об образовании за счет средств физических и юридических лиц: имеются.
                  </div>
                </div>
              </div>
            )}

            {/* 12. Платные образовательные услуги */}
            {activeTab === 'paid_services' && (
              <div className="space-y-5" itemProp="paidEduServices">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    12. Платные образовательные услуги
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Положение об оказании платных образовательных услуг и утвержденная стоимость программ.
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
                        <div className="text-xs text-slate-400">{t.duration}</div>
                      </div>
                      <span className="font-bold text-white text-base">
                        {t.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                  {RETRAINING_PROGRAMS.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between p-3.5 rounded bg-surface-card border border-white/10"
                    >
                      <div>
                        <div className="font-bold text-white text-sm">{t.title}</div>
                        <div className="text-xs text-slate-400">{t.duration}</div>
                      </div>
                      <span className="font-bold text-white text-base">
                        {t.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 13. Международное сотрудничество */}
            {activeTab === 'international' && (
              <div className="space-y-5" itemProp="internationalCoop">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    13. Международное сотрудничество
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300">
                  Заключенных и планируемых к заключению договоров с иностранными и международными организациями по вопросам образования и науки образовательная организация не имеет (не осуществляется).
                </div>
              </div>
            )}

            {/* 14. Организация питания в ОО */}
            {activeTab === 'catering' && (
              <div className="space-y-5" itemProp="cateringAndHealth">
                <div className="pb-3 border-b border-white/5">
                  <h3 className="font-bold text-lg text-white uppercase">
                    14. Организация питания в образовательной организации
                  </h3>
                </div>
                <div className="p-4 rounded bg-surface-card border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>
                    В соответствии с расписанием учебных занятий организация питания не предусмотрена. В учебных классах обеспечен питьевой режим.
                  </p>
                  <p className="text-slate-400">
                    Охрана здоровья обучающихся включает соблюдение санитарных норм, наличие аптечек первой помощи и инструктаж по технике безопасности.
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
