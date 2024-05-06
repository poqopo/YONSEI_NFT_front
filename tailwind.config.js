module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradation: "url('/gradation.png')",
        gradation2: "url('/gradation2.png')",
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },

          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
    fontFamily: {
      pretendard: ['pretendard'],
    },
  },
  darkMode: 'class',
  plugins: [],
};
