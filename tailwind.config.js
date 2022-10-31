/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      red: "#e00",
      gray: "#6c767e",
      warning: "#ffca2ce6",
      danger: "#dc3545e6",
      purple: "#6d5dfc",
      silver: "#e4ebf5e6",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      spacing: {
        "5px": "5px",
        "21px": "0.3125rem",
        38: "38%",
      },
    },
  },
  plugins: [],
};
