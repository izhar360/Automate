module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-gray": "#3f4451",
      },
      maxWidth: {
        "card-lg": "14rem",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "card-4": "50%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
      },
    },
  },
  plugins: [],
};
