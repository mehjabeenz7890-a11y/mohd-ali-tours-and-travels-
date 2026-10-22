/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#12305C',
          dark: '#081428'
        },
        orange: {
          DEFAULT: '#F59E0B',
          light: '#FBBF56',
          dark: '#B97406'
        },
        surface: '#F8FAFC',
        ink: '#111827'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        flyAcross: {
          '0%': { transform: 'translate(-10%, 0) rotate(6deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(120%, -18%) rotate(6deg)', opacity: '0' }
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' }
        }
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.8s ease-out forwards',
        'hero-zoom': 'heroZoom 16s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'fly-across': 'flyAcross 14s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
