module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        premium: {
          purple: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          accent: {
            light: '#E9D5FF',
            DEFAULT: '#C4B5FD',
            dark: '#9F7AEA'
          }
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px'
      },
      animation: {
        'glass-sheen': 'glassSheen 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        glassSheen: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' }
        }
      }
    }
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
      backdropBrightness: ['hover', 'focus'],
      backdropContrast: ['hover', 'focus'],
      backdropGrayscale: ['hover', 'focus'],
      backdropHueRotate: ['hover', 'focus'],
      backdropInvert: ['hover', 'focus'],
      backdropOpacity: ['hover', 'focus'],
      backdropSaturate: ['hover', 'focus'],
      backdropSepia: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-filters')
  ]
}