import React from 'react';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigateRosobrnadzor: () => void;
  onOpenBooking: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateRosobrnadzor,
  onOpenBooking,
  onOpenPrivacyPolicy,
}) => {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-white/10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          {/* Brand Info with Official Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/voa-logo.webp"
                alt="Логотип ВОА"
                className="w-7 h-7 object-contain rounded-full border border-national-red p-0.5"
              />
              <span className="font-extrabold text-base text-white uppercase tracking-wider">
                АВТОШКОЛА <span className="text-national-red">ВОА</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {SCHOOL_INFO.fullName}. Подготовка водителей категорий А, В, С и переподготовка в Мостовском районе.
            </p>
            <div className="text-xs text-slate-500">
              {SCHOOL_INFO.license}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase mb-3 tracking-wider">Программы обучения</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «В» (Легковые авто) — 70 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «А» (Мотоциклы) — 25 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «С» (Грузовые авто) — 75 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Переподготовка с «В» на «С» — 49 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Переподготовка с «С» на «В» — 38 000 ₽</a></li>
            </ul>
          </div>

          {/* Official Section */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase mb-3 tracking-wider">Официальный раздел</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onNavigateRosobrnadzor}
                  className="text-left text-white hover:underline font-bold cursor-pointer"
                >
                  Сведения об образовательной организации
                </button>
              </li>
              <li><a href="#autodrome" className="hover:text-white transition">Учебная площадка</a></li>
              <li><a href="#fleet" className="hover:text-white transition">Учебный автопарк</a></li>
              <li><a href="#classroom" className="hover:text-white transition">Учебные классы</a></li>
              <li><a href="#admission" className="hover:text-white transition">Порядок поступления</a></li>
              <li>
                <button
                  onClick={onOpenPrivacyPolicy}
                  className="text-left text-slate-400 hover:text-white transition underline decoration-dotted cursor-pointer"
                >
                  Политика обработки персональных данных (152-ФЗ)
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold text-white text-xs uppercase mb-3 tracking-wider">Контакты</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-national-red shrink-0 mt-0.5" />
              <span className="text-slate-300">{SCHOOL_INFO.primaryAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-national-red shrink-0" />
              <a href={`tel:${SCHOOL_INFO.phoneClean}`} className="text-white font-bold hover:text-national-red">
                {SCHOOL_INFO.phone}
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full min-h-[40px] py-2.5 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition flex items-center justify-center cursor-pointer"
              >
                Связаться с учебной частью
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} {SCHOOL_INFO.shortName}. Все права защищены.</div>
          <div>Официальный сайт образовательного подразделения ВОА</div>
        </div>
      </div>
    </footer>
  );
};
