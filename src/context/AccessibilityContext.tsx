import React, { createContext, useContext, useState, useEffect } from 'react';

export type FontSize = 'normal' | 'large' | 'xlarge';
export type ColorTheme = 'default' | 'black-white' | 'white-black' | 'blue-cyan';

interface AccessibilityContextType {
  isActive: boolean;
  fontSize: FontSize;
  colorTheme: ColorTheme;
  imagesVisible: boolean;
  toggleAccessibility: () => void;
  setFontSize: (size: FontSize) => void;
  setColorTheme: (theme: ColorTheme) => void;
  toggleImages: () => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    return localStorage.getItem('voa_a11y_active') === 'true';
  });
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    return (localStorage.getItem('voa_a11y_font') as FontSize) || 'normal';
  });
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    return (localStorage.getItem('voa_a11y_theme') as ColorTheme) || 'default';
  });
  const [imagesVisible, setImagesVisibleState] = useState<boolean>(() => {
    return localStorage.getItem('voa_a11y_images') !== 'false';
  });

  useEffect(() => {
    localStorage.setItem('voa_a11y_active', String(isActive));
    localStorage.setItem('voa_a11y_font', fontSize);
    localStorage.setItem('voa_a11y_theme', colorTheme);
    localStorage.setItem('voa_a11y_images', String(imagesVisible));

    const root = document.documentElement;
    root.classList.remove('a11y-active', 'font-large', 'font-xlarge', 'theme-bw', 'theme-wb', 'theme-bc', 'hide-images');

    if (isActive) {
      root.classList.add('a11y-active');
      if (fontSize === 'large') root.classList.add('font-large');
      if (fontSize === 'xlarge') root.classList.add('font-xlarge');

      if (colorTheme === 'black-white') root.classList.add('theme-bw');
      if (colorTheme === 'white-black') root.classList.add('theme-wb');
      if (colorTheme === 'blue-cyan') root.classList.add('theme-bc');

      if (!imagesVisible) root.classList.add('hide-images');
    }
  }, [isActive, fontSize, colorTheme, imagesVisible]);

  const toggleAccessibility = () => setIsActive(prev => !prev);
  const setFontSize = (size: FontSize) => setFontSizeState(size);
  const setColorTheme = (theme: ColorTheme) => setColorThemeState(theme);
  const toggleImages = () => setImagesVisibleState(prev => !prev);
  const resetSettings = () => {
    setIsActive(false);
    setFontSizeState('normal');
    setColorThemeState('default');
    setImagesVisibleState(true);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        isActive,
        fontSize,
        colorTheme,
        imagesVisible,
        toggleAccessibility,
        setFontSize,
        setColorTheme,
        toggleImages,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
