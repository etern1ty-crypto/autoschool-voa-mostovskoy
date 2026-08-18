/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'national-red': '#E31E24',
        'national-blue': '#0055A4',
        'prestige-gold': '#FFD700',
        'surface-deep': '#080A0F',
        'surface-card': '#12161F',
        'surface-overlay': '#1C222E',
        'surface-container': '#1e2020',
        'surface-container-high': '#282a2b',
        'surface-container-highest': '#333535',
        'surface-container-lowest': '#0c0f0f',
        'fleet-white': '#FFFFFF',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#e7bdb8',
        'border-glass': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
