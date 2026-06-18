import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0e14',
          900: '#0b0e14',
          800: '#1a1d24',
          700: '#2c2f36',
          500: '#5a5d65',
          400: '#7a7e87',
          300: '#a5a8b0',
          200: '#d4d6db',
          100: '#ececef',
        },
        soft: '#2a2a2a',
        muted: '#5a5a5a',
        bone: '#fafaf7',
        cream: '#faf7f2',
        sage: '#7a8b73',
        navy: '#2e3a4e',
        accent: {
          DEFAULT: '#4f46e5',
          soft: '#eef2ff',
          glow: '#a5b4fc',
        },
        persona: {
          ada: '#0ea5e9',
          marek: '#dc2626',
          jules: '#7c3aed',
          sven: '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        'prose': '70ch',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(11,14,20,0.04), 0 4px 16px rgba(11,14,20,0.06)',
        'lift': '0 4px 12px rgba(11,14,20,0.06), 0 20px 40px rgba(11,14,20,0.08)',
        'glow': '0 0 0 1px rgba(79,70,229,0.12), 0 8px 24px rgba(79,70,229,0.12)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
}
