/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#152237",
        green: "#44DD8A",
        blue: "#15B7E2",
        white: "#FFFFFF",
      },

      backgroundImage: {
        hero:
          "linear-gradient(94deg, rgba(68,221,138,0.8) 3%, rgba(21,183,226,0.8) 98%), url('/bg-header.png')",

        button:
          "linear-gradient(95.98deg, #44DD8A 8.7%, #15B7E2 100%)",

        footerLine:
          "linear-gradient(90deg, #44DD8A 2.38%, #18A0FB 100%)",
      },

      boxShadow: {
        price: "5px 4px 13px rgba(0, 0, 0, 0.25)",
      },

      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },

      borderRadius: {
        xl: "6px",
      },
    },
  },

  plugins: [],
}
