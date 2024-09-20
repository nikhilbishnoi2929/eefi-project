/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "roadmap-bg": "url('./assets/images/webp/roadmap-bg.webp')",
        "theory-bg": "url('./assets/images/webp/theory-bg.webp')",
        "amplify-bg": "url('./assets/images/webp/amplify-bg.webp')",
      },
      fontFamily: {
        plus_jakarta: ["Plus Jakarta Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        text_lg: "28px",
        text_xl: "46px",
        text_2xl: "85px",
      },
      colors: {
        blue: "#1643C3",
        "blue-light": "#1643C31A",
        "blue-medium": "#4273FF",
        "dark-blue": "#002F93",
      },
      boxShadow: {
        shadow_xl: "4.33px 4.33px 16.55px 0px #FFFFFF42",
      },
      lineHeight: {
        shadow_xl: "55px",
      },
    },
  },
  plugins: [],
};
