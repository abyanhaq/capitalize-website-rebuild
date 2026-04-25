import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark surfaces — original deep purple-navy scale
        navy: {
          950: '#080614',
          900: '#110c1d',
          800: '#1a1230',
          700: '#1e1535',
          600: '#251a40',
          500: '#2e2050',
          400: '#372660',
          border: '#2e1e4a',
          'border-subtle': '#1a1230',
        },
        // Light surfaces — paper scale (content sections)
        paper: {
          DEFAULT: '#FFFFFF',
          50: '#F7F9FC',
          100: '#EEF2F8',
          border: '#D8E0EC',
        },
        // Brand accent — original royal blue
        teal: {
          DEFAULT: '#0E41B8',
          bright: '#4A72D9',
          dim: '#0B35A0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.018em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-grid':
          'linear-gradient(rgba(26,46,74,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,46,74,0.03) 1px, transparent 1px)',
        'noise': "url('/noise.svg')",
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-md': '60px 60px',
        'grid-lg': '80px 80px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.07), 0 0 0 1px #D8E0EC',
        'card-hover': '0 4px 20px rgba(0,0,0,0.10), 0 0 0 1px rgba(14,65,184,0.35)',
        'card-dark': '0 1px 4px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,46,74,0.8)',
        'panel': '0 8px 30px rgba(0,0,0,0.08), 0 0 0 1px #D8E0EC',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
