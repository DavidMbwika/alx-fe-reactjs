/* eslint-disable no-undef */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Paths to remove unused styles
  darkMode: "class", // Use 'class' for manual dark mode control or 'media' for system settings
  theme: {
    extend: {
      colors: {
        customBlue: "#1DA1F2", // Example custom color
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "active"], // Additional states for background color
      textColor: ["dark", "group-hover"], // Support dark mode and group hover
    },
  },
  plugins: [],
};
