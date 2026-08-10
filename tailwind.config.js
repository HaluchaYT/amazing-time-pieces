/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#242424',
          600: '#333333',
        },
        gold: {
          50: '#fbf7ea',
          100: '#f5ecc6',
          200: '#ecd88b',
          300: '#e0bf4d',
          400: '#c9a227',
          500: '#b8891a',
          600: '#966a13',
          700: '#785214',
          800: '#634217',
          900: '#553818',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(201,162,39,0.3), 0 10px 30px -10px rgba(201,162,39,0.3)',
      },
    },
  },
  plugins: [],
};
