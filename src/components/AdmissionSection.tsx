import React from 'react';
import { ADMISSION_REQUIREMENTS, SCHOOL_INFO } from '../data/autoschoolData';
import { FileCheck, GraduationCap, CheckCircle2, Phone, MapPin } from 'lucide-react';

interface AdmissionSectionProps {
  onOpenBooking: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="admission" className="py-12 sm:py-20 bg-[#080A0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-extrabold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Порядок поступления
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Документы и зачисление
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            Перечень необходимых документов для заключения договора и зачисления в учебную группу автошколы ВОА.
          </p>
        </div>

        {/* 4 Document Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {ADMISSION_REQUIREMENTS.map((item, idx) => (
            <div
              key={idx}
              className="dashboard-card rounded-xl p-5 sm:p-6 border-white/10 hover:border-national-red/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-national-red/10 border border-national-red/30 text-national-red flex items-center justify-center font-extrabold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Banner */}
        <div className="dashboard-card rounded-2xl p-6 sm:p-8 border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-national-red uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>Итоговый документ</span>
            </div>
            <h3 className="font-extrabold text-lg sm:text-2xl text-white">
              Свидетельство о профессии водителя
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              После успешного освоения программы и сдачи внутренних экзаменов выдается Свидетельство о профессии водителя установленного образца (код профессии по ОКПДТР: 11442).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="min-h-[44px] px-6 py-3.5 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition shadow-lg shadow-national-red/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Подать документы</span>
            </button>

            <a
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="min-h-[44px] px-6 py-3.5 rounded-sm bg-surface-card border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-national-red" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
