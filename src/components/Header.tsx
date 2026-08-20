import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { SCHOOL_INFO } from '../data/autoschoolData';
import { Phone, Eye, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateRosobrnadzor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onNavigateRosobrnadzor,
}) => {
  const { toggleAccessibility, isActive } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#080A0F]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      {/* Top Utility Bar */}
      <div className="bg-[#0c0f0f] border-b border-white/5 text-xs text-slate-300 py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <span className="text-national-red font-bold text-xs">ВОА</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">п. Мостовской, ул. Красная, 88</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-400 text-xs hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500 keep-icon" /> Лицензия № {SCHOOL_INFO.licenseRegistryNum}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onNavigateRosobrnadzor}
              className="text-xs text-slate-400 hover:text-national-red transition underline decoration-dotted font-medium hidden sm:inline cursor-pointer"
            >
              Сведения об образовательной организации
            </button>

            {/* Кнопка для слабовидящих */}
            <button
              onClick={toggleAccessibility}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-bold transition min-h-[36px] cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                  : 'bg-surface-card border-white/10 text-slate-300 hover:border-national-red hover:text-white'
              }`}
              title="Версия для слабовидящих"
              aria-label="Включить версию для слабовидящих по ГОСТ"
            >
              <Eye className="w-4 h-4 keep-icon shrink-0" />
              <span>Слабовидящим</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between relative">
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs uppercase tracking-wider font-bold text-slate-300 flex-1 justify-end pr-8 xl:pr-10">
          <a href="#fleet" className="nav-glow transition-colors py-2 whitespace-nowrap">Автопарк</a>
          <a href="#pricing" className="nav-glow transition-colors py-2 whitespace-nowrap">Программы и цены</a>
          <a href="#autodrome" className="nav-glow transition-colors py-2 whitespace-nowrap">Учебная площадка</a>
        </div>

        {/* Center Brand with Official VOA Logo */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group relative z-10 shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#12161F] border-2 border-national-red shadow-[0_0_18px_rgba(227,30,36,0.45)] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/images/voa-logo.webp"
              alt="Логотип ВОА"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
            />
          </div>
          <div className="text-left">
            <div className="font-extrabold text-sm sm:text-base tracking-wider text-white flex items-center gap-1 uppercase whitespace-nowrap">
              АВТОШКОЛА <span className="text-national-red">ВОА</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold whitespace-nowrap">
              Мостовское отделение
            </div>
          </div>
        </a>

        {/* Right Links & Action */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs uppercase tracking-wider font-bold text-slate-300 flex-1 justify-start pl-8 xl:pl-10">
          <a href="#classroom" className="nav-glow transition-colors py-2 whitespace-nowrap">Классы</a>
          <a href="#admission" className="nav-glow transition-colors py-2 whitespace-nowrap">Поступление</a>
          <a href="#contacts" className="nav-glow transition-colors py-2 whitespace-nowrap">Контакты</a>
          <button
            onClick={onNavigateRosobrnadzor}
            className="nav-glow transition-colors py-2 whitespace-nowrap text-slate-400 hover:text-white uppercase font-bold cursor-pointer"
          >
            Сведения об ОО
          </button>

          {/* Телефон слева от кнопки "Записаться" */}
          <div className="flex items-center gap-3 xl:gap-4 ml-auto shrink-0 whitespace-nowrap">
            <a
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-national-red transition font-extrabold tracking-normal py-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-national-red keep-icon shrink-0" />
              <span className="text-xs whitespace-nowrap">{SCHOOL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="min-h-[44px] bg-national-red text-white px-4 xl:px-5 py-2.5 rounded-sm font-extrabold uppercase tracking-wider text-xs hover:bg-red-700 transition-all hover:shadow-[0_0_20px_rgba(227,30,36,0.5)] transform hover:-translate-y-0.5 duration-200 flex items-center justify-center cursor-pointer whitespace-nowrap shrink-0"
            >
              Связаться
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="min-h-[40px] bg-national-red text-white px-4 py-2 rounded-sm font-bold uppercase tracking-wider text-xs shadow-md flex items-center justify-center"
          >
            Связь
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded bg-surface-card border border-white/10 text-white min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Главное меню навигации"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 keep-icon" /> : <Menu className="w-5 h-5 keep-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f0f] border-b border-white/10 px-4 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col gap-2 text-sm font-bold uppercase tracking-wider">
            <a href="#fleet" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Автопарк</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Программы и цены</a>
            <a href="#autodrome" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Учебная площадка</a>
            <a href="#classroom" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Классы</a>
            <a href="#admission" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Поступление</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded hover:bg-white/5 hover:text-national-red">Контакты</a>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateRosobrnadzor(); }}
              className="text-left px-3 py-3 text-national-red bg-national-red/10 rounded text-xs uppercase font-bold"
            >
              Сведения об образовательной организации
            </button>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a href={`tel:${SCHOOL_INFO.phoneClean}`} className="flex items-center gap-2 text-white font-bold p-3.5 bg-surface-card rounded border border-white/10 text-sm">
              <Phone className="w-4 h-4 text-national-red keep-icon" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full min-h-[44px] bg-national-red text-white font-bold uppercase tracking-wider text-xs rounded shadow-lg flex items-center justify-center"
            >
              Связаться с учебной частью
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
