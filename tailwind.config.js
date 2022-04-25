module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        'coral-tree': {
          DEFAULT: '#AA706A',
          50: '#EDE0DF',
          100: '#E5D4D2',
          200: '#D6BBB8',
          300: '#C8A29E',
          400: '#B98984',
          500: '#AA706A',
          600: '#8C5650',
          700: '#68403C',
          800: '#452A27',
          900: '#211413',
        },
        'beauty-bush': {
          DEFAULT: '#F0C2C5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#F8E3E4',
          500: '#F0C2C5',
          600: '#E5959A',
          700: '#DA686F',
          800: '#CF3B45',
          900: '#A82932',
        },
      },
    },

    gridTemplateColumns: {
      about: 'repeat(4, minmax(0, 160px))',
    },
  },
  plugins: [],
};
