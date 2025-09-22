// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Poppins as default sans
        poppins: ["Poppins", "sans-serif"], // Utility: font-poppins
      },
    },
  },
  plugins: [],
};
