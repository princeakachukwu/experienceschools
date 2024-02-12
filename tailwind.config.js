/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightBlue:"#CAF0F8",
        darkBlue: "#03045E",
        lightBlue: "#48CAE4",
        textOrange: "#FB8500",
        darkGray: "#003049",
      },
      screens: {
        "2sm": "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
}

