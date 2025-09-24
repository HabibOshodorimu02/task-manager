// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // default sans (font-sans)
      poppins: ["Poppins", "sans-serif"], // custom utility (font-poppins)
    },
    colors: {
      primary: "#1368ec", // use with text-primary, bg-primary, border-primary
    },
    screens: {
      "3xl": "1920px", // custom breakpoint
    },
  },
};
