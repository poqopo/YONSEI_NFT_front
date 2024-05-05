module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
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
