/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          200: '#E2E8F0',
          400: '#94A3B8',
          600: '#475569',
          950: '#020617',
        },
        candy: {
          400: '#FB7185',
          500: '#F43F5E',
        },
        royal: {
          400: '#C084FC',
          500: '#A855F7',
        },
        birthday: {
          500: '#F97316',
        },
        golden: {
          300: '#FCD34D',
          400: '#FBBF24',
        },
        celebrate: {
          500: '#14B8A6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 8rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1' }],
        'display-md': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.2' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
