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
        // Core backgrounds — deep navy scale
        navy: {
          950: '#080F1C',
          900: '#0C1829',
          800: '#111F35',
          700: '#162840',
          600: '#1C324E',
          500: '#233D5E',
          400: '#2C4D72',
          border: '#1E3554',
          'border-subtle': '#152033',
        },
        teal: {
          DEFAULT: '#00B4D0',
          bright: '#2DD4F0',
          dim: '#007A90',
          glow: 'rgba(0,180,208,0.12)',
          'glow-strong': 'rgba(0,180,208,0.22)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Display scale
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.018em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(0,200,232,0.12) 0%, transparent 70%)',
        'hero-grid':
          'linear-gradient(rgba(26,46,74,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,46,74,0.5) 1px, transparent 1px)',
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
        'pulse-teal': 'pulseTeal 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'data-flow': 'dataFlow 3s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
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
        pulseTeal: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        dataFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,200,232,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,200,232,0.25)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'teal-sm': '0 0 12px rgba(0,200,232,0.15)',
        'teal-md': '0 0 24px rgba(0,200,232,0.2)',
        'teal-lg': '0 0 48px rgba(0,200,232,0.25)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,46,74,0.6)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,232,0.2)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
