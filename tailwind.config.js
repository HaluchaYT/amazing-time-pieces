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
          950: '#08080a',
          900: '#0e0e11',
          800: '#161619',
          700: '#1f1f23',
          600: '#2b2b30',
        },
        champagne: {
          50:  '#faf6ec',
          100: '#f3ead1',
          200: '#e8d6a2',
          300: '#dcbf72',
          400: '#c9a44a',
          500: '#b28934',
          600: '#8f6c26',
          700: '#6e521e',
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
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-2': '0.42em',
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(201,162,39,0.35), 0 20px 40px -20px rgba(201,162,39,0.35)',
        'inner-hair': 'inset 0 0 0 1px rgba(220,191,114,0.15)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at top, rgba(220,191,114,0.08), transparent 60%)',
        'gold-line': 'linear-gradient(90deg, transparent, rgba(220,191,114,0.5), transparent)',
      },
    },
  },
  plugins: [],
};
