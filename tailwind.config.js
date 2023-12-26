/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        shadowBox: 'rgb(173, 124, 39)',
        lightPartsColor: 'lightgoldenrodyellow',
        darkFont: 'rgb(114, 76, 9)',

        gradientColor1: 'wheat',
        gradientColor2: 'rgb(245, 187, 86)',
        smallWraperGradient1: 'rgb(241, 226, 199)',
        smallWraperGradient2: 'rgb(245, 209, 147)',

        buttonColor: 'rgb(215, 159, 63)',
        buttonHoverColor: 'rgb(190, 142, 60)',
        buttonShadowBox: 'rgb(121, 85, 23)',
        buttonTextColor: 'lightgoldenrodyellow',

        errorMsg: 'orangered',
        deleteBtnColor: 'rgba(140, 3, 3, 0.4)',
        deleteBtnHoverColor: 'rgba(140, 3, 3, 0.85)',

        tableHeaderBackground: 'rgb(245, 209, 147)',
        tableBorderColor: 'rgb(245, 209, 147)',

        filterLabelColor: 'rgb(245, 187, 86)',
        filterPlaceholderColor: 'darkred',
        filterTextColor: 'rgb(114, 76, 9)',

        // Dark Variants
        shadowBoxDark: 'rgb(33, 85, 164)',

        lightPartsColorDark: 'rgb(7, 33, 78)',
        darkFontDark: 'rgb(204, 222, 255)',

        gradientColor1Dark: 'rgb(20, 19, 27)',
        gradientColor2Dark: 'rgb(51, 61, 142)',
        smallWraperGradient1Dark: 'rgb(22, 26, 40)',
        smallWraperGradient2Dark: 'rgb(4, 9, 42)',

        buttonColorDark: 'rgb(14, 68, 115)',
        buttonHoverColorDark: 'rgb(56, 154, 240)',
        buttonShadowBoxDark: 'rgb(215, 225, 240)',
        buttonTextColorDark: 'rgb(176, 198, 238)',
        themeBtnLight: 'rgb(250, 250, 210)',

        errorMsgDark: 'rgb(120, 217, 255)',
        deleteBtnColorDark: 'rgba(203, 6, 6, 0.4)',
        deleteBtnHoverColorDark: 'rgba(180, 15, 15, 0.80)',

        tableHeaderBackgroundDark: 'rgb(4, 23, 55)',
        tableBorderColorDark: 'rgb(0, 3, 22)',

        filterLabelColorDark: 'rgb(2, 13, 84)',
        filterPlaceholderColorDark: 'rgb(115, 201, 255)',
        filterTextColorDark: 'rgb(176, 198, 238)',
      },

      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        ssm: { max: '375px' },
        sm2: { min: '640px', max: '767px' },
        md2: { min: '768px', max: '1023px' },
        md3: { min: '768px' },
        mmd2: { min: '900px', max: '1265px' },
        lg2: { min: '1024px', max: '1279px' },
        xl2: { min: '1280px', max: '1535px' },
        '1xl2': { min: '1265px' },
        '2xl2': { min: '1536px' },
      },
    },
  },
  plugins: [],
};
