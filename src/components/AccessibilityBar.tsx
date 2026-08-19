import React from 'react';
import { useAccessibility, FontSize, ColorTheme } from '../context/AccessibilityContext';
import { Eye, Type, Palette, Image as ImageIcon, RotateCcw, X } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const {
    isActive,
    fontSize,
    colorTheme,
    imagesVisible,
    setFontSize,
    setColorTheme,
    toggleImages,
    resetSettings,
    toggleAccessibility,
  } = useAccessibility();

  if (!isActive) return null;

  return (
    <div className="w-full bg-slate-900 border-b border-amber-500/30 text-white px-4 py-3 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-semibold text-amber-400">
          <Eye className="w-5 h-5 keep-icon" />
          <span>Версия для слабовидящих (ГОСТ Р 52872-2012)</span>
        </div>

        {/* Font Size Selector */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-slate-300 text-xs">
            <Type className="w-4 h-4 keep-icon" /> Размер шрифта:
          </span>
          <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            {(['normal', 'large', 'xlarge'] as FontSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-all min-h-[32px] ${
                  fontSize === size
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>
        </div>

        {/* Color Theme Selector */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-slate-300 text-xs">
            <Palette className="w-4 h-4 keep-icon" /> Цвета:
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setColorTheme('default')}
              title="Стандартная тема"
              className={`w-8 h-8 rounded border-2 transition-all flex items-center justify-center font-bold text-xs bg-slate-950 text-white ${
                colorTheme === 'default' ? 'border-amber-400 scale-110' : 'border-slate-600'
              }`}
            >
              С
            </button>
            <button
              onClick={() => setColorTheme('black-white')}
              title="Черным по белому"
              className={`w-8 h-8 rounded border-2 transition-all flex items-center justify-center font-bold text-xs bg-white text-black ${
                colorTheme === 'black-white' ? 'border-amber-400 scale-110' : 'border-slate-400'
              }`}
            >
              ЧБ
            </button>
            <button
              onClick={() => setColorTheme('white-black')}
              title="Белым по черному"
              className={`w-8 h-8 rounded border-2 transition-all flex items-center justify-center font-bold text-xs bg-black text-white ${
                colorTheme === 'white-black' ? 'border-amber-400 scale-110' : 'border-slate-600'
              }`}
            >
              БЧ
            </button>
            <button
              onClick={() => setColorTheme('blue-cyan')}
              title="Синим по голубому"
              className={`w-8 h-8 rounded border-2 transition-all flex items-center justify-center font-bold text-xs bg-[#99d6f3] text-[#063462] ${
                colorTheme === 'blue-cyan' ? 'border-amber-400 scale-110' : 'border-slate-500'
              }`}
            >
              СГ
            </button>
          </div>
        </div>

        {/* Images Toggle & Reset */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleImages}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs border transition-all min-h-[36px] ${
              imagesVisible
                ? 'border-slate-600 text-slate-200 hover:border-slate-400'
                : 'bg-amber-500 text-slate-950 font-bold border-amber-500'
            }`}
          >
            <ImageIcon className="w-4 h-4 keep-icon" />
            <span>{imagesVisible ? 'Изображения: ВКЛ' : 'Изображения: ВЫКЛ'}</span>
          </button>

          <button
            onClick={resetSettings}
            title="Сбросить настройки"
            aria-label="Сбросить настройки слабовидящих"
            className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4 keep-icon" />
          </button>

          <button
            onClick={toggleAccessibility}
            title="Закрыть панель слабовидящих"
            aria-label="Закрыть панель слабовидящих"
            className="p-2 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800 transition min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <X className="w-4 h-4 keep-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
