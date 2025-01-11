/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* COLORS */
      colors: {
        app: {
          blackColor: "#0D0D0D",
          blueColor: "#009DD5",
          greenColor: "#5AB24B",
          yellowColor: "#D5CD00",
          grayColor: "#808080",
          redColor: "#FF0000",
          whiteColor: "#ffffff",
        }
      },
      /* FONT FAMILY */
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        rubik: ["Rubik Wet Paint", "serif;"],
      },
      /* ANIMATION */
      animation: {
        slider: 'slider 20s ease-in-out infinite',
      },
      /* KEYFRAMES */
      keyframes: {
        slider: {
          '0%, 100%': { backgroundImage: "url('../src/assets/images/unm1.webp')" },
          '20%': { backgroundImage: "url('../src/assets/images/unm2.webp')" },
          '40%': { backgroundImage: "url('../src/assets/images/unm3.webp')" },
          '60%': { backgroundImage: "url('../src/assets/images/unm4.webp')" },
          '80%': { backgroundImage: "url('../src/assets/images/unm5.webp')" },
        },
      },
    },
  },
  plugins: [],
}

