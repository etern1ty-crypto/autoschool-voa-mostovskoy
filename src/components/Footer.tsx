import React from 'react';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigateRosobrnadzor: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateRosobrnadzor, onOpenBooking }) => {
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
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {SCHOOL_INFO.name}. Обучение водителей категорий А, В, С, переподготовка и восстановление навыков в Мостовском районе.
            </p>
            <div className="text-[10px] text-slate-500">
              {SCHOOL_INFO.license}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase mb-3 tracking-wider">Обучение и цены</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «В» (Легковые авто) — 70 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «А» (Мотоциклы) — 25 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Категория «С» (Грузовые ГАЗ) — 75 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Комбо «А» + «В» — 90 000 ₽</a></li>
              <li><a href="#pricing" className="hover:text-national-red transition">Переподготовка (от 720 ₽)</a></li>
            </ul>
          </div>

          {/* Rosobrnadzor */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase mb-3 tracking-wider">Официальный раздел</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={onNavigateRosobrnadzor}
                  className="text-left text-national-red hover:underline font-bold"
                >
                  Сведения об образовательной организации (Приказ № 831)
                </button>
              </li>
              <li><a href="#autodrome" className="hover:text-white transition">Учебный автодром</a></li>
              <li><a href="#fleet" className="hover:text-white transition">Учебный автопарк</a></li>
              <li><a href="#classroom" className="hover:text-white transition">Учебные классы</a></li>
              <li><span className="text-slate-500">Политика конфиденциальности (152-ФЗ)</span></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-2 text-[11px]">
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
                className="w-full py-2.5 rounded-sm bg-national-red text-white font-extrabold text-[11px] uppercase tracking-wider hover:bg-red-700 transition"
              >
                Записаться в группу
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500">
          <div>© {new Date().getFullYear()} Мостовское районное отделение ВОА. Все права защищены.</div>
          <div>Официальный сайт образовательной организации ВОА</div>
        </div>
      </div>
    </footer>
  );
};
