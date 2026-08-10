/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-white base — the paper we print on
        bone: {
          50:  '#fdfaf3',
          100: '#faf5e9',
          200: '#f3ebd7',
          300: '#e7dbbc',
          400: '#d5c399',
          500: '#b8a072',
        },
        // Deep, warm inks for text
        ink: {
          50:  '#f6f4ef',
          100: '#e6e2d8',
          200: '#bfb8a8',
          300: '#8a8172',
          400: '#5c544a',
          500: '#3a342d',
          600: '#28241f',
          700: '#1c1915',
          800: '#141210',
          900: '#0a0908',
          950: '#050403',
        },
        // Cartier-inspired oxblood — the red the owner asked for
        oxblood: {
          50:  '#fcf3f3',
          100: '#f8e2e4',
          200: '#efb9be',
          300: '#e28b93',
          400: '#c94a58',
          500: '#a92535',
          600: '#8b1e2d',
          700: '#701623',
          800: '#5a1220',
          900: '#48101c',
        },
        // Champagne — kept as secondary metal accent
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
        'oxblood-glow': '0 20px 40px -20px rgba(139,30,45,0.35)',
        'inner-hair': 'inset 0 0 0 1px rgba(139,30,45,0.12)',
        'card': '0 30px 60px -30px rgba(20,18,16,0.15)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at top, rgba(139,30,45,0.05), transparent 60%)',
        'gold-line': 'linear-gradient(90deg, transparent, rgba(139,30,45,0.5), transparent)',
      },
    },
  },
  plugins: [],
};
