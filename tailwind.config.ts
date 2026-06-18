import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#2a2a2a',
          muted: '#5a5a5a',
        },
        cream: '#faf7f2',
        sage: '#7a8b73',
        navy: '#2e3a4e',
      },
      fontFamily: {
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'prose': '70ch',
      },
    },
  },
}
