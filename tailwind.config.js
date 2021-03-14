const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryOne: '#F18900',
        secondaryTwo: '#055A83',
        mainblue: '#0FA5F9',
        secondaryblue: '#376BF0',
        mainorange: '#F9A93B',
        minororange: '#FF9759',
        secondaryorange: '#F4A641',
        babywhite: '#FDFFFC',
        background: '#E9EDF1',
        darkbluelight: '#2A336C',
        darkbluedark: '#232A55',
        textPrimaryColor: '#242A55',
        textSecondaryColor: '#242A55',
        comingSoonOne: '#B3B3B3',
        comingSoonTwo: '#D9D5CC',
        comingSoonBrandsOne: '#A1A1A1',
        comingSoonBrandsTwo: '#A3A3A3',
        orangeCustom: '#F28724',
        blueCustom: '#147ADD'
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        karla: ['karla', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
