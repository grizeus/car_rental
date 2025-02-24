/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        midnight: "var(--midnight)",
        manatee: "var(--manatee)",
        royal: "var(--royal)",
        persian: "var(--persian)",
        hawkes: "var(--hawkes)",
        solitude: "var(--solitude)",
        smoke: "var(--smoke)",
      },
    },
  },
  plugins: [],
};

